(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{215:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"实现一个简单的-webpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现一个简单的-webpack"}},[s._v("#")]),s._v(" 实现一个简单的 webpack")]),s._v(" "),a("blockquote",[a("p",[s._v("本质上，webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。")])]),s._v(" "),a("p",[s._v("根据定义，要实现一个打包器，需要以下几个步骤：")]),s._v(" "),a("h4",{attrs:{id:"解析入口文件，获取所有的依赖项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解析入口文件，获取所有的依赖项"}},[s._v("#")]),s._v(" 解析入口文件，获取所有的依赖项")]),s._v(" "),a("p",[s._v("用以下形式来表示一个模块")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'src/entry'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 文件绝对路径作为模块的唯一标识符")]),s._v("\n    code"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 文件解析后的内容")]),s._v("\n    dependencies"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./message.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 依赖项")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h4",{attrs:{id:"递归解析所有依赖项，生成一个依赖关系图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#递归解析所有依赖项，生成一个依赖关系图"}},[s._v("#")]),s._v(" 递归解析所有依赖项，生成一个依赖关系图")]),s._v(" "),a("p",[s._v("如何维护依赖文件之间的关系？通过一个 "),a("code",[s._v("mapping")]),s._v(" 将依赖项的相对路径映射到绝对路径。")]),s._v(" "),a("p",[s._v("此时我们用以下形式表示一个模块")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'src/entry'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 文件绝对路径作为模块的唯一标识符")]),s._v("\n    code"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 文件解析后的内容")]),s._v("\n    dependencies"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./message.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 依赖项")]),s._v("\n    mapping"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./message.js'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'src/message.js'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("生成依赖关系：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" graph "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// entry 模块")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src/entry.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      code"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      dependencies"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./src/message.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      mapping"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./message.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src/message.js"')]),s._v("       \n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// message 模块")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src/message.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      code"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      dependencies"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      mapping"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("当项目运行时，通过依赖关系可以读取到模块内容。")]),s._v(" "),a("h4",{attrs:{id:"使用依赖图，返回一个可以在浏览器运行的-js-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用依赖图，返回一个可以在浏览器运行的-js-文件"}},[s._v("#")]),s._v(" 使用依赖图，返回一个可以在浏览器运行的 js 文件")]),s._v(" "),a("p",[s._v("生成一个 IIFE 立即执行函数")]),s._v(" "),a("h4",{attrs:{id:"输出到目标位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输出到目标位置"}},[s._v("#")]),s._v(" 输出到目标位置")]),s._v(" "),a("p",[s._v("将生成的 js 文件写入到目标位置")]),s._v(" "),a("h4",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/gyh9457/simple-webpack/tree/master/src/minipack",target:"_blank",rel:"noopener noreferrer"}},[s._v("示例代码"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/5e04c935e51d4557ea02c097",target:"_blank",rel:"noopener noreferrer"}},[s._v("手写一个 javascript 打包器"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/5cf24bed6fb9a07ee566069c",target:"_blank",rel:"noopener noreferrer"}},[s._v("实现一个简单的 webpack"),a("OutboundLink")],1),s._v("]")])])}),[],!1,null,null,null);t.default=e.exports}}]);