---
title: 《剖析Vue.js内部运行机制》笔记
date: 2018-03-07 10:50:13
tags:
---
### 全局概览
![Request](/Vue/vue.png)

在 `new Vue()`后，调用 `_init` 函数进行初始化，初始化生命周期、事件、props、methods、data、computed、watch等，通过`Object.defineProperty` 设置 `getter`和`setter` 函数，实现响应式和依赖收集。

初始化后调用`mount` 挂载组件，如果是运行时编译，即不存在`render function` 但存在`template` 的情况，需要进行 `编译` 步骤.

### 响应式系统原理
通过 `Object.defineProperty` 实现 `Observer` (可观察的、观察者、数据监听)。
1. 定义一个`cb` 函数来模拟视图更新，调用它即代表视图更新。
2. 定义一个`defineReactive` 方法对对象的某个属性进行响应式化。
3. 定义一个`observer` ,传入一个对象，遍历该对象的所有属性，对每一个属性进行`defineReactive` 处理。
4. 最后，用`observer` 封装一个`Vue` ,对里面的`data` 属性进行操作，就会触发视图更新。

``` js
    // index.js

    function cb(val) {
        console.log(`视图更新了~ ${val}`)
    }

    function observer(data) {
        if (!data || typeof data !== 'object') {
            return
        }

        Object.keys(data).forEach((key) {
            defineReactive(data, key, data[key])
        })
    }

    function defineReactive(obj, key, val) {
        observer(val) // 监听子属性
        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get: function() {
                return val
            },
            set: function(newVal) {
                if (val === newVal) {
                    return
                }
                val = newVal
                cb(val)
            }
        })
    }

    class Vue{
        constructor(options) {
            this._data = options.data
            observer(this._data)
        }
    }

    const vueInstance = new Vue({
        data {
            test: 'test',
            subProp: {
                foo: 'foo'
            }
        }
    })

    vueInstance.data.test = 'hello'
    vueInstance.data.subProp.foo = 'bar'

    // node index.js
    // 视图更新了~ hello
    // 视图更新了~ bar
```

### 响应式系统的依赖收集追踪原理
为什么要进行依赖收集? 假设有下面两个`Vue`对象。
``` js
    const globalObj = {
        text1: 'text1'
    }

    let obj1 = new Vue({
        template:
        `<div>
            <span>{{text1}}</span>
        </div>`,
        data: globalObj
    })

    let obj2 = new Vue({
        template:
        `<div>
            <span>{{text1}}</span>
        </div>`,
        data: globalObj
    })

    globalObj.text1 = 'hh'
```

当我们改变`globalOng.text1` 的值以后，应该通知两个实例进行视图更新，`依赖收集` 会让 `text1` 这个数据知道 `有两个地方依赖我的数据，我变化的时候需要通知他们`。

我们需要实现一个消息订阅器 `Dep` ，用来收集订阅者 `Watcher` 。也就是说，为了实现依赖收集，我们需要做以下这些事情：
1. 实现消息订阅器 `Dep`。
2. 实现订阅者 `Watcher`。
3. 在数据劫持的时候把 `Watcher` 添加到 `Dep` 当中。

``` js
    // dep.js

    class Dep {
        constructor() {
            // 用来存放Watcher对象的数组
            this.subs = []
        }

        addSub(sub) {
            this.subs.push(sub)
        }

        // 通知所有Watcher对象更新视图
        notify() {
            this.subs.forEach((sub) => {
                sub.update()
            })
        }
    }

    Dep.target = null // 用于存放Watcher对象

    class Watcher {
        constructor() {
            // 在new一个watcher对象的时候将该对象赋值给dep.target
            Dep.target = this
        }

        // 更新视图的方法
        update() {
            console.log('视图更新。。')
        }
    }

    function observer(data) {
        if (!data || typeof data !== 'object') {
            return
        }

        Object.keys(data).forEach((key) => {
            defineReactive(data, key, data[key])
        })
    }

    function defineReactive(obj, key, val) {
        const dep = new Dep()
        observer(val)
        Object.defineProperty(obj, key, {
            enmmerable: true,
            configurable: true,
            get() {
                dep.addSub(Dep.target)
                return val
            },
            set(newVal) {
                if (val === newVal) {
                    return
                }
                dep.notify()
            }
        })
    }

    class Vue {
        constructor(options) {
            this._data = options.data
            observer(this._data)
            new Watcher()
            console.log('render==', this._data.test)
        }
    }

    const vueInstance = new Vue({
        data: {
            test: 'test'
        }
    })

    vueInstance._data.test = 'gyh'

    // node dep.js
    // render== test
    // 视图更新。。
```

