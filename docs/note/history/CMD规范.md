---
title: CMD规范
date: 2017-03-25 15:27:21
tags:
- CMD
categories:
- CMD
---
# CMD
CMD(Common Module Definition)模块定义规范，明确了模块的基本书写格式和基本交互规则。

在CMD规范中。一个模块就是一个文件。代码的书写格式如下：

    define(factory);
---
## define `Function`
`define` 是一个全局参数，用来定义模块。
### define `define(factory)`
`define` 接受 `factory` 参数，`factory` 可以是一个函数，也可以是一个对象或字符串。

`factory` 为对象、字符串时，表示模块的接口就是该对象、字符串。

    define({"foo": "bar"});
    define({`I am a template`});

`factory`为函数时，表示是模块的构造方法，执行该构造方法，可以得到模块向外提供的接口。`factory` 方法在执行时，默认会传入三个参数：require、exports、和module：

    define(function(require, exports, module) {
        //模块代码
    });

### define `define(id?, deps?, factory)`
`define` 也可以接受两个以上参数。字符串`id`表示模块标识，数组`deps`是模块依赖。如：

    define('hello', ['jquery'], function(require, exports,module) {
        //模块代码
    })
`id` 和 `deps` 参数可以省略，省略时，可以通过构建工具自动生成。

### define.cmd `object`
一个空对象，可用来判定当前页面是否有CMD模块加载器：

    if (typeof define === "function" && define.cmd) {
        //有遵循CMD规范的加载器存在
    }
---
## require `Function`
`require` 是 `factory` 函数的第一个参数。

### require `require(id)`
`require` 是一个方法，接受模块标识作为唯一参数，用来获取其他模块提供的接口。

    define(function(require, exports) {
        //获得模块a的接口
        var a = require('./a');
        //调用模块a的方法
        a.doSomething();
    });
### require.async `require.async(id, callback?)`
`require.async` 方法用来在模块内部异步加载模块，并在加载完成后执行指定回调。`callback` 可选。

    define(function(require, exports, module) {

        //异步加载一个模块，在加载完成时，执行回调。
        require.async('./b', function(b) {
            b.doSomething();
        });

        //异步加载多个模块，在加载完成时，执行回调。
        require.async(['./c', './d'], function(c, d) {
            c.doSomething();
            d.doSomething();
        });
    });
*注意：*  `require` 是同步往下执行，`require.async` 则是异步回调执行。`require.async`一般用来加载可延迟异步加载的模块。
### require.resolve `require.resolve(id)`
使用模块系统内部的路径解析机制来解析并返回模块路径。该函数不会加载模块，只返回解析后的绝对路径。

    define(function(require, exports) {
        console.log(require.resolve('./b'));
        // ==> http://example.com/path/to/b.js
    });
这可以用来获取路径，一般用在插件环境或需动态拼接模块路径的场景下。

---
## exports `object`
`exports` 是一个对象，用来向外提供模块接口。

    define(function(require, exports) {
        //对外提供 foo 属性
        exports.foo = 'bar';

        //对外提供 doSomething 方法
        exports.doSomething = function(){};
    });
    
除了给 `exports` 对象增加成员，还可以使用 `return` 直接向外提供接口。

    define(function(require) {
    //通过 return 直接提供接口
        return {
            foo: 'bar',
            doSomething: function(){};
      };
    });

*特别注意：* 下面这种写法是错误的！

    define(function(require, exports) {
        //错误用法！！！
        exports = {
            foo: 'bar',
            doSomething: function() {}
        };
    });
正确的写法是用 `return` 或者给 `module.exports` 赋值：

    define(function(require, exports, module) {

        //正确写法
        module.exports = {
            foo: 'bar',
            doSomething: function() {}
        };
    });
*提示：* `exports` 仅仅是`module.exports` 的一个引用。在 `factory` 内部给 `exports` 重新赋值时，并不会改变 `module_exports` 的值。因此 `exports` 赋值是无效的，不能用来更改模块接口。

---
## module `object`
`module` 是一个对象，上面存储了与当前模块相关联的一些属性和方法。
### module.id `String`
模块的唯一标识。

    define('id', [], function(require, exports, module) {
        //模块代码
    });

### module.uri `String`
根据模块系统的路径解析规则得到的模块绝对路径。

    define(function(require, exports, module) {

        console.log(module.uri);
        // ==> http://example.com/path/to/this/file.js

    });
一般情况下(没有在 `define` 中手写 `id` 参数时)，`module.id` 的值就是 `module.uri` ，两者完全相同。

### module.dependencies `Array`
`dependencies` 是一个数组，表示当前模块的依赖。
### module.exports `object`
当前模块对外提供的接口

传给 `fatory` 构造方法的 `exports` 参数是 `module.exports` 对象的一个引用。只通过 `exports` 参数来提供接口，有时无法满足开发者的所有需求。比如当模块的接口是某个类的实例时，需要通过 `module.exports` 来实现：

    define(function(require, exports, module) {

        // exports 是 module.exports 的一个引用
        console.log(module.exports === exports); // true

        // 重新给 module.exports 赋值
        module.exports = new SomeClass();

        // exports 不再等于 module.exports
        console.log(module.exports === exports); // false
    })
*注意：* 对 `module.exports` 的赋值需要同步执行。不能放在回调函数里，下面这样是不行的：

    // x.js
    define(function(require, exports, module) {

        // 错误用法
        setTimeout(function() {
            module.exports = { a: "hello"};
        }, 0);

    });
在y.js里有调用上面的x.js

    //y.js
    define(function(require, exports, module) {

        var x = require('./x');

        //无法立刻得到模块 x 的属性 a
        console.log(x.a); // underfined
    })
---
以上转自[https://github.com/seajs/seajs/issues/242](https://github.com/seajs/seajs/issues/242)







