---
title: mvvm双向绑定实现原理
date: 2017-07-30 15:24:14
tags:
---
### 几种实现双向绑定的做法
实现数据绑定的做法大致有以下几种：
1. 发布者-订阅者模式(backbone.js)
2. 脏值检查(angular.js)
3. 数据劫持(vue.js)

### 发布-订阅者模式
一般通过sub、pub的方式实现数据和视图的绑定监听，更新数据通常的做法是`vm.set('property', value)` 。我们更希望通过`vm.property = value` 这种方式更新数据，同时自动更新视图，于是又了下面两种方式。
### 脏值检查
angular.js是通过脏值检测的方式比对数据是否有变更，来决定是否更新视图，最简单的方式就是通过`setInterval()`定时轮询检测数据变动，当然angular.js不会采用这种方式，它只有在指定的事件触发时进入脏值检测，大致如下：
1. DOM事件，譬如用户输入文本，点击按钮等。(ng-click)
2. XHR响应事件($http)
3. 浏览器Location变更事件($location)
4. Timer事件($timeout, $interval)
5. 执行$digest()或$apply()

### 数据劫持
vue.js则是采用数据劫持结合发布者-订阅者模式的方式，通过`Object.defineProperty()`来劫持各个属性的`setter`, `getter`，在数据变动时发布消息给订阅者，触发相应的监听回调。
### 思路整理
要实现mvvm的双向绑定，就必须要实现以下几点：
1. 实现一个数据监听器，能够对数据对象的所有属性进行监听，如果有变动可以拿到最新值并通知订阅者。
2. 要实现一个指令解析器Compile，对每个元素节点的指令进行扫描和解析，根据指令模板替换数据，以及绑定相应的更新函数。
3. 实现一个Watcher，作为连接Observer和Compile的桥梁，能够订阅并收到每个属性变动的通知，执行指令绑定的相应回调函数，从而更新视图。
4. mvvm入口函数，整合以上三者。

### 实现Observer
我们知道可以利用`Object.defineProperty()`来监听属性变动，那么需要将observe的数据对象进行递归遍历，包括子属性对象的属性，都加上`setter`和`getter`。这样的话，给这个对象的某个值赋值，就会触发`setter`，那么就能监听到了数据变化.相关代码可以是这样：
```javascript
var data = {name: 'kindeng'};
observe(data);
data.name = 'dmq'; // 哈哈哈，监听到值变化了 kindeng --> dmq

function observe(data) {
    if (!data || typeof data !== 'object') {
        return ;
    }
    // 取出所有属性便令
    Object.keys(data).forEach(function(key) {
        defineReactive(data, key, data[key]);
    });
};

function defineReactive(data, key, val) {
    observe(val); // 监听子属性
    Object.defineProperty(data, key, {
        enumerable: true, // 可枚举
        configurable: false, // 不能再define
        get: function() {
            return val;
        },
        set: function(newVal) {
            console.log('哈哈哈，监听到值变化了 ', val, ' --> ', newVal);
            val = newVal;
        }
    });
}
```
这样我们已经可以监听到每个数据的变化了，那么监听到变化之后就是怎么通知订阅者了，所以接下来我们需要实现一个消息订阅器，维护一个数组，用来收集订阅者，数据变动触发notify，再调用订阅者的update方法。代码改善之后是这样：
```javascript
// ... 省略
function defindReactive(data, key, val) {
    var dep = new Dep();
    observe(val); // 监听子属性
    Object.defineProperty(data, key, {
        enumerable: true, // 可枚举
        configurable: false, // 不能再define
        get: function() {
            return val;
        },
        set: function(newVal) {
            if (val === newVal) return;
            console.log('哈哈哈，监听到值变化了 ', val, ' --> ', newVal);
            val = newVal;
            dep.notify(); // 通知所有订阅者
        }
    });
}

function Dep() {
    this.subs = [];
}
Dep.prototype = {
    addSub: function(sub) {
        this.subs.push(sub);
    },
    notify: function() {
        this.subs.forEach(function(sub) {
            sub.update();
        });
    }
};
```
那么问题来了，谁是订阅者？怎么往订阅器添加订阅者？上面的思路整理中我们已经明确订阅者应该是Watcher，而且`var dep = new Dep();` 是在`defineReactive`方法内部定义的，所以想通过`dep`添加订阅者，就必须要在闭包内操作，所以我们可以在`getter`里面动手脚：
```js
// Observer.js
// ... 省略
Object.defineProperty(data, key, {
    get: function() {
        // 由于需要在闭包内添加watcher,
        // 所以通过Dep定义一个全局target属性，
        // 暂存watcher,添加完移除。
        Dep.target && dep.addDep(Dep.target);
        return val;
    }
    // ... 省略
})

// Watcher.js
Watcher.prototy = {
    get: function(key) {
        Dep.target = this;
        this.value = data[key]; // 这里会触发属性的getter，从而添加订阅者
        Dep.target = null;
    }
}
```
这里已经实现了一个Observer了，已经具备了监听数据和数据变化通知订阅者的功能。接下来就是实现Compile了。
### 实现Compile
compile主要做的事情是解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图。

