---
title: Web Sql 笔记
date: 2018-01-17 22:18:43
tags:
---
项目中使用`Web Sql` 模拟移动端`sqlite` 数据库在pc做开发测试，因此学了一下`Web Sql` 。核心是三个API: `openDatabase` ，`transaction` ，`executeSql` 。

### openDatabase
用于创建一个数据库，参数如下：
1. 数据库名称
2. 版本号
3. 描述文本
4. 数据库大小
5. 创建回调(可选，PS: 在`chrome` 上没有执行回调，待研究)

``` js
    const db = openDatabase('db', '1', 'desc', '1024*1024')
```
### transaction
transaction方法用以处理事务，当一条语句执行失败的时候，整个事务回滚。方法有三个参数：
1. 包含事务内容的一个方法
2. 执行失败回调函数(可选)
3. 执行成功回调函数(可选)

### executeSql
executeSql方法用以执行SQL语句，返回结果，方法有四个参数：
1. 查询字符串
2. 用以替换查询字符串中问号的参数
3. 执行成功回调函数(可选)
4. 执行失败回调函数(可选)
``` js
    const exeSucc = function(tx, result) {
        console.log(tx)
        console.log(result)
    }

    const exeErr = function(tx, err) {
        console.log(tx)
        console.log(err)
    }

    const txSucc = function() {
        console.log('txSucc')
    }

    const txErr = function() {
        console.log('txErr')
    }

    db.transaction(function(tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS testTable (id unique, name)', null, exeSucc,exeErr)
    }, txErr, txSucc)

    db.transaction(function(tx) {
        tx.executeSql('INSERT INTO testTable (id, name) VALUES (0, "Byron")', null, exeSucc,exeErr)
    }, txErr, txSucc)

    db.transaction(function(tx) {
        tx.executeSql('INSERT INTO testTable (id, name) VALUES (?, ?)'， [1, 'gyh'], exeSucc,exeErr)
    }, txErr, txSucc)
```
