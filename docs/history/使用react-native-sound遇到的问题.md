---
title: 使用react-native-sound遇到的问题
date: 2017-12-15 21:30:01
tags:
---
使用`react-native` 的时候需要播放音频文件，百度后发现了一个叫`react-native-sound`的第三方库。

在使用的过程中发现一个`wav` 的文件无法播放。最初以为是代码问题，去照搬了官方的demo后还是不行，但播放其他`wav` 文件是成功的。

根据打出的错误`{"extra":-2147483648,"what": 1}` 查了一下，发现是`android.media.MediaPlayer` 抛出的异常。`what 1`指的是错误`MEDIA_INFO_UNKNOWN`。继续查下去，发现问题原因是安卓机器不支持该文件的编码格式，猜测需要做一下格式转换，转换成一个mp3文件后播放成功。