在`observer` 的过程中对对象属性注册 `get` 和 `set` 方法。`get` 方法内进行了 `依赖收集`。在闭包中创建了一个`Dep` 对象，`依赖收集` 的过程就是将`Watcher` 实例存放到它的`subs` 对象中。在数据变化时，`set` 触发 `Dep` 对象的 `notufy` 通知它内部所有的 `Watcher` 进行更新。实现上述过程还有两个前提：
1. 触发 `get` 方法。
2. 新建一个 `Watcher` 对象。

在上述代码中，用 `console` 打印出 `data.test` 来触发 `get` 方法，并直接创建了一个 `Watcher` 对象。事实上，只要把 `render function` 进行渲染，其中的依赖对象都会被读取。而`Watcher` 对象并非只有一个，在 `mvvm` 框架中，还有一个 `compile` 的过程，在这个过程中，主要做的事情是解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图。因此，实际上会根据模板创建多个 `Watcher` 对象。(这部分内容还没搞明白)

### VNode节点
`render function` 会被转化成 `VNode` 节点，通过 `js对象` (`VNode节点`) 对真实DOM抽象，最终通过一系列操作使 `Virtual DOM` 映射到真实环境上，由于 `Virtual DOM` 是用 `js对象` 进行描述的，因此可以实现跨平台。在 `MVVM` 框架中，用 `Virtual DOM` 实现 `数据==>视图` 的更新，主要是下面的三个步骤：
1. js模拟`DOM` 实现 `Virtual DOM`。
2. 数据更新时生成新的 `Virtual DOM`，比较新旧两个的差异。
3. 将差异应用到真正的 `DOM` 上。

#### 实现一个VNode
``` js
    class VNode {
        constructor (tag, data, children, text, elm) {
            // 当前节点的标签名
            this.tag = tag
            // 当前节点的一些数据信息，比如props, attrs等
            this.data = data
            // 当前节点的子节点，是一个数组
            this.children = children
            // 当前节点的文本
            this.text = text
            // 当前虚拟节点对应的真实dom节点
            this.elm = elm
        }
    }
```
假设有下面一个组件
``` html
    <template>
        <span class="demo" v-show="isShow">
            this is a span
        </span>
    </template>
```

用js代码表示：
``` js
    function render() {
        return new VNode(
            'span',
            {
                // 指令集合数组
                directives: [
                    {
                        rawName: "v-show",
                        expression: "isShow",
                        name: "show",
                        value: true
                    }
                ],
                staticClass: "demo"
            },
            [new VNode(undefined, undefined, undefined, 'this is a span')]
        )
    }
```

转换成 `VNode` 后：
``` js
    {
        tag: 'span',
        data: {
            directives: [
                {
                    rawName: 'v-show',
                    expression: 'isShow',
                    name: 'show',
                    value: true
                }
            ],
            staticClass: 'demo'
        },
        text: undefined,
        children: [
            {
                tag: undefined,
                data: undefined,
                text: 'this is a span',
                children: undefined
            }
        ]
    }
```

### Compile 模板编译
`template` 模板需要通过 `Compile` 编译，最终得到 `render function` 。`Compile` 可以分为三个阶段：`parse` 、`optimize` 、`generate` 。

假设有如下一个 `template`
``` html
    <div :class="c" class="demo" v-if="isShow">
        <span v-for="item in sz">{{item}}</span>
    </div>
```

#### parse
`parse` 会用正则等方式将 `template` 模板中进行字符串解析，得到指令、class、style等数据，形成 `AST` (抽象语法树)。

``` js
    /* 标签属性的map 记录标签上属性 */
    attrsMap: {
        ':class': 'c',
        'class': 'demo',
        'v-if': 'isShow'
    },
    /* 解析得到的class */
    'classBinding': 'c',
    /* 标签属性v-if */
    'if': 'isShow',
    /* v-if的条件 */
    'ifConditions': [
        'exp': 'isShow'
    ],
    /* 标签属性Class */
    'staticClass': 'demo',
    /* 标签的tag */
    'tag': 'div',
    'children': [
        {
            'attrsMap': {
                'v-for': "item in sz"
            },
            /* for循环的参数 */
            'alias': 'item',
            /* for循环的对象 */
            'for': 'sz',
            /* for循环是否已经被处理的标志位 */
            'forProcessed': true,
            'tag': 'span',
            'children': [
                {
                    /* 表达式，_s是一个转字符串的函数 */
                    'expression': '_s(item)',
                    'text': '{{item}}'
                }
            ]
        }
    ]
```
`AST` 通过一些属性，可以比较清晰地描述出标签的属性以及依赖关系。

