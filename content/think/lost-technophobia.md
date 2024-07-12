---
title: 丢掉了我的技术洁癖
date: 2024-07-10
description: 最近做事情的一些思考
---

三月中下旬搬完家，有了自己的空间之后，开始探索自由职业

---

我有些微的技术洁癖，如果在项目中，一个文件用不到，我就想把它删掉；如果一个方法没有用，我也会把它删掉；要不然就会很难受

刚开始自己尝试搭建网站时，因为以前是做 java 后端开发，对于前端没有那么熟练，就去 github 上找找有没有自己喜欢的模板，有的就 down 到本地，跑跑看看

在本地运行不错，然后我就开始看，这个文件好像是和 github 自动部署有关，我不用，删掉；这个文件好像是个什么脚本，看起来没什么用，删掉；这个方法搁这儿是干嘛呢，又不用，删掉

等我把不用的都删除之后，舒服了，然后再跑项目，发现项目跑不起来了

次数多了之后，就妥协了，最后就是能跑起来就行 🤦‍♀️

---

前一阵时间想要做一个导航站，想到要分类，类下面又分几个子类，按照什么来分类

还没开始做，自己想的这些，就把自己给干趴下了，以至于那几天一想到要做这个，头就疼，不想动

后来调整了一下策略，先看看目前有哪些网站想要放上去，然后把这些网站进行分类，其他用不到的就先不考虑

最后导航站终于上了一版，虽然它不完美，但最起码我完成了一件事情

后来想想，可能是因为以前在公司呆久了，会考虑很多，比如这个功能这样写，够不够灵活；用户量这么大，上个缓存；数据库这样设计合不合理等等

等到自己做事时，这些习惯自然而然就会出来，虽然知道现在可能没几个用户，不值当上缓存，甚至如果只是做一个博客，前期数据库都用不上。但就是会考虑

还是没钱拯救了我，如果要上数据库，要上缓存，要上 nginx 等等，首先要有一台服务器

相比之下，有很多免费的方案可以用，可以跑一跑验证自己的思路是否正确

次数多了之后，就放弃了过度考虑，过度设计，过度优化。先跑起来看看效果（常常是跑起来发现，平台提供的免费计划就够用了，以前想这想那倒是浪费了不少做事的时间

---

今天上线了一个新的网站

以前上线的网站，虽然有不满意的地方，但多多少少也还有让我感觉还不错的地方，比如我做的网站，robots.txt & sitemap.xml 可以自动生成，网站的 canonical 链接设置完毕之后也不需要 care 了

但是今天上线的这个网站，没有 robots.txt ，也没有 sitemap.xml ，canonical 也没设置，总之是如果让我来评价今天上线的网站，颇多不满意

有一个比较好的进步就是，虽然很不满意，最后还是上线了

如果是以前的我，我是不喜欢让这样一个不达自己预期的网站上线的，因为某种“技术洁癖”，我没办法允许自己这样做

现在，我开始允许自己这样做了，emmm 从某种程度上来讲，我丢掉了一些“技术洁癖”

---

仔细想想，之所以能够丢掉“技术洁癖”，或许原因之一是我太菜了

有时候用前端框架，样式怎么调整都没办法调整成自己喜欢的，就很疑惑，怎么回事，我总感觉这个问题很简单啊，结果怎么就是解决不了；有时候用其他部署平台，本来以为能够顺利部署完成，结果有报错，循着报错信息一点点解决，到最后发现是自己多删了一些代码，而我以为这些代码用不上

被现实毒打的认清了自己 🤣