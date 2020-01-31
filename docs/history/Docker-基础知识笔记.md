---
title: Docker 基础知识笔记
date: 2019-02-22 22:18:22
tags:
---
## Docker 核心组成
### 四大组成对象
1. 镜像 (Image) 可以理解为一个只读的文件包，里面包含了 `虚拟环境运行最原始文件系统的内容`。
2. 容器 (Container) 指 `隔离出来的虚拟环境`。
3. 网络 (NetWork) 
4. 数据卷 (Volume) `进行数据共享或持久化的文件或目录`。

### Docker Engine
`Docker Engine` 是一款软件，由多个独立软件所组成，里面最核心的是 `docker daemon` 和 `docker CLI`。

`docker daemon` 提供容器管理、应用编排、镜像分发等功能，通常以服务的形式运行以便静默的提供这些功能，所以通常称之为 `docker 服务`。

`docker daemon` 对外暴露了一套 `RESTful API` ，通过这套 API 可以对其中运行的容器和其它资源进行管理。`docker CLI` 正是操作这些 API 的工具。 

## CentOS 安装 docker

``` sh
  yum install yum-utils device-mapper-persistent-data lvm2

  yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

  yum install docker-ce

  systemctl enable docker // 服务开机自启动

  systemctl start docker // 启动 docker 服务

  systemctl restart docker // 重启

  docker version // 版本信息

  docker info // docker 信息

  docker images // 查看镜像信息

  docker search [image] // 搜索镜像

  docker inspect [docker 对象] // 查看 docker 对象的详细信息，如镜像、容器等。

  docker rmi [镜像名或镜像ID] // 删除镜像

  docker create --name [容器名] [镜像名] // 创建镜像 --name 可选

  docker start [容器名] // 启动容器

  docker run --name [容器名] -d [镜像名] // 合并 create start 两个命令 -d 使启动后程序与控制台分离

  docker ps -a // 容器列表

  docker stop [容器名] // 停止容器 容器内部修改和沙盒环境还是存在

  docker rm [镜像名] // 删除容器 -f 强制删除

  docker exec // 让容器执行命令

  docker exec -it [容器名] bash // 开启容器的 Bash，从而进入容器进行控制 -i 保持输入流，保证正确识别命令 -t 启用伪终端

  docker attach [容器名] // 将当前输入输出流连接到指定的容器上
```

设置国内镜像源：

``` sh
  // etc/docker/daemon.json
  {
    "registry-mirrors": [
        "https://registry.docker-cn.com"
    ]
  }
```

## 镜像与容器
### 镜像的命名
1. username 主要用于识别上传镜像的不同用户，与 `Github` 的用户空间类似。
2. repository 主要用于识别镜像的内容，形成对镜像的表意描述。
3. tag 主要用于表示镜像的版本，方便区分镜像内容的不同细节。

### 容器的几个核心状态
1. Created 容器已创建，资源准备就绪。
2. Running 容器正在运行。
3. Paused 容器已暂停。
4. Stopped 容器停止，占用的资源及沙盒环境依然存在，只是应用程序停止。
5. Deleted 容器已删除，占用资源及存储在 `docker` 中的管理信息都已释放和移除。

