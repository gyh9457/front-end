---
title: React Context 笔记
date: 2019-02-22 19:16:57
tags:
---
### Context
用处：提供一种能力，在组件树内传递数据，不需要在每个层级中通过 props 向下传递数据。

### Legacy Context
即将废弃的 Context api，在16.x版本依旧可以使用，之后会被移除。

推荐使用 `16.3` 版本后提供的新 Context api.

如何更新 context ? 在 props 或 value 发生变化的时候，将会调用 `getChildContext` 返回一个新的 context.

``` js
  getChildContext() {
    return { type: this.state.type}
  }
```

注意，这种更新 context 的方式将会完全移除，不要这样做。

这种方式带来的问题是，假设context被更新，在多个层级之下，有个节点使用到了 context，这时候。本来这个节点应该更新，但如果该节点父组件的 `shouldComponentUpdate` 返回了 `false` 。这时候该节点就不会更新。这是不可控的。

### 基本用法
#### React.createContext
``` js
  const MyContext = React.createContext(defaultValue)
```

创建 `Context` 对象，`defaultValue` 只在组件没有匹配的 `provider` 时生效。

#### Context.Provider
``` js
  <MyContext.Provider value={/* some value */>}
```

传递数据给子组件，一个 `Provider` 可以传递给多个 `Consumer`, 子 `Provider` 的数据会覆盖父 `Provider` 的数据。

当 `Provider` 的值发生变化时，子 `Consumer` 都会 `re-render`, 不受 `shouldComponentUpdate` 的影响，即使 `Consumer` 的父组件没有更新。

#### Class.Context
在组件内声明 `context` ，声明完后，组件可以获得最近的组件提供的 `context` 值，通过 `this.context` 拿到。

``` js
  class MyClass extends React.Componnt {
    // 1. static contextType = MyContext
    ...
    console.log(this.context)
    ...
  }

  // 2. MyClass.contextType = MyContext
```

#### Context.Consumer
``` js
  <MyContext.Consumer>
    {value => /* render something based on the context value */}
  </MyContext.Consumer>
```

利用 `context` 的值 `value` 返回一个 `react` 节点，该节点订阅 `context` 的变化。
