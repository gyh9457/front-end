(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{209:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"工程规范自动化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工程规范自动化"}},[t._v("#")]),t._v(" 工程规范自动化")]),t._v(" "),a("p",[t._v("一个项目通常由多人合作完成，而每个人的代码风格、开发习惯并不相同，所以需要一套规范来约束，以保证代码格式的统一，排除一些常见的错误，使项目更加整洁、易读。")]),t._v(" "),a("p",[t._v("可以从以下几个方面进行约束：")]),t._v(" "),a("ul",[a("li",[t._v("eslint")]),t._v(" "),a("li",[t._v("stylelint (针对样式)")]),t._v(" "),a("li",[t._v("prettier")]),t._v(" "),a("li",[t._v("git commit")])]),t._v(" "),a("h2",{attrs:{id:"实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实践"}},[t._v("#")]),t._v(" 实践")]),t._v(" "),a("h3",{attrs:{id:"创建项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建项目"}},[t._v("#")]),t._v(" 创建项目")]),t._v(" "),a("p",[t._v("新建文件 "),a("code",[t._v("specification")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" init -y\n")])])]),a("h3",{attrs:{id:"创建测试文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建测试文件"}},[t._v("#")]),t._v(" 创建测试文件")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// src/index.js")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello world'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"eslint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eslint"}},[t._v("#")]),t._v(" eslint")]),t._v(" "),a("p",[t._v("添加依赖，由于使用 "),a("code",[t._v("node")]),t._v(" 下的 "),a("code",[t._v("console")]),t._v("，所以额外添加 "),a("code",[t._v("eslint-plugin-node")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D eslint eslint-plugin-node\n")])])]),a("p",[t._v("添加配置文件：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .eslintrc.js")]),t._v("\n  module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'eslint:recommended'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'plugin:node/recommended'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 测试规则")]),t._v("\n    rules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'semi'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'error'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'always'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("添加命令：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('  // package.json\n  "scripts": {\n    "lint": "eslint --fix src/**/index.js",\n    "lint-without-fix": "eslint src/**/index.js"\n  }\n')])])]),a("h3",{attrs:{id:"prettier"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prettier"}},[t._v("#")]),t._v(" prettier")]),t._v(" "),a("p",[t._v("添加依赖，由于与 "),a("code",[t._v("eslint")]),t._v(" 结合使用，因此也要添加 "),a("code",[t._v("eslint")]),t._v(" 相关的插件")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D prettier eslint-plugin-prettier eslint-config-prettier\n")])])]),a("p",[t._v("添加配置文件：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("root = true\n\n[*]\ncharset = utf-8\nindent_style = space\nindent_size = 2\nend_of_line = lf\ninsert_final_newline = true\ntrim_trailing_whitespace = true\n")])])]),a("p",[t._v("以上内容配置好后，执行 "),a("code",[t._v("lint")]),t._v(" 会自动启用 "),a("code",[t._v("prettier")]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[t._v("prettier 的配置文件中已经设置了 "),a("code",[t._v("indent")]),t._v("，在 "),a("code",[t._v("eslint")]),t._v(" 里面不要再设置，否则会有冲突。")])]),t._v(" "),a("h3",{attrs:{id:"git-commit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-commit"}},[t._v("#")]),t._v(" git commit")]),t._v(" "),a("h4",{attrs:{id:"pre-commit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-commit"}},[t._v("#")]),t._v(" pre-commit")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("prettier")]),t._v(" 钩子里执行 "),a("code",[t._v("lint-staged")])]),t._v(" "),a("p",[t._v("添加依赖：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D husky lint-staged\n")])])]),a("p",[t._v("配置 git 钩子：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('  // package.json\n  "husky": {\n    "hooks": {\n      "pre-commit": "lint-staged"\n    }\n  },\n  "lint-staged": {\n    "*.js": [\n      "eslint --fix",\n      "git add"\n    ]\n  }\n')])])]),a("h4",{attrs:{id:"commitizen-规范提交格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commitizen-规范提交格式"}},[t._v("#")]),t._v(" commitizen 规范提交格式")]),t._v(" "),a("p",[t._v("这里以本地依赖的形式使用 "),a("code",[t._v("commitizen")]),t._v(" ：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -g commitizen\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D commitizen\n  commitizen init cz-conventional-changelog --yarn --dev --exact\n")])])]),a("p",[t._v("创建命令：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('  "scripts": {\n    "cz": "git-cz"\n  }\n')])])]),a("blockquote",[a("p",[t._v("如果 husky 的钩子包含 "),a("code",[t._v("pre-commit")]),t._v("，则命令名称不能为 "),a("code",[t._v("commit")]),t._v("，即不能为 "),a("code",[t._v('"commit: "git-cz""')]),t._v("，否则 "),a("code",[t._v("pre-commit")]),t._v(" 会执行两遍。")])]),t._v(" "),a("p",[t._v("以后提交都使用 "),a("code",[t._v("yarn run cz")]),t._v("。")]),t._v(" "),a("h4",{attrs:{id:"使用-commitlint-检查-msg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-commitlint-检查-msg"}},[t._v("#")]),t._v(" 使用 commitlint 检查 msg")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D @commitlint/cli @commitlint/config-conventional\n")])])]),a("p",[t._v("添加配置文件 "),a("code",[t._v("commitlint.config.js")]),t._v(" ：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  module.exports = {\n    extends: ['@commitlint/config-conventional']\n  }\n")])])]),a("p",[t._v("配置 git hook:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('  // package.json\n  "husky": {\n    "hooks": {\n      "commit msg": "commitlint -E HUSKY_GIT_PARAMS"\n    }\n  }\n')])])]),a("h4",{attrs:{id:"自动生成-cahangelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动生成-cahangelog"}},[t._v("#")]),t._v(" 自动生成 CAHANGELOG")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D conventional-changelog\n")])])]),a("p",[t._v("编写生成 "),a("code",[t._v("CHANGELOG")]),t._v(" 的脚本")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// scripts/changelog.js")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" createWriteStream "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("createWriteStream\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" conventionalChangelog "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'conventional-changelog'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" stream "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWriteStream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./CHANGELOG.md'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    releaseCount"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    preset"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'angular'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("conventionalChangelog")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    owner"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gyh9457'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    commit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'commit'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    host"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://github.com/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    repository"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'specification'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pipe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("创建命令：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('  "scripts": {\n    "version": "node scripts/changelog.js"\n  }\n')])])]),a("p",[t._v("提交代码，生成日志：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" run cz\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" run version\n")])])]),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/gyh9457/specification",target:"_blank",rel:"noopener noreferrer"}},[t._v("示例工程 specification"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://eslint.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/eslint-plugin-node",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint-plugin-node"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://prettier.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("prettier"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/eslint-plugin-prettier",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint-plugin-prettier"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/commitizen",target:"_blank",rel:"noopener noreferrer"}},[t._v("commitizen"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://commitlint.js.org/#/",target:"_blank",rel:"noopener noreferrer"}},[t._v("commit-lint"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/conventional-changelog",target:"_blank",rel:"noopener noreferrer"}},[t._v("conventional-changelog"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/angular/angular/blob/master/CONTRIBUTING.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Angular commit message guidelines"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);