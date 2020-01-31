---
title: vue开发环境跨域问题
date: 2017-09-03 21:04:24
tags:
---
在vue-cli生成的模板上开发时，遇到跨域问题，这里记录一下开发环境下跨域问题的解决方案。

在模板中自带了API代理的接口。
``` js
// /config/index.js
    proxyTable: {
      '/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      },
      '/one': {
        target: 'http://v3.wufazhuce.com:8000/',
        changeOrigin: true,
        pathRewrite: {
          '^/one': '/'
        }
      }
```
在上面的代码中，将`/api/xxx`、`/one/xxx` 这样的请求代理到target指定的url去。

在前端，发出如下请求：
``` js
axios.get('/api/music/url', param);
axios.get('/one/api/onelist/xxx', param);
```
---
参考：

[vuejs-templates](https://vuejs-templates.github.io/webpack/proxy.html)