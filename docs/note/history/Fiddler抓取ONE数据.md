---
title: Fiddler抓取ONE数据
date: 2017-09-03 20:09:03
tags:
---
### 1. 下载Fiddler
### 2. 设置抓包规则
勾选以下选项，抓取HTTPS连接，忽略证书错误以免抓包的时候一直弹窗。
![HTTPS](/Fiddler/1.png)

开启远程连接，设置端口为8888。
![Connection](/Fiddler/2.png)

**设置完成后重启一下Fiddler以免设置没有生效。**
### 3. 搭建网络环境
使手机和电脑在同一个局域网下，可以电脑上开一个wifi出来。查看电脑内网地址，这是等一下代理服务器的地址。

![IP](/Fiddler/3.png)
### 4. 设置手机代理
在手机已连接的wifi上设置手动代理。服务器为上一步查看的电脑内网地址，端口为Fiddler设置的端口，本例为8888。
### 5. 下载证书
打开手机浏览器，输入`http://ip:port` 进入 `Fiddler Echo Service` 点击最下面的证书下载。
### 6. 抓包
打开APP，这里以`ONE`为例。可以在Fiddler上看到各个相关的请求。

![Request](/Fiddler/4.png)

在右边的面板上可以看到返回的数据。我们可以从中提取自己需要的信息。

![Info](/Fiddler/5.png)