(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{211:function(t,a,s){"use strict";s.r(a);var e=s(0),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"babel-总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babel-总结"}},[t._v("#")]),t._v(" babel 总结")]),t._v(" "),s("h3",{attrs:{id:"babel-是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babel-是什么"}},[t._v("#")]),t._v(" babel 是什么")]),t._v(" "),s("p",[s("code",[t._v("babel")]),t._v(" 是一个 "),s("code",[t._v("js 编译器")]),t._v("，主要用于将 es6+ 的代码转换为向后兼容的 js 语法，以便能够运行在当前和旧版本的浏览器和其他环境中。")]),t._v(" "),s("p",[s("code",[t._v("babel")]),t._v(" 能够做的事：语法转换、通过 "),s("code",[t._v("polyfill")]),t._v(" 方式在目标环境中添加缺失的特性、源码转换，以及通过这些方式进行代码优化。")]),t._v(" "),s("h3",{attrs:{id:"抽象语法树-ast"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#抽象语法树-ast"}},[t._v("#")]),t._v(" 抽象语法树 AST")]),t._v(" "),s("p",[s("code",[t._v("abstract syntax tree")]),t._v("，是源代码的抽象语法结构的树状表现形式。")]),t._v(" "),s("p",[t._v("代码转换成 ast 需要经过"),s("code",[t._v("词法解析")]),t._v("和"),s("code",[t._v("语法解析")]),t._v("。")]),t._v(" "),s("p",[t._v("词法分析：将代码转换成令牌(tokens)流，tokens 可以视作是一些语法片段组成的数组，每个 token 包含了语法片段、位置信息以及一些类型信息，这些信息有助于后面的语法分析。")]),t._v(" "),s("p",[t._v("语法分析：将词法分析出来的 tokens 转化成树状的表达式，即抽象语法树。")]),t._v(" "),s("h3",{attrs:{id:"babel-处理流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babel-处理流程"}},[t._v("#")]),t._v(" babel 处理流程")]),t._v(" "),s("p",[t._v("babel 的处理流程分为三个部分：")]),t._v(" "),s("ol",[s("li",[t._v("解析：parse，将代码解析成 AST，即词法分析和语法分析的过程。")]),t._v(" "),s("li",[t._v("转换：transform，接收 AST 并对其进行遍历，在此过程中对节点进行添加、更新及移除等操作。这是 babel 或是其他编译器中最复杂的部分，同时也是插件将要介入工作的部分。")]),t._v(" "),s("li",[t._v("生成：generate，将 AST 转换成字符串形式的代码，同时创建 sourcemap 。")])]),t._v(" "),s("h3",{attrs:{id:"常用功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用功能"}},[t._v("#")]),t._v(" 常用功能")]),t._v(" "),s("ol",[s("li",[t._v("@babel/cli： 命令行工具，可通过命令行编译文件")]),t._v(" "),s("li",[t._v("@babel/polyfill： 包含 regenerator runtime 和 core-js，用于模拟一个完全的 es6+ 环境")]),t._v(" "),s("li",[t._v("@babel/plugin-transform-runtime： 与 @babel/runtime 配合使用，用于复用 babel 编译过程中产生的辅助函数，以减少代码体积，以及进行 polyfill")]),t._v(" "),s("li",[t._v("@babel/register： 通过 require 钩子将自身绑定到 node 的 require 模块上，并在运行时进行即时编译")])]),t._v(" "),s("h3",{attrs:{id:"工具库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#工具库"}},[t._v("#")]),t._v(" 工具库")]),t._v(" "),s("ol",[s("li",[t._v("@babel/parser：js 解析器")]),t._v(" "),s("li",[t._v("@babel/core：babel 核心流程，用于转换代码，内部使用了 @babel/parser、@babel/traverse、@babel/generator 等")]),t._v(" "),s("li",[t._v("@babel/generator：传入 AST，生成代码")]),t._v(" "),s("li",[t._v("@babel/code-frame：用于生成错误信息并且打印出错误原因和错误行数")]),t._v(" "),s("li",[t._v("@babel/helpers：用于 babel 转换的辅助函数集合")]),t._v(" "),s("li",[t._v("@babel/runtime：babel 的运行时辅助工具，与 @babel/plugin-transform-runtime 配合使用")]),t._v(" "),s("li",[t._v("@babel/template：使用字符串模板生成 AST")]),t._v(" "),s("li",[t._v("@babel/traverse：用于遍历 AST")]),t._v(" "),s("li",[t._v("@babel/types：用于 AST 节点的 "),s("code",[t._v("lodash")]),t._v(" 式工具库，它包含了构造、验证以及变换 AST 节点的方法，对编写处理 AST 逻辑非常有用")])]),t._v(" "),s("h3",{attrs:{id:"自定义插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义插件"}},[t._v("#")]),t._v(" 自定义插件")]),t._v(" "),s("blockquote",[s("p",[t._v("babel 操作 AST 时使用访问器模式，由这个访问者(Visitor)来 ① 进行统一的遍历操作，② 提供节点的操作方法，③ 响应式维护节点之间的关系；而插件(设计模式中称为‘具体访问者’)只需要定义自己感兴趣的节点类型，当访问者访问到对应节点时，就调用插件的访问(visit)方法。")])]),t._v(" "),s("blockquote",[s("p",[t._v("作者：荒山\n链接：https://juejin.im/post/5d94bfbf5188256db95589be\n来源：掘金")])]),t._v(" "),s("p",[t._v("实现了一个按需加载的简单 "),s("a",{attrs:{href:"https://github.com/gyh9457/bable-plugin-import-demo",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo"),s("OutboundLink")],1),t._v("：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("D")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),t._v("\n")])])]),s("p",[t._v("转换为:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" _A "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo/lib/A"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo/lib/A/style.css"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" _B "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo/lib/B"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo/lib/B/style.css"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" _C "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo/lib/C"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo/lib/C/style.css"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"babel-plugin-macros"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babel-plugin-macros"}},[t._v("#")]),t._v(" babel-plugin-macros")]),t._v(" "),s("p",[t._v("现在，每个 babel 插件都要求使用者进行配置，这对于语言特性来说没有问题，但对于一些允许在编译时做代码转换，以进行优化的库来说，是不必要的。比如说特定框架、库的代码转换，如 "),s("code",[t._v("styled-components")]),t._v("；动态生成代码，如 "),s("code",[t._v("preval")]),t._v(" 等。")]),t._v(" "),s("p",[s("code",[t._v("babel-plugin-macro")]),t._v(" 解决了这个问题，它定义了一个标准接口，对于想在运行时做代码转换的库，无须使用者在构建系统中添加 babel 插件。")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("babel-plugin-macro")]),t._v(" 本质上和 babel plugin 没有什么区别，它只是在 plugin 之上封装了一层，创建了一个新的平台，让开发者可以在源代码层面显式地应用代码转换。")])]),t._v(" "),s("p",[t._v("详细信息请参考"),s("a",{attrs:{href:"https://github.com/kentcdodds/babel-plugin-macros",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),s("OutboundLink")],1)]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("参考")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.babeljs.cn/docs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("babel"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.im/post/5d94bfbf5188256db95589be#heading-2",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入浅出 Babel 上篇：架构和原理 + 实战"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.im/post/5da12397e51d4578364f6ffa#heading-5",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入浅出 Babel 下篇：既生 Plugin 何生 Macros"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);