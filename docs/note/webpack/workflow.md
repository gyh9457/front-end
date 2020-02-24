### 运行流程
**基于 webpack4.41.5** 

webpack 有两种使用方式:
1. webpack-cli
2. const webpack = require('webpack')

这两种方式最终的调用的都是 webpack/lib/webpack.js

使用 vscode 进行调试，配置好 `launch.json`:

```json
  {
    // 使用 IntelliSense 了解相关属性。 
    // 悬停以查看现有属性的描述。
    // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
      {
        "type": "node",
        "request": "launch",
        "name": "Launch Program",
        "program": "${workspaceFolder}/node_modules/webpack/bin/webpack.js",
      },
    ]
  }
```

之后就可以通过调试工具进行断点调试。

#### 初始化参数
从配置文件和 `shell` 语句中读取参数，并合并默认参数。
```js
  // webpack/lib/webpack.js
  // 参数合并
  options = new WebpackOptionsDefaulter().process(options);
```
#### 初始化编译器并开始编译
用上一步得到的参数初始化编译器 `compiler` 对象，加载自定义插件及内置插件，执行 `run` 方法开始编译。
```js
  // webpack/lib/webpack.js
  compiler = new Compiler(options.context);
  ...
  ...
  // 注册自定义插件
  if (options.plugins &&
    Array.isArray(options.plugins)) {
    for (const plugin of options.plugins) {
      if (typeof plugin === "function") {
        plugin.call(compiler, compiler);
      } else {
        plugin.apply(compiler);
      }
    }
  }
  ...
  ...
  // 注册内置插件
  compiler.options = new WebpackOptionsApply().process(options, compiler);
  // 开始编译
  compiler.run(callback);
```
#### 确定入口
根据配置文件中的 `entry` 找出所有的入口文件

在上一步中调用了 `compiler.run()`，`compiler.run()` 内部调用 `compile()`
```js
  // webpack/lib/Compiler.js
  run(callback) {
    ...
    const onCompiled = (err, compilation) => {
      ...
      // 编译完成后，触发各种钩子事件，生成资源
    }
    // 触发各种钩子事件
    this.hooks.beforeRun.callAsync(this, err => {
      ...
      ...
      this.compile(onCompiled) // 开始编译
    })
  }
```

`compile` 方法调用之前注册的 `make` 钩子进行编译
```js
  // webpack/lib/Compile.js
  compile(callback) {
    // 处理参数
    // 触发钩子事件
    ...
    ...
    // 创建 compilation
    const compilation = this.newCompilation(params);
    // 调用之前注册的钩子 make
    this.hooks.make.callAsync(compilation, err => {
      // make 结束后的回调
    })
  }
```

`make` 钩子中调用 `compilation.addEntry` 确定入口文件

#### 编译模块
从入口文件触发，调用所有配置的 `loader` 对模块进行翻译，再找出该模块依赖的模块，递归本步骤，直到所有入口依赖的文件都经过了本步骤的处理。

在上一步 `addEntry` 中确定好入口后，调用 `_addModuleChain`，进行模块处理，最终走到 `NormalModule.js` 的 `build` 方法中使用合适的 `loader` 去处理模块。

#### 完成模块编译
经过 `loader` 处理后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系。

#### 输出资源
根据入口和模块之间的依赖关系，组装成一个包含多个模块的 `chunk`，然后把每个 `chunk` 转换成一个单独的文件加入到输出列表。

这里调用了 `compilation.seal()`

#### 输出完成
在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。

这里调用了 `compiler.emitAssets()`

#### 插件
在以上过程中，webpack 会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后执行特定的逻辑，并且插件可以调用 webpack 提供的 API 改变 webpack 的运行结果。

#### 参考
[Webpack原理与实践（一）：打包流程](https://juejin.im/post/5be9297351882516f5786404)

[Webpack源码解读，理清编译主流程](https://juejin.im/post/5dc01199f265da4d12067ebe)
