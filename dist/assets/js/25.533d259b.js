(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{243:function(e,t,r){"use strict";r.r(t);var v=r(0),_=Object(v.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h3",{attrs:{id:"响应式原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#响应式原理"}},[e._v("#")]),e._v(" 响应式原理")]),e._v(" "),r("p",[e._v("现代框架使用"),r("code",[e._v("数据=>视图")]),e._v(" 的方式，隐藏了繁琐的dom操作，采用声明式编程替换了命令式编程(如 jquery)。")]),e._v(" "),r("p",[e._v("Vue在渲染实例的时候，遍历"),r("code",[e._v("data")]),e._v(" 对象的所有属性，并使用"),r("code",[e._v("Object.defineProperty")]),e._v(" 把这些属性全部转为"),r("code",[e._v("getter")]),e._v("/"),r("code",[e._v("setter")]),e._v(" 。同时创建"),r("code",[e._v("watcher")]),e._v(" 对象，在"),r("code",[e._v("getter")]),e._v(" 中将属性设置为依赖。之后修改依赖项数据的时候，会调用"),r("code",[e._v("setter")]),e._v(" ,"),r("code",[e._v("setter")]),e._v(" 通过"),r("code",[e._v("dep.notify()")]),e._v(" 通知"),r("code",[e._v("watcher")]),e._v(" 重新计算，从而使它关联的组件得以更新。")]),e._v(" "),r("p",[r("img",{attrs:{src:"/Vue/data.png",alt:"data"}})]),e._v(" "),r("p",[e._v("PS：根绝目前对"),r("code",[e._v("React")]),e._v(" 的了解，它的数据流是单向的，必须通过"),r("code",[e._v("setState")]),e._v(" 的方法去告知视图数据发生了变化，然后通过"),r("code",[e._v("virtual dom diff")]),e._v(" 去渲染视图。")]),e._v(" "),r("hr"),e._v(" "),r("p",[e._v("参考内容:")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/livoras/blog/issues/13",target:"_blank",rel:"noopener noreferrer"}},[e._v("深度剖析：如何实现一个 Virtual DOM 算法"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://chuckliu.me/#!/posts/58aefe61820ad92fbbe9a4e0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue源码详解:compile,link,依赖,批处理...一网打尽，全解析!"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/reactivity.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("深入响应式原理"),r("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=_.exports}}]);