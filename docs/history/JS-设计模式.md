---
title: JS 设计模式
date: 2018-10-15 21:58:45
tags:
---
### 定义
设计模式定义：`在面向对象软件设计过程中，针对特定问题的简洁而优雅的解决方案。`

通俗的说，设计模式是某个特定场景下对某个问题的解决方案。因此，当我们遇到合适的场景时，我们可能条件反射一样自然而然想到符合这种场景的设计模式。

设计模式 (Design pattern) 代表了最佳实践。每种模式在现实中都有相应的原理来与之对应，某种模式都描述了一个在我们周围不断重复发生的问题，以及该问题的核心解决方案，这也是设计模式能被广泛应用的原因。

### GOF
四人帮，全拼 `Gang of Four`。在1984年，由4人合著出版了一本名为 `Design Patterns - Elements of Reusable Object-Oriented Software（中文译名：设计模式 - 可复用的面向对象软件元素）`的书，该书首次提到了软件开发中设计模式的概念，四位作者合称 `GOF`。他们所提出的设计模式主要是基于以下的面向对象设计原则。
1. 对接口编程而不是对实现编程
2. 优先使用对象组合而不是继承

### 设计模式的使用
设计模式在软件开发中的两个主要用途。
1. 提供一个标准的术语系统，且具体到特定的情景，方便开发人员交流。
2. 设计模式作为一种最佳实践，提供了面临一般问题的最佳解决方案。学习这些设计模式有助于经验不足的开发人员通过一种简单快捷的方式来学习软件设计。

### 设计模式的类型
四人帮提出了23种设计模式，这些模式可以分为三大类：
1. 创建型模式 (Creational Patterns)
2. 结构型模式 (Structural Patterns)
3. 行为型模式 (Behavioral Patterns)

#### 创建型模式
这些设计模式提供了一种在创建对象的同时隐藏创建逻辑的方式，而不是使用 `new` 运算符直接实例化对象。这使得程序在判断针对某个给定实例需要创建哪些对象时更加灵活。
1. 工厂模式
2. 抽象工厂模式
3. 单例模式
4. 建造者模式
5. 原型模式

#### 结构型模式
这些设计模式关注类和对象的组合，继承的概念被用来组合接口和定义组合对象获得新功能的方式。
1. 适配器模式
2. 桥接模式
3. 过滤器模式
4. 组合模式
5. 装饰器模式
6. 外观模式
7. 享元模式
8. 代理模式

#### 行为型模式
这些设计模式特别关注对象之间的通信。
1. 责任链模式
2. 命令模式
3. 解释器模式
4. 迭代器模式
5. 中介者模式
6. 备忘录模式
7. 观察者模式
8. 状态模式
9. 空对象模式
10. 策略模式
11. 模板模式
12. 访问者模式

### 设计模式的六大原则
#### 开闭原则 (Open Close Principle)
开闭原则的意思是：*对扩展开放，对修改关闭。* 在程序需要进行拓展的时候，不能去修改原有的代码，实现一个热插拔的效果。简言之，是为了使程序的扩展性好，易于维护和升级。

#### 里式替换原则 (Liskov Subsitution Principle)
里氏替换原则是面向对象的基本原则之一。里氏替换原则中说，*任何基类可以出现的地方，子类一定可以出现。* LSP是继承复用的基石，只有当派生类可以替换掉基类，且软件单位的功能不受影响时，基类才能真正被复用，而派生类 也能够在基类的基础上增加新的行为。里氏替换原则是对开闭原则的补充。实现开闭原则的关键步骤就是抽象化，而基类与子类的继承关系是抽象化的具体实现，所以里氏替换原则是对实现抽象化的具体步骤的规范。

#### 依赖倒转原则 (Dependence Inversion Principle)
这个原则是开闭原则的基础，具体内容: 对接口编程，依赖于抽象而不依赖于具体。

