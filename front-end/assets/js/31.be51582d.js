(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{417:function(t,s,a){"use strict";a.r(s);var e=a(54),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[t._v("#")]),t._v(" Context")]),t._v(" "),a("p",[t._v("用处：提供一种能力，在组件树内传递数据，不需要在每个层级中通过 props 向下传递数据。")]),t._v(" "),a("h3",{attrs:{id:"legacy-context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#legacy-context"}},[t._v("#")]),t._v(" Legacy Context")]),t._v(" "),a("p",[t._v("即将废弃的 Context api，在16.x版本依旧可以使用，之后会被移除。")]),t._v(" "),a("p",[t._v("推荐使用 "),a("code",[t._v("16.3")]),t._v(" 版本后提供的新 Context api.")]),t._v(" "),a("p",[t._v("如何更新 context ? 在 props 或 value 发生变化的时候，将会调用 "),a("code",[t._v("getChildContext")]),t._v(" 返回一个新的 context.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getChildContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("注意，这种更新 context 的方式将会完全移除，不要这样做。")]),t._v(" "),a("p",[t._v("这种方式带来的问题是，假设context被更新，在多个层级之下，有个节点使用到了 context，这时候。本来这个节点应该更新，但如果该节点父组件的 "),a("code",[t._v("shouldComponentUpdate")]),t._v(" 返回了 "),a("code",[t._v("false")]),t._v(" 。这时候该节点就不会更新。这是不可控的。")]),t._v(" "),a("h3",{attrs:{id:"基本用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[t._v("#")]),t._v(" 基本用法")]),t._v(" "),a("h4",{attrs:{id:"react-createcontext"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-createcontext"}},[t._v("#")]),t._v(" React.createContext")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" MyContext "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("defaultValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("创建 "),a("code",[t._v("Context")]),t._v(" 对象，"),a("code",[t._v("defaultValue")]),t._v(" 只在组件没有匹配的 "),a("code",[t._v("provider")]),t._v(" 时生效。")]),t._v(" "),a("h4",{attrs:{id:"context-provider"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context-provider"}},[t._v("#")]),t._v(" Context.Provider")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("MyContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Provider value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* some value */")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("传递数据给子组件，一个 "),a("code",[t._v("Provider")]),t._v(" 可以传递给多个 "),a("code",[t._v("Consumer")]),t._v(", 子 "),a("code",[t._v("Provider")]),t._v(" 的数据会覆盖父 "),a("code",[t._v("Provider")]),t._v(" 的数据。")]),t._v(" "),a("p",[t._v("当 "),a("code",[t._v("Provider")]),t._v(" 的值发生变化时，子 "),a("code",[t._v("Consumer")]),t._v(" 都会 "),a("code",[t._v("re-render")]),t._v(", 不受 "),a("code",[t._v("shouldComponentUpdate")]),t._v(" 的影响，即使 "),a("code",[t._v("Consumer")]),t._v(" 的父组件没有更新。")]),t._v(" "),a("h4",{attrs:{id:"class-context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class-context"}},[t._v("#")]),t._v(" Class.Context")]),t._v(" "),a("p",[t._v("在组件内声明 "),a("code",[t._v("context")]),t._v(" ，声明完后，组件可以获得最近的组件提供的 "),a("code",[t._v("context")]),t._v(" 值，通过 "),a("code",[t._v("this.context")]),t._v(" 拿到。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyClass")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Componnt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. static contextType = MyContext")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. MyClass.contextType = MyContext")]),t._v("\n")])])]),a("h4",{attrs:{id:"context-consumer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context-consumer"}},[t._v("#")]),t._v(" Context.Consumer")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("MyContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Consumer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* render something based on the context value */")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("MyContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Consumer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("利用 "),a("code",[t._v("context")]),t._v(" 的值 "),a("code",[t._v("value")]),t._v(" 返回一个 "),a("code",[t._v("react")]),t._v(" 节点，该节点订阅 "),a("code",[t._v("context")]),t._v(" 的变化。")])])}),[],!1,null,null,null);s.default=n.exports}}]);