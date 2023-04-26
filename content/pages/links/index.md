---
title: 友链
comment: true

links:
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
    avatar: https://blog.amu.moe/usr/AimuBot.webp
    url: https://blog.amu.moe/

  - title: 落雪咖啡屋
    desc: Lxns Network
    avatar: https://lxns.net/static/avatar.jpg
    url: https://lxns.net/

  - title: Atmosphere
    desc: IN PURSUIT OF FREEDOM
    avatar: https://avatars.githubusercontent.com/u/17957399
    url: https://blog.awa.moe/

  - title: Akula<>Blog
    desc: 苟利国家生死以 岂因祸福避趋之
    avatar: https://lolicon.akulak.icu/common/akulakirov.webp
    url: https://lolicon.akulak.icu
---

::: tip 欢迎交换友链！
- 名称：BsBlog
- 链接：[https://sorabs.cc/](https://sorabs.cc/)
- 头像/Icon：[https://avatars.githubusercontent.com/u/41754841?v=4](https://avatars.githubusercontent.com/u/41754841?v=4)
- 简介/desc: bs在摸鱼还是睡觉呢zzz

~~（和我熟的话其实写什么都行 xxx）~~
:::

交换友链可以邮箱联系我，地址是 [bs@sorabs.cc](mailto:bs@sorabs.cc)；或者直接在下面评论，记得带上类似上面的的格式哦~

拜拜各位大佬们~

排序不分先后，最近加的会放在列表顶部 qwq

<v-container class="page-container" fluid>
  <v-row>
    <v-col :cols="$vuetify.display.mobile ? 12 : 6" v-for="link in $frontmatter.links">
      <LinkCard :key="link.url" v-bind="link" />
    </v-col>
  </v-row>
</v-container>

<script setup>
import LinkCard from './LinkCard.vue'
</script>
