(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{212:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"添加新用户并授权"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加新用户并授权"}},[s._v("#")]),s._v(" 添加新用户并授权")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" testname\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" testname\n// 输入要为testname设置的密码\n")])])]),t("p",[s._v("找到 "),t("code",[s._v("sudoers")]),s._v("文件并添加写权限")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -l /etc/sudoers\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" -v u+w /etc/sudoers\n")])])]),t("p",[s._v("添加新增用户")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Allow root to run any commands anywhere")]),s._v("\nroot    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ALL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ALL"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("       ALL\ntestname    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ALL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ALL"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("       ALL  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 这是新添加的用户")]),s._v("\n")])])]),t("p",[s._v("添加完用户后记得收回写权限")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" -v u-w /etc/sudoers\n")])])]),t("h3",{attrs:{id:"修改远程登录端口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改远程登录端口"}},[s._v("#")]),s._v(" 修改远程登录端口")]),s._v(" "),t("h4",{attrs:{id:"修改ssh配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改ssh配置文件"}},[s._v("#")]),s._v(" 修改SSH配置文件")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/ssh/sshd_config\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 找到 #Port 22 添加下面一行 并去掉Port的注释")]),s._v("\nPort xxxx\n")])])]),t("p",[s._v("SSH默认监听22端口，如果没有强制说明别的端口。"),t("code",[s._v("# Port 22")]),s._v(" 有没有放开注释都是开放22端口的访问。上面保留了22端口，防止配置出现问题导致22端口也不能使用，可以等确定端口修改成功后，再注释掉22端口。")]),s._v(" "),t("p",[s._v("修改完成后重启一下SSH服务")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("systemctl restart sshd.service\n")])])]),t("h4",{attrs:{id:"selinux配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#selinux配置"}},[s._v("#")]),s._v(" SELinux配置")]),s._v(" "),t("p",[s._v("首先看看SELinux是否开启，如果关闭的话可以跳过这一步骤。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("sestatus "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# SELinux status disabled")]),s._v("\n")])])]),t("p",[s._v("如果是 "),t("code",[s._v("disabled")]),s._v(" 说明selinux是关闭的。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("semanage port -l"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看SELinux开放给ssh使用的端口")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果报semanage找不到命令")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum install policycoreutils-python")]),s._v("\n")])])]),t("p",[s._v("如果添加的端口没有在开放的端口里面，就添加一下")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加")]),s._v("\nsemanage port -a -t ssh_port_t -p tcp xxxx\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 再次查看")]),s._v("\nsemanage port -l"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v("\n")])])]),t("h4",{attrs:{id:"防火墙配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#防火墙配置"}},[s._v("#")]),s._v(" 防火墙配置")]),s._v(" "),t("p",[s._v("如果关闭了防火墙，可以忽略这一步。CentOS7使用的防火墙是"),t("code",[s._v("firewall")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看状态")]),s._v("\nsystemctl status firewalld.service\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看是否开放了xxxx端口")]),s._v("\nfirewall-cmd --permanent --query-port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("xxxx/tcp\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果没有 则添加该端口")]),s._v("\nfirewall-cmd --permanent --add-port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("xxxx/tcp\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重载防火墙策略")]),s._v("\nfirewall-cmd –reload\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新查看是否开放了端口")]),s._v("\nfirewall-cmd --permanent --query-port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("xxxx/tcp\n")])])]),t("p",[s._v("以上都配置完以后重启一下服务器，用新添加的端口做一下测试。")]),s._v(" "),t("h4",{attrs:{id:"附"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#附"}},[s._v("#")]),s._v(" 附")]),s._v(" "),t("p",[s._v("在阿里云中需要在安全组中放行一下添加的端口，否则无法成功。")]),s._v(" "),t("p",[s._v("控制台——云服务器ECS——管理——本实例安全组——配置规则——内网人方向——添加安全组规则")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看某端口是否被占用")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -lnp"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" xxxx\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# SELinux配置开启或关闭")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/selinux/config\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改 SELINUX=disabled/enforcing")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启防火墙")]),s._v("\nsystemctl start firewalld.service\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭防火墙")]),s._v("\nsystemctl stop firewalld.service\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开机自动启动")]),s._v("\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" firewalld.service\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭开机自动启动")]),s._v("\nsystemctl disable firewalld.service\n")])])]),t("h3",{attrs:{id:"nginx配置80端口转3000端口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx配置80端口转3000端口"}},[s._v("#")]),s._v(" Nginx配置80端口转3000端口")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装nginx")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nginx\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启nginx服务")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start nginx\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入/etc/nginx/conf.d下创建配置文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /etc/nginx/conf.d\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" gyanhao-com-3000.conf\n")])])]),t("p",[s._v("配置文件如下：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("upstream gyanhao "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  server: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:3000"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nserver "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  listen "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  server_name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ip"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  \n  location / "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    proxy_set_header X-Real-IP "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$remote_addr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    proxy_set_header X-Forward-For "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$proxy_add_x_forwarded_for")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    proxy_set_header Host "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$http_host")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    proxy_set_header X-Nginx-Proxy "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    proxy_pass http://gyanhao"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    proxy_redirect off"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("重载nginx服务")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" nginx -s reload\n")])])]),t("h3",{attrs:{id:"nginx配置静态网站"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx配置静态网站"}},[s._v("#")]),s._v(" Nginx配置静态网站")]),s._v(" "),t("h4",{attrs:{id:"将静态文件传到服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将静态文件传到服务器"}},[s._v("#")]),s._v(" 将静态文件传到服务器")]),s._v(" "),t("p",[s._v("静态网站使用"),t("code",[s._v("vue-cli")]),s._v("生成。")]),s._v(" "),t("p",[s._v("在服务器上创建一个文件夹用于存放静态文件，我这边是在guoyh账户下进行创建。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" data\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" data\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" www\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" www\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" music\n")])])]),t("p",[s._v("将生成的dist下的文件传到music文件夹下。这里使用的是FileZilla。")]),s._v(" "),t("h4",{attrs:{id:"开启后端服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开启后端服务"}},[s._v("#")]),s._v(" 开启后端服务")]),s._v(" "),t("p",[s._v("这个静态网站需要访问api接口获取数据。将提供服务的程序传到服务器上，用pm2开启。这边提供的服务监听3000端口。")]),s._v(" "),t("h4",{attrs:{id:"配置nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置nginx"}},[s._v("#")]),s._v(" 配置nginx")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用默认的nginx.conf配置 监听80端口")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" nginx.conf\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改user 为 root 否则配置后无法访问")]),s._v("\nuser root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置静态文件路径和默认页面 server 下的 location /")]),s._v("\nlocation / "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    root /home/guoyh/data/www/music"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    index index.html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置代理 处理前端 /api/xxx 的请求")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意 /api/ 最后一个/要加上 否则转发的参数会有问题")]),s._v("\nlocation /api/ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    proxy_pass http://xxx.xxx.com:3000/\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置代理 处理前端 /one/xxx 的请求")]),s._v("\nlocation /one/ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    proxy_pass http://xxx.xxx.com:8080/\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h3",{attrs:{id:"配置ssl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置ssl"}},[s._v("#")]),s._v(" 配置ssl")]),s._v(" "),t("p",[s._v("申请免费的证书服务。一般申请完成后都会有配置教程。")]),s._v(" "),t("p",[s._v("这里主要记录一下将非https请求重定向到https请求。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /nginx.conf")]),s._v("\nserver "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      listen       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" default_server"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      listen       "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("::"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":80 default_server"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      server_name  _"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("301")]),s._v(" https://www.xxx.com"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$request_uri")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nserver "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rewrite ^(.*)$  https://$host$1 permanent;")]),s._v("\n\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# root         /usr/share/nginx/html;")]),s._v("\n\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# listen ssl")]),s._v("\n      listen       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以下配置省略")]),s._v("\n      xxxx\n      xxxx\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);