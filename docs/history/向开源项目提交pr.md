---
title: 向开源项目提交pr
date: 2019-01-04 22:08:15
tags:
---
1. fork该项目到自己的仓库，clone到本地。
2. 阅读 `contributing guide` ，学习相关规范。
3. 修改、提交、在 `github` 上创建 `pr`。
4. 一段时间后，当源项目更新时，fork的项目需要同步源项目的更新。进行如下操作
``` sh
  git remote add upstream [url]  // 与源项目创建链接
  git remote -v // 查看创建结果
  git fetch upstream
  git merge upstream/master
  git push origin // 同步到fork的仓库
```