#### 接口隔离原则 (Interface Segregation Principle)
这个原则的意思是，使用多个隔离的接口，比使用单个接口要好。它还有另外一个意思是：降低类之间的耦合度。由此可见，其实设计模式就是从大型软件架构出发，便于升级和维护的软件设计思想。它强调降低依赖，降低耦合。

#### 迪米特法则 又称最少知道原则 (Demeter Principle)
最少知道原则是指：一个实体应当尽量少地与其他实体之间发生相互作用，使得系统功能模块相对独立。

#### 合成复用原则 (Composite Reuse Principle)
合成复用原则是指：尽量使用合成/聚合的方式，而不是使用继承。

### 单例模式
用于保证一个类仅有一个实例，并提供一个访问它的全局访问点。主要解决的问题是：一个全局使用的类频繁地创建与销毁。解决方法是判断系统是否已经有这个实例，如果有则返回，如果没有则创建。

``` js
const singleton = function(name) {
  this.name = name
  this.instance = null
}

singleton.prototype.getName = function() {
  console.log(this.name)
}

singleton.getInstance = function(name) {
  if (!this.instance) {
    this.instance = new singleton(name)
  }
  return this.instance
}

const a = singleton.getInstance('a')
const b = singleton.getInstance('b')
console.log(a === b)
```

### 适配器模式
将一个类的接口转换成客户希望的另一个接口，适配器模式使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。

``` js
// 老接口
const oldInterface = (function()  {
  return [
    {
      name: 'a',
      id: 1
    },
    {
      name: 'b',
      id: 2
    }
  ]
})()

console.log(oldInterface)

// 新接口要求 返回 { a: 1, b: 2}

const adaptor = (function(oldInterface) {
  const obj = {}
  for (let item of oldInterface) {
    obj[item.name] = item.id
  }
  return obj
})(oldInterface)

console.log(adaptor)
```

### 策略模式
定义一系列算法，把它们一个个封装起来，并且使它们可相互替换。主要解决的问题是：在有多种算法相似的情况下，使用 `if...else` 所带来的复杂和难以维护。

``` js
const S = function(salary) {
  return salary * 4
}

const A = function(salary) {
  return salary * 3
}

const B = function(salary) {
  return salary * 2
}

const calculate = function(func, salary) {
  return func(salary)
}

console.log(calculate(A, 10000))
```

### 代理模式
为其他对象提供一种代理以控制对这个对象的访问。主要解决的问题是：直接访问对象存在问题，比如远程访问或者直接访问会给使用者带来很多麻烦 (比如系统开销很大)。解决方法是增加中间层。

示例：图片懒加载，先通过一张loading图占位，然后异步加载图片，等图片加载完成后再设置到img标签中。

``` js
const myImage = (function() {
  const imgNode = document.createElement('img')
  document.body.appendChild(imgNode)
  return {
    setSrc: function(src) {
      imgNode.src = src
    }
  }
})()

const proxyImage = (function() {
  const img = new Image()
  img.onload = function() { // http 图片加载完毕后才会执行
    myImage.setSrc(this.src)
  }
  return {
    setSrc: function(src) {
      myImage.setSrc('loading.jpg') // 本地 loading 图片
      img.src = src
    }
  }
})()

proxyImage.setSrc('http://loaded.jpg')
```

### 迭代器模式
提供一种方法访问一个聚合对象中各个元素，而又无需暴露该对象的内部表示。主要解决的问题是：使用不同的方式来遍历整个整合对象。

``` js
// jq的each方法
$.each([1, 2, 3], function(index, val) {
  console.log(index, val)
})
```

### 发布-订阅模式
基于一个主题/事件通道，希望接收通知的对象(subscriber)通过自定义事件订阅主题，被激活事件的对象(publisher)通过发布主题事件的方式被通知。优点是在异步编程中实现更深的解耦，缺点是如果过多使用发布订阅模式，会增加维护的难度。

