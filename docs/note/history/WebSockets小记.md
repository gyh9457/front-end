---
title: WebSockets小记
date: 2018-05-16 21:08:02
tags:
---
### WebSockets
WebSockets 是一个可以创建和服务器间进行双向会话的高级技术。通过这个API你可以向服务器发送消息并接受基于事件驱动的响应，这样就不用向服务器轮询获取数据了。

### 为什么需要WebSocket
客户端与服务端通信一般采用 `http` 协议，但是 `http` 协议有一个缺陷：通信只能由客户端发起。这种单向请求的特点，导致服务器如果连续发生变化，客户端只能用轮询或者 `long pull` 的方式去获取，这样效率很低，非常浪费资源。

`WebSocket` 最大的特点就是，服务器可以主动向客户端推送信息，客户端也可以主动向服务端发送信息，是真正的双向平等对话。

### 基本使用
``` js
    const socket = new WebSocket('ws://localhost:8080');

    socket.addEventListener('open', function (event) {
        socket.send('Hello Server!');
    })

    socket.addEventListener('message', function (event) {
        console.log('Message from server', event.data);
    })

    socket.addEventListener('close', function (event) {
        console.log('Connection closed');
    })

    socket.addEventListener('error', function (event) {
        console.log('error')
    })
```

### 轮训 && long pull
`轮询` 即让浏览器每隔一段时间发送一次请求，询问服务器有没有新信息， `long pull` 也是采用轮询的方式，不过采用的是阻塞模型，即客户端发起请求后，如果没有信息，就一直不返回 `response` ，直到有信息后才返回，返回完后，客户端再次建立连接。

---
[WebSocket 教程](http://www.ruanyifeng.com/blog/2017/05/websocket.html)

[WebSockets MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSockets_API)

[看完让你彻底搞懂Websocket原理](https://juejin.im/post/5afab6e651882542ba07eb41)