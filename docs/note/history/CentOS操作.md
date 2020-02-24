---
title: CentOS操作
date: 2017-09-17 20:03:21
tags:
---
### 添加新用户并授权
``` bash
useradd testname
passwd testname
// 输入要为testname设置的密码
```
找到 `sudoers`文件并添加写权限
``` bash
ls -l /etc/sudoers
chmod -v u+w /etc/sudoers
```
添加新增用户
``` bash
## Allow root to run any commands anywhere
root    ALL=(ALL)       ALL
testname    ALL=(ALL)       ALL  ## 这是新添加的用户
```
添加完用户后记得收回写权限
``` bash
chmod -v u-w /etc/sudoers
```
### 修改远程登录端口
#### 修改SSH配置文件
``` bash
vim /etc/ssh/sshd_config
# 找到 #Port 22 添加下面一行 并去掉Port的注释
Port xxxx
```
SSH默认监听22端口，如果没有强制说明别的端口。`# Port 22` 有没有放开注释都是开放22端口的访问。上面保留了22端口，防止配置出现问题导致22端口也不能使用，可以等确定端口修改成功后，再注释掉22端口。

修改完成后重启一下SSH服务
``` bash
systemctl restart sshd.service
```
#### SELinux配置
首先看看SELinux是否开启，如果关闭的话可以跳过这一步骤。
``` bash
sestatus # SELinux status disabled
```
如果是 `disabled` 说明selinux是关闭的。

``` bash
semanage port -l|grep ssh # 查看SELinux开放给ssh使用的端口
# 如果报semanage找不到命令
# yum install policycoreutils-python
```
如果添加的端口没有在开放的端口里面，就添加一下
``` bash
# 添加
semanage port -a -t ssh_port_t -p tcp xxxx
# 再次查看
semanage port -l|grep ssh
```
#### 防火墙配置
如果关闭了防火墙，可以忽略这一步。CentOS7使用的防火墙是`firewall`。
``` bash
# 查看状态
systemctl status firewalld.service
# 查看是否开放了xxxx端口
firewall-cmd --permanent --query-port=xxxx/tcp
# 如果没有 则添加该端口
firewall-cmd --permanent --add-port=xxxx/tcp
# 重载防火墙策略
firewall-cmd –reload
# 重新查看是否开放了端口
firewall-cmd --permanent --query-port=xxxx/tcp
```
以上都配置完以后重启一下服务器，用新添加的端口做一下测试。
#### 附
在阿里云中需要在安全组中放行一下添加的端口，否则无法成功。

控制台——云服务器ECS——管理——本实例安全组——配置规则——内网人方向——添加安全组规则

``` bash
# 查看某端口是否被占用
netstat -lnp|grep xxxx
# SELinux配置开启或关闭
vim /etc/selinux/config
# 修改 SELINUX=disabled/enforcing

# 开启防火墙
systemctl start firewalld.service
# 关闭防火墙
systemctl stop firewalld.service
# 开机自动启动
systemctl enable firewalld.service
# 关闭开机自动启动
systemctl disable firewalld.service
```

### Nginx配置80端口转3000端口
``` bash
# 安装nginx
sudo yum install nginx
# 开启nginx服务
sudo systemctl start nginx

# 进入/etc/nginx/conf.d下创建配置文件
cd /etc/nginx/conf.d
sudo vim gyanhao-com-3000.conf
```
配置文件如下：
``` bash
upstream gyanhao {
  server: 127.0.0.1:3000;
}
server {
  listen 80;
  server_name <ip>;
  
  location / {
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forward-For $proxy_add_x_forwarded_for;
    proxy_set_header Host $http_host;
    proxy_set_header X-Nginx-Proxy true;

    proxy_pass http://gyanhao;
    proxy_redirect off;
  }
}
```
重载nginx服务
``` bash
sudo nginx -s reload
```
### Nginx配置静态网站
#### 将静态文件传到服务器
静态网站使用`vue-cli`生成。

在服务器上创建一个文件夹用于存放静态文件，我这边是在guoyh账户下进行创建。
``` bash
mkdir data
cd data
mkdir www
cd www
mkdir music
```
将生成的dist下的文件传到music文件夹下。这里使用的是FileZilla。
#### 开启后端服务
这个静态网站需要访问api接口获取数据。将提供服务的程序传到服务器上，用pm2开启。这边提供的服务监听3000端口。
#### 配置nginx
``` bash
# 使用默认的nginx.conf配置 监听80端口
sudo vim nginx.conf

# 修改user 为 root 否则配置后无法访问
user root;

# 配置静态文件路径和默认页面 server 下的 location /
location / {
    root /home/guoyh/data/www/music;
    index index.html;
}

# 配置代理 处理前端 /api/xxx 的请求
# 注意 /api/ 最后一个/要加上 否则转发的参数会有问题
location /api/ {
    proxy_pass http://xxx.xxx.com:3000/
}

# 配置代理 处理前端 /one/xxx 的请求
location /one/ {
    proxy_pass http://xxx.xxx.com:8080/
}
```
### 配置ssl
申请免费的证书服务。一般申请完成后都会有配置教程。

这里主要记录一下将非https请求重定向到https请求。
``` bash
# /nginx.conf
server {
      listen       80 default_server;
      listen       [::]:80 default_server;
      server_name  _;
      return 301 https://www.xxx.com$request_uri;
}
server {
      # rewrite ^(.*)$  https://$host$1 permanent;

      # root         /usr/share/nginx/html;

      # listen ssl
      listen       443;
      # 以下配置省略
      xxxx
      xxxx
}
```