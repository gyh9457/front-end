(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{213:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("code",[t._v("Babel")]),t._v(" 是一个编译器，从宏观角度看，它将运行代码分为三个阶段：解析、转换、及生成。代码首先经过"),s("code",[t._v("babylon")]),t._v(" 解析成抽象语法树(AST)，后经一些遍历和分析转化(主要过程)，最后根据转换后的AST生成新的常规代码。")]),t._v(" "),s("h3",{attrs:{id:"解析-parse"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解析-parse"}},[t._v("#")]),t._v(" 解析 (parse)")]),t._v(" "),s("p",[t._v("解析步骤接收代码并输出AST，这个步骤分为两个阶段：词法分析(Lexical Analysis) (把字符串形式的代码转换为令牌流)；语法分析(Syntactic Analysis)(令牌流转换成AST的形式)。")]),t._v(" "),s("h3",{attrs:{id:"转换-transform"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转换-transform"}},[t._v("#")]),t._v(" 转换 (transform)")]),t._v(" "),s("p",[t._v("程序转换步骤接收AST并对其进行遍历，在此过程中对节点进行添加、更新及移除等操作。这是Babel或是其他编译器中最复杂的过程，同时也是插件将要介入工作的部分。")]),t._v(" "),s("h3",{attrs:{id:"生成-generate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成-generate"}},[t._v("#")]),t._v(" 生成 (generate)")]),t._v(" "),s("p",[t._v("代码生成阶段把最终的AST转换成字符串形式的代码，同时还会创建源码映射(source map)。")]),t._v(" "),s("h3",{attrs:{id:"babelrc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babelrc"}},[t._v("#")]),t._v(" .babelrc")]),t._v(" "),s("p",[t._v("通过 "),s("code",[t._v(".babelrc")]),t._v(" 文件告诉"),s("code",[t._v("Babel")]),t._v(" 应该要做什么，可以在里面配置"),s("code",[t._v("plugins")]),t._v(" 或者是"),s("code",[t._v("preset")]),t._v(" (一组配置好的组件，babel官方提供了几种预设) 来指示Babel做什么事情。")]),t._v(" "),s("h3",{attrs:{id:"babel-polyfill"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babel-polyfill"}},[t._v("#")]),t._v(" babel-polyfill")]),t._v(" "),s("p",[s("code",[t._v("Babel")]),t._v(" 几乎可以编译所有新的js语法，但对于"),s("code",[t._v("APIs")]),t._v(" 来说并非如此。例如，并不是所有的"),s("code",[t._v("JavaScript")]),t._v(" 环境都支持"),s("code",[t._v("Array.from")]),t._v(" 。")]),t._v(" "),s("p",[t._v("为了解决这个问题，我们使用一种"),s("code",[t._v("polyfill")]),t._v(" 的技术，简单来说，polyfill即是在当前运行环境中来复制尚不存在的原生api的代码，能让你提前使用还不可用的"),s("code",[t._v("APIs")]),t._v(" 。")]),t._v(" "),s("div",{staticClass:"language-sudo extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ npm install --save polyfill\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-polyfill'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 只需要在文件顶部引入 polyfill 就可以")]),t._v("\n")])])]),s("h3",{attrs:{id:"babel-runtime"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babel-runtime"}},[t._v("#")]),t._v(" babel-runtime")]),t._v(" "),s("p",[t._v("为了实现"),s("code",[t._v("ECMAScript")]),t._v(' 规范的细节，Babel会使用"助手"方法来保持代码的整洁。')]),t._v(" "),s("p",[t._v("由于这些助手方法可能会特别长并且会被添加到每一个文件的顶部，因此可以将它们统一移动到一个单一的"),s("code",[t._v("runtime")]),t._v(" 中去。")]),t._v(" "),s("div",{staticClass:"language-sudo extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ npm install --save-dev babel-plugin-transform-runtime\n$ npm install --save babel-runtime\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plugins"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"transform-runtime"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("现在，Babel会把这样的代码:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("foo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("method")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("编译成:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" _classCallCheck "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"babel-runtime/helpers/classCallCheck"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" _createClass "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"babel-runtime/helpers/createClass"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Foo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_classCallCheck")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_createClass")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"method"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("method")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("这样就不需要把"),s("code",[t._v("_classCallBack")]),t._v(" 和"),s("code",[t._v("_createClass")]),t._v(" 这两个助手方法放进每一个需要的文件里去了。")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("参考:\n"),s("a",{attrs:{href:"http://www.qcyoung.com/2017/02/06/Babel%20%E5%9F%BA%E7%A1%80%E5%8F%8A%E4%BB%A3%E7%A0%81%E8%BD%AC%E6%8D%A2%E7%AE%80%E5%8D%95%E6%8E%A2%E7%A9%B6/#jie-xi",target:"_blank",rel:"noopener noreferrer"}},[t._v("Babel 基础及代码转换简单探究"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);