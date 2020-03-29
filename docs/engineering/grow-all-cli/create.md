### 创建项目的流程
`@grow-all/cli` 在创建项目时，以模板为核心选项。

模板可以视为一个插件，拥有和普通插件相同的结构。这些模板通常是针对某一特定场景的最佳实践，比如针对中后台管理系统的脚手架、用于创建 sdk 的模板等等。

`@grow-all/cli` 创建项目，流程如下：

* 项目名称、项目路径校验
* 选择模板
* 模板内进行提问，采集创建选项
* 执行内置提问，采集通用信息，如 registry 等
* 调用模板内的 `generator` 生成文件
* 下载依赖
* git 初始化

### vue-cli 创建项目的流程
`@vue/cli` 通过各个插件提供项目特性(feature)，进而组装成一个完整的项目。基础插件为 `@vue/cli-service`。里面既提供了 `webpack` 构建能力，也提供了基础模板。

创建项目的流程如下：

* 项目名称、项目路径校验
* 选择 `本地 preset`、`默认 preset` 、`手动选择特性` 这三种模式，本质上都是选择各种插件以支持功能，如 lint、unit test、typescript 等。
* 加载插件 (内置@vue/cli-service 和选择的其他插件)
* 选择包管理器，默认使用 `yarn`
* 创建 package.json
* git 初始化
* 下载插件依赖
* 调用插件内 `generator` 生成项目文件
* 下载 `generator` 时额外添加的文件
* 生成 `README.md`
* 生成 `.npmrc` 配置文件
* `git commit` 

### 插件体系
使用 `@vue/cli` 的插件体系，一个插件的结构如下：

```js
  .
  ├── README.md
  ├── generator.js  # generator (可选)
  ├── prompts.js    # prompt 文件 (可选)
  ├── index.js      # service 插件
  ├── migrator.js   # migrator (可选)
  └── package.json
```

其中 `prompt` 用于提问，`generator` 用于生成文件，`service` 用于修改项目内的 `webpack` 配置，`migrator` 用于升级。

`@vue/cli` 提供 `vue add` 命令，用于在现有项目内添加插件。对于插件依赖已经被安装，但未执行生成器的情况，提供 `vue invoke` 命令，跳过安装过程，只调用它的生成器。

#### 参考
[vue 插件开发指南](https://cli.vuejs.org/zh/dev-guide/plugin-dev.html)