#### optimize
`optimize` 的主要作用就跟它的名字一样，用作优化。

`patch` 过程实际上是将 `VNode` 节点进行一层一层的比对，然后将 `差异` 更新到视图上，有一些静态节点是不会根据数据变化而产生变化的，这些节点就没有对比的需求，可以跳过这些静态节点的比对，从而节省一些性能。

因此我们需要为静态节点加上一些标记，在 `patch` 的时候我们就可以直接跳过这些被标记的节点的比对，从而达到优化的目的。经过 `optimize` 这层的处理，每个节点会加上 `static` 属性，用来标记是否是静态的。

``` js
    /* 标签属性的map 记录标签上属性 */
    attrsMap: {
        ':class': 'c',
        'class': 'demo',
        'v-if': 'isShow'
    },
    /* 解析得到的class */
    'classBinding': 'c',
    /* 标签属性v-if */
    'if': 'isShow',
    /* v-if的条件 */
    'ifConditions': [
        'exp': 'isShow'
    ],
    /* 标签属性Class */
    'staticClass': 'demo',
    /* 标签的tag */
    'tag': 'div',
    'static': false,
    'children': [
        {
            'attrsMap': {
                'v-for': "item in sz"
            },
            'static': false,
            /* for循环的参数 */
            'alias': 'item',
            /* for循环的对象 */
            'for': 'sz',
            /* for循环是否已经被处理的标志位 */
            'forProcessed': true,
            'tag': 'span',
            'children': [
                {
                    /* 表达式，_s是一个转字符串的函数 */
                    'expression': '_s(item)',
                    'text': '{{item}}',
                    'static': false
                }
            ]
        }
    ]
```

#### generate
`generate` 会将 `AST` 转换成 `render function` 字符串。

### 数据状态更新时的差异 diff 及 patch 机制
在对 `model` 进行操作的时候，会触发 `Dep` 中的 `notify()`，通知所有的 `Watcher` 进行视图更新。将新产生的 `VNode` 与老的 `VNode` 进行 `patch` ，比较得出差异，最终将差异更新到视图上。

因为使用了 `Virtual DOM` 的原因，`Vue` 拥有了跨平台的能力，`Virtual DOM`终归只是一些 `js` 对象，通过一个适配层，对不同平台做不同的处理，然后对外提供一致的接口供 `Virtual DOM` 来调用，就能够实现跨平台。

``` js
    const nodeOps = {
        setTextContext (text) {
            if (platform === 'weex') {
                node.parentNode.setAttr('value', text)
            } else if (platform === 'web') {
                node.textContent = text
            }
        },
        parentNode () {
            //...
        },
        removeChild () {
            // ...
        },
        ...
    }
```
下面简单记录一下 `patch` ，`patch` 的核心是 `diff` 算法，我们用 `diff` 算法可以比对出两棵树的差异。假设有新、老两个   `VNode` 。`diff` 是算法通过同层的树节点进行比较而非对数进行逐层搜索遍历的方式，是一种相当高效的算法。

用简单的代码看一下 `patch` 的过程。
``` js
    function patch (oldVnode, vnode, parentElm) {
        if (!oldVnode) {
            addVnodes(...)
        } else if (!vnode) {
            removeVnodes(...)
        } else {
            if (sameVnode(oldVnode, vnode)) {
                patchVnode(...)
            } else {
                removeVnodes(..., oldVnode)
                addVnodes(..., vnode)
            }
        }
    }
```
`patch` 的主要功能是比对两个 `VNode` 节点，将差异更新到视图上，所以入参有新、老两个 `VNode` 以及父节点的 `element`。

首先在 `oldVnode` 不存在的时候，相当于新的 `VNode` 替代原本没有的节点，所以直接用 `addVnodes ` 将这些节点批量添加到 `parentElm` 上。

在新节点 `vnode` 不存在的时候，相当于要把老的节点删除，所以直接用 `removeVnodes` 进行批量的节点删除即可。

最后，新、老节点都存在的时候，需要判断它们是否是相同的节点(`sameVnode`)，如果是则进行对比 (`patchVnode`) ，否则删除老节点，增加新节点。

#### sameVnode
两个节点是否属于相同节点，用下面的函数来进行判断：
``` js
    function sameVnode (a, b) {
        return {
            a.key === b.key &&
            a.tag === b.tag &&
            a.isComment === b.isComment &&
            (!!a.data) === (!!b.data) &&
            sameInputType(a, b)
        }
    }

    function sameInputType (a, b) {
        if (a.tag !== 'input') {
            return true
        }
        let i
        const typeA = (i = a.data) && (i = i.attrs) && i.type
        const typeB = (i = b.data) && (i = i.attrs) && i.type
        return typeA === typeB
    }
```
只有当 `key` 、`tag`、`isComment` 、`data` 同时定义或不定义，同时满足当标签类型为 `input` 的时候 `type` 相同即可。

