---
title: JavaScript面向对象编程指南学习笔记
date: 2017-06-16 15:11:57
tags:
---
## 基本数据类型
1. 数字，包括浮点数与整数。
2. 字符串。
3. 布尔值，true或false.
4. underfined，当我们试图访问一个不存在的变量时，就会得到一个特殊值：underfined。除此之外，使用一个未初始化的变量也会如此。因为JavaScript会自动将变量在初始化之前的值设定为underfined.
5. null，空值，不代表任何东西，不指向任何值。null与underfined最大的不同在于，被赋予null的变量通常被认为是已经定义了的，只不过它不代表任何东西。

任何不属于上述五种基本类型的值都会被认为是一个对象。所以JavaScript的数据类型主要分为以下两个部分。

1. 基本类型。
2. 非基本类型(即对象)。

### 数字
        var n = 1;
        typeof n ; // number

        Infinity // 最大数
        -Infinity // 最小数 

如果我们对一个假定的数字执行某个操作时失败了，就会得到一个NaN。

        var a = NaN;
        typeof a; // number

### 字符串
当我们将一个数字字符串用于算术运算中的操作时，该字符串会在运算中被当做数字类型来使用。(由于加法操作符的歧义性，这条规则不适合于加法运算。)
    
            var s = '1';
            s = 3 * s;
            typeof s; // number
如果转换操作失败了，我们就会得到一个NaN值。

        var d = '101 dalmatians';
        d * 1; // NaN

### 布尔值
绝大部分值在转换为布尔类型时都为true,但以下6种falsy值除外：'' null underfined 0 NaN false。

## 闭包
闭包(closure)，是指函数变量可以保存在函数作用域内，因此看起来是函数将变量包裹了起来。严格来说，闭包需要满足三个条件：
1. 访问所在作用域
2. 函数嵌套
3. 在所在作用域外被调用

>闭包就是能够读取其他函数内部变量的函数。由于在js中，只有函数内部的子函数才能读取局部变量，所以你可以把闭包理解成“定义在一个函数内部的函数”。在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。

### 闭包的概念
现在。假设q全局变量中，有一个变量`a`和一个函数`F`，在函数`F`内有一个局部变量`b`和一个子函数`N`，在`N`有一个子函数的局部变量`c`。如下所示：

        var a;
        var F = function() {
                var b;
                var N = function() {
                        var c;
                }
        }

在函数`F`的作用域内,我们可以访问全局变量和作用域内定义的变量。在函数`N`中，我们可以访问`N`的子作用域内定义的变量`c`，也可以访问`F`内定义的变量`b`和全局变量`a`。但是在全局变量中，我们是无法访问到`b`的，因为`b`在`F`以外是不可见的。但如果愿意的话，我们是可以将`c`和`b`连通起来的，或者说将`N`和`b`连通起来。当我们将`N`的空间扩展到`F`以外，并止步于全局空间以内时，就产生了一个有趣的东西——闭包。这时候，`N`将会和`a`一样置身于全局空间。而且由于函数还记得它在被定义时所设定的环境，因此它依然可以访问`F`空间并使用`b`。现在`N`和`a`同处于一个空间，但`N`可以访问`b`而`a`不能。

那么，`N`究竟是如何突破作用域链的呢？我们只需要将它们升级为全局变量(不使用`var`语句)或通过`F`传递(或返回)给全局空间即可。下面，我们来看看具体是怎么做的。

### 闭包#1
下面，我们先来看一个函数：

        function f() {
                var b = 'b';
                return function() {
                        return b;
                }
        }

这个函数含有一个局部变量`b`，它在全局空间中是不可见的。
`f()`的返回值是另一个函数，该函数由自己的私有空间，同时也可以访问`f()`的子作用域和全局作用域，所以`b`对它来说是可见的，因为`f()`是可以在全局中被调用的，所以我们可以将它的返回值赋给另一个全局变量，从而生成一个可以访问`f()`私有空间的新全局函数。

        var n = f();
        n(); // 'b'
### 闭包#2
下面这个例子的最终结果与之前相同，但在实现方法上存在着一些细微的不同。在这里`f()`不再返回函数，而是直接在函数体内创建一个新的全局函数。

首先，我们需要声明一个全局函数的占位符，尽管这种占位符不是必须的，但最好还是声明一下，然后，我们就可以将函数`f()`定义如下：
```javascript
var n;
function f() {
        var b = 'b';
        n = function() {
                return b;
        }
}
```
当我们调用`f()`的时候，在`f()`中定义了一个新的函数，并且没有在这里使用`var`语句。因此它应该是属于全局的。由于`n()`是在`f()`内部定义的，它可以访问`f()`的作用域，所以即使该函数后来升级成了全局函数，但它依然可以保留对`f()`作用域的访问权。
```javascript
n(); // 'b'
```
### 相关定义域闭包#3
综上，如果一个函数需要在其父级函数返回之后也留住对父级作用域的链接的话，就必须为此建立一个闭包。
而由于函数通常都会将自身的参数视为局部变量，因此我们创建返回函数时，也可以令其返回父级函数的参数，例如：
```javascript
function f(arg) {
        var n = function() {
                return arg;
        };
        arg++;
        return n;
}
```
然后我们可以这样调用函数：
```javascript
var m = f(123);
m(); // 124
```
当我们的返回函数被调用时，`arg++`已经执行过一次递增操作了。所以`m()`返回的是更新后的值，由此我们可以看出，函数所绑定的是作用域本身，而不是该作用域中的变量或变量当前所返回的值。