``` js
var Event = function() {
  this.obj = {}
}

Event.prototype.on = function(eventType, fn) {
  if (!this.obj[eventType]) {
    this.obj[eventType] = []
  }
  this.obj[eventType].push(fn)
}

Event.prototype.emit = function() {
  var eventType = Array.prototype.shift.call(arguments)
  var arr = this.obj[eventType]
  for (let i = 0; i < arr.length; i++) {
    arr[i].apply(arr[i], arguments)
  }
}

var ev = new Event()

ev.on('click', function(a) { // 订阅函数
  console.log(a) // 1
})

ev.emit('click', 1)          // 发布函数
```

### 命令模式
将一个请求封装成一个对象，从而可以用不同的请求对客户进行参数化。主要解决的问题是：行为请求者与实现者之间的紧耦合关系。解决方式是：通过调用者调用接受者执行命令，顺序：调用者=>接受者=>命令。

``` js
const setCommand = function(button, command) {
  button.onClick = function() {
    command.excute()
  }
}

const menu = {
  updateMenu: function() {
    console.log('更新菜单')
  },
}

const UpdateCommand = function(receive) {
  return {
    excute: receive.updateMenu,
  }
}

const updateCommand = UpdateCommand(menu) // 创建命令

const button1 = document.getElementById('button1')
setCommand(button1, updateCommand)
```

### 组合模式
将对象组合成树形结构以表示部分和整体的层次结构，组合模式使得用户对单个对象和组合对象的使用具有一致性。主要解决的问题是：在树形结构的问题中，模糊简单元素和复杂元素的概念，使程序可以像处理简单元素那样处理复杂元素，实现程序与复杂元素内部结构的解耦。解决方式是树枝和叶子实现统一接口，树枝内部组合该接口。

``` js
const Folder = function(folder) {
  this.folder = folder
  this.lists = []
}

Folder.prototype.add = function(resource) {
  this.lists.push(resource)
}

Folder.prototype.scan = function() {
  console.log('开始扫描文件夹：', this.folder)
  for (let i = 0, folder; folder = this.lists[i++];) {
    folder.scan()
  }
}

const File = function(file) {
  this.file = file
}

File.prototype.add = function() {
  throw Error('文件下不能添加其它文件夹或文件')
}

File.prototype.scan = function() {
  console.log('开始扫描文件：', this.file)
}

const folder = new Folder('根文件夹')
const folder1 = new Folder('JS')
const folder2 = new Folder('life')

const file1 = new File('深入React技术栈.pdf')
const file2 = new File('JavaScript权威指南.pdf')
const file3 = new File('小王子.pdf')

folder1.add(file1)
folder1.add(file2)

folder2.add(file3)

folder.add(folder1)
folder.add(folder2)

folder.scan()
```

### 模板模式
定义一个操作中的算法的骨架，而将一些步骤延迟到子类中，模板方法使得子类可以不改变一个算法的结构即可重定义该算法的某些特定步骤。主要解决的问题的：一些方法通用，却在每一个子类中重写了这个方法。解决的方法是将这些方法抽象出来。

``` js
const Drinks = function() {}

Drinks.prototype.firstStep = function() {
  console.log('烧开水')
}

Drinks.prototype.secondStep = function() {}

Drinks.prototype.thirdStep = function() {
  console.log('倒入杯子')
}

Drinks.prototype.fourthStep = function() {}

Drinks.prototype.init = function() { // 模板方法模式核心：在父类上定义好执行算法
  this.firstStep()
  this.secondStep()
  this.thirdStep()
  this.fourthStep()
}

const Tea = function() {}

Tea.prototype = new Drinks

Tea.prototype.secondStep = function() {
  console.log('浸泡茶叶')
}

Tea.prototype.fourthStep = function() {
  console.log('加柠檬')
}

const Coffee = function() {}

Coffee.prototype = new Drinks

Coffee.prototype.secondStep = function() {
  console.log('冲泡咖啡')
}

Coffee.prototype.fourthStep = function() {
  console.log('加糖')
}

const tea = new Tea()
tea.init()

// 烧开水
// 浸泡茶叶
// 倒入杯子
// 加柠檬

const coffee = new Coffee()
coffee.init()

// 烧开水
// 冲泡咖啡
// 倒入杯子
// 加糖
```

