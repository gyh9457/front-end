### webpack 基础
### 概述
> 本质上，webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。

通过 webpack 可以处理应用中的所有资源。

webpack 内有四个核心概念:
* 入口 (entry)
> 入口起点(entry point)指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始。进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的。

* 出口 (output)
> output 属性告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件。

* loader
> loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块，然后你就可以利用 webpack 的打包能力，对它们进行处理。

> 本质上，webpack loader 将所有类型的文件，转换为应用程序的依赖图（和最终的 bundle）可以直接引用的模块。

* 插件 (plugins)
> loader 被用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。插件接口功能极其强大，可以用来处理各种各样的任务。

#### webpack5 新特性
[webpack5 新特性](https://github.com/webpack/changelog-v5/blob/master/README.md)

#### commonjs && commonjs2
`commonjs` 只定义了 `exports` 用于导出对象，而 `module.exports` 是 `nodejs` 对 `commonjs` 的实现，实现往往在满足规范的前提下做些扩展，这里把 `nodejs` 的这种模块化实现称为 `commonjs2`。

`module.exports` 是 `nodejs` 对 `commonjs` 的具体实现，`exports` 是它的一个别名。

参考 [issue](https://github.com/webpack/webpack/issues/1114)

#### TODO
* 性能优化
* 热更新原理
* Scaffolding

#### 参考
[示例工程 simple-webpack](https://github.com/gyh9457/simple-webpack)

[Webpack 深入浅出](https://juejin.im/post/5df884ad6fb9a0164e7f979d#heading-16)