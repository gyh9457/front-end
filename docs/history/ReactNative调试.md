---
title: ReactNative调试
date: 2017-11-19 16:40:37
tags:
---
`ReactNative` 的调试方法[官方文档](http://reactnative.cn/docs/0.50/debugging.html#content)上都写得很清楚，这里不再赘述，记录两个踩过的坑。

1. 设备通过摇晃设备的方法无法打开开发菜单(设备本身对这一方面做了限制)。这个时候可以通过 `adb` 指令来打开：`adb shell input keyevent 82`。
2. 使用官方提供的桌面版调试工具   `react-devtools` 无法连接到设备的问题，是因为没有做端口映射。需要执行以下命令 `adb reverse tcp:8097 tcp:8097`。