### 享元模式
运用共享技术有效地支持大量细粒度的对象。主要解决的问题是，有大量相似的对象，占用了大量内存，这些对象的大部分状态可以抽象为外部状态。

``` js
// 创建两个model而不是100个modal
const Model = function(gender) {
  this.gender = gender
}

Model.prototype.takephoto = function() {
  console.log(`${this.sex}穿着${this.underwear}`)
}

const maleModel = new Model('male')
const femaleModel = new Model('female')

for (let i = 1; i < 51; i++) {
  maleModel.underwear = `第${i}款衣服`
  maleModel.takephoto()
}

for (let i = 1; i < 51; i++) {
  femaleModel.underwear = `第${i}款衣服`
  femaleModel.takephoto()
}
```

### 职责链模式
避免请求发送者与接收者耦合在一起，让多个对象都有可能接收请求，将这些对象连接成一条链，并且沿着这条链传递请求，直到有对象处理为止。主要解决的问题是：职责链上的处理者负责处理请求，客户只需要将请求交给职责链上即可，无需关心请求的处理细节和请求的传递，所以职责链将请求的发送者和请求的处理者解耦了。解决的方式是：拦截的类都实现统一的接口。

``` js
const order500 = function(orderType, pay, stock) {
  if ( orderType === 1 && pay === true ) {
    console.log('500 元定金预购，得到 100 元优惠券')
  } else {
    return 'nextSuccess'
  }
}

const order200 = function(orderType, pay, stock) {
  if ( orderType === 2 && pay === true ) {
    console.log('200 元定金预购，得到 50 元优惠券')
  } else {
    return 'nextSuccess'
  }
}

const orderCommon = function(orderType, pay, stock) {
  if (orderType === 3 && stock > 0) {
    console.log('普通购买，无优惠券')
  } else {
    console.log('库存不够，无法购买')
  }
}

// 链路代码
const chain = function(fn) {
  this.fn = fn
  this.sucessor = null
}

chain.prototype.setNext = function(sucessor) {
  this.sucessor = sucessor
}

chain.prototype.init = function() {
  const result = this.fn.apply(this, arguments)
  if (result === 'nextSuccess') {
    this.sucessor.init.apply(this.sucessor, arguments)
  }
}

const order500New = new chain(order500)
const order200New = new chain(order200)
const orderCommonNew = new chain(orderCommon)

order500New.setNext(order200New)
order200New.setNext(orderCommonNew)

order500New.init( 3, true, 500 ) // 普通购买，无优惠券
```

### 中介者模式
用一个中介对象来封装一系列的对象交互，中介者使各对象不需要显式地相互引用，从而使其耦合松散，而且可以独立地改变它们之间的交互。主要解决的问题是：对象与对象之间存在大量的关联关系，结构变得十分复杂，如果一个对象发生了变化，与之关联的对象也要修改。

``` js
const player = function(name) {
  this.name = name
  playerMiddle.add(name)
}

player.prototype.win = function() {
  playerMiddle.win(this.name)
}

player.prototype.lose = function() {
  playerMiddle.lose(this.name)
}

const playerMiddle = (function() { // 将就用下这个 demo，这个函数当成中介者
  const players = []
  const winArr = []
  const loseArr = []
  return {
    add: function(name) {
      players.push(name)
    },
    win: function(name) {
      winArr.push(name)
      if (winArr.length + loseArr.length === players.length) {
        this.show()
      }
    },
    lose: function(name) {
      loseArr.push(name)
      if (winArr.length + loseArr.length === players.length) {
        this.show()
      }
    },
    show: function() {
      for (let winner of winArr) {
        console.log(winner + '挑战成功;')
      }
      for (let loser of loseArr) {
        console.log(loser + '挑战失败;')
      }
    },
  }
}())

const a = new player('A 选手')
const b = new player('B 选手')
const c = new player('C 选手')

a.win()
b.win()
c.lose()

// A 选手挑战成功;
// B 选手挑战成功;
// C 选手挑战失败;
```

