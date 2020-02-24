---
title: 云主机上Nginx静态网站
date: 2017-07-15 16:02:27
tags:
---
## 搭建静态网站
在腾讯云上获取一个云主机，使用`putty`登录到实例。本次的主机采用CentOS，以下都是在CentOS上进行操作。
### 安装Nginx
在CentOS上，可直接使用`yum`来安装Nginx
```bash
yum install nginx -y

yum remove nginx // 删除nginx
```
安装完成后，使用`nginx`命令启动Nginx。此时，访问公网IP就可以看到Nginx的测试页面。
### 配置静态服务器访问路径
外网用户访问服务器的Web服务由Nginx提供，Nginx需要配置静态资源的路径信息才能通过url正确访问到服务器上的静态资源。

打开Nginx的默认配置文件`/etc/nginx/nginx.conf`，修改Nginx配置，将默认的`root /usr/share/nginx/html;`修改为`root /data/www;`。

配置文件将 `/data/www/static` 作为所有静态资源请求的根路径，如访问: `http://<您的域名>/static/index.js`，将会去 `/data/www/static/` 目录下去查找 index.js。现在我们需要重启 Nginx 让新的配置生效，如：
```bash
nginx -s reload
```
接下来创建`/data/www`目录，然后在该目录下创建一个`index.html`：
```html
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <title>index</title>
</head>
<body>
Hello world!
</body>
</html>
```
现在访问 `http://<您的域名>/index.html` 应该可以看到页面输出 `[Hello world!]`

到此，一个基于 Nginx 的静态服务器就搭建完成了，现在所有放在 /data/www 目录下的的静态资源都可以直接通过域名访问。

可以通过`filezilla`实现服务器文件的上传与下载。