### 批量异步更新策略及nextTick原理
`Vue` 在 `data` 发生变化后会触发 `setter`,然后执行 `Dep` 内的 `notify` 通知所有的 `watcher` 进行更新，执行 `patch` 最终更新视图。

现在假设有如下一种情况：
``` html
    <template>
        <div>
            <div>{{number}}</div>
            <div @click="handleClick">click</div>
        </div>
    </template>
```

``` js
    export default {
        data () {
            return {
                number: 0
            }
        },
        methods: {
            handleClick() {
                for (let i = 0; i < 1000; i++) {
                    this.number++
                }
            }
        }
    }
```

当按下 `click` 的时候，`number` 被循环增加1000次，那么，在每次增加的时候，都会触发对 `DOM` 的修改吗？`Vue` 肯定不会用这么低效的方法来处理。

`Vue` 异步执行 `DOM` 更新。只要观察到数据变化，`Vue` 将开启一个队列，并缓冲在同一事件循环中发生的所有数据改变。如果同一个 `watcher` 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 `DOM` 操作上非常重要。然后，在下一个的时间循环 `tick` 中，`Vue` 刷新队列并执行实际(已去重的)工作。`Vue` 在内部尝试对异步队列使用原生的 `Promise.then` 和 `MessageChannel` ，如果执行环境不支持，会采用 `setTimeout(fn, 0)` 代替。

下面对这个过程做一个简单模拟

`Vue` 实现了一个 `nextTick` 函数，传入一个 `cb` ，这个 `cb` 会被存储到一个队列中，在下一个 `tick` 时触发队列中的所有 `cb` 事件。用 `setTimeout` 来模拟下一个 `tick` 到来，在当前调用栈执行完毕后才去执行队列中的所有事件。

需要重新写一个 `Watcher` ，定义一个 `id` 来区分不同的 `watcher` ，定义一个 `update` 来模拟数据更新，定义一个 `run` 方法来模拟真正触发 `patch` 的视图更新。

定义一个 `queueWatcher` 方法实现 `watcher` 去重，将 `cb` 传入 `nextTick` 中。

定义一个 `flushSchedulerQueue` 方法来 `flush` 队列 `queue` ,执行它里面所有 `watcher` 对象的 `run` 方法。

``` js
    /**
     * 存储nextTick
     * 下一个tick处理这些回调函数之前
     * 所有的 cb 都会被存在这个 callbacks 数组中
     **/ 
    const callbacks = []
    let pending = false // 标记位 代表一个等待的状态

    function nextTick(cb) {
        callbacks.push(cb)

        if (!pending) {
            pending = true
            setTimeout(flushCallbacks, 0)
        }
    }

    function flushCallbacks() {
        pending = false
        const copies = callbacks.slice(0)
        callbacks.length = 0
        for (let i = 0; i < callbacks.length; i++) {
            copies[i]
        }
    }

    let uid = 0 // uid 标识 watcher 的唯一性
    class Watcher {
        constructor() {
            this.id = ++uid
        }

        // 数据更新时调用
        update() {
            console.log(`watcher ${this.id} update`)
            queueWatcher(this) // 放进队列并去重
        }

        run() {
            console.log(`watcher ${this.id} 视图更新`)
        }
    }

    const has = []
    const queue = []
    let waiting = false // 标记是否已经向 nextTick 传递了 flushSchedulerQueue 方法

    /**
     * 实现 watcher 去重
     * 向 nextTick 传递 flushSchedulerQueue 方法
     **/ 
    function queueWatcher(watcher) {
        const id = watcher.id
        if (!has[id]) {
            has[id] = true
            queue.push(watcher)

            if (!wating) {
                wating = true
                nextTick(flushSchedulerQueue)
            }
        }
    }

    /**
     * 在下一个 tick 时 flush 队列
     * 执行所有 watcher 对象的 run 方法
     **/ 
    function flushSchedulerQueue() {
        let watcher, id

        for (let i = 0; i < queue.length; i++) {
            watcher = queue[i]
            id = watcher.id
            has[id] = null
            watcher.run()
        }

        waiting = false
    }

    // test
    const watcher1 = new Watcher()
    const watcher2 = new Watcher()
    watcher1.update()
    watcher1.update()
    watcher2.update()
    
    // result
    // watcher 1 update
    // watcher 1 update
    // watcher 2 update
    // watcher 1 视图更新
    // watcher 2 视图更新

    // 没有异步更新机制的话，watcher1 的视图会被更新两次
    // 而现在只更新一次
```

