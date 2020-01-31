---
title: vue打包发布文件无法显示问题
date: 2017-06-27 18:28:32
tags:
---
根据文档生成vue模板项目，打包生产文件。
```javascript
npm install -g vue-cli
vue init webpack my-project
cd my-project
npm install 
npm run build
```
这个时候在目录下生成dist文件
* dist
    * static
        * css
        * js
    * index.html

这个时候在本地打开index.html无法引用到static下面的资源。

`npm run build`的时候, 一开始就会提示
```
Built files are meant to be served over an HTTP server. Opening index.html over file:// won't work.
```
 因为vue-cli的默认配置中, publishPath是用绝对目录, 所以dist文件夹里的文件必须放在服务器的根目录, 如果你想本地打开的话, 可以在`npm run build`完成之后执行以下命令:
 ```javascript
 npm install -g http-server
 cd dist
 http-server
 ```
 在当前目录下启动一个http服务就可以访问了。