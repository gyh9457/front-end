---
title: git使用手册
date: 2017-09-16 19:14:06
tags:
---
### 常用指令
``` js
git clone xxx // clone远程代码到本地

git checkout -b xxxx // 建立并切换到分支xxxx

git branch // 查看当前分支的状态

git branch -v // 查看分支的最后修改 分支前带*的为还未合并到master分支的 无*的为已经合并到master中的。

git status // 查看分支及当前修改过的文件

git checkout xxxx // 切换到xxxx分支

git add <file> // 添加文件到暂存区

git branch -d xxxx // 删除分支 如果还未合并到master 则会出现不能删除提示 用-D强制删除

git commit -m "xxxx" // 上传到本地git仓库 添加注释信息

git merge <branch> // 用于合并指定分支到当前分支

git push // 推送分支到远程仓库

git reset --hard HEAD // 撤销工作目录中所有未提交文件的修改内容

git fetch // 更新git remote中的所有repo所包含的分支的最新commit-id,将其记录到./git/FETCH_HEAD文件中。

git pull // 基于本地的FETCH_HEAD记录与远程仓库的版本号 git fetch获得当前指向的远程分支的后续版本的数据 然后利用git merge将其与本地的当前分支合并

git rm -r file // 删除文件
```

### 从其他分支merge个别文件或文件夹
假定现在有两个分支 `master` 和 `dev`。

`master` 的目录结构如下：
* folder
    * test
        * a.js
    * others

`dev` 的目录结构如下：
* folder
    * test
        * b.js
    * others

这时候我们要将 `dev` 中的test合并到master中，有两种做法：
1. git checkout branch -- file 用branch上的file强制替换当前文件。
2. 智能合并

#### 智能合并
``` js
// 生成一个master的备份分支
git checkout -b master_temp
// 将dev合并到master_temp
git merge dev
// 用master_temp上的test替换掉master上的test
git checkout master
git checkout master_temp -- test
```
智能合并可以保留 `master` 原有的东西而不是被 `dev` 的对应文件强制覆盖。


