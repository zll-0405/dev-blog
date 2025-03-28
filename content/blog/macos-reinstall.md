---
title: MacBookAir清理数据，导致没办法开机
date: 2025-01-15
description: MacBookAir清理数据，导致没办法开机，解决问题的一些思路与方案
---

背景：   
朋友有一个 mac 本不用了，想着清理一下数据，结果就是清理完毕之后，发现运行不起来了

折腾了一下午，最后问题解决了，当时的一些操作没有截图，接下来的解决方案都是凭记忆写的

非常重要！！！   
因为我朋友的笔记本，本来就是想着清理数据的，所以就算那个电脑本身的数据，全都被清除了，也是没有关系的   
<strong>如果你对自己电脑里面的数据，有需要，那接下来的操作，你就不要看了</strong>（回头如果按着操作，导致数据没有了，别骂我～

如果你的 mac 本在启动时，显示问号，先按照官方文档操作：[如果 Mac 在启动时显示问号](https://support.apple.com/zh-cn/102601?ivk_sa=1024609v)

我朋友的电脑，按着上面的文档操作了，问题依然是没有被解决

以下是排查思路：

1 首先确定，电脑时间正确，如果不正确，则进行修改   
具体步骤是：在 macos 实用工具界面，你能看到“从时间机器恢复”“重新安装 macos xxx”“磁盘工具”等选项   
在这个界面最上方，有一个“实用工具”，点击它，选择展开项中的“终端”   
在终端中，输入命令 `date` 查看电脑当前时间，如果不正确，进行修改

2 电脑时间正确，查看磁盘 disk0 的状态   
依然是在终端界面，输入命令 `diskutil info disk0`   
查看系统返回的信息，主要关注 `OS Can Be Installed` 的值是 no 还是 yes

3 如果是 yes ，大概率通过 macos 实用工具界面，选择重新安装 macos ，问题就可以解决了   
如果是 no 的话，则需要在终端中运行以下命令：   
```
diskutil unmountDisk force disk0   
diskutil partitionDisk disk0 GPT JHFS+ "Macintosh HD" 100%
```
注意：上面是两条命令，依次运行即可

4 运行完毕之后，可以再 check 下 disk0 磁盘的状态，主要还是关注 `OS Can Be Installed` 的值是 no 还是 yes   
通过步骤 3 的命令之后，应该是可以看到 `OS Can Be Installed` 的值是 yes   
然后返回到 macos 实用工具界面，选择重新安装 macos 即可

上面就是我操作的一些步骤，最后问题解决   
如果你也遇到了同样问题，希望能给你一些启发

最后还是要说一句，做上面操作之前，请确保自己的数据安全   
我朋友是不那么 care 电脑数据，所以我可以放心操作，如果你很关心自己的数据安全的话，请寻找其他解决方案，这个解决方案不一定适合你