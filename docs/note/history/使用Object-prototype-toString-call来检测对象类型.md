---
title: 使用Object.prototype.toString.call来检测对象类型
date: 2018-01-11 19:05:49
tags:
---
通常情况下，我们用`typeof` 操作符返回的字符创来判断对象的类型。
``` js
  typeof 1 // number
  typeof '1' // string
  typeof true // boolean
  typeof Symbol() // symbol
  typeof undefined // undefined
  typeof {} // object
  typeof function(){} // function
```
但是`typeof` 并不能准确的判断一个对象变量。
```js
  typeof null // object
  typeof {} // object
  typeof [] // object
```

如果要做精确判断，应该使用`Object.prototype.toString.call` 。

每个对象都有一个`toString()`方法，当该对象被表示为一个文本值时，或者一个对象以预期的字符串方式引用时自动调用。默认情况下，`toString()` 方法被每个`Object` 对象继承。如果此方法在自定义对象中未被覆盖，`toString()` 返回 `[object type]`，其中`type` 是对象的类型。
``` js
  Object.prototype.toString.call('1') // [object String]
  Object.prototype.toString.call(1) // [object Number]
  Object.prototype.toString.call(true) // [object Boolean]
  Object.prototype.toString.call(undefined) // [object Undefined]
  Object.prototype.toString.call(null) // [object Null]
  Object.prototype.toString.call(function(){}) // [object Function]
  Object.prototype.toString.call([]) // [object Array]
  Object.prototype.toString.call({}) // [object Object]
  Object.prototype.toString.call(new Date) // [object Date]
  Object.prototype.toString.call(/\d/) // [object RegExp]
```
为什么不直接使用`obj.toString()` 呢？
``` js
  "1".toString() // '1'
  [1,2].toString() // '1,2'
  (function(){}).toString() // function (){}
```
这是因为`toString` 为`Object` 的原型方法，而`Array` ，`function` 等类型作为`Object` 的实例，都重写了`toString` 方法。不同的对象类型调用`toString` 方法时，调用的是对应的重写之后的`toString` 方法（`function` 类型返回内容为函数体的字符串，`Array` 类型返回元素组成的字符串.....），而不会去调用`Object` 上原型`toString`方法（返回对象的具体类型），所以采用`obj.toString()` 不能得到其对象类型，只能将`obj` 转换为字符串类型；因此，在想要得到对象的具体类型时，应该调用`Object.prototype.toString.call` 。