因为遍历解析的过程有多次操作dom节点，为提高性能和效率，会先将根节点el转换成文档碎片`fragment`进行解析编译操作，解析完成，再将fragment添加回原来的真实dom节点中。
```js
function Compile(el) {
    this.$el = this.isElementNode(el) ? el : document.querySelector(el);
    if (this.$el) {
        this.$fragment = this.node2Fragment(this.$el);
    }
}

Compile.prototype = {
    init: function() {
        this.compileElement(this.$fragment);
    },
    node2Fragment: function(el) {
        var fragment = document.createDocumentFragment(), child;
        // 将原生节点拷贝到fragment
        while (child = el.firstChild) {
            fragment.appendChild(child);
        }
        return fragment;
    }
};
```
compileElement方法将遍历所有节点及其子节点，进行扫描解析编译，调用对应的指令渲染函数进行数据渲染，并调用对应的指令更新函数进行绑定，详看代码及注释说明：
```js
Compile.prototype = {
    // ... 省略
    compileElement: function(el) {
        var childNodes = el.childNodes, me = this;
        [].slice.call(childNodes).forEach(function(node) {
            var text = node.textContent;
            var reg = /\{\{(.*)\}\}/; // 表达式文本
            // 按元素节点方式编译
            if (me.isElementNode(node)) {
                me.compile(node);
            } else if (me.isTextNode(node) && reg.test(text)) {
                me.compileText(node, RegExp.$1);
            }
            // 遍历编译子节点
            if (node.childNodes && node.childNodes.length) {
                me.compileElement(node);
            }
        });
    },

    compile: function(node) {
        var nodeAttrs = node.attributes, me = this;
        [].slice.call(nodeAttrs).forEach(function(attr) {
            // 规定 指令以v-xxx命名
            var attrName = attr.name; // v-test
            if (me.isDirective(attrName)) {
                var exp =attr.value; // content
                var dir = attrName.substring(2); // text
                if (me.isEventDirective(dir) {
                    // 事件指令 如v-on:click
                    compileUtil.eventHandler(node, me.$vm, exp, dir);
                } else {
                    // 普通指令
                    compileUtil[dir] && compileUtil[dir](node, me.$vm, exp);
                })
            }
        })
    }
}

// 指令处理集合
var compileUtil = {
    text: function(node, vm, exp) {
        this.bind(node, vm, exp, 'text');
    },
    // ... 省略
    bind: function(node, vm, exp, dir) {
        var updateFn = updater[dir,+'Updater'];
        // 第一次初始化视图
        updaterFn && updaterFn(node, vm[exp]);
        // // 实例化订阅者，此操作会在对应的属性消息订阅器中添加了该订阅者watcher
        new Watcher(vm, exp, function(value, oldValue) {
            // 一旦属性值有变化，会收到通知执行此更新函数，更新视图
            updaterFn && updaterFn(node, value, oldValue);
        });
    }
}

// 更新函数
var updater = {
    textUpdater: function(node, value) {
        node.textContent = typeof value == 'undefined' ? '' : value;
    }
    // ... 省略
}
```
这里通过递归遍历保证了每个节点及子节点都会解析编译到，包括了{ { } }表达式声明的文本节点。指令的声明规定是通过特定前缀的节点属性来标记，如`<span v-text="content" other-attr`中`v-text`便是指令，而`other-attr`不是指令，只是普通的属性，监听数据，绑定更新函数的处理是在`compileUtil.bind()`这个方法中，通过`new Watcher()`添加回调来接收数据变化的通知。
### 实现Watcher
Watcher订阅者作为Observer和Compile之间通信的桥梁，主要做的事情是：
1. 在自身实例化时往属性订阅器(dep)里面添加自己。
2. 自身必须有一个update()方法。
3. 待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调。
```js
function Watcher(vm, exp, cb) {
    this.cb = cb;
    this.vm = vm;
    this.exp = exp;
    // 此处为了触发属性的getter,从而在dep添加自己，结合Observer更易理解
    this.value = this.get();
}
Watcher.prototype = {
    update: function() {
        this.run(); // 属性值变化接到通知
    },
    run: function() {
        var value = this.get(); // 取到最新值
        var oldVal = this.value;
        if (value !== oldVal) {
            this.value = value;
            this.cb.call(this.vm, value, oldVal); // 执行Compile中绑定的回调，更新视图
        }
    },
    get: function() {
        Dep.target = this; // 将当前订阅者指向自己
        var value = this.vm[exp]; // 触发getter 添加自己到属性订阅器中
        Dep.target = null; // 添加完毕，重置
        return value;
    }
};
```
实例化`Watcher`的时候，调用`get()`方法，通过`Dep.target = watcherInstance`标记订阅者是当前watcher实例，强行触发属性定义的`getter`方法，`getter`方法执行的时候，就会在属性的订阅器`dep`添加当前watcher实例，从而在属性值有变化的时候，watcherInstance就能收到更新通知。
### 实现MVVM
MVVM作为数据绑定的入口，整合Observer,Compile和Watcher三者，通过Observer来监听自己的model数据变化，通过Compile来解析编译模板指令。最终利用Watcher搭起Observer和Compile之间的通信桥梁，达到数据变化->视图更新；视图交互变化->数据model变更的双向绑定效果。

