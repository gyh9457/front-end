module.exports = {
  base: '/front-end/',
  title: 'front-end',
  description: 'a personal blog',
  dest: 'dist',
  themeConfig: {
    lastUpdated: 'Last Updated',
    repo: 'https://github.com/gyh9457/front-end/',
    nav: [
      { text: '笔记', link: '/note/' },
      { text: '工程化', link: '/engineering/' }
    ],
    sidebar: {
      '/note/': [
        {
          title: 'Webpack',
          collapsable: false,
          children: [
            '/note/webpack/',
            '/note/webpack/workflow.md',
            '/note/webpack/Tapable.md',
            '/note/webpack/loader.md',
            '/note/webpack/plugin.md',
            '/note/webpack/minipack.md',
          ]
        },
        {
          title: 'babel',
          collapsable: false,
          children: [
            '/note/babel/'
          ]
        },
        {
          title: '性能优化',
          collapsable: false,
          children: [
            '/note/perf/local-img.md'
          ]
        },
        {
          title: '历史笔记',
          collapsable: false,
          children: [
            '/note/history/',
            '/note/history/Docker-基础知识笔记.md',
            '/note/history/React-Context-笔记.md',
            '/note/history/向开源项目提交pr.md',
            '/note/history/JS-设计模式.md',
            '/note/history/webpack-chunkhash-稳定性问题.md',
            '/note/history/创建一个-React-组件.md',
            '/note/history/Some-Questions.md',
            '/note/history/WebSockets小记.md',
            '/note/history/前端路由.md',
            '/note/history/Vue-js内部运行机制.md',
            '/note/history/项目模板总结.md',
            '/note/history/控制audio播放进度的实现.md',
            '/note/history/Vue原理基础.md',
            '/note/history/CSS布局.md',
            '/note/history/Web-Sql-笔记.md',
            '/note/history/使用Object-prototype-toString-call来检测对象类型.md',
            '/note/history/中文乱码问题解决.md',
            '/note/history/Babel基础.md',
            '/note/history/使用react-native-sound遇到的问题.md',
            '/note/history/ReactNative-原生与JS交互.md',
            '/note/history/ReactNative调试.md',
            '/note/history/H5拖拽简单应用.md',
            '/note/history/CentOS操作.md',
            '/note/history/git使用手册.md',
            '/note/history/vue开发环境跨域问题.md',
            '/note/history/Fiddler抓取ONE数据.md',
            '/note/history/了解浏览器内核.md',
            '/note/history/前端跨域问题.md',
            '/note/history/mvvm双向绑定实现原理.md',
            '/note/history/云主机上部署Node-js应用.md',
            '/note/history/云主机上Nginx静态网站.md',
            '/note/history/vue打包发布文件无法显示问题.md',
            '/note/history/JavaScript面向对象编程指南学习笔记.md',
            '/note/history/CommonJS.md',
            '/note/history/CMD规范.md',
            '/note/history/AMD规范.md',
          ]
        }
      ],
      '/engineering/': [
        {
          title: '工程化',
          collapsable: false,
          children: [
            '/engineering/think/specification',
            '/engineering/think/如何开发一个ui组件库',
            '/engineering/think/后台管理系统开发总结',
            '/engineering/think/工具库的设计与开发',
          ]
        },
        {
          title: '@grow-all/cli',
          collapsable: false,
          children: [
            '/engineering/grow-all-cli/',
            '/engineering/grow-all-cli/create',
          ]
        },
      ]
    }
  }
}