---
title: CSS布局
date: 2018-01-22 17:01:33
tags:
---
对`CSS` 布局做一下简单的总结，后续慢慢补充。

## 传统盒模型布局方式
传统布局方式，通过盒模型，使用`display` 属性、`position` 属性、`float` 属性进行布局。
## flex (弹性布局)
> 2009年，W3C 提出了一种新的方案----Flex 布局，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持，这意味着，现在就能很安全地使用这项功能。
>
> Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。

使用`flex` 布局以后，子元素的`float` 、`clear`、 `vertical-align` 属性将失效。

### 指定flex布局
容器指定为`flex` 布局：
``` css
.box {
    display: flex;
}
```
行内元素使用`flex` 布局：
``` css
.box {
    display: inline-flex;
}
```
采用 `Flex` 布局的元素，称为 `Flex` 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 `Flex` 项目（flex item），简称"项目"。

容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做`main start` ，结束位置叫做`main end` ；交叉轴的开始位置叫做`cross start` ，结束位置叫做`cross end` 。

项目默认沿主轴排列。单个项目占据的主轴空间叫做`main size` ，占据的交叉轴空间叫做`cross size` 。

### 容器的属性
* flex-direction
* flex-wrap
* flex-flow
* justify-content
* align-items
* align-content

#### flex-direction
`flex-direction` 属性决定主轴的方向（即项目的排列方向）。
``` css
.box {
    flex-direction: row | row-reverse | column | column-reverse;
}
```
它可能有4个值:
* row（默认值）：主轴为水平方向，起点在左端。
* row-reverse：主轴为水平方向，起点在右端。
* column：主轴为垂直方向，起点在上沿。
* column-reverse：主轴为垂直方向，起点在下沿。

#### flex-wrap
`flex-wrap` 属性定义，如果一条轴线排不下，如何换行。
``` css
.box {
    flex-wrap: nowrap | wrap | wrap-reverse;
}
```
它可能有3个值:
* nowrap（默认）：不换行。
* wrap：换行，第一行在上方。
* wrap-reverse：换行，第一行在下方。

#### flex-flow
`flex-flow` 属性是`flex-direction` 属性和`flex-wrap` 属性的简写形式，默认值为`row` `nowrap`。
``` css
.box {
    flex-flow: <flex-direction> || <flex-wrap>;
}
```
#### justify-content
`justify-content` 属性定义了项目在主轴上的对齐方式。
``` css
.box {
    justify-content: flex-start | flex-end | center | space-between | space-around;
}
```
它可能取5个值，具体对齐方式与轴的方向有关。下面假设主轴为从左到右。
* flex-start（默认值）：左对齐
* flex-end：右对齐
* center： 居中
* space-between：两端对齐，项目之间的间隔都相等。
* space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

#### align-items
`align-items` 属性定义项目在交叉轴上如何对齐。
``` css
.box {
    align-items: flex-start | flex-end | center | baseline | stretch;
}
```
#### align-content
`align-content` 属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
``` css
.box {
    align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```
该属性可能取6个值。
* flex-start：与交叉轴的起点对齐。
* flex-end：与交叉轴的终点对齐。
* center：与交叉轴的中点对齐。
* space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
* space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
* stretch（默认值）：轴线占满整个交叉轴。

### 项目的属性
以下6个属性设置在项目上。
* order
* flex-grow
* flex-shrink
* flex-basis
* flex
* align-self

#### order
`order` 属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。
``` css
.item {
    order: <integer>;
}
```
#### flex-grow
`flex-grow` 属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
``` css
.item {
    flex-grow: <number>; /* default 0 */
}
```
如果所有项目的`flex-grow` 属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的`flex-grow` 属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。

#### flex-shrink
`flex-shrink` 属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
``` css
.item {
    flex-shrink: <number>; /* default 1 */
}
```
如果所有项目的`flex-shrink`属性都为1，当空间不足时，都将等比例缩小。如果一个项目的`flex-shrink`属性为0，其他项目都为1，则空间不足时，前者不缩小。

负值对该属性无效。
#### lex-basis
`flex-basis` 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为`auto` ，即项目的本来大小。
``` css
.item {
    flex-basis: <length> | auto; /* default auto */
}
```
它可以设为跟`width` 或`height` 属性一样的值（比如350px），则项目将占据固定空间。
#### flex
`flex` 属性是`flex-grow` , `flex-shrink` 和 `flex-basis`的简写，默认值为`0 1 auto` 。后两个属性可选。
``` css
.item {
    flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```
该属性有两个快捷值：`auto (1 1 auto)` 和 `none (0 0 auto)`。

