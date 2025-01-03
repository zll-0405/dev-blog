---
title: 使用 ssh key 时遇到的一些问题
date: 2025-01-01
description: 提交到仓库时，突然报错；开 vpn 没办法通过 ssh 到 github；
---

今天打开编辑软件照常 coding，然后提交代码

提交代码完毕之后，我就扭头去看别的界面了，结果突然软件弹出窗口，提醒我向 github 仓库提交代码失败

我？？？一脸懵逼，怎么回事，前几天我还可以提交成功来着，今天就不行了？

盲猜大概率是 ssh key 的问题，所以直接删除了 `/.ssh` 整个目录，然后通过命令 `ssh-keygen -t rsa -C "example@xxx.com"` 生成新的公钥、私钥，然后将公钥添加到 github 账户中

寻思这样总可以了吧，`ssh -T git@github.com` 看一下，是不是配置成功了

结果并没有，运行这个命令之后，一点反应都没有

查了一些解决方案，说是可能权限不够，那就给这些文件一一提权   
`chmod 700 ~/.ssh`   
`chmod 600 ~/.ssh/id_rsa`   
`chmod 644 ~/.ssh/id_rsa.pub`

提权完毕之后，再次尝试通过 ssh 连接 github 网站，结果报错 `Connection closed by 127.0.0.1 port 7890`

正常端口应该是 `22` 才对，结果说 `7890` 端口，我想到可能是因为我开了代理

但我又经常用，不可能提交代码的时候，把代理退出一下，提交完再打开代理软件，想想就觉得头疼，况且以前开着代理，也是可以提交代码到仓库的

搜索到的解决方案是，可以添加 `config` 文件，具体文件内容如下：   
```
Host github.com
  HostName ssh.github.com
  User git
  Port 22
```

添加完毕之后，再运行命令 `ssh -T git@github.com` 即可，如果 `./ssh` 目录下没有 `known_hosts` 文件的话，会遇到提示：   
```
The authenticity of host 'ssh.github.com (20.205.243.160)' can't be established.
ED25519 key fingerprint is SHA256:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.
This key is not known by any other names.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

输入 `yes` 即可

至此，问题解决

写这篇文章时，我想了想，以前生成密钥的时候，也没这么麻烦呀？这次是因为什么导致的

大概率是因为我直接删除了整个 `./ssh` 目录叭 😅

所以 `config` 文件、`known_hosts` 文件都没有了，而这些文件，如果自己没有注意过的话，是不会想到要自己去生成配置一下的（可能是第一次生成密钥时，默认就会有，只是我当时手快，被我全删了）

以后如果再出现这种情况，我就单独删和密钥有关的文件，其他文件就不用动了

以上，感谢您的阅读