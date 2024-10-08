---
title: nextjs & tailwind css 使用心得
date: 2024-06-06
description: tailwind css使用心得；nextjs 折腾心得；基于 nextjs 的文档模板 nextra
---

最近折腾了一下 nextjs 和 tailwind css，总结一些使用心得

##  tailwind css

只使用 tailwind css 来做网站也是 ok 的，纯 html 界面

刚开始尝试 tailwind css 的时候，就做了一个导航站，界面是这样：

<img src="/assets/nextjs-tailwind-css-experience/navbar.webp" loading="lazy" alt="navbar" />

对于一个前端小白来说，能够做出来一个导航网站，我对自己已经相当满意了 🤣

tailwind css 使用起来也非常简单，直接在 html 文件中引入一下 js 文件即可:

```
<script src="./assets/js/tailwindcss.js"></script>
```

然后就可以去 tailwind css 官网，调整网站配色即可，官网地址在这儿: [tailwindcss](https://tailwindcss.com/docs/installation)

我的导航网站在这儿: [navbar.click](https://navbar.click/index.html) ， 源码在这儿: [nav-bar 源码](https://github.com/zll-0405/nav-bar)

如果你也挺喜欢这个简洁的导航站，可以 copy 下来，做一个属于自己的导航站

## nextjs

你看到的这个网站就是用 nextjs + tailwind css 搞的

我很喜欢这种简单，配色又很好看的网站，妥妥的一个程序员审美了

我原来是 java 后端开发，刚开始玩 nextjs 还有些玩不转，因为有些语法和我以前接触的不同，折腾了一段时间之后，感觉好像也还行

对于 nextjs 来说，可以把公共的一些组件抽出来，比如 `footer`， `header` 等，一般都会把这些组件放到 `components` 目录下

如果你是用 `app` 目录的话，在 `layout.tsx` 中引入相关组件，然后在 `body` 中直接一行代码就搞定了，详细可以看下图:

<img src="/assets/nextjs-tailwind-css-experience/layout.webp" loading="lazy" alt="layout布局" />

还是挺方便的

### Nextra

刚开始上手 nextjs 的时候，对我来说，难度确实大一些，所以就去看有没有在 nextjs 基础上，又集成了一层的，被我找到了，就是: [Nextra](https://nextra.site/)

不过我在 vercel 上部署的时候发现，比如我本来有 A，B，C 三个界面，部署完毕之后，如果新增一个 D 界面，重新 deploy 之后，并没有看到 D 界面的显示

我也不知道为什么，不过有一说一， Nextra 上手还是非常容易的

以上，感谢您的阅读