---
title: 创建一个 React 组件
date: 2018-07-26 21:04:20
tags:
---
### 目的
创建组件主要目的是通过造轮子来实现自我提升，同时将这些组件发布到 `npm` 上，以便于后续使用，也可以更好地理解库是如何实现的。

创建组件并发布，可以分为三个步骤：
1. 搭建一个 `react` 组件开发框架，进行组件开发。
2. 本地测试。
3. 组件发布。

#### 搭建一个 `react` 组件开发框架
通过简单的 `webpack` `babel` 配置搭建一个基础框架，并编写一个类似 `hello world` 的组件，可参考文后链接。

这边提一下 `package.json` 中的两个配置
1. `main`: 这里是我们组件的入口文件。开发者在 `import` 我们的组件的时候会引入这里 `export` 的内容。
2. `files`: 申明将要发布到 `npm` 的文件。如果省略掉这一项，所有文件包括源代码会被一起上传到 `npm`。

### 本地调试
通过 `npm link` 在组件中创建一个符号链接。创建一个正常的 `react` 开发项目，例如用 `create-react-app` 创建的基本项目，在该项目中通过 `npm link <packageName>` 链接想要测试的包，就可以像引入第三方库那样在项目中使用了。

``` js
    npm link
    npm unlink
    npm link <packageName>
    npm unlink <packageName>
```

### 发布
先到 `npm` 官网注册账号，然后通过几个简单的命令发布。
``` js
    npm login // 登录
    npm publish // 发布
```

ps: 这只是最简单的发布流程，还可以通过添加单元测试，完善 `README.md` 等方式进一步完善整个项目。
___
参考

[如何创建React组件并发布到npm？
](https://juejin.im/post/5ab4947a6fb9a028bc2dac99)

[从0开始发布一个无依赖、高质量的npm](https://github.com/simbawus/blog/issues/12)

[如何创建一个前端 React 组件并发布到 NPM](https://www.jianshu.com/p/db6113c94dbc)

[yarn link](https://yarnpkg.com/lang/zh-hans/docs/cli/link/)

[npm doc](https://docs.npmjs.com/)