### 循环中的闭包
由这种闭包所导致的bug往往很难被发现，因为它们总是表面上看起来一切正常。

以下是一个三次性的循环操作，它在每次迭代中都会创建一个返回当前循环序号的新函数，该新函数都会被添加到一个数组中，并最终返回。代码如下：
```javascript
function f() {
        var a = [];
        var i;
        for(i = 0; i < 3; i++) {
                a[i] = function() {
                        return i;
                }
        }
        return a;
}

var a = f();
```
现在，我们拥有一个包含三个函数的数组，按通常的估计，它们应该会按照循环顺序分别输出1，2，3。
```javascript
a[0](); // 3
a[1](); // 3
a[2](); // 3
```
事实上，我们在这里创建了三个闭包，它们都指向了一个共同的局部变量`i`。但是闭包并不会记录它们的值，它们所拥有的的只是一个`i`的链接，因此只能返回`i`的当前值。由于循环结束时`i`的值为3，所以这三个函数都指向了这一共同值。

以下是一种解决方案：
```javascript
function f() {
        var a = [];
        var i;
        for(i=0;i<3;i+=) {
                a[i] = (function(x) {
                        return  function() {
                                return x;
                        }
                })(i);
        }
        return a;
}

var a = f();
a[0](); // 0
a[1](); // 1
a[2](); // 2
```
在这里我们不再直接创建一个返回`i`的函数，而是将`i`传递给了一个自调函数。在该函数中，`i`就被赋值给了局部变量`x`，这样一来，每次迭代中的`x`就会拥有各自不同的值了。

或者，我们也可以定义一个不使用自调函数的内部函数来实现相同的功能，关键是在每次迭代操作中，我们要在中间函数内将`i`的值本地化。
```javascript
function f(){
        function makeClosure(x) {
                return function() {
                        return x;
                }
        }
        var a = [];
        var i;
        for(i=0;i<3;i++) {
                a[i] = makeClosure(i)
        }
        return a;
}
```
### Getter与Setter
假设现在有一个属于特殊区间的变量，我们不想将它暴露给外部。因为这样一来，其他部分的代码就有修改它的可能，所以我们需要将它保护在相关函数的内部，然后再提供两个额外的函数——一个用于访问变量，另一个用于设置变量。设置函数中可以引入某些验证措施，以便在赋值之前给变量一定的保护(此处省略)。
我们需要将`getter`和`setter`这两个函数放在一个共同的函数中，并在该函数中定义`secret`变量，这使得两个函数能够共享同一作用域。具体代码如下：
```javascript
var getValue, setValue;
(function() {
        var secret = 0;
        getValue = function() {
                return secret;
        };
        setValue = function(v) {
                secret = v;
        };
})()

getValue(); // 0
setValue(123);
getValue(); // 123
```
在这里，所有一切都是通过一个匿名自调函数来实现的，我们在其中定义了全局函数`setValue()`和`getValue()`，并以此来确保局部变量`secret`的不可直接访问性。
### 迭代器
通常情况下，我们都知道如何用循环来遍历一个简单的数组，但是有时候我们需要面对更为复杂的数据结构，它们通常会有着与数组截然不同的序列规则。这时候就需要将一些“谁是下一个”的复杂逻辑封装成易于使用的`next()`函数。然后，我们只需要简单地调用`next()`就能实现相关的遍历操作了。在下面这个例子中，我们将依然通过简单的数组，而不是复杂的数据结构来说明问题。

