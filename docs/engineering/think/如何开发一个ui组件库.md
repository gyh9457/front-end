### 如何开发一个 ui 组件库
### 规范制定
一个复杂的 ui 组件库需要多人协作开发，良好的规范使代码更加简洁、易读、健壮，也有利于后期的不断迭代、维护。

规范包含以下几个方面：
* eslint
* stylelint
* prettier
* git commit 规范

以上这些通过 `eslint` `stylelint` `perttier` `husky` `commitizen` `commitlint` 等工具相结合，形成一套完整的校验流程。

### 文档系统
ui 组件库需要一个展示 quick start、api、demo、changelog、faq 等内容的站点，方便用户快速接入。一份好的文档可以节约组件开发者和组件使用者的大量时间和精力。

文档系统可以参考以下这些：
* [bisheng](https://github.com/benjycui/bisheng)
* [docz](https://www.npmjs.com/package/docx)
* [storybook](https://github.com/storybookjs/storybook)

### 构建发布
一般需要提供 `esm` `cjs` `umd` 三种格式，同时将 `less`、`sass` 等 css 预处理器写的样式编译为 `css`。

通常还需要提供 [按需加载](https://ant.design/docs/react/getting-started-cn#%E6%8C%89%E9%9C%80%E5%8A%A0%E8%BD%BD) 能力，组件库包含的组件很多，而业务可能只需要用到其中的一小部分。

构建工具参考：
* [antd-tools](https://github.com/ant-design/antd-tools)
* [father](https://github.com/umijs/father)

### 组件开发
组件库的核心便是一个个组件，那么每个组件的开发一般遵循什么样的流程呢？

#### 明确兼容性
明确兼容到什么版本的浏览器，比如说 `IE9+`、`IE11+`、`Android4.0+` 等。

根据公司业务需要判断需要兼容到什么程度。尽量推动用户使用更高版本的浏览器，对低版本浏览器做降级处理需要消耗大量的精力，性价比很低。

之前使用过的 css 兼容方案：
通过特定属性来判断该浏览器是否是 `IE9`，比如：
```js
  function isIe9 () {
    return !window.atob
  }
```

使用 css hack 的方式，比如：
* `\9` IE6/IE7/IE8/IE9/IE10都生效
* `\0` IE8/IE9/IE10都生效，是IE8/9/10的hack
* `\9\0` 只对IE9/IE10生效，是IE9/10的hack
*  `@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)` 对 `IE10+` 有效。

之前解决的一些兼容性问题：
* [Fix popover style with box-shadow](https://github.com/ant-design/ant-design/pull/14068)
* [fix ie9 is not support translate3d](https://github.com/react-component/tabs/pull/159)
* [fix inherited bug](https://github.com/react-component/collapse/pull/110)

#### 需求分析
每个组件需要提供什么样的功能，一般来源于以下几个方面：
* 设计师提交的需求，这个应该是主要来源，专业的交互设计才能带来良好的体验
* 总结业务中常用的场景
* 参照竞品

通过这些总结出原始需求，然后再结合合理性判断(比如有时候设计提的需求不合理) 提炼出最终要实现的功能。

#### 组件设计与抽象
根据组件需要的能力设计对应的api及实现方式。

api的设计遵循简约、合理、易用的原则。对于相同或相似的能力，保持名称的一致性，比如 `visible` `onChange` 这些比较通用的 api 名称。

实现上要思考是否进行分层。

交互较为简单或纯做内容展示的组件，可以不做分层处理，直接在组件库中实现。比如说 `Button` `Badge` 组件，只有简单的交互，主要侧重于 ui 展示。

有一定交互复杂度的组件建议分为 `基础能力层` 和 `ui表现层` 两部分。其中，基础能力层满足基础的交互能力，ui表现层 保持 ui设计的一致性、稳定性。分层设计遵循单一职责原则，同时提高了代码的复用性。基础能力层下沉，作为一个单一组件实现，以单独的 `npm包` 发布。ui 表现层则在当前组件库上实现。

比如说 `antd` 的 `Message` 和 `Notification` 组件。交互能力相似，ui 展示不同。底层都依赖于 `rc-notification`，上层 ui 则各自实现。

使用分层实现，如果是基础能力的 bug 或迭代，在组件库这一层面是不需要发布版本的(利用 npm version 自动升级)。一定程度上保证了 ui 库的稳定性。同时也更利于协作，让部分人可以更专注于某个组件的开发，而无须关心整个组件库。

分层实现，必然会出现很多的底层组件库，这些底层组件库的代码组织方式、构建、文档等也要遵循一定的规范，便于后续迭代。这一部分可以参考 [react-component](https://github.com/react-component)。

#### 编码实现
组件库的开发语言，建议选用 ts，虽然会带来一定的学习和使用成本，但做好类型声明，可以显著提高程序的健壮性，配合 IDE 也可以实现属性自动提示，提高开发效率。

根据不同的类别，对组件进行归类，可以参考市面上流行组件库的分类，比如 `antd` 分为 `通用组件`、`布局组件`、`导航组件` 等。

样式管理有 `css-in-js`、`css-module`、`css 预处理器` 等方案。组件库建议使用 css 预处理器方案，可以增强 css 的可编程性，减少代码重复，让 css 更好维护，同时有利于开发者根据业务需要做样式覆盖。

一些全局通用属性，如 `locale`、`prefixCls` 等，通过一个全局化配置组件来实现，每个组件内部做相应处理，参考 [antd ConfigProvider](https://ant.design/components/config-provider-cn/#header)。

#### 测试
测试可以分为单元测试和e2e测试两个部分

##### 单元测试
使用 `jest` `enzyme` 等工具对每个组件的重要 api 和交互方式进行单元测试。

##### e2e
推荐使用 [f2etest](https://github.com/alibaba/f2etest) 进行 e2e 自动化测试，自动化模拟用户操作，确保 ui 交互符合预期。

内部使用 `uirecorder` ，拥有自动化录制脚本能力，极大降低编写测试脚本的成本。

#### 通用能力
需要对一些组件通用能力进行处理：
* 定制主题，参考 [antd](https://ant.design/docs/react/customize-theme-cn)
* 国际化
* 残障[ARIA](https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/ARIA)支持 (国外需要)
* RTL 语言支持 参考 [antd](https://ant.design/components/config-provider-cn/#components-config-provider-demo-direction)

#### 支持与维护
在组件库使用的过程中，难免会出现使用疑问或者bug需要修复。这个时候就需要一个支持、维护的流程。

首先需要提供提供一份清晰的版本履历，让用户知道修改了哪些内容。有可能用户遇到的问题在之前的版本中已经修复了，只需要升级版本即可。

通过 `issue` 或者其他公司内部的沟通方式来接受反馈。

提供一个简单的 demo 工程，可以是一个仓库或者是一个 codepen 地址，便于使用者复现问题。很多情况下，使用者的问题往往是由于使用不当导致的，在复现的过程中就可以自己找到解决方案。

以 pr 的形式进行迭代，每个 pr 写清楚修复的问题或者新增的特性等，便于后期遇到问题时查阅。