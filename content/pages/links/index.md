---
title: 友链
comment: true

links:
  - title: LY 的博客
    desc: 自疏濯淖污泥之中，蝉蜕于浊秽，以浮游尘埃之外。
    avatar: https://avatars.githubusercontent.com/u/51789698?v=4
    url: https://Young-Lord.github.io

  - title: MBRjun-Blog
    desc: MBRjun-Blog
    avatar: https://cos.mbrjun.cn/PICS/LG4v3avatar144px.jpg
    url: https://www.mbrjun.cn/

  - title: Azure Zeng's Blog
    desc: Azure Zeng 的小窝
    avatar: https://azurezeng.com/friendly-link-image.png
    url: https://blog.azurezeng.com/

  - title: Arisa | Blog
    desc: Arisa 的个人博客
    avatar: https://blog.arisa.moe/assets/favicon.webp
    url: https://blog.arisa.moe/

  - title: tomato
    desc: tomato的小窝
    avatar: https://www.tomato-aoarasi.com/static/image/avatar.jpg
    url: https://wakaba.tomato-aoarasi.com

  - title: JR's Blog
    desc: 这里是JR的小屋喵
    avatar: https://avatars.githubusercontent.com/u/40999116
    url: https://blog.jason0743.best/

  - title: Awblogu
    desc: 啊呜布洛咕
    avatar: https://blog.awbugl.top/images/avatar.jpg
    url: https://blog.awbugl.top/

  - title: NekoHouse
    desc: Touching Fish
    avatar: https://avatars.githubusercontent.com/u/23737348
    url: https://blog.amu.moe/

  - title: 落雪咖啡屋
    desc: Lxns Network
    avatar: https://lxns.net/static/avatar.jpg
    url: https://lxns.net/

  - title: Atmosphere
    desc: IN PURSUIT OF FREEDOM
    avatar: https://avatars.githubusercontent.com/u/17957399
    url: https://blog.awa.moe/

  - title: Akula::Blog
    desc: 悟已往之不谏，知来者之可追
    avatar: https://avatars.githubusercontent.com/u/33571798?v=4
    url: https://blog.akula.moe
---

::: tip 欢迎交换友链！

- 名称：BsBlog
- 链接：[https://blog.bsdayo.moe/](https://blog.bsdayo.moe/)
- 头像：[https://avatars.githubusercontent.com/u/41754841](https://avatars.githubusercontent.com/u/41754841?v=4)
- 简介: 怎么会是呢？

~~（和我熟的话其实写什么都行 xxx）~~
:::

添加友链可以[在 GitHub 上修改本页面](https://github.com/bsdayo/bsblog/edit/main/content/pages/links/index.md)，并提交
Pull Request；或是直接在下面评论。记得带上类似上面的的格式哦~

排序不分先后，最近加的会放在列表顶部 qwq

<v-container class="page-container" :fluid="true">
  <v-row>
    <v-col cols="12" md="6" v-for="link in $frontmatter.links">
      <LinkCard :key="link.url" v-bind="link" />
    </v-col>
  </v-row>
</v-container>

<script setup>
import LinkCard from './LinkCard.vue'
</script>