下面是一个接受数组输入的初始化函数，我们在其中定义了一个私有指针，该指针会始终指向数组中的下一个元素。
```javascript
function setup(x) {
        var i = 0;
        return function() {
                return x[i++];
        };
}
```
现在，我们只需用一组数据来调用一下`setup()`，就会创建出我们所需要的`next()`函数。
```javascript
var next = setup(['a', 'b', 'c']);
```
接下来，我们只需重复调用一个函数，就可以不停地获取下一个元素。
```javascript
next(); // "a"
next(); // "b"
next(); // "c"
```
## 对象
我们可以用大括号{}来定义一个对象，这种方法叫做对象文本标识法。例如：
```javascript
var a = {};
```
另外，我们还可以通过构造器函数的方式来创建对象：
```javascript
function Hero() {
        this.name = 'a';
}
```
使用`new`操作符来创建对象：
```javascript
var hero = new Hero();
hero.name; // 'a'
```
当我们创建对象时，实际上同时也赋予了该对象一个特殊的属性——构造器属性(constructor property)，该属性实际上是一个指向用于创建该对象的构造器函数的引用。例如：
```javascript
hero.constructor; // Hero()
```
由于构造器属性所引用的是一个函数，因此，也可以利用它来创建一个新的对象：
```javascript
var h2 = new hero.constructor();
h2.name; // 'a'
```
另外，如果对象是通过对象文本标识法创建的，那么实际上它就是由内建构造器Object()函数所创建的。
```javascript
var o = {};
o.constructor; // Object()
typeof o.constructor; // 'function'
```
通过`instanceof`操作符，我们可以测试一个对象是不是由某个指定的构造器函数所创建的，例如：
```javascript
function Hero() {}
var h = new Hero();
var o = {};
h instanceof Hero; // true
h instanceof Object; // true
o instanceof Object; // true
```
### 返回对象的函数
除了使用new操作符来调用构造器函数以外，我们也可以抛开new操作符，只用一般函数来创建对象，这就需要一个能执行某些预备工作，并以对象为返回值的函数。例如：
```javascript
function factory(name) {
        reutnr {
                name: name
        };
}
var o = factory('one');
o.name; // 'one'
o.constructor // Object()
```
实际上，构造器函数也是可以返回对象的，只不过在`this`值的使用上会有所不同。这意味着我们需要修改构造器函数的默认行为。构造器的一般用法如下：
```javascript
function C() {this.a = 1};
var c = new C();
c.a; // 1
```
现在考虑这种用法：
```javascript
function C2() {this.a = 1; return {b: 2};}
var c2= new C2();
typeof c2.a; // underfined
c2.b; // 2
```
在这里，构造器返回的不在是包含属性`a`的`this`对象，而是另一个包含属性`b`的对象。但这也只有在函数返回值是一个对象时才会发生，而当我们企图返回的是一个非对象类型时，该构造器将会照常返回`this`。
### 传递对象
当我们拷贝某个对象或者将它传递给某个函数时，往往传递的都是该对象的引用，因此我们在引用上所做的任何改动，实际上都会影响它所引用的原对象。
```javascript
var orginal = {howmany: 1};
var copy = orginal;
copy.howmany; // 1
copy.howmany = 100;
orginal.howmany; // 100;
```
同样的，将对象传递给函数的情况也大抵如此。
```javascript
var orginal = {howmany: 100};
var nullify = function(o) {
        o.howmany = 0;
}
nullify(orginal);
orginal.howmany; // 0
```
### 对象比较
当我们对对象进行比较操作时，当且仅当两个引用同时指向同一个对象时为`true`。而如果是不同的对象，即使它们碰巧拥有相同的属性和方法，比较操作也会返回`false`。
```javascript
var fido = {breed: 'dog'};
var benji = {breed: 'dog'};
benji === fido // false
benji == fido // false
```
可以创建一个变量`mydog`，并将其中一个对象赋值给它，这样一来`mydog`实际上就指向了这个变量。
```javascript
var mydog = benji;
mydog === benji // true
```
### 内建对象中的Function
函数不仅是一种特殊的数据类型，还是一种对象。函数对象的内建构造器是`Function()`， 我们可以将它作为创建函数的一种备选方式(但我们并不推荐这种方式)。

也就是说下面三种定义函数的方式是等效的：
```javascript
function sum(a,b) {return a * b;};
var sum = function sum(a,b) {return a * b;};
var sum = new Function('a','b', 'return a * b');
```
如果我们使用的是`Function()`构造器的话，就必须通过其参数来设定函数的参数名和函数中的代码，javascript引擎会对这些源代码进行解析，然后直接创建新函数。这样一来，就会带来一些与`eval()`相似的缺点。因此我们要尽量避免使用`Function()`构造器来定义函数。
#### Function对象的属性
与其他对象不同的是，函数对象中含有一个构造器属性，其引用的就是`Function()`构造器函数。
```javascript
function myfunc(a) {return a;}
myfunc.constructor // Function()
```
另外，Function对象中也有一个length属性，用于记录该函数所拥有的参数数量。
```javascript
function myfunc(a, b, c){return true;}
myfunc.length // 3
```
该对象中还有一个在ECMA标准之外的属性，该属性对于浏览器来说还是非常重要的，那就是所谓的`caller`属性。这个属性会返回一个调用该函数对象的外层函数引用，也就是说，如果我们在函数B中调用函数A，那么只要我们在A中调用了A.caller，结果就会返回函数B()。
```javascript
function A() {return A.caller;}
function B() {return A();}
B() // b()
```
在我们希望自己的函数能根据其调用函数做出不同反应时，该属性会显得非常有用。如果我们在全局作用域内调用A()，也就是说它没有任何外层函数，A.caller的值就会为`null`。

函数对象中最重要的还是`prototype`属性。这里做个简单说明：
1. 每个函数的`prototype`属性中都包含了一个对象。
2. 它只有在该函数是构造器函数时才会发挥作用。
3. 该函数创建的所有对象都会有持有一个该`prototype`属性的引用，并可以将其当做自身的属性来使用。

下面是一个简单的例子：
```javascript
var obj = {
        name: 'gyh',
        say: function() {
                return 'I am '+ this.name;
        }
}
```
我们在这里创建一个空函数，可以看到该函数的prototype属性是一个空对象。
```javascript
function F() {}
typeof F.prototype // 'object'
```
将`obj`赋值给这个`prototype`
```javascript
F.prototype = obj;
```
现在，如果我们将`F()`当做一个构造器函数来创建对象，那么新对象就会拥有对所有`F.prototype`属性的访问权。
```javascript
var obj_new = new F();
obj_new.name // gyh
obj.say() // 'I am gyh'
```
#### Function对象的方法
所有的`Function`对象都是继承自父级对象`Object`的，因此它默认就有父级对象的所有方法，例如`toString()`，当我们对一个函数调用`toString()`时，将得到的就是该函数的源代码。

另外，函数对象中还有两个非常有用的方法：`call()`和`apply()`。通过这两个方法，我们就能让对象去借用其他对象中的方法。

下面我们来定义一个some_obj对象，其中包含了一个say()方法：
```javascript
var some_obj = {
        name: 'gyh',
        say: function(test) {
                return 'I am '+ this.name + test;
        }
}
```
现在，我们再来创建一个my_obj对象。它只有一个name属性。
```javascript
my_obj = {name: 'abc'};
```
显然，my_obj也适用于some_obj的say()方法，因此希望将它当做自身的方法来调用：
```javascript
some_obj.say.call(my_obj,'Dode'); // 'I am abc Dode'
```
我们在调用say()函数的对象方法call()时传递了两个参数：对象my_obj和字符串'Dode'。这样一来，当say()被调用时，其中的this就被自动设置成my_obj对象的引用。因而我们看到，`this.name`返回的不是'gyh'，而是'abc'。

