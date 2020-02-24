### 编写一个 loader
实现一个压缩 html 的 loader

#### 配置
```js
  // webpack.config.js
  module.exports = {
    module: {
      rules: [
        {
          test: /\.html$/,
          use: ['html-loader', {
            loader: 'html-minify-loader',
            options: {
              comments: true
            }
          }],
        }
      ]
    },
    resolveLoader: {
      modules: [path.join(__dirname, './src/loaders'), 'node_modules']
    }
  }
```

### 实现 loader
```js
  // html-minify-loader.js
  const Minimize = require('minimize')
  // loader 工具类
  const loaderUtils = require(('loader-utils'))

  module.exports = function(source) {
    // 获取参数
    const options = loaderUtils.getOptions(this) || {}
    console.log(options)
    const minimize = new Minimize(options)
    return minimize.parse(source)
  }

  // 异步模式
  // module.exports = function(source) {
  //   var callback = this.async();
  //   const opts = loaderUtils.getOptions(this) || {};
  //   const minimize = new Minimize(opts);
  //   minimize.parse(source, callback);
  // };
```

#### 测试
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <!-- <script></script> -->
</head>
<body>
    
</body>
</html>
```

在 js 中引入 html 文件
```js
  // index.js
  const html = require('./index.html')
  console.log(html)
```

```
  // 通过 webpack 打包
  webpack ./src/index.js
```

#### 参考
[编写一个 loader](https://webpack.js.org/contribute/writing-a-loader/)

[手把手教你撸一个 Webpack Loader](https://juejin.im/post/5a698a316fb9a01c9f5b9ca0#heading-19)