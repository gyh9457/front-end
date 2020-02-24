### babel 总结
### babel 是什么
`babel` 是一个 `js 编译器`，主要用于将 es6+ 的代码转换为向后兼容的 js 语法，以便能够运行在当前和旧版本的浏览器和其他环境中。

`babel` 能够做的事：语法转换、通过 `polyfill` 方式在目标环境中添加缺失的特性、源码转换，以及通过这些方式进行代码优化。

### 抽象语法树 AST
`abstract syntax tree`，是源代码的抽象语法结构的树状表现形式。

代码转换成 ast 需要经过`词法解析`和`语法解析`。

词法分析：将代码转换成令牌(tokens)流，tokens 可以视作是一些语法片段组成的数组，每个 token 包含了语法片段、位置信息以及一些类型信息，这些信息有助于后面的语法分析。

语法分析：将词法分析出来的 tokens 转化成树状的表达式，即抽象语法树。

### babel 处理流程
babel 的处理流程分为三个部分：
1. 解析：parse，将代码解析成 AST，即词法分析和语法分析的过程。
2. 转换：transform，接收 AST 并对其进行遍历，在此过程中对节点进行添加、更新及移除等操作。这是 babel 或是其他编译器中最复杂的部分，同时也是插件将要介入工作的部分。
3. 生成：generate，将 AST 转换成字符串形式的代码，同时创建 sourcemap 。

### 常用功能
1. @babel/cli： 命令行工具，可通过命令行编译文件
2. @babel/polyfill： 包含 regenerator runtime 和 core-js，用于模拟一个完全的 es6+ 环境
3. @babel/plugin-transform-runtime： 与 @babel/runtime 配合使用，用于复用 babel 编译过程中产生的辅助函数，以减少代码体积，以及进行 polyfill
4. @babel/register： 通过 require 钩子将自身绑定到 node 的 require 模块上，并在运行时进行即时编译

### 工具库
1. @babel/parser：js 解析器
2. @babel/core：babel 核心流程，用于转换代码，内部使用了 @babel/parser、@babel/traverse、@babel/generator 等
3. @babel/generator：传入 AST，生成代码
4. @babel/code-frame：用于生成错误信息并且打印出错误原因和错误行数
5. @babel/helpers：用于 babel 转换的辅助函数集合
6. @babel/runtime：babel 的运行时辅助工具，与 @babel/plugin-transform-runtime 配合使用
7. @babel/template：使用字符串模板生成 AST
8. @babel/traverse：用于遍历 AST
9. @babel/types：用于 AST 节点的 `lodash` 式工具库，它包含了构造、验证以及变换 AST 节点的方法，对编写处理 AST 逻辑非常有用

### 自定义插件
 > babel 操作 AST 时使用访问器模式，由这个访问者(Visitor)来 ① 进行统一的遍历操作，② 提供节点的操作方法，③ 响应式维护节点之间的关系；而插件(设计模式中称为‘具体访问者’)只需要定义自己感兴趣的节点类型，当访问者访问到对应节点时，就调用插件的访问(visit)方法。

> 作者：荒山
链接：https://juejin.im/post/5d94bfbf5188256db95589be
来源：掘金

实现了一个按需加载的简单 [demo](https://github.com/gyh9457/bable-plugin-import-demo)：
``` js
  import { A, B, C as D } from 'foo'
```

转换为:

``` js
  var _A = require("foo/lib/A");
  require("foo/lib/A/style.css");
  var _B = require("foo/lib/B");
  require("foo/lib/B/style.css");
  var _C = require("foo/lib/C");
  require("foo/lib/C/style.css");
```
### babel-plugin-macros
现在，每个 babel 插件都要求使用者进行配置，这对于语言特性来说没有问题，但对于一些允许在编译时做代码转换，以进行优化的库来说，是不必要的。比如说特定框架、库的代码转换，如 `styled-components`；动态生成代码，如 `preval` 等。

`babel-plugin-macro` 解决了这个问题，它定义了一个标准接口，对于想在运行时做代码转换的库，无须使用者在构建系统中添加 babel 插件。

> `babel-plugin-macro` 本质上和 babel plugin 没有什么区别，它只是在 plugin 之上封装了一层，创建了一个新的平台，让开发者可以在源代码层面显式地应用代码转换。

详细信息请参考[文档](https://github.com/kentcdodds/babel-plugin-macros)
___
参考

[babel](https://www.babeljs.cn/docs/)

[深入浅出 Babel 上篇：架构和原理 + 实战](https://juejin.im/post/5d94bfbf5188256db95589be#heading-2)

[深入浅出 Babel 下篇：既生 Plugin 何生 Macros](https://juejin.im/post/5da12397e51d4578364f6ffa#heading-5)