如果我们调用`call`方法时需要传递更多的参数，可以在后面依次加入它们：
```javascript
some_obj.someMethod.call(my_obj, 'a', 'b', 'c');
```
如果我们没有将对象传递给`call()`的首参数，或者传递给它的是`null`。它的调用对象将被默认为全局对象。

`apply()`的工作方式与`call()`基本相同，唯一的不同之处在于参数的传递形式，这里目标函数所需要的参数都是通过一个数组来传递的。所以，下面两行代码的作用是等效的：
```javascript
some_obj.someMethod.call(my_obj, 'a', 'b', 'c');
some_obj.someMethod.call(my_obj, ['a','b','c']);
```
#### arguments对象
在一个函数中可以通过`arguments`来访问传递给该函数的所有参数：
```javascript
function f() {return arguments;}
f(1,2,3) // [1,2,3]
```
尽管`arguments`看上去像是一个数组，但它实际上是一个类似数组的对象。它和数组相似是因为其中也包含索引元素和length属性，但相似之处也就到此为止了。

另外，arguments对象中还有一个值得关注的属性：'callee'。该属性引用的是当前被调用的函数对象。也就是说，如果我们所建函数的返回值是arguments.callee，那么该函数在被调用时就会返回自身的引用。
```javascript
function f() {return arguments.callee;}
f() // f()
```
此外，我们还可以通过`arguments.callee`属性来实现匿名函数的递归调用：
```javascript
(
        function(count) {
                if (count < 3) {
                        alert(count);
                        arguments.callee(++count);
                }
        }
)(1)
```
## 原型
### 原型属性
在Javascript中，函数本身也是一个包含了方法和属性的对象。在函数定义时被创建的属性中就包括了`prototype`属性，它的初始值是一个空对象。
```javascript
function foo (a, b) {
        return a * b;
}
typeof foo.prototype // object
```
### 利用原型添加方法和属性
我们可以定义一个构造器函数，并用它来新建对象。这种做法的主要意图是通过`new`操作符来调用函数，以达到访问对象`this`值的目的，然后构造器就可以将其所创建的对象返回给我们。这样，我们就有了一种赋予新建对象一定功能的方法。下面是一个构造器函数Gadget():
```javascript
function Gadget (name, color) {
    this.name = name;
    this.color = color;
    this.whatAreYou = function() {
        return color + name;
    }
}
```
添加属性和方法还有另外一种方式，即通过构造器函数的`prototype`属性来增加该构造器所能提供的功能。
```javascript
Gadget.prototype.price = 100;
Gadget.prototype.rating = 3;
Gadget.prototype.getInfo = function() {
    return this.rating + this.price;
}
```
如果不想将它们逐一添加到原型对象中去，也可以另外定义一个对象，然后覆盖到之前的原型上：
```javascript
Gadget.prototype = {
        price: 100,
        rating: 3,
        getInfo: function() {
            return this.rating + this.price;
        }
}
```
### 使用原型的方法和属性
在向原型中添加完所有的方法和属性后，就可以直接用该构造器来创建对象了。通过新创建的对象，就可以访问之前定义的那些属性和方法了。
```javascript
var newtoy = new Gadget("webcam", "black");
newtoy.name; // webcam
newtoy.color; // black
newtoy.whatAreYou();
newtoy.price;
newtoy.rating;
newtoy.getInfo();
```
对于原型来说，最重要的是我们要理解它的“驻留”概念。由于在javascript中，对象都是通过传引用的方式来传递的，因此我们所创建的每个新对象实体中并没有一分属于自己的原型副本。这就是说，我们可以随时修改原型，并且与之相关的对象也会继承这一改变，甚至可能会影响在修改之前就已经创建了的对象。

例如，我们在之前的原型中添加一个新方法：
```javascript
Gadget.prototype.get = function() {
    return this.what;
};
```
然后我们就会看到，及时`newtoy`对象在`get()`方法定义之前就已经被创建了，但我们依然可以在该对象中访问新增的方法。
```javascript
newtoy.get("price"); // 100
```
### 自身属性与原型属性
当我们访问newtoy的某个属性，例如`newtoy.name`时，Javascript引擎就会遍历该对象的所有属性，并查找一个叫做`name`的属性。如果找到了就会立即返回其值。

当我们访问`rating`属性时，Javascript依然会查询newtoy对象的所有属性，但这一回它找不到一个叫`rating`的属性了。接下来，脚本引擎会去查询用于创建当前对象的构造器函数的原型，等价于我们直接访问`newtoy.constructor.prototype`。如果在原型中找到了该属性，就立即使用该属性。

这种方式与直接访问原型属性是一样的，每个对象都有属于自己的构造器属性，其所引用的就是用于创建该对象的那个函数，所以我们可以像下面这样：
```javascript
newtoy.constructor; // Gadget(name, color)
newtoy.constructor.prototype.rating; // 3
```

每个对象都会有一个构造器，而原型本身也是一个对象，这意味着它也必须有一个构造器，而这个构造器又会有自己的原型，我们可以这样做：
```javascript
newtoy.constructor.prototype.constructor; // Gadget(name, color)
newtoy.constructor.prototype.constructor.prototype;// Object price=100 rating=3
```
这个结构可能一直会持续下去，并最终取决于原型链(prototype chain)的长度。但其最后一环肯定是Object内建对象。因为它是最高级的父级对象。实际上，如果我们调用的是newtoy.toString()，那么在newtoy对象及其原型中都不会找到`toString()`方法。最后我们调用的只能是`Object`对象的`toString()`方法。

