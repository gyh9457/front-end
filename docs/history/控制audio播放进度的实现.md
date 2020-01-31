---
title: 控制audio播放进度的实现
date: 2018-02-24 22:16:54
tags:
---
设置`div` 标签，控制标签的颜色来显示播放进度。
``` html
<div class="progress-bar">
    <div class="now"></div>
</div>
```
在鼠标点击时修改当前播放时间。通过点击位置左边部分的长度占总长度的百分比来判断当前播放时间。

``` js
// 总长度
const total = event.target.offsetWidth
```

``` js
// 边框左边所在的位置
const left = event.target.getBoundingClientRect().left
```

`getBoundingClientRect` 返回值是一个 `DOMRect` 对象,`DOMRect` 对象包含了一组用于描述边框的只读属性——left、top、right和bottom。通过 `left` 属性获取进度条边框相对于视口左边的位置。

``` js
// 鼠标点击位置
const right = event.pageX
```

`pageX` 是一个由`MouseEvent` 接口返回的相对于整个文档的x（水平）坐标以像素为单位的只读属性。这个属性考虑任何页面的水平方向上的滚动。

得到上面的三个值以后计算当前时间并进行设置。
``` js
const currentTime = (right - left) / total * this.refs.audio.duration
this.refs.audio.currentTime = currentTime
```
___
[Element.getBoundingClientRect()](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect)

[MouseEvent.pageX](https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent/pageX)

[HTMLElement.offsetWidth](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetWidth)