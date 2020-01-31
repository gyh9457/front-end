---
title: 云主机上部署Node.js应用
date: 2017-07-15 22:44:18
tags:
---
## 部署Node.js应用
在腾讯云上获取一个云主机，使用`putty`登录到实例。本次的主机采用CentOS，以下都是在CentOS上进行操作。
### 安装`git`
```bash
yum install git -y
```
### 安装nvm
```bash
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
command -v nvm
```
如果安装完成后 `nvm` 命令不生效，可以关掉当前终端，重开一个。
### 安装Node
```bash
nvm install node
```
### 部署应用
创建一个目录用于存放项目代码，本次使用`vue-hackernews-2.0`做测试。
```bash
madir app
cd app
git clone https://github.com/vuejs/vue-hackernews-2.0.git
cd vue-hackernews-2.0
// ps:firebase在云服务器上下载报错
// 暂时没找到解决方法 先从window上下载后
// 传到服务器的node_modules下
npm install

// 使用forever启动应用
npm install forever -g
NODE_ENV=production forever start server.js
```
至此，项目部署成功。`公网IP:8080`可以正常访问。

