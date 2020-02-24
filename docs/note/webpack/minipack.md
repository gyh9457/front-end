### 实现一个简单的 webpack
> 本质上，webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。

根据定义，要实现一个打包器，需要以下几个步骤：
#### 解析入口文件，获取所有的依赖项
用以下形式来表示一个模块

```js
  'src/entry': { // 文件绝对路径作为模块的唯一标识符
    code: '', // 文件解析后的内容
    dependencies: ['./message.js'], // 依赖项
  }
```

#### 递归解析所有依赖项，生成一个依赖关系图
如何维护依赖文件之间的关系？通过一个 `mapping` 将依赖项的相对路径映射到绝对路径。

此时我们用以下形式表示一个模块
```js
  'src/entry': { // 文件绝对路径作为模块的唯一标识符
    code: '', // 文件解析后的内容
    dependencies: ['./message.js'], // 依赖项
    mapping: {
      './message.js': 'src/message.js'
    }
  }
```

生成依赖关系：
```js
  let graph = {
    // entry 模块
    "src/entry.js": {
      code: '',
      dependencies: ["./src/message.js"],
      mapping:{
        "./message.js": "src/message.js"       
      }
    },
    // message 模块
    "src/message.js": {
      code: '',
      dependencies: [],
      mapping:{},
    }
  }
```

当项目运行时，通过依赖关系可以读取到模块内容。

#### 使用依赖图，返回一个可以在浏览器运行的 js 文件
生成一个 IIFE 立即执行函数

#### 输出到目标位置
将生成的 js 文件写入到目标位置

#### 参考
[示例代码](https://github.com/gyh9457/simple-webpack/tree/master/src/minipack)

[手写一个 javascript 打包器](https://juejin.im/post/5e04c935e51d4557ea02c097)

[实现一个简单的 webpack](https://juejin.im/post/5cf24bed6fb9a07ee566069c)]