一个简单的MVVM构造器是这样子：
```js
function MVVM(options) {
    this.$options = options;
    var data = this._data = this.$options.data;
    observe(data, this);
    this.$compile = new Compile(options.el || document.body, this)
}
```
但是这里有个问题，从代码中可以看出监听的数据对象是option.data，每次需要更新视图，则必须通过`var vm = new MVVM({data:{name: 'kindeng'}}); vm_data.name = 'dmq;'`这样的方式来改变数据。

显然不符合我们一开始的期望，我们所期望的调用方式应该是这样的：`var vm = new MVVM({data: {name: 'kindeng'}}); vm.name = 'dmq';`

所以这里需要给MVVM实例添加一个属性代理的方法，使访问vm的属性代理为访问vm._data的属性，改造后的代码如下：
```js
function MVVM(options) {
    this.$options = options;
    var data = this._data = this.$options.data, me = this;
    // 属性代理 实现vm.xxx = vm._data.xxx
    Object.keys(data).forEach(function(key) {
        me._proxy(key);
    });
    observe(data, this);
    this.$compile = new Compile(options.el || document.body, this)
}
MVVM.prototype = {
    _proxy: function(key) {
        var me = this;
        Object.defineProperty(me, key, {
            configurable: false,
            enumerable: true,
            get: function proxyGetter() {
                return me._data[key];
            },
            set: function proxySetter(newVal) {
                me._data[key] = newVal;
            }
        });
    }
}
```
这里主要还是利用了`Object.defineProperty()`这个方法来劫持了vm实例对象的属性的读写权，使读写vm实例的属性转成读写`vm._data`的属性值。
***
以上抄自[https://github.com/DMQ/mvvm](https://github.com/DMQ/mvvm)