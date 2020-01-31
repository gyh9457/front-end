(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{234:function(e,r,o){"use strict";o.r(r);var t=o(0),n=Object(t.a)({},(function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"cmd"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cmd"}},[e._v("#")]),e._v(" CMD")]),e._v(" "),o("p",[e._v("CMD(Common Module Definition)模块定义规范，明确了模块的基本书写格式和基本交互规则。")]),e._v(" "),o("p",[e._v("在CMD规范中。一个模块就是一个文件。代码的书写格式如下：")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("define(factory);\n")])])]),o("hr"),e._v(" "),o("h2",{attrs:{id:"define-function"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#define-function"}},[e._v("#")]),e._v(" define "),o("code",[e._v("Function")])]),e._v(" "),o("p",[o("code",[e._v("define")]),e._v(" 是一个全局参数，用来定义模块。")]),e._v(" "),o("h3",{attrs:{id:"define-define-factory"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#define-define-factory"}},[e._v("#")]),e._v(" define "),o("code",[e._v("define(factory)")])]),e._v(" "),o("p",[o("code",[e._v("define")]),e._v(" 接受 "),o("code",[e._v("factory")]),e._v(" 参数，"),o("code",[e._v("factory")]),e._v(" 可以是一个函数，也可以是一个对象或字符串。")]),e._v(" "),o("p",[o("code",[e._v("factory")]),e._v(" 为对象、字符串时，表示模块的接口就是该对象、字符串。")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v('define({"foo": "bar"});\ndefine({`I am a template`});\n')])])]),o("p",[o("code",[e._v("factory")]),e._v("为函数时，表示是模块的构造方法，执行该构造方法，可以得到模块向外提供的接口。"),o("code",[e._v("factory")]),e._v(" 方法在执行时，默认会传入三个参数：require、exports、和module：")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("define(function(require, exports, module) {\n    //模块代码\n});\n")])])]),o("h3",{attrs:{id:"define-define-id-deps-factory"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#define-define-id-deps-factory"}},[e._v("#")]),e._v(" define "),o("code",[e._v("define(id?, deps?, factory)")])]),e._v(" "),o("p",[o("code",[e._v("define")]),e._v(" 也可以接受两个以上参数。字符串"),o("code",[e._v("id")]),e._v("表示模块标识，数组"),o("code",[e._v("deps")]),e._v("是模块依赖。如：")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("define('hello', ['jquery'], function(require, exports,module) {\n    //模块代码\n})\n")])])]),o("p",[o("code",[e._v("id")]),e._v(" 和 "),o("code",[e._v("deps")]),e._v(" 参数可以省略，省略时，可以通过构建工具自动生成。")]),e._v(" "),o("h3",{attrs:{id:"define-cmd-object"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#define-cmd-object"}},[e._v("#")]),e._v(" define.cmd "),o("code",[e._v("object")])]),e._v(" "),o("p",[e._v("一个空对象，可用来判定当前页面是否有CMD模块加载器：")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v('if (typeof define === "function" && define.cmd) {\n    //有遵循CMD规范的加载器存在\n}\n')])])]),o("hr"),e._v(" "),o("h2",{attrs:{id:"require-function"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#require-function"}},[e._v("#")]),e._v(" require "),o("code",[e._v("Function")])]),e._v(" "),o("p",[o("code",[e._v("require")]),e._v(" 是 "),o("code",[e._v("factory")]),e._v(" 函数的第一个参数。")]),e._v(" "),o("h3",{attrs:{id:"require-require-id"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#require-require-id"}},[e._v("#")]),e._v(" require "),o("code",[e._v("require(id)")])]),e._v(" "),o("p",[o("code",[e._v("require")]),e._v(" 是一个方法，接受模块标识作为唯一参数，用来获取其他模块提供的接口。")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("define(function(require, exports) {\n    //获得模块a的接口\n    var a = require('./a');\n    //调用模块a的方法\n    a.doSomething();\n});\n")])])]),o("h3",{attrs:{id:"require-async-require-async-id-callback"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#require-async-require-async-id-callback"}},[e._v("#")]),e._v(" require.async "),o("code",[e._v("require.async(id, callback?)")])]),e._v(" "),o("p",[o("code",[e._v("require.async")]),e._v(" 方法用来在模块内部异步加载模块，并在加载完成后执行指定回调。"),o("code",[e._v("callback")]),e._v(" 可选。")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("define(function(require, exports, module) {\n\n    //异步加载一个模块，在加载完成时，执行回调。\n    require.async('./b', function(b) {\n        b.doSomething();\n    });\n\n    //异步加载多个模块，在加载完成时，执行回调。\n    require.async(['./c', './d'], function(c, d) {\n        c.doSomething();\n        d.doSomething();\n    });\n});\n")])])]),o("p",[o("em",[e._v("注意：")]),e._v(" "),o("code",[e._v("require")]),e._v(" 是同步往下执行，"),o("code",[e._v("require.async")]),e._v(" 则是异步回调执行。"),o("code",[e._v("require.async")]),e._v("一般用来加载可延迟异步加载的模块。")]),e._v(" "),o("h3",{attrs:{id:"require-resolve-require-resolve-id"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#require-resolve-require-resolve-id"}},[e._v("#")]),e._v(" require.resolve "),o("code",[e._v("require.resolve(id)")])]),e._v(" "),o("p",[e._v("使用模块系统内部的路径解析机制来解析并返回模块路径。该函数不会加载模块，只返回解析后的绝对路径。")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("define(function(require, exports) {\n    console.log(require.resolve('./b'));\n    // ==> http://example.com/path/to/b.js\n});\n")])])]),o("p",[e._v("这可以用来获取路径，一般用在插件环境或需动态拼接模块路径的场景下。")]),e._v(" "),o("hr"),e._v(" "),o("h2",{attrs:{id:"exports-object"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#exports-object"}},[e._v("#")]),e._v(" exports "),o("code",[e._v("object")])]),e._v(" "),o("p",[o("code",[e._v("exports")]),e._v(" 是一个对象，用来向外提供模块接口。")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("define(function(require, exports) {\n    //对外提供 foo 属性\n    exports.foo = 'bar';\n\n    //对外提供 doSomething 方法\n    exports.doSomething = function(){};\n});\n")])])]),o("p",[e._v("除了给 "),o("code",[e._v("exports")]),e._v(" 对象增加成员，还可以使用 "),o("code",[e._v("return")]),e._v(" 直接向外提供接口。")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("define(function(require) {\n//通过 return 直接提供接口\n    return {\n        foo: 'bar',\n        doSomething: function(){};\n  };\n});\n")])])]),o("p",[o("em",[e._v("特别注意：")]),e._v(" 下面这种写法是错误的！")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("define(function(require, exports) {\n    //错误用法！！！\n    exports = {\n        foo: 'bar',\n        doSomething: function() {}\n    };\n});\n")])])]),o("p",[e._v("正确的写法是用 "),o("code",[e._v("return")]),e._v(" 或者给 "),o("code",[e._v("module.exports")]),e._v(" 赋值：")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("define(function(require, exports, module) {\n\n    //正确写法\n    module.exports = {\n        foo: 'bar',\n        doSomething: function() {}\n    };\n});\n")])])]),o("p",[o("em",[e._v("提示：")]),e._v(" "),o("code",[e._v("exports")]),e._v(" 仅仅是"),o("code",[e._v("module.exports")]),e._v(" 的一个引用。在 "),o("code",[e._v("factory")]),e._v(" 内部给 "),o("code",[e._v("exports")]),e._v(" 重新赋值时，并不会改变 "),o("code",[e._v("module_exports")]),e._v(" 的值。因此 "),o("code",[e._v("exports")]),e._v(" 赋值是无效的，不能用来更改模块接口。")]),e._v(" "),o("hr"),e._v(" "),o("h2",{attrs:{id:"module-object"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#module-object"}},[e._v("#")]),e._v(" module "),o("code",[e._v("object")])]),e._v(" "),o("p",[o("code",[e._v("module")]),e._v(" 是一个对象，上面存储了与当前模块相关联的一些属性和方法。")]),e._v(" "),o("h3",{attrs:{id:"module-id-string"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#module-id-string"}},[e._v("#")]),e._v(" module.id "),o("code",[e._v("String")])]),e._v(" "),o("p",[e._v("模块的唯一标识。")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("define('id', [], function(require, exports, module) {\n    //模块代码\n});\n")])])]),o("h3",{attrs:{id:"module-uri-string"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#module-uri-string"}},[e._v("#")]),e._v(" module.uri "),o("code",[e._v("String")])]),e._v(" "),o("p",[e._v("根据模块系统的路径解析规则得到的模块绝对路径。")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("define(function(require, exports, module) {\n\n    console.log(module.uri);\n    // ==> http://example.com/path/to/this/file.js\n\n});\n")])])]),o("p",[e._v("一般情况下(没有在 "),o("code",[e._v("define")]),e._v(" 中手写 "),o("code",[e._v("id")]),e._v(" 参数时)，"),o("code",[e._v("module.id")]),e._v(" 的值就是 "),o("code",[e._v("module.uri")]),e._v(" ，两者完全相同。")]),e._v(" "),o("h3",{attrs:{id:"module-dependencies-array"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#module-dependencies-array"}},[e._v("#")]),e._v(" module.dependencies "),o("code",[e._v("Array")])]),e._v(" "),o("p",[o("code",[e._v("dependencies")]),e._v(" 是一个数组，表示当前模块的依赖。")]),e._v(" "),o("h3",{attrs:{id:"module-exports-object"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#module-exports-object"}},[e._v("#")]),e._v(" module.exports "),o("code",[e._v("object")])]),e._v(" "),o("p",[e._v("当前模块对外提供的接口")]),e._v(" "),o("p",[e._v("传给 "),o("code",[e._v("fatory")]),e._v(" 构造方法的 "),o("code",[e._v("exports")]),e._v(" 参数是 "),o("code",[e._v("module.exports")]),e._v(" 对象的一个引用。只通过 "),o("code",[e._v("exports")]),e._v(" 参数来提供接口，有时无法满足开发者的所有需求。比如当模块的接口是某个类的实例时，需要通过 "),o("code",[e._v("module.exports")]),e._v(" 来实现：")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("define(function(require, exports, module) {\n\n    // exports 是 module.exports 的一个引用\n    console.log(module.exports === exports); // true\n\n    // 重新给 module.exports 赋值\n    module.exports = new SomeClass();\n\n    // exports 不再等于 module.exports\n    console.log(module.exports === exports); // false\n})\n")])])]),o("p",[o("em",[e._v("注意：")]),e._v(" 对 "),o("code",[e._v("module.exports")]),e._v(" 的赋值需要同步执行。不能放在回调函数里，下面这样是不行的：")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v('// x.js\ndefine(function(require, exports, module) {\n\n    // 错误用法\n    setTimeout(function() {\n        module.exports = { a: "hello"};\n    }, 0);\n\n});\n')])])]),o("p",[e._v("在y.js里有调用上面的x.js")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("//y.js\ndefine(function(require, exports, module) {\n\n    var x = require('./x');\n\n    //无法立刻得到模块 x 的属性 a\n    console.log(x.a); // underfined\n})\n")])])]),o("hr"),e._v(" "),o("p",[e._v("以上转自"),o("a",{attrs:{href:"https://github.com/seajs/seajs/issues/242",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/seajs/seajs/issues/242"),o("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=n.exports}}]);