![Request](https://user-gold-cdn.xitu.io/2018/9/17/165e53743e730432?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

### 容器网络模型 ( Container Network Model)
在 `Docker` 网络中，有三个比较核心的概念，也就是 `沙盒 Sandbox`，`网络 Network`，`端点 Endpoint`。

`沙盒`提供了容器的虚拟网络栈，也就是端口套接字、IP路由表、防火墙等内容。其实现隔离了容器网络与宿主机网络，形成了完全独立的容器网络环境。

`网络`可以理解为 `Docker` 内部的虚拟子网，网络内的参与者相互可见并能够进行通讯，`Docker` 的这种虚拟网络也是与宿主机网络存在隔离关系的，其目的主要是形成容器间的安全通讯环境。

`端点`是位于容器或网络隔离墙之上的洞，其主要目的是形成一个可以控制的突破封闭的网络环境的出入口，当容器的端点与网络的端点形成配对后，就如同在这两者之间搭建了桥梁，便能够进行数据传输了。

处于不同网络之中的容器无法互联。

``` bash
  // 容器互联
  docker run -d --name mysql -e MYSQL_RANDOM_ROOT_PASSWORD=yes mysql
  docker run -d --name webapp --link mysql webapp:latest

  String url = "jdbc:mysql://mysql:3306/webapp"; // jdbc 连接

  docker run -d --name mysql -e MYSQL_RANDOM_ROOT_PASSWORD=yes --expose 13306 --expose 23306 mysql:5.7 // --export 暴露端口

  // 通过别名连接
  docker run -d --name webapp --link mysql:database webapp:latest // --link <name><alias>

  String url = "jdbc:mysql://database:3306/webapp";

  // 创建网络
  // 默认创建一个 bridge 网络，没有指定容器网络时都会连接到其中
  docker network create -d bridge individual // -d 指定网络驱动类型
  
  docker ls // 查看网络

  docker run -d --name mysql -e MYSQL_RANDOM_ROOT_PASSWORD=yes --network individual mysql:5.7 // --network 指定网络

  // 端口映射 将容器的端口映射到宿主机上
  // -p <ip>:<host-port>:<container-port> ip为宿主操作系统的兼容ip，默认 0.0.0.0
  docker run -d --name nginx -p 80:80 -p 443:443 nginx:1.12
```

### 管理和存储数据
`Docker` 容器文件系统基于 `UnionFS`，由于 `UnionFS` 支持挂载不同类型的文件系统到统一的目录结构中，所以我们只需要将宿主操作系统中，文件系统里的文件或目录挂载到容器中，便能够让容器内外共享这个文件。通过这种方式互通容器内外的文件，那么文件数据持久化和操作容器内文件的问题就解决了。

`Docker` 提供三种适用于不同场景的文件系统挂载方式。
1. Bind Mount
2. Volume
3. Tmpfs Mount

``` sh 
  // 挂载文件到容器
  // -v <host-path>:<container-path>
  docker run -d --name nginx -v /webapp/html:/usr/share/nginx/html:ro nginx:1.12

  // 临时挂载
  docker run -d --name webapp --tmpfs /webapp/cache webapp:latest // 无需指定内容位置，只指定挂载到容器内的目录

  // 使用数据卷 (Volumn)
  // 无需只调数据存储在宿主机的哪个地方
  // 只需给定容器中的哪个目录会被挂载
  docker run -d --name webapp -v /webapp/storage webapp:latest

  // -v <name>:<container-path> 命名数据卷
  docker run -d --name webapp -v appdata:/webapp/storage webapp:latest

  // 共用数据卷
  docker run -d --name webapp -v html:/webapp/html webapp:latest
  docker run -d --name nginx -v html:/usr/share/nginx/html:ro nginx:1.12

  // 创建数据卷
  docker volumn create <name>

  docker volumn ls // 列表

  // 删除数据卷
  docker volumn rm <name>

  docker rm -v <container name> // 删除容器时删除关联的数据卷

  docker volumn prune // 删除没有被引用的数据卷
  
  // 数据卷容器
  docker run -d --name webapp --volumes-from appdata webapp:latest

  // 备份和迁移数据卷

  // --mount 执行挂载
  // 可以使用参数
  docker run -d --name webapp webapp:latest --mount 'type=volume,src=appdata,dst=/webapp/storage,volume-driver=local,volume-opt=type=nfs,volume-opt=device=<nfs-server>:<nfs-path>' webapp:latest
```

### 保存和共享镜像
`Docker` 可以将容器中可读可写的沙盒环境持久化为一个镜像层，也就是把容器内的修改记录下来，保存为一个新的镜像。

``` sh
  docker commit -m 'message' <容器名>

  docker commit -m 'message' <容器名> <镜像名> // 提交更改时指定镜像名

  // docker tag 为镜像命名
  docker tag <Image Id> <Image Name>
  docker tag <old Image Name> <New Image Name> // 创建新命名，两个镜像名指向同一个镜像

  // 导出镜像
  docker save webapp:1.0 > webapp-1.0-tar

  docker save -o ./webapp-1.0.tar webapp:1.0 // -o 指定导入文件

  // 导入镜像
  docker load < webapp-1.0.tar
  docker load -i webapp-1.0.tar // 使用 -i 导入

  // 批量迁移镜像
  docker save -o ./images.tar image1 image2 image3

  // 导出容器
  docker export -o ./webapp.tar <Container Name>

  // 导入容器
  // 并非直接导入容器，而是将容器运行时的内容以镜像导入
  docker import ./webapp.tar <Image Name>
```

除了直接以文件方式导入、导出镜像外，还可以将镜像上传到仓库，然后 `docker pull` 拉取镜像，实现共享。

[docker-repos](https://docs.docker.com/docker-hub/repos/)

### 使用 Dockerfile 创建镜像
`Dockerfile` 是用于定义镜像自动化构建流程的配置文件。

`Dockerfile` 的指令简单分为五大类。
1. 基础指令 用于定义新镜像的基础和性质。
2. 控制指令 是指导镜像构建的核心部分，用于描述镜像在构建过程中需要执行的命令。
3. 引入指令 用于将外部文件直接引入到构建镜像内部。
4. 执行指令 能够为基于镜像所创建的容器，指定在启动时需要执行的脚本或命令。
5. 配置指令 对镜像以及基于镜像所创建的容器，可以通过配置指令对其网络、用户等内容进行配置。

常用指令：
``` sh
  // FROM 指定基础镜像
  FROM <image> [AS <name>]
  FROM <image>[:<tag>] [AS <name>]
  FROM <image>[@<digest>] [AS <name>]

  // RUN 向控制台发送命令
  // 支持 \ 换行
  RUN <command>
  RUN ["executable", "param1", "param2"]

  // ENTRYPOINT && CMD
  // 指定命令，在容器启动时启动进程号为1的进程
  ENTRYPOINT ["executable", "param1", "param2"]
  ENTRYPOINT command param1 param2

  CMD ["executable","param1","param2"]
  CMD ["param1","param2"]
  CMD command param1 param2

  // EXPOSE 指定暴露的端口
  EXPOSE <port> [<port>/<protocol>...]

  // VOLUME 定义基于此镜像的容器所自动建立的数据卷
  VOLUME ["/data"]

  // COPY && ADD
  // 从宿主机文件系统中拷贝内容到镜像里的文件系统中
  COPY [--chown=<user>:<group>] <src>... <dest>
  ADD [--chown=<user>:<group>] <src>... <dest>

  COPY [--chown=<user>:<group>] ["<src>",... "<dest>"]
  ADD [--chown=<user>:<group>] ["<src>",... "<dest>"]
```

构建镜像：
``` sh
  docker build [构建环境目录] // 默认在此目录下创建，在此目录下寻找 Dockerfile 文件

  // -t 指定新生成镜像名称
  // -f 指定 Dockerfile 文件路径
  docker build -t webapp:latest -f ./webapp/a.Dockerfile ./webapp
```

使用技巧：
``` sh
    // ARG 声明变量
    // ${xxx} 使用变量
    // docker --build-arg 传入变量
    docker build --build-arg TOMCAT_MAJOR=8 --build-arg TOMCAT_VERSION=8.0.53 -t tomcat:8.0 ./tomcat

    // ENV arg_name arg_value
    // 定义环境变量
    // -e --env 修改环境变量的值
    docker run -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:5.7

    // --no-cache 禁用构建缓存
    docker build --no-cache ./webapp
```

### Docker Compose
`Docker Compose` 多容器的定义和运行软件，将多个容器运行的方式和配置固化下来。

使用步骤可以简化为三步：
1. 如果需要的话，编写容器所需镜像的 `Dockerfile`
2. 编写用于配置容器的 `docker-compose.yml`
3. 使用 `docker-compose` 命令启动应用

``` sh
  // -f 指定 docker-compose 配置文件
  // -d 转入后台运行\
  // -p 定义项目名称
  docker-compose -f ./compose/docker-compose.yml -p myapp up -d

  docker-compose down
```

### 应用于服务化开发
需要搭建 `Overlay Network`，跨越物理主机的限制，让多个处于不同 `docker daemon` 实例中的容器连接到同一个网络，并且让这些容器感觉这个网络与其他类型的网络没有区别。从而实现服务间互连。

可以使用 `Docker Swarm` 实现。

在真实的服务部署里，通常是使用 `Docker Compose` 来的定义集群，通过 `Docker Swarm` 来部署集群。或者使用 `Kubernetes(k8s)`。`k8s` 与这两者的组合相比，功能更强大。

## 相关名词解释
### RPM
`RPM` 是 `Red-Hat Package Manager` (RPM包管理器) 的缩写，这一文件格式名称虽然打上了 `RedHat` 的标志，但是其原始设计理念是开放式的，可以算是公认的行业标准了。

### yum
`Yum` 全称为 `Yellow dog Updater Modified`，是一个在 `Fedoral` 和 `RedHat` 以及 `CentOs` 中的 `Shell` 前端软件包管理器，基于 `RPM` 包管理，能够从指定的服务器自动下载 `RPM` 包并且安装，可以自动化处理依赖性关系，并且一次安装所有依赖的软件包，无须频繁地一次次下载、安装。

### device-mapper-persistent-data && lvm2
用于存储设备映射 (`devicemapper`) 必须的两个软件包。

### Device mapper
`devicemapper` 是内核中支持逻辑卷管理的通用设备映射机制，它为实现用于存储资源管理的块设备驱动提供了一个高度模块化的内核架构，它包包含三个重要的对象概念：`Mapped Device`，`Mapping Table`，`Target Device`。

---
[开发者必备的 Docker 实践指南](https://juejin.im/book/5b7ba116e51d4556f30b476c)