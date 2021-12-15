(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{436:function(e,a,t){"use strict";t.r(a);var r=t(54),n=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h3",{attrs:{id:"目的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目的"}},[e._v("#")]),e._v(" 目的")]),e._v(" "),t("p",[e._v("创建组件主要目的是通过造轮子来实现自我提升，同时将这些组件发布到 "),t("code",[e._v("npm")]),e._v(" 上，以便于后续使用，也可以更好地理解库是如何实现的。")]),e._v(" "),t("p",[e._v("创建组件并发布，可以分为三个步骤：")]),e._v(" "),t("ol",[t("li",[e._v("搭建一个 "),t("code",[e._v("react")]),e._v(" 组件开发框架，进行组件开发。")]),e._v(" "),t("li",[e._v("本地测试。")]),e._v(" "),t("li",[e._v("组件发布。")])]),e._v(" "),t("h4",{attrs:{id:"搭建一个-react-组件开发框架"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#搭建一个-react-组件开发框架"}},[e._v("#")]),e._v(" 搭建一个 "),t("code",[e._v("react")]),e._v(" 组件开发框架")]),e._v(" "),t("p",[e._v("通过简单的 "),t("code",[e._v("webpack")]),e._v(" "),t("code",[e._v("babel")]),e._v(" 配置搭建一个基础框架，并编写一个类似 "),t("code",[e._v("hello world")]),e._v(" 的组件，可参考文后链接。")]),e._v(" "),t("p",[e._v("这边提一下 "),t("code",[e._v("package.json")]),e._v(" 中的两个配置")]),e._v(" "),t("ol",[t("li",[t("code",[e._v("main")]),e._v(": 这里是我们组件的入口文件。开发者在 "),t("code",[e._v("import")]),e._v(" 我们的组件的时候会引入这里 "),t("code",[e._v("export")]),e._v(" 的内容。")]),e._v(" "),t("li",[t("code",[e._v("files")]),e._v(": 申明将要发布到 "),t("code",[e._v("npm")]),e._v(" 的文件。如果省略掉这一项，所有文件包括源代码会被一起上传到 "),t("code",[e._v("npm")]),e._v("。")])]),e._v(" "),t("h3",{attrs:{id:"本地调试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地调试"}},[e._v("#")]),e._v(" 本地调试")]),e._v(" "),t("p",[e._v("通过 "),t("code",[e._v("npm link")]),e._v(" 在组件中创建一个符号链接。创建一个正常的 "),t("code",[e._v("react")]),e._v(" 开发项目，例如用 "),t("code",[e._v("create-react-app")]),e._v(" 创建的基本项目，在该项目中通过 "),t("code",[e._v("npm link <packageName>")]),e._v(" 链接想要测试的包，就可以像引入第三方库那样在项目中使用了。")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[e._v("    npm link\n    npm unlink\n    npm link "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("packageName"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n    npm unlink "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("packageName"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("h3",{attrs:{id:"发布"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发布"}},[e._v("#")]),e._v(" 发布")]),e._v(" "),t("p",[e._v("先到 "),t("code",[e._v("npm")]),e._v(" 官网注册账号，然后通过几个简单的命令发布。")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[e._v("    npm login "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 登录")]),e._v("\n    npm publish "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 发布")]),e._v("\n")])])]),t("p",[e._v("ps: 这只是最简单的发布流程，还可以通过添加单元测试，完善 "),t("code",[e._v("README.md")]),e._v(" 等方式进一步完善整个项目。")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("参考")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.im/post/5ab4947a6fb9a028bc2dac99",target:"_blank",rel:"noopener noreferrer"}},[e._v("如何创建React组件并发布到npm？\n"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/simbawus/blog/issues/12",target:"_blank",rel:"noopener noreferrer"}},[e._v("从0开始发布一个无依赖、高质量的npm"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.jianshu.com/p/db6113c94dbc",target:"_blank",rel:"noopener noreferrer"}},[e._v("如何创建一个前端 React 组件并发布到 NPM"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://yarnpkg.com/lang/zh-hans/docs/cli/link/",target:"_blank",rel:"noopener noreferrer"}},[e._v("yarn link"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://docs.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("npm doc"),t("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);