(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{212:function(e,a,t){"use strict";t.r(a);var r=t(0),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"amd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#amd"}},[e._v("#")]),e._v(" AMD")]),e._v(" "),t("p",[e._v("AMD(Asnchronous Modules Definition)API指定了一种机制用于定义模块。利用这种机制，能够异步加载模块及其依赖。这特别适合在浏览器环境下使用。因为在浏览器下同步加载模块会导致性能、可用性、调试和跨域访问等问题。")]),e._v(" "),t("h1",{attrs:{id:"api-规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api-规范"}},[e._v("#")]),e._v(" API 规范")]),e._v(" "),t("h2",{attrs:{id:"define-函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#define-函数"}},[e._v("#")]),e._v(" define()函数")]),e._v(" "),t("p",[e._v('AMD规范定义了一个函数"define"，它是全局变量，函数为：')]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("define(id?, dependencies?, factory);\n")])])]),t("h3",{attrs:{id:"id"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#id"}},[e._v("#")]),e._v(" id")]),e._v(" "),t("p",[e._v("第一个参数，id，是个 字符串。定义模块的名字。该参数可选，如果没有提供该参数，模块的名字应该默认为模块加载器请求的指定脚本的名字。")]),e._v(" "),t("p",[e._v("模块名名来唯一表示定义中模块，他们同样在依赖数组中使用。AMD的模块名规范是CommonJS模块名规范的超集。")]),e._v(" "),t("ol",[t("li",[e._v("模块名是由一个或多个单词以正斜杠为分隔符拼接成的字符串。")]),e._v(" "),t("li",[e._v('单词必须为驼峰形式，或者"."，".."')]),e._v(" "),t("li",[e._v('模块名不允许文件扩展名的形式，如"js"。')]),e._v(" "),t("li",[e._v('模块名可以为相对的或顶级的，如果首字符为"."或".."则为相对模块名。')]),e._v(" "),t("li",[e._v("顶级的模块名从根命名空间的概念模块解析。")]),e._v(" "),t("li",[e._v('相对的模块名从"require"书写和调用的模块解析。')])]),e._v(" "),t("h3",{attrs:{id:"dependencies"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[e._v("#")]),e._v(" dependencies")]),e._v(" "),t("p",[e._v("第二个参数，dependencies，是个定义模块所依赖模块的数组。依赖模块必须根据模块的工厂方法优先级执行，并且执行的结果应该按照依赖数组中的位置顺序以参数的形式传入工厂方法中。")]),e._v(" "),t("p",[e._v("依赖的模块名如果是相对的，应该解析为相对定义中的模块。换句话说，相对名解析为相对于模块的名字，并非相对于寻找该模块的名字的路径。")]),e._v(" "),t("p",[e._v('规范定义了三种特殊的依赖关键字。如果"require","exports","module"出现在依赖列表中，参数应该按照CommonJS模块规范自由变量去解析。')]),e._v(" "),t("p",[e._v('依赖参数是可选的，如果忽略此参数。它应该默认为["require","exports","module"]。然而，如果工厂方法的形参个数小于3，加载器会选择以函数指定的参数个数调用工厂方法。')]),e._v(" "),t("h3",{attrs:{id:"factory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#factory"}},[e._v("#")]),e._v(" factory")]),e._v(" "),t("p",[e._v("第三个参数，factory，为模块初始化要执行的函数或对象。如果为函数。它应该只被执行一次。如果是对象，此对象应该为模块的输出值。")]),e._v(" "),t("p",[e._v("如果工厂方法返回一个值，应该设置为模块的输出值。")]),e._v(" "),t("h2",{attrs:{id:"简单的commonjs转换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简单的commonjs转换"}},[e._v("#")]),e._v(" 简单的CommonJS转换")]),e._v(" "),t("p",[e._v("如果依赖性参数被忽略，模块加载器可以选择扫描工厂方法中的require语句以获得依赖性。第一个参数必须字面量为require从而使此机制正常工作。")]),e._v(" "),t("p",[e._v("在某些情况下，因为脚本大小的限制或函数不支持toString方法，模块加载器可以选择扫描不扫描依赖性。")]),e._v(" "),t("p",[e._v("如果有依赖参数，模块加载器不应该在工厂方法中扫描依赖。")]),e._v(" "),t("h2",{attrs:{id:"define-amd属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#define-amd属性"}},[e._v("#")]),e._v(" define.amd属性")]),e._v(" "),t("p",[e._v('为了清晰的标识全局函数(为浏览器加载script必须的)遵从AMD规范，任何全局函数应该有一个"amd"的属性。它的值为一个对象。这样可以防止与现有的定义了define函数但不遵从AMD规范的代码冲突。')]),e._v(" "),t("p",[e._v("define.amd的存在表明函数遵循AMD规范。如果有另一个版本的编程接口，那么应该定义另外一个属性，如define.amd2，表明实现只遵循该版本的编程接口。")]),e._v(" "),t("p",[e._v("一个如何定义同一个环境中允许多次加载同一个版本的模块的实现：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("define.amd = {\n    multiversion: true\n};\n")])])]),t("p",[e._v("最简短的定义：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("define.amd = {};\n")])])]),t("h2",{attrs:{id:"一次输出多个模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一次输出多个模块"}},[e._v("#")]),e._v(" 一次输出多个模块")]),e._v(" "),t("p",[e._v("在一个脚本中可以使用多次define调用。这些define调用的顺序不应该是重要的。早一些的模块定义中指定的依赖，可以在同一脚本中晚些定义。模块加载器负责延迟加载未解决的依赖。直到全部脚本加载完毕，防止没必要的请求。")]),e._v(" "),t("h2",{attrs:{id:"例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[e._v("#")]),e._v(" 例子")]),e._v(" "),t("h3",{attrs:{id:"使用require和exports"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用require和exports"}},[e._v("#")]),e._v(" 使用require和exports")]),e._v(" "),t("p",[e._v('创建一个名为"alpha"的模块，使用了require,exports和名为"beta"的模块：')]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('define("alpha",["require","exports","beta"],function(require, exports, beta){\n    exports.verb = function() {\n        return beta.verb();\n        //or\n        return require("beta").verb();\n    }\n});\n')])])]),t("p",[e._v("一个返回对象的匿名模块：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('define(["alpha"],function(){\n    return {\n        verb: function(){\n            return alpha.verb() + 2;\n        }\n    }\n});\n')])])]),t("p",[e._v("一个没有依赖性的模块可以直接定义对象：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("define({\n    add: function(x,y){\n        return x + y;\n    }\n})\n")])])]),t("p",[e._v("一个使用了简单CommonJS转换的模块定义：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("define(function(require, exports, module){\n    var a = require('a'),\n          b = require('b');\n    exports.action = function(){}\n})\n")])])]),t("p",[e._v("以上转自"),t("a",{attrs:{href:"https://github.com/amdjs/amdjs-api",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/amdjs/amdjs-api"),t("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=s.exports}}]);