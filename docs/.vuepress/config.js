module.exports = {
  base: '/front-end/',
  title: 'front-end',
  description: 'a personal blog',
  dest: 'dist',
  themeConfig: {
    lastUpdated: 'Last Updated',
    repo: 'https://github.com/gyh9457/front-end/',
    nav: [
      { text: '笔记', link: '/introduce/' },
    ],
    sidebar: [
      {
        title: '介绍',
        children: [
          '/introduce/'
        ]
      },
      {
        title: 'webpack',
        children: [
          '/webpack/',
          '/webpack/workflow.md',
          '/webpack/Tapable.md',
          '/webpack/loader.md',
          '/webpack/plugin.md',
          '/webpack/minipack.md',
        ]
      },
      {
        title: 'babel',
        children: [
          '/babel/'
        ]
      },
      {
        title: '历史笔记',
        children: [
          '/history/',
          '/history/Docker-基础知识笔记.md',
          '/history/React-Context-笔记.md',
          '/history/向开源项目提交pr.md',
          '/history/JS-设计模式.md',
          '/history/webpack-chunkhash-稳定性问题.md',
          '/history/创建一个-React-组件.md',
          '/history/Some-Questions.md',
          '/history/WebSockets小记.md',
          '/history/前端路由.md',
          '/history/Vue-js内部运行机制.md',
          '/history/项目模板总结.md',
          '/history/控制audio播放进度的实现.md',
          '/history/Vue原理基础.md',
          '/history/CSS布局.md',
          '/history/Web-Sql-笔记.md',
          '/history/使用Object-prototype-toString-call来检测对象类型.md',
          '/history/中文乱码问题解决.md',
          '/history/Babel基础.md',
          '/history/使用react-native-sound遇到的问题.md',
          '/history/ReactNative-原生与JS交互.md',
          '/history/ReactNative调试.md',
          '/history/H5拖拽简单应用.md',
          '/history/CentOS操作.md',
          '/history/git使用手册.md',
          '/history/vue开发环境跨域问题.md',
          '/history/Fiddler抓取ONE数据.md',
          '/history/了解浏览器内核.md',
          '/history/前端跨域问题.md',
          '/history/mvvm双向绑定实现原理.md',
          '/history/云主机上部署Node-js应用.md',
          '/history/云主机上Nginx静态网站.md',
          '/history/vue打包发布文件无法显示问题.md',
          '/history/JavaScript面向对象编程指南学习笔记.md',
          '/history/CommonJS.md',
          '/history/CMD规范.md',
          '/history/AMD规范.md',
        ]
      }
    ]
  }
}