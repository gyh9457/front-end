---
title: Babel基础
date: 2017-12-24 20:25:00
tags:
---
`Babel` 是一个编译器，从宏观角度看，它将运行代码分为三个阶段：解析、转换、及生成。代码首先经过`babylon` 解析成抽象语法树(AST)，后经一些遍历和分析转化(主要过程)，最后根据转换后的AST生成新的常规代码。

### 解析 (parse)
解析步骤接收代码并输出AST，这个步骤分为两个阶段：词法分析(Lexical Analysis) (把字符串形式的代码转换为令牌流)；语法分析(Syntactic Analysis)(令牌流转换成AST的形式)。

### 转换 (transform)
程序转换步骤接收AST并对其进行遍历，在此过程中对节点进行添加、更新及移除等操作。这是Babel或是其他编译器中最复杂的过程，同时也是插件将要介入工作的部分。

### 生成 (generate)
代码生成阶段把最终的AST转换成字符串形式的代码，同时还会创建源码映射(source map)。

### .babelrc
通过 `.babelrc` 文件告诉`Babel` 应该要做什么，可以在里面配置`plugins` 或者是`preset` (一组配置好的组件，babel官方提供了几种预设) 来指示Babel做什么事情。

### babel-polyfill
`Babel` 几乎可以编译所有新的js语法，但对于`APIs` 来说并非如此。例如，并不是所有的`JavaScript ` 环境都支持`Array.from` 。

为了解决这个问题，我们使用一种`polyfill` 的技术，简单来说，polyfill即是在当前运行环境中来复制尚不存在的原生api的代码，能让你提前使用还不可用的`APIs` 。
``` sudo
$ npm install --save polyfill
```
``` js
import 'babel-polyfill' // 只需要在文件顶部引入 polyfill 就可以
```

### babel-runtime
为了实现`ECMAScript` 规范的细节，Babel会使用"助手"方法来保持代码的整洁。

由于这些助手方法可能会特别长并且会被添加到每一个文件的顶部，因此可以将它们统一移动到一个单一的`runtime` 中去。
``` sudo
$ npm install --save-dev babel-plugin-transform-runtime
$ npm install --save babel-runtime
```
``` js
{
    "plugins": [
        "transform-runtime"
    ]
}
```
现在，Babel会把这样的代码:
``` js
class foo {
    method() {}
}
```
编译成:
``` js
import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _createClass from "babel-runtime/helpers/createClass";

let Foo = function () {
  function Foo() {
    _classCallCheck(this, Foo);
  }

  _createClass(Foo, [{
    key: "method",
    value: function method() {}
  }]);

  return Foo;
}();
```
这样就不需要把`_classCallBack` 和`_createClass` 这两个助手方法放进每一个需要的文件里去了。

___
参考:
[Babel 基础及代码转换简单探究](http://www.qcyoung.com/2017/02/06/Babel%20基础及代码转换简单探究/#jie-xi)