### 装饰器模式
动态地给一个对象加上一些额外的职责，就增加功能来说，装饰器模式相比生成子类更为灵活。主要解决的问题是：一般的，为了扩展一个类经常使用继承方式实现，由于继承为类引入静态特性，并且随着扩展功能的增多，子类会很膨胀。

``` js
const log = (target, name, descriptor) => {
  var oldValue = descriptor.value;
  descriptor.value = function() {
    console.log(`Calling ${name} with`, arguments);
    return oldValue.apply(this, arguments);
  };
  return descriptor;
}

class Math {
  @log  // Decorator
  plus(a, b) {
    return a + b;
  }
}
const math = new Math();

math.add(1, 2); // this will log: Calling plus with 1,2
```

### 状态模式
允许对象在内部状态发生改变时改变它的行为。主要解决的问题是：对象的行为依赖于它的状态，并且可以根据它的状态改变而改变它的相关行为。解决的方式是：把各种具体的状态类抽象出来。

``` js
// 将状态封装成不同类
const weakLight = function(light) {
  this.light = light
}

weakLight.prototype.press = function() {
  console.log('打开强光')
  this.light.setState(this.light.strongLight)
}

const strongLight = function(light) {
  this.light = light
}

strongLight.prototype.press = function() {
  console.log('关灯')
  this.light.setState(this.light.offLight)
}

const offLight = function(light) {
  this.light = light
}

offLight.prototype.press = function() {
  console.log('打开弱光')
  this.light.setState(this.light.weakLight)
}

const Light = function() {
  this.weakLight = new weakLight(this)
  this.strongLight = new strongLight(this)
  this.offLight = new offLight(this)
  this.currentState = this.offLight          // 初始状态
}

Light.prototype.init = function() {
  const btn = document.createElement('button')
  btn.innerHTML = '按钮'
  document.body.append(btn)
  const self = this
  btn.addEventListener('click', function() {
    self.currentState.press()
  })
}

Light.prototype.setState = function(state) { // 改变当前状态
  this.currentState = state
}

const light = new Light()
light.init()

// 打开弱光
// 打开强光
// 关灯
```

### 观察者模式
定义对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并自动更新。主要解决的问题是：一个对象状态改变给其他对象通知的问题。

``` js
// Object.defineProperty实现
var obj = {
  value: 0
}

Object.defineProperty(obj, 'value', {
  set(newValue) {
    console.log('调用相应函数')
  }
})

obj.value = 1 // 调用相应函数

// Proxy实现
var obj = {
  value: 0
}

var proxy = new Proxy(obj, {
  set: function(target, key, value, receiver) { // {value: 0}  "value"  1  Proxy {value: 0}
    console.log('调用相应函数')
    Reflect.set(target, key, value, receiver)
  }
})

proxy.value = 1 // 调用相应函数
```

#### 观察者模式与发布-订阅模式的区别
观察者模式，目标和观察者是基类，目标提供维护观察者的一系列方法，观察者提供更新接口，具体观察者和具体目标继承各自的基类，具体观察者把自己注册到具体目标里，在具体目标发生变化时，调用观察者的更新方法。

发布订阅模式，订阅者把自己想订阅的事件注册到调度中心(附带上下文)，当该事件触发时，发布者将该事件发布到调度中心，由调度中心统一调度订阅者注册到调度中心的处理代码。

观察者由具体目标调度，发布订阅统一由调度中心调度，所以观察者模式的发布者与订阅者之间是存在依赖的，而发布订阅模式不会。

---
[JavaScript 中常见设计模式整理](https://github.com/MuYunyun/blog)

[设计模式-菜鸟教程](http://www.runoob.com/design-pattern/design-pattern-tutorial.html)

[观察者模式和发布订阅模式](https://blog.csdn.net/qq_39877296/article/details/79103206)