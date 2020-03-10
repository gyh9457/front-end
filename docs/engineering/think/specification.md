### 工程规范自动化
一个项目通常由多人合作完成，而每个人的代码风格、开发习惯并不相同，所以需要一套规范来约束，以保证代码格式的统一，排除一些常见的错误，使项目更加整洁、易读。

可以从以下几个方面进行约束：
* eslint
* stylelint (针对样式)
* prettier
* git commit

### 创建项目
新建文件 `specification`

``` sh
  yarn init -y
```

### 创建测试文件
``` js
  // src/index.js
  console.log('hello world')
```

### eslint
添加依赖，由于使用 `node` 下的 `console`，所以额外添加 `eslint-plugin-node`。

``` sh
  yarn add -D eslint eslint-plugin-node
```

添加配置文件：

```js
  // .eslintrc.js
  module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:node/recommended',
    ],
    // 测试规则
    rules: {
      'semi': ['error', 'always'],
    }
  }
```

添加命令：
```
  // package.json
  "scripts": {
    "lint": "eslint --fix src/**/index.js",
    "lint-without-fix": "eslint src/**/index.js"
  }
```

### prettier
添加依赖，由于与 `eslint` 结合使用，因此也要添加 `eslint` 相关的插件

``` sh
  yarn add -D prettier eslint-plugin-prettier eslint-config-prettier
```

添加配置文件：
```
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
```

以上内容配置好后，执行 `lint` 会自动启用 `prettier`。

> prettier 的配置文件中已经设置了 `indent`，在 `eslint` 里面不要再设置，否则会有冲突。

### git commit
#### pre-commit
在 `prettier` 钩子里执行 `lint-staged`

添加依赖：
```sh
  yarn add -D husky lint-staged
```

配置 git 钩子：
```
  // package.json
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.js": [
      "eslint --fix",
      "git add"
    ]
  }
```

#### commitizen 规范提交格式
这里以本地依赖的形式使用 `commitizen` ：

```sh
  npm i -g commitizen
  yarn add -D commitizen
  commitizen init cz-conventional-changelog --yarn --dev --exact
```

创建命令：
```
  "scripts": {
    "cz": "git-cz"
  }
```

> 如果 husky 的钩子包含 `pre-commit`，则命令名称不能为 `commit`，即不能为 `"commit: "git-cz""`，否则 `pre-commit` 会执行两遍。

以后提交都使用 `yarn run cz`。

#### 使用 commitlint 检查 msg
```sh
  yarn add -D @commitlint/cli @commitlint/config-conventional
```

添加配置文件 `commitlint.config.js` ：
```
  module.exports = {
    extends: ['@commitlint/config-conventional']
  }
```

配置 git hook:
```
  // package.json
  "husky": {
    "hooks": {
      "commit msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
```

#### 自动生成 CAHANGELOG
```sh
  yarn add -D conventional-changelog
```

编写生成 `CHANGELOG` 的脚本
```js
  // scripts/changelog.js
  const createWriteStream = require('fs').createWriteStream
  const conventionalChangelog = require('conventional-changelog')

  const stream = createWriteStream('./CHANGELOG.md')

  const config = {
    releaseCount: 0,
    preset: 'angular'
  }
  conventionalChangelog(config, {
    owner: 'gyh9457',
    commit: 'commit',
    host: 'https://github.com/',
    repository: 'specification'
  })
    .pipe(stream)
```

创建命令：
```
  "scripts": {
    "version": "node scripts/changelog.js"
  }
```

提交代码，生成日志：
```sh
  yarn run cz
  yarn run version
```

### 参考
[示例工程 specification](https://github.com/gyh9457/specification)

[eslint](https://eslint.org/)

[eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node)

[prettier](https://prettier.io/)

[eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)

[commitizen](https://www.npmjs.com/package/commitizen)

[commit-lint](https://commitlint.js.org/#/)

[conventional-changelog](https://www.npmjs.com/package/conventional-changelog)

[Angular commit message guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md)