### 利用自身属性重写原型属性
我们知道如果在一个对象自身属性中没有找到指定的属性，就可以去原型链中查找相关的属性，也就是说，对象自身属性的优先级高于原型属性。
```javascript
function Gadget(name) {
    this.name = name;
}
Gadget.prototype.name = "foo";

var toy = new Gadget('camera');
toy.name; // camera
delete toy.name;
toy.name; // foo
```
如果想获得某个对象所有属性的列表，我们可以使用`for-in`循环。有些细节需要注意：
1. 并不是所有的属性都会在`for-in`循环中显示，那些已经被显示的属性被称为是可枚举的。我们可以通过各个对象所提供的`propertyIsEnumerable()`方法来判断其中有哪些可枚举的属性。
2. 原型链中的各个原型属性也会被显示出来，当然前提是它们是可枚举的。我们可以通过独享的`hasOwnProperty()`方法来判断一个属性是对象自身属性还是原型属性。
3. 对于所有的原型属性，`propertyIsEnumerable()`都会返回`false`，包括哪些在`for-in`循环中可枚举的属性。

```javascript
function Gadget(name, color) {
    this.name = name;
    this.color = color;
    this.someMethod = function(){return 1;}
}
Gadget.prototype.price = 100;
Gadget.prototype.rating = 3;

var newtoy = new Gadget('webcam', 'black');
for(var prop in newtoy)  {
    console.log(prop + ' = ' + newtoy[prop]);
}
// 结果
// name = webcam
// color = black
// someMethod = function() {return 1;}
// price = 100;
// rating = 3;
```
如果要对对象属性和原型属性做一个区分，就需要调用`hasOwnProperty()`方法：
```javascript
newtoy.hasOwnProperty('name'); // true
newtoy.hasOwnProperty('price'); // false
```
接下来试试`propertyIsEnumerable()`，该方法会对所有的非内建对象属性返回`true`，而对于大部分内建属性和方法来说，它们大部分是不可枚举的，另外，任何来自原型链中的属性也是不可枚举的。需要注意的是，如果`propertyIsEnumerable()`的调用是来自原型链上的某个对象，那么该对象中的属性是可枚举的。
```javascript
newtoy.propertyIsEnumerable('name') // true
newtoy.propertyIsEnumerable('constructor') // false
newtoy.propertyIsEnumerable('price') // false
newtoy.constructor.prototype.propertyIsEnumerable('price') // true
```
每个对象中都会有一个`isPrototypeOf()`方法，这个方法会告诉我们当前对象是否是另一个对象的原型。
```javascript
var monkey = {
    hair: true,
    feeds: 'bananas',
    breathes: 'airs'
};
function Human(name) {
    this.name = name;
}
Human.prototype = monkey;

var george = new Human('George');
monkey.isPrototypeOf(george); // true
```
### __proto__链接
在对象中存在一个指向相关原型的链接，这个链接被叫做__prooto__属性。__proto__属性与prototype并不是等价的。__proto__实际上是某个实体对象的属性。而prototype则是属于构造器函数的属性。
### 扩展内建对象
在JavaScript中，内建对象的构造器函数(例如Array、String、Object、和Function)都是可以通过其原型来进行扩展的。这意味着我们可以做一些事情，例如只要往数组原型中添加新的方法，就可以使其在所有的数组可用。例如，我们可以添加一个inArray()方法：
```javascript
Array.prototype.inArray = function(needle) {
    for(var i = 0, len = this.length; i < len; i++){
        if (this[i] === needle) {
            return true;
        }
    }
    return false;
}
```
现在，所有的数组对象都拥有了一个新的方法。
```javascript
var a = ['red', 'green', 'blue'];
a.isArray('red'); // true
a.isArray('yellow'); // false
```
由于通过原型来扩展内建对象是一项非常强大的技术，有了它，我们几乎可以随心所欲地重塑JavaScript语言的能力，但也正是由于它有如此强大的威力，我们在选择使用这项能力时就必须慎之又慎。

我们可以在实现某个方法时先检测一下是否有现成的方法存在。例如：
```javascript
if (!String.prototype.reverse) {
    String.prototype.reverse = function() {
        // TODO
    }
}
```
### 一些原型陷阱
在处理原型问题时，我们需要特别注意以下两种行为。
1. 当我们对原型对象执行完全替换时， 可能会触发原型链中某种异常。
2. prototy.constructor属性是不可靠的。
下面，我们来新建一个简单的构造器函数，并用它再创建两个对象：
```javascript
function Dog(){
    this.tail = true;
}
var benji = new Dog();
var rusty = new Dog();
```
在对象创建后，我们为原型添加的属性也能被这些对象访问到，例如：
```javascript
Dog.prototype.say = function(){
    return 'woof';
}
benji.say(); // woof
rusty.say(); // woof
```
但值得注意的是，如果我们这里访问的是该原型独享的构造器，返回的也是Dog()，这就不太对了，因为这时候它的原型对象应该是一个由Object()创建的一般对象，并不拥有Dog()所创造的对象所拥有的属性。
```javascript
benji.constructor.prototype.constructor; // Dog()
typeof benji.constructor.prototype.tail; // undefined
```
如果我们用一个自定义的新对象完全覆盖掉原有的原型对象，原有对象不能访问原型的新增属性，但它们依然通过__proto__与原有的原型对象保持联系。而之后创建的所有对象使用的都是被更新后的prototype对象，并且，其__proto__也指向了新的prototype对象。
```javascript
Dog.prototype = {paws: 4, hair: true};

typeof benji.paws; // undefined
benji.say(); // woof

var lucy = new Dog();
lucy.say(); // lucy.say is not a function
lucy.paws; // 4

typeof lucy.__proto__.say // undefined
typeof lucy.__proto__.paws // number
```
但这时候，新对象的constructor属性就不能再保持正确了，原本应该是Dog()的引用却指向了Object()：
```javascript
lucy.constructor // Object()
benji.constructor // Dog()
```
当然，我们可以通过下面两行代码来解决上述所有的异常行为。
```javascript
Dog.prototy = {paws: 4, hair: true};
Dog.prototype.constructor = Dog;
```
当我们重写某对象的prototype时，重置相应的constructor属性是一个好习惯。