建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。
#### align-self
`align-self` 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items` 属性。默认值为`auto` ，表示继承父元素的`align-items` 属性，如果没有父元素，则等同于`stretch` 。
``` css
.item {
    align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

## grid 网格布局
二维布局模块，具有强大的内容尺寸和定位能力，适合需要在两个维度上对齐内容的布局。
这种布局方式在工作中比较少用，后续再总结。

## 流式布局
固定布局和流式布局在网页设计中最常用的两种布局方式。固定布局能呈现网页的原始设计效果，流式布局则不受窗口宽度影响，流式布局使用百分比宽度来限定布局元素，这样可以根据客户端分辨率的大小来进行合理的显示。

## 瀑布流布局
瀑布流布局是流式布局的一种。是当下比较流行的一种网站页面布局，视觉表现为参差不齐的多栏布局，随着页面滚动条向下滚动，这种布局还会不断加载数据块并附加至当前尾部。

## 响应式布局
通过`media` 查询针对不同的媒介，不同的尺寸设置不同的样式。

通过`rem`来调整尺寸。`rem` 是`CSS3` 新引进来的一个度量单位，相对长度单位。相对于根元素(即`html`元素) `font-size` 计算值的倍数。

## 实践
### 水平居中
1. 固定宽度 `marin: 0 auto`实现
``` css
 .container {
     width: 200px;
     height: 200px;
     margin: 0 auto;
 }
```
2. 宽度未知，行内元素 + `text-align: center;` 实现
``` css
.container {
    width: 200px;
	height: 400px;
	position: relative;
	text-align: center;
}
.inner {
    display: inline-block;
}
```
### 垂直居中
1. 单行行内元素 `line-height` 实现
``` css 
.container {
    height: 400px;
}
.inner {
    display: inline-block;
    height: 200px;
    line-height: 200px;
}
```

### 圣杯布局
两边定宽，中间自适应的三栏布局。
1. 将中间子元素的宽度设置为 100%，左边和右边的子元素设置为固定的宽度。中间栏要在放在文档流前面以优先渲染。
2. 三个子元素都设置左浮动。
3. 使用负`margin` 的方法使子元素在同一行显示。
4. 中间子元素设置`padding` 使中间子元素不被遮盖。
5. `relative` 定位使左右两边的子元素向两边移动。

实现如下:
``` html
<!DOCTYPE html>
<html>
<head>
	<title>圣杯布局</title>
	<style type="text/css">
		.container {
			padding: 0 200px;
		}
		.middle {
			width: 100%;
			background-color: yellow;
			height: 200px;
			float: left;
		}
		.left {
			background-color: red;
			width: 200px;
			height: 200px;
			float: left;
			font-size: 40px;
			color: #fff;
			margin-left: -100%;
			position: relative;
			left: -200px;
		}
		.right {
			width: 200px;
			height: 200px;
			background-color: blue;
			font-size: 40px;
			float: left;
			color: #fff;
			position: relative;
			margin-left: -200px;
			right: -200px;
		}
	</style>
</head>
<body>
	<div class="container">
		<div class="middle">
			圣杯布局圣杯布局圣杯布局圣杯布局圣杯布局圣杯布局圣杯布局圣杯布局
		</div>
		<div class="left">left</div>
		<div class="right">right</div>
	</div>
</body>
</html>
```

### 双飞翼布局
使用圣杯布局时，当你将浏览器宽度缩短到一定程度的时候，布局就会出现问题。双飞翼布局解决了这种弊端。

> 圣杯布局和双飞翼布局解决问题的方案在前一半是相同的，也就是三栏全部float浮动，但左右两栏加上负`margin` 让其跟中间栏`div` 并排，以形成三栏布局。
>
> 不同在于解决 `中间栏div内容不被遮挡` 问题的思路不一样：圣杯布局，为了中间`div` 内容不被遮挡，将中间`div` 设置了左右`padding-left` 和`padding-right` 后，将左右两个`div` 用相对布局`position: relative` 并分别配合`right` 和`left` 属性，以便左右两栏`div` 移动后不遮挡中间`div` 。
>
> 双飞翼布局，为了中间`div` 内容不被遮挡，直接在中间`div` 内部创建子`div` 用于放置内容，在该子`div` 里用`margin-left` 和`margin-right` 为左右两栏`div` 留出位置。

实现如下:
``` html
<!DOCTYPE html>
<html>
<head>
	<title>圣杯布局</title>
	<style type="text/css">
		.container {
			padding: 0 200px;
		}
		.middle-container {
			width: 100%;
			background-color: yellow;
			height: 200px;
			float: left;
		}
		.middle {
			margin-left: 200px;
			margin-right: 200px;
		}
		.left {
			background-color: red;
			width: 200px;
			height: 200px;
			float: left;
			font-size: 40px;
			color: #fff;
			margin-left: -100%;
		}
		.right {
			width: 200px;
			height: 200px;
			background-color: blue;
			font-size: 40px;
			float: left;
			color: #fff;
			margin-left: -200px;
		}
	</style>
</head>
<body>
	<div class="container">
		<div class="middle-container">
			<div class="middle">
				测试测试测试测试测试测试测试测试测试
			</div>
		</div>
		<div class="left">left</div>
		<div class="right">right</div>
	</div>
</body>
</html>
```
___
参考:

[CSS 常见布局方式](https://juejin.im/post/599970f4518825243a78b9d5)

[Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

[CSS3与页面布局学习总结（四）——页面布局大全](https://www.cnblogs.com/best/p/6136165.html#_label3_0_0_0)