再重新看一下第一个例子，`number` 不断增加，不断触发 `update` 方法，但因为 `queue` 中对相同的 `watcher` 做了去重操作，因此只会存在一个 `number` 对应的 `watcher` 对象。在下一个 `tick` 的时候，触发 `watcher` 对象的 `run` 方法，将视图上的 `0` 变成了 `1000`。

### Vuex 状态管理的工作原理
使用 `Vue` 开发应用时，如果应用规模较小，可以使用 `props` 、事件等实现父子间组件通信，当应用复杂后，用这样的通信方式就会导致数据混乱，这时候需要一个全局状态管理工具，即 `Vuex`。

`Vuex` 是专门为 `Vue` 设计的，因为它内部采用了 `new Vue` 来将 `store` 内的数据进行 `响应式化`，所以 `Vuex` 是一款利用 `Vue` 内部机制的库，不能与其他框架配合使用。

#### 安装
首先介绍两个 `Vue` 提供的API。
1. Vue.use(plugin) 安装插件，如果插件是一个对象，必须提供 `install` 方法。如果插件是一个函数，它会被作为 `install` 方法。`install` 方法调用时，会将 `Vue` 作为参数传入。
2. Vue.mixin(mixin) 全局注册一个混入，影响注册之后所有创建的每个 `Vue` 实例。插件作者可以使用混入，向组件注入自定义的行为。

`Vuex` 提供一个 `install` 来安装
``` js
let vue

export default install(_vue) {
    _vue.mixin({
        beforeCreate: vuexInit
    })
    Vue = _Vue
}
```

我们采用 `Vue.mixin` 方法将 `vuexInit` 方法混淆进 `beforeCreate` 钩子中，在 `vuexInit` 中，要让每个 `vm` 可以访问 `store` 。
``` js
    function vuexInit() {
        const options = this.$options
        if (options.store) {
            this.$store = options.store
        } else {
            this.$store = options.parent.store
        }
    }
```
因为混淆的缘故，每一个实例都会调用 `vuexInit` 。如果是根节点（`$options`中存在 `store` 说明是根节点），则直接将 `options.store` 赋值给 `this.$store`。否则则说明不是根节点，从父节点的 `$store` 中获取。

#### Vuex Store的响应式化
在 `Store` 的构造函数中对 `state` 进行 `响应式化`
``` js
    construtor () {
        this._vm = new Vue({
            data: {
                $$state: this.state
            }
        })
    }
```

#### commit
``` js
    commit (type, payload, _options) {
        const entry = this._mutations[type];
        entry.forEach(function commitIterator (handler) {
            handler(payload);
        });
    }
```
从 `_mutations` 中取出对应的 `mutation`，循环执行其中的每一个 `mutation` 。

#### dispatch
``` js
    dispatch (type, payload) {
        const entry = this._actions[type];

        return entry.length > 1
        ? Promise.all(entry.map(handler => handler(payload)))
        : entry[0](payload);
    }
```
取出 `_actions` 中的所有对应 `action`，将其执行，如果有多个则用 `Promise.all` 进行包装。

### 常见问题
1. 怎么实现 `this._test` 改变而不是 `this._data.test` 改变触发更新。

    通过代理实现。
    ``` js
        _proxy(options.data)

        function _proxy (data) {
            const that = this
            Object.keys(data).forEach(key => {
                Object.defineProperty(that, key, {
                    configurable: true,
                    enumerable: true,
                    get: function proxyGetter () {
                        return that._data[key];
                    },
                    set: function proxySetter (val) {
                        that._data[key] = val;
                    }
                })
            })
        }
    ```
2. 能不能将依赖收集中讲到的 `dep.addSub(Dep.target)` 改成 `dep.addSub(new Watcher())` 呢？

    实际上一个 `Watcher` 对象可能会在多个 `Dep` 中，并不是每次 `addSub` 都是一个新的 `Watcher` 对象，需依赖 `Dep.target` 进行收集（实际上 `Dep.target` 也是通过 `Watcher` 对象的 `get` 方法调用 `pushTarget` 将自身赋值给 `Dep.target`）。
3. 组件内 `data` 必须是函数？
    
    如果在 `data` 内使用一个对象的引用，则调用这个组件的多个实例将会共享同一个 `data` 对象，不同实例数据变动会相互影响。将 `data` 限定为必须是函数，是为了给每个组件返回全新的数据对象。