## 继承
### 原型链
JavaScript中的每个函数中都有一个名为prototype的对象属性，该函数被new操作符调用时会创建出一个对象，并且该对象中会有一个指向其原型对象的链接，通过该链接我们就可以在新建的对象中调用相关原型对象的方法和属性。

而原型链自身对象也具有对象固有的普遍特征，因此本身也包含了指向其原型的链接，由此就形成了一条链，我们称之为原型链。链条末端是Object对象，该对象是JavaScript中的最高级父对象，语言中所有对象必须继承自它。

正是因为有了这些技术，我们才可以在某个属性不在对象中而在它的原型链中时，依然将它当做A的属性来访问。这就是继承的作用，它能使每个对象都能访问其继承链上的任何一个属性。
#### 原型链示例
原型脸上ECMAScript标准指定的默认继承方式。下面是一个示例：
```javascript
function Shape(){
    this.name = "shape";
    this.toString = function(){
        return this.name;
    }
}

function TwoDShape(){
    this.name = "2D shape";
}

function Triangle(side, height){
    this.name = "Triangle";
    this.side = side;
    this.height = height;
    this.getArea = function(){
        return this.side * this.height / 2;
    }
}

TwoDShape.prototype = new Shape();
Triangle.prototype = new TwoDShape();

TwoDShape.prototype.constructor = TwoDShape;
Triangle.prototype.constructor = Triangle;
```
在这里，我们将对象直接创建在TwoDShape对象的prototype属性中，并没有去扩展这些对象的原有原型。当我们对独享的prototype属性进行完全重写时，有可能会对对象constructor属性产生一定的负面影响，所以我们在完成继承关系设定后，要对这些对象的constructor属性进行相应的重置。
```javascript
var my = new Triangle(5, 10);
my.getArea(); // 25
my.toString(); // Triangle
```
JavaScript引擎在`my.toSting() `被调用时做了如下操作：
1. 首先，它会遍历my对象中的所有属性，但没有找到一个叫做toString()的方法。
2. 接着再去查看__proto__所指向的对象，该对象是在继承关系构建过程中由`new TwoDShape()`所创建的实体。
3. Javascript引擎在遍历TwoDShape实体的过程中依然不会找到toString()方法，然后，它又会继续检查该实体的__proto__属性。这时候，该__proto__属性所指向的实体是由new Shape()所创建的。
4. 终于在new Shape()所创建的实体中找到了toString()方法。
5. 最后，该方法就会在my对象中被调用，并且其`this`也指向了my。
```javascript
my.constructor // Triangle(side, height)
my.instanceOf Shape // true
my.instanceOf TwoDShape // true
my.instanceOf Triangle // true
my.instanceOf Array // false
Shape.prototype.isPrototypeOf(my) // true
TwoDShape.prototype.isPrototypeOf(my) // true
Triangle.prototype.isPrototypeOf(my) // true
String.prototype.isPrototypeOf(my) // false
```
#### 将共享属性迁移到原型中去
当我们用某一个构造器创建对象时，其属性就被添加到this中去，这会使某些不能通过实体改变的属性出现一些效率低下的情况，在上面的示例中，每当我们用`new Shape()`新建对象时，每个实体都会有一个全新的name属性，并在内存中拥有自己独立的存储空间。而事实上，我们也可以选择将name属性添加到所有实体所共享的原型对象中去：
```javascript
function Shape(){}
Shape.prototype.name = 'shape';
```
这样一来，当我们调用`new Shape()`时，新对象中就不会再含有自己的name属性了，而是被添加到该对象的原型中。虽然这样做通常更有效率，但这也只是针对对象实体中的不可变属性而言的，另外，这种方式也同样适用于对象中的共享性方法。

下面，改善一下之前的示例：
```javascript
function Shape(){}
Shape.prototype.name = 'shape';
Shape.prototype.toString = function(){return this.name};
function TwoShape(){}
TwoDShape.prototype = new Shape();
TwoDShape.prototype.constructor = TwoDShape;
TwoDShape.prototype.name ='2D shape';

function Triangle(side, height){
    this.side = side;
    this.height = height;
}
Triangle.prototype = new TwoDShape();
Triangle.prototype.constructor = Triangle;
Triangle.prototype.name = 'Triangle';
Triangle.prototype.getArea = function(){return this.side*this.height/2;};
```
我们通常会在对原型对象扩展之前，先完成相关的继承关系构建。

