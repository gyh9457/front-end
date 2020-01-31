---
title: webpack chunkhash 稳定性问题
date: 2018-08-23 23:00:06
tags:
---
### chunkhash 稳定性问题
使用 `chunkhash` 作为输出文件的文件名，在文件内容没有变化的情况下可以缓存该文件，通过命中缓存，降低网络流量，使网站加载速度更快。[官方缓存文档](https://webpack.docschina.org/guides/caching/)

根据官方缓存文档的说明，存在模块标识符问题。即在一个项目中，将代码打包成 `app.[chunkhash].js`、 `runtime.[chunkhash.js]`、 `vendors.[chunkhash].js` 三个部分，修改入口 `js` 文件的内容，而第三方依赖没有变化。

``` js
// print.js
export default function print() {
  console.log('print.js')
}

// App.js
......
import print from './print.js'

print()
......
```

再次打包后，`vendor` 的 `chunkhash` 发生变化，与预期不符。文档给出的解释是，`module.id` 基于默认的解析顺序进行增量，当解析顺序发生变化，`module.id` 也发生变化，`chunkhash` 随 `module.id` 发生变化。

官方给出的解决方案是 `NamedModulesPlugin` 和 `HashedModuleIdsPlugin`。

在实际使用 `webpack4.16.3` 进行测试的时候无法复现这个问题，查看打包后的 `app.[chunkhash].js` 的代码，发现模块加载的代码为:

``` js
  var _App = __webpack_require__(/*! .App */ "./src/App.js")
```

而根据网上的文章，旧版的模块加载代码为:
``` js
  __webpack_require__(__webpack_require__.s = 4)
```

因此，初步判断 `module.id` 由原来的数字自增变为现在的字符串，解决了 `chunkhash` 不稳定的问题。

___
参考：

[webpack稳定moduleid和chunkid以实现持久化缓存的梳理](https://juejin.im/post/5a1bcdadf265da430e4ee137?utm_medium=hao.caibaojian.com&utm_source=hao.caibaojian.com)

