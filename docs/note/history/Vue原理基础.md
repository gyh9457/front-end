---
title: Vue原理基础
date: 2018-02-02 17:02:23
tags:
---
### 响应式原理
现代框架使用`数据=>视图` 的方式，隐藏了繁琐的dom操作，采用声明式编程替换了命令式编程(如 jquery)。

Vue在渲染实例的时候，遍历`data` 对象的所有属性，并使用`Object.defineProperty` 把这些属性全部转为`getter`/`setter` 。同时创建`watcher` 对象，在`getter` 中将属性设置为依赖。之后修改依赖项数据的时候，会调用`setter` ,`setter` 通过`dep.notify()` 通知`watcher` 重新计算，从而使它关联的组件得以更新。

![data](/Vue/data.png)

PS：根绝目前对`React` 的了解，它的数据流是单向的，必须通过`setState` 的方法去告知视图数据发生了变化，然后通过`virtual dom diff` 去渲染视图。

___
参考内容:

[深度剖析：如何实现一个 Virtual DOM 算法](https://github.com/livoras/blog/issues/13)

[Vue源码详解:compile,link,依赖,批处理...一网打尽，全解析!](https://chuckliu.me/#!/posts/58aefe61820ad92fbbe9a4e0)

[深入响应式原理](https://cn.vuejs.org/v2/guide/reactivity.html)