修改完成后，之前的代码都适用于当前版本：
```javascript
var my = new Triangle(5, 10);
my.getArea(); // 25
my.toString(); // Triangle
```
实际上调用`my.toString()`的区别仅仅在于幕后的某些少量操作。主要区别也就是方法的查找操作将更多地发生在Shape.prototype中，而不再需要像前面示例中那样，到由`new Shape()`所创建的实体对象中去找了。
### 只继承于原型
出于效率考虑，我们应该尽可能将一些可重用的属性和方法添加到原型中去，这样我们仅仅依靠原型就能完成继承关系的构建了。由于原型中的所有代码都是可重用的，这意味着继承自Shape.prototype比继承自`new Shape()`所创建的实体要好得多。毕竟，`new Shape()`方式会将Shape的属性设为对象自身属性，这样的代码是不可重用的。我们采取以下方式对效率再做一些改善。
1. 不要单独为继承关系创建新对象。
2. 尽量减少运行时方法搜索，例如toString()。
```javascript
function Shape() {}
Shape.prototype.name = 'shape';
Shape.prototype.toSting() = function(){
    return this.name;
}

function TwoDShape() {}
TwoDShape.prototype = Shape.prototype;
TwoDShape.prototype.constructor = TwoDShape;
TwoDShape.prototype.name = '2D shape';

function Triangle(side, height) {
    this.side = side;
    this.height = height;
}
Triangle.prototype = TwoDShape.prototype;
Triangle.prototype.constructor = Triangle;
Triangle.prototype.name = 'Triangle';
Triangle.prototype.getArea = function() {
    return this.side*this.height/2;
}

var my = new Triangle(5,10);
my.getArea(); // 25
my.toString(); // 'Triangle'
```
使用上面的方式，JavaScript引擎同样会先查看my对象中有没有`toString()`方法，自然，它不会找到。于是就会转而去搜索该对象的原型属性。此时该原型上已经指向了TwoDShape的原型，而后者指向的又是Shape.prototype。

这样简单拷贝原型从效率上来说固然会好一些，但也有它的副作用。由于子对象与父对象指向的是同一个对象，所以一旦子对象对其原型进行了修改，父对象也会随即被改变，甚至所有的继承关系也都是如此。
```javascript
Triangle.prototype.name = 'Triangle';
var s = new Shape();
s.name;// Triangle
```
Triangle对对象的name属性进行了修改，于是`Shape.prototype.name`也随之被改变了。
#### 临时构造器
如果所有的属性都指向了一个相同的对象，父对象就会受到子对象属性的影响。要解决这个问题，就必须利用某种中介来打破这种连锁关系，我们可以用一个临时构造器函数来充当中介。即我们创建一个空函数f()，并将其原型设置为父级构造器。然后，我们既可以利用`new F()`来创建一些不包含父对象属性的对象，同事又可以从父对象prototype属性中继承一切了。
```javascript
function Shape() {}
Shape.prototype.name = 'shape';
Shape.prototype.toSting() = function(){
    return this.name;
}

function TwoDShape() {}
var F = function () {}
F.prototype = Shape.prototype;
TwoDShape.prototype = new F();
TwoDShape.prototype.constructor = TwoDShape;
TwoDShape.prototype.name = '2D shape';

function Triangle(side, height) {
    this.side = side;
    this.height = height;
}
var F = function() {};
F.prototype = TwoDShape.prototype
Triangle.prototype = new F();
Triangle.prototype.constructor = Triangle;
Triangle.prototype.name = 'Triangle';
Triangle.prototype.getArea = function() {
    return this.side*this.height/2;
}

var my = new Triangle(5,10);
my.getArea(); // 25
my.toString(); // 'Triangle'
```
通过这种方法，我们就可以在保持原型链的基础上使父对象的属性摆脱子对象的影响了。
```javascript
my.__proto__.__proto__.__proto__.constructor // Shape()
a.name; // shape
```
### uber——子对象访问父对象的方式
我们在实现子类方法往往需要其父类方法的额外辅助，在这种情况下，子类通常就要去调用父类中的同名方法，以便最终完成工作。接下来，我们再对之前的示例做一些修改，在构建继承关系的过程中引入一个uber属性，并令其指向其父级原型对象。
```javascript
function Shape() {}
Shape.prototype.name = 'shape';
Shape.prototype.toString = function() {
    var result = [];
    if (this.constructor.uber) {
        result[result.length] = this.constructor.uber.toString();
    }
    result[result.length] = this.name;
    return result.join(', ');
};
function TwoDShape() {}
var F = function(){};
F.prototype = Shape.prototype;
TwoDShape.prototype = new F();
TwoDShape.prototype.constructor = TwoDShape;
TwoDShape.uber = Shape.prototype;
TwoDShape.prototype.name = '2D shape';
function Triangle(side, height) {
    this.side = side;
    this.height = height;
}
var F = function() {};
F.prototype = TwoDShape.prototype
Triangle.prototype = new F();
Triangle.prototype.constructor = Triangle;
Triangle.uber = TwoDShape.prototype;
Triangle.prototype.name = 'Triangle';
Triangle.prototype.getArea = function() {
    return this.side*this.height/2;
}
```
在此之前，`toString()`所做的仅仅是返回this.name的内容，现在我们为它新增了一项额外任务，即检查对象中是否存在`this.constructor.uber`属性，如果存在，就先调用该属性的toString方法。在这里，this.constructor本身是一个函数，而this.constructor.uber则是指向当前对象父级原型的引用。因而，当我们调用Triangle实体的`toString()`方法时，其原型链上所有的`toString()`都会被调用：
```javascript
var my = new Triangle(5, 10);
my.toString(); // shape, 2D shape, Triangle
```
### 将继承部分封装成函数
下面，我们要将这些实现继承关系的代码提炼出来，并迁入一个叫做`extend()`的可重用函数中：
```javascript
function extend(child, Parent) {
    var F = function(){};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.uber = Parent.prototype;
}

extend(TwoDShape, Shape);
extend(Triangle, TwoDShape)
```
通过应用上面的函数，我们既可以使代码保持简洁。又能将其重用在构建继承关系的任务中。
### 属性拷贝
在构建可重用的继承代码时，我们也可以简单地将父对象的属性拷贝给子对象，参照之前的`extend()`接口，我们可以创建一个`extend2()`函数，该函数也接受两个构造器函数为参数，并将parent的原型属性全部拷贝给child原型。其中包括方法，因为方法本身也是一种函数类型的属性。
```javascript
function extend2(Child, Parent) {
    var p = Parent.prototype;
    var c = Child.prototype;
    for (var i in p) {
        c[i] = p[i];
    }
    c.uber = p;
}
```
与之前的方法相比，这个方法在效率上要低，因为这里执行的是子对象原型的逐一拷贝，而非简单的原型链查询。所以我们必须要记住，这种方式仅适用于只包含基本数据类型的对象，所有的对象类型(包括函数和数组)都是不可复制的，因为它们只支持引用传递。

