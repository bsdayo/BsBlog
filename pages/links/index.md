---
comment: true

links:
  # 添加到列表顶部就好啦，以下是一个例子：
  # - title: 站点标题！   # [必须] 站点名称！
  #   url: https://your.site.moe   # [必须] 站点链接！
  #   description: 站点描述！   # [可选] 站点描述！
  #   author: 你的名字！   # [可选] 你的名字！（不需要带 @）
  #   avatar: https://your.site.moe/avatar.jpg   # [可选] 站点/你的头像！
  #   socials:
  #     github: bsdayo   # [可选] GitHub 用户名
  #     x: konobsdayo   # [可选] X (Twitter) 用户名

  - title: Restent Ou
    description: 静寂に問う 答えを求めて
    avatar: https://library.gxres.net/images/icons/avatar.webp
    url: https://www.gxres.net

  - title: LY 的博客
    description: 自疏濯淖污泥之中，蝉蜕于浊秽，以浮游尘埃之外。
    author: Young-Lord
    avatar: https://avatars.githubusercontent.com/u/51789698?v=4
    url: https://Young-Lord.github.io
    socials:
      github: Young-Lord

  - title: MBRjun-Blog
    description: MBRjun-Blog
    author: MBRjun
    avatar: https://cos.mbrjun.cn/PICS/LG4v3avatar144px.jpg
    url: https://www.mbrjun.cn/

  - title: Azure Zeng's Blog
    description: Azure Zeng 的小窝
    author: AzureZeng
    avatar: https://azurezeng.com/friendly-link-image.png
    url: https://blog.azurezeng.com/
    socials:
      github: AzureZeng

  - title: Arisa | Blog
    description: Arisa 的个人博客
    author: 秋葉亜里沙
    avatar: https://blog.arisa.moe/assets/favicon.webp
    url: https://blog.arisa.moe/
    socials:
      github: zhanbao2000

  - title: tomato
    description: tomato的小窝
    avatar: https://hatsune.tomato-aoarasi.com/blog/statics/icon/head.jpg
    url: https://wakaba.tomato-aoarasi.com

  - title: JR's Blog
    description: 这里是JR的小屋喵
    avatar: https://avatars.githubusercontent.com/u/40999116
    url: https://blog.jason0743.best/

  - title: Awblogu
    description: 啊呜布洛咕
    author: Awbugl
    avatar: https://blog.awbugl.top/images/avatar.jpg
    url: https://blog.awbugl.top/
    socials:
      github: Awbugl

  - title: NekoHouse
    description: Touching Fish
    author: InariAimu
    avatar: https://avatars.githubusercontent.com/u/23737348
    url: https://blog.amu.moe/
    socials:
      github: InariAimu

  - title: 落雪咖啡屋
    description: Lxns Network
    avatar: https://lxns.net/static/avatar.jpg
    url: https://lxns.net/

  - title: Atmosphere
    description: IN PURSUIT OF FREEDOM
    author: TheSnowfield
    avatar: https://avatars.githubusercontent.com/u/17957399
    url: https://blog.awa.moe/
    socials:
      github: TheSnowfield

  - title: Akula::Blog
    description: 悟已往之不谏，知来者之可追
    author: AkuraKirov
    avatar: https://avatars.githubusercontent.com/u/33571798?v=4
    url: https://blog.akula.moe
    socials:
      github: PhotonSPK
---

# 友情链接

欢迎交换友链~

<<< ./link.ts#me{ts}

~~（和我熟的话其实写什么都行 xxx）~~

添加友链可以[在 GitHub 上修改本页面](https://github.com/bsdayo/blog/edit/main/content/pages/links/index.md)，并提交 Pull Request；或是直接在下面评论~

::: details 提交友链的详细格式！
<<< ./example.yml{yaml}
:::

排序不分先后，最近加的会放在列表顶部

---

<LinkList class="vp-raw" :links="$frontmatter.links" />

<script setup>
import LinkList from './LinkList.vue'
</script>
