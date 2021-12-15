(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{430:function(s,t,a){"use strict";a.r(t);var n=a(54),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"chunkhash-稳定性问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chunkhash-稳定性问题"}},[s._v("#")]),s._v(" chunkhash 稳定性问题")]),s._v(" "),a("p",[s._v("使用 "),a("code",[s._v("chunkhash")]),s._v(" 作为输出文件的文件名，在文件内容没有变化的情况下可以缓存该文件，通过命中缓存，降低网络流量，使网站加载速度更快。"),a("a",{attrs:{href:"https://webpack.docschina.org/guides/caching/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方缓存文档"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("根据官方缓存文档的说明，存在模块标识符问题。即在一个项目中，将代码打包成 "),a("code",[s._v("app.[chunkhash].js")]),s._v("、 "),a("code",[s._v("runtime.[chunkhash.js]")]),s._v("、 "),a("code",[s._v("vendors.[chunkhash].js")]),s._v(" 三个部分，修改入口 "),a("code",[s._v("js")]),s._v(" 文件的内容，而第三方依赖没有变化。")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// print.js")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'print.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// App.js")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" print "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./print.js'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n")])])]),a("p",[s._v("再次打包后，"),a("code",[s._v("vendor")]),s._v(" 的 "),a("code",[s._v("chunkhash")]),s._v(" 发生变化，与预期不符。文档给出的解释是，"),a("code",[s._v("module.id")]),s._v(" 基于默认的解析顺序进行增量，当解析顺序发生变化，"),a("code",[s._v("module.id")]),s._v(" 也发生变化，"),a("code",[s._v("chunkhash")]),s._v(" 随 "),a("code",[s._v("module.id")]),s._v(" 发生变化。")]),s._v(" "),a("p",[s._v("官方给出的解决方案是 "),a("code",[s._v("NamedModulesPlugin")]),s._v(" 和 "),a("code",[s._v("HashedModuleIdsPlugin")]),s._v("。")]),s._v(" "),a("p",[s._v("在实际使用 "),a("code",[s._v("webpack4.16.3")]),s._v(" 进行测试的时候无法复现这个问题，查看打包后的 "),a("code",[s._v("app.[chunkhash].js")]),s._v(" 的代码，发现模块加载的代码为:")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" _App "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("__webpack_require__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*! .App */")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./src/App.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v("而根据网上的文章，旧版的模块加载代码为:")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("__webpack_require__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__webpack_require__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v("因此，初步判断 "),a("code",[s._v("module.id")]),s._v(" 由原来的数字自增变为现在的字符串，解决了 "),a("code",[s._v("chunkhash")]),s._v(" 不稳定的问题。")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("参考：")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/5a1bcdadf265da430e4ee137?utm_medium=hao.caibaojian.com&utm_source=hao.caibaojian.com",target:"_blank",rel:"noopener noreferrer"}},[s._v("webpack稳定moduleid和chunkid以实现持久化缓存的梳理"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);