以下有两个构造器函数Shape()和TwoDShape()，其中，Shape()的原型中包含了一个基本类型属性name，和一个非基本类型属性`toString()`方法：
```javascript
var Shape = function(){};
var TwoDShape = function(){};
Shape.prototype.name = 'shape';
Shape.prototype.toString = function() {
    return this.name;
}
```
如果我们通过extend()方法来实现继承，那么name属性既不会是TwoDShape()实例的属性，也不会成为其原型对象的属性，但是子对象依然可以通过继承方式来访问该属性：
```javascript
extend(TwoDShape, Shape);
var td = new TwoDShape();
td.name; // shape
TwoDShape.prototype.name; // shape
td.__proto__.name; // shape
td.hasOwnProperty('name') // false
td.__proto__.hasOwnProperty('name') // false
```
而如果继承是通过extend2()方法实现的，TwoDShape()的原型找找那个就会拷贝有属于自己的name属性，同样的，其中也会拷贝有属于自己的toString()方法，但这只是一个函数引用，函数本身并没有被再次创建。
```javascript
extend2(TwoDShape, Shape);
var td = new TwoDShape();
td.__proto__.hasOwnProperty('name') // true
td.__proto__.hasOwnProperty('toString') // true
td.__proto__.toString === Shape.prototype.toString // true
```
extend2()方法的效率要低于extend()，主要是前者对部分原型进行了重建，这对于只包含基本数据类型的对象来说，未必就如此糟糕。而且，这样做还能使属性查找操作更多地停留在对象本身，从而减少了原型链上的查找。
### 小心处理引用拷贝
事实上，对象类型(包括数组与函数)通常都是以引用方式来进行拷贝的，这有时会导致一些不可预测的结果。
```javascript
var A = function() {}, B = function() {};
A.prototype.stuff = [1,2,3];
A.prototype.name = 'a';
extend2(B, A);
B.prototype.hasOwnProperty('name') // true
B.prototype.hasOwnProperty('stuff') // true
B.prototype.stuff // [1,2,3]
B.prototype.stuff === A.prototype.stuff // true

// 改变B中的name,不会对A有影响
B.prototype.name += 'b' // 'ab'
A.prototype.name // a

// 改变B的stuff属性，A就会受到影响了，因为这两个属性引用的是同一个数组：
B.prototype.stuff.push(4,5,6);
A.prototype.stuff; // [1,2,3,4,5,6]
```
如果我们用另一个对象对B的stuff属性进行完全重写而不是修改现有属性，A的stuff属性会继续引用原有对象，而B的stuff属性则指向了新的对象。
```javascript
B.prototype.stuff = ['a', 'b', 'c'];
A.prototype.stuff; // [1.2.3.4.5.6]
```
### 深拷贝
当对象类型的属性被拷贝时，实际上拷贝的只是该对象在内存中的位置指针，这一过程就是所谓的浅拷贝，在这种情况下，如果我们修改了拷贝对象，就等同于修改了原对象，而深拷贝可以帮助我们避免这方面的问题。

深拷贝的实现方式与浅拷贝基本相同，也需要通过遍历对象的属性来进行拷贝操作。
只是在遇到一个对象引用性的属性时，我们需要再次对其调用深拷贝函数。
```javascript
function deepCopy(p, c) {
    var c = c || {};
    for (var i in p) {
        if (typeof p[i] === 'object') {
            c[i] = (p[i].constructor === Array ) ? [] : {};
            deepCopy(p[i], c[i]);
        } else {
            c[i] = p[i];
        }
        return c;
    }
}

var parent = {
    number: [1, 2, 3],
    letters: ['a', 'b', 'c'],
    obj: {
        prop: 1
    },
    bool: true
};
```
下面，我们分别用深拷贝和浅拷贝测试一下，就会发现深拷贝与浅拷贝的不同，对它的number属性进行更新不会对原对象产生影响。
```javascript
var mydeep= deepCopy(parent);
mydeep.number.push(4,5,6);
mydeep.number; // [1, 2, 3, 4, 5, 6]
parent.number; // [1, 2, 3]
```
