---
title: 一路走来，感谢有你 —— 暮雪酱 Arcaea 模块的前世今生
create: 2023-04-27T22:48:38+08:00
category: 分享
description: 随着 lowiro 对 ArcaeaUnlimitedAPI 的彻底封禁，暮雪酱 Arcaea 查分模块的生命也走到了尽头。在这里，我们一起回顾一下暮雪酱 Arcaea 模块的发展史...
---

## 2021 年 8 月

当时还是个引诱萌新，机缘巧合之下认识了 Arcaea 这个**创**新立体节奏音游，很快就喜欢上了。一次不知道从哪听来 ptt 这个东西，就跑去
wiki 查，了解到推分的机制，也知道了 B30 的存在。正好当时加的引诱群里有 Andrea 系 Bot 里的 Dantage，顺手就用了起来，天天打完就查分（

不得不说查分确实是好东西，很长一段时间都成了我推分的动力，看着 ptt 不断攀升，心情也是比较愉悦的

## 2022 年 1 月

作为一名头铁的开发者，当然是选择自己造轮子了（）当时并不清楚这些查分 Bot 的数据都从哪里来，就自己去 GitHub
上翻。翻了半天找到一个叫 [BotArcAPI](https://github.com/Arcaea-Infinity/BotArcAPIs-Memories) 的项目，似乎就是我要找的，但是被我发现的时候已经
Archive 了...不信邪地又翻了翻，在 badge 里找到了一个 QQ 群号，加进去发现是一个音游码农群（~~现在已经是白丝贫乳群了~~
）。潜了半天水，后来找到一个看起来像关键人物的群友，就去打探了下情报。接着便了解到 BotArcAPI 的续作 ArcaeaUnlimitedAPI
这个项目，并成功要到了 API 的访问权限。

这时候也被拉进了 [Arcaea-Infinity](https://github.com/Arcaea-Infinity)（~~无限玻璃渣子~~）组织，有一种找到家的感觉.jpg

拿到了数据之后，我就开始着手开发第一代 Bot 了，也就是暮雪酱的前身 lancelot，老用户应该还记得。当时由于前一年都在写 Vue，对
Node.js 和 TypeScript 很熟悉，就直接选为 Bot 的开发语言了。框架选用了 [koishi.js](https://github.com/koishijs/koishi)
，高度封装开箱即用，也就没有花什么时间在聊天平台的对接上。印象里总共花了四天的时间来完成整套功能，由于很多技术从前没有使用过，大部分时间就花在了查各种文档上。

核心的功能，像是 B30、最近成绩、单曲最高分的图查，以及曲目信息和别名的查询，在当时已经完成了。写完之后自己试用了一段时间，也比较满意。

::: note 一些命名小细节
lancelot 这个名字，实际上来源于我的手机 Redmi 9 的机型代号 `lancelot`。

当时的 lancelot 二号机 latte 名字来源于我的主力开发机 MiPad 2 的机型代号 `latte`。

另外有一个用于测试的 Bot，名字是 blueline，来源于一位好朋友当时用的 Pixel 3 的机型代号 `blueline`。
:::

## 2022 年 2 月

当时也是比较浮躁，想着把 Bot 公开，就撰写了[一篇哔哩哔哩专栏](https://www.bilibili.com/read/cv15225236/)，介绍我的
lancelot。截至当前，专栏已经有上万的浏览量，200+
的点赞和收藏，也是很感谢大家的支持和厚爱。直到现在都忘不掉那段时间——守在群里等加群申请，期待他们试用之后的评价。结果就是，玩家们的热情有点超出了我当时的想象，加群的人真的可以用络绎不绝来描述了x

同时也认识了许多老朋友，从开始一直陪着走到了现在，感谢你们~

二月份添加了很多新功能，比如 `/a random`，`/a recommend`。月底的时候，成功申请到了 616 官方的
ArcaeaLimitedAPI，因此加入了 `/a b30 --official` 功能。

<v-expansion-panels>
  <v-expansion-panel title="初版 B30 图查">
  <template #text>

![初版 B30 图查](initial-b30.webp)

  </template>
  </v-expansion-panel>
</v-expansion-panels>

## 2022 年 3 月

这时候群里人数已经上百了，我也开始开发一些娱乐功能，比如帮我选（`/choose`），五千兆元 meme 生成（`/5k`），以及大家以前喜闻乐见的戳一戳（

arc 方面也加入了用于根据分数计算单曲 ptt 的 `/a ptt`，和找车车 `/a ycm`

同时写了一些更新曲目数据库的小工具，简化更新流程。

这个月由于高频触发冻结，探索发现 QQ 频道连冻结机制都没有，就把 lancelot 适配到了 QQ 频道。还尝试过把 lancelot 适配到
Telegram，以便不时之需，但是后来由于没给梯子续费等种种原因就不了了之了x

频道没有人数限制，截至现在已经有 3000 多人了。最早的时候每天都要处理几十个加频道申请，很久之后才归于正常（

## 2022 年 4 月

这时候 Arcaea 功能已经相对完善了，大部分在忙一些不相关的小功能。

给图查加入了暗色模式。

## 2022 年 5 - 7 月

这段时间算是我开发生涯中的一道巨大的分水岭。受群友影响，我开始尝试学习 .NET 和
C#，并逐渐意识到它带来的巨大生产力提升，现在看来也很幸运。当时有一种什么感觉呢，用过了 C# 之后，再也不想回到用 TS
写项目的时代了（前端除外）

同期见到了另外几个群友的 Arcaea Bot 也是用 C# 开发的，秉持着不知道哪里来的“折腾就是生命的原则”，我彻底转向 .NET/C#，开始了
lancelot 的重写工作。

重写过程中，有两个 Bot 项目对我的帮助、启发十分巨大，分别是 [AimuBot](https://github.com/InariAimu/AimuBot) 和
RinBot（现已更名为 [SuzuBot](https://github.com/ProjektSuzu/SuzuBot)）。当时 .NET 这边并没有好用的指令框架，除了底层用于和
QQ 通信的部分 [Konata.Core](https://github.com/KonataDev/Konata.Core) 外，所有轮子都得自己造。在深度参考了他们的项目结构、思路后，我完成了新
Bot 的最初版本，以一位非常重要的人的名字为灵感，起名为——暮雪酱。

这个时期的暮雪酱远远不够成熟，所以当时把她作为一个可选项，与 lancelot 同步使用。为了区分开来，暮雪酱的指令前缀采用了 `#`，而不是
lancelot 的 `/`。

暮雪酱最早以复刻一个 lancelot 的子集为目标，因此大部分的指令操作、图查都和 lancelot 保持一致，仅有单曲查询的图查经过了重新设计，也就是大家最后看到的样子。

另外基于 ArcaeaUnlimitedAPI 的新功能，给 lancelot 和暮雪酱加上了查询谱面预览的功能，也就是 `/a preview`。

## 2022 年 8 月

这个时候 lancelot 已经没有处于积极开发中了，转为维护阶段。而暮雪酱迎来了第一个独占的功能——猜曲绘（`/a guess`）。同时，暮雪酱也支持了官方
ArcaeaLimitedAPI。到了这个阶段，lancelot 的大部分功能都已经被暮雪酱重新实现，暮雪酱也成为了群内主要使用的 Bot。

## 2022 年 9 - 10 月

暮雪酱 v1 还是基于笨拙的字符串分割来解析指令，好怀念 koishi 强大的指令系统啊，怎么办呢？

暮雪酱基于 Konata.Core，只能适配传统 QQ，但是 QQ 频道还有大量用户在使用 lancelot，怎么办呢？

办法当然是有的，那就是自己用 C# 重新造一个 koishi 出来！（

我还真就这么干了，开启了一个叫 [Flandre](https://github.com/FlandreDevs/Flandre/) 的新项目，旨在成为一个 .NET
下的跨平台、兼具易用与实用的 Bot 开发框架。经过一个月的努力，成功地把它造了出来，并开源在 GitHub 上。

十月份发生了一件很糟心的事情：在一次给 lancelot 修复 bug 的时候，我更新了一下 koishi 的版本。不更新还好，这一更新就把 Bot
给整炸了——koishi 在小版本里加了不向后兼容的修改，导致 lancelot 出现了很多奇奇怪怪的问题。而我这时候已经脱离 Node
技术栈有一段时间了，一下又找不到 koishi 那边到底做了什么改动，实在有点力不从心。无可奈何之下，只能发布公告，宣布 lancelot
正式停止服务。QQ 群这边有暮雪还好说，频道没了 lancelot 就没 Bot 用了。没办法，只能咬咬牙爆肝
Flandre，把暮雪酱迁移到新框架上，这样就达成了跨平台的目的，群和频道共用同一套服务了。

好在同是 C#，不用经过跨语言的重写，花了几天的时间就把基本功能迁移完毕了。同时加了设置偏好的新功能（`/a preference`）。

## 2022 年 11 月

暮雪 v2 已经正式在 QQ 频道发布了，情况也逐渐趋于稳定。这时候引入了潜力值曲线查询功能 `/a user`
，受到很多人的喜爱。数据爬取自 [esterTion 的网页查分器](http://redive.estertion.win/arcaea/probe/)。

## 2022 年 12 月

已经到年末了。为了征集改进暮雪的建议，也为了了解用户的满意程度，我撰写了一份年度调查问卷，发放给大家。问卷结果里大部分都是支持与鼓励，当时看了真的非常、非常感动。

暮雪 v2 支持了官方
API。单曲图查的背景不再是单调的同一张，而是会根据曲绘发生变化。添加了 [Arcanya](https://github.com/Arcaea-Infinity/Arcanya)
版本的 AI 猫猫曲绘，供用户自行选择切换。

## 2023 年 1 月

新的一年了！这个时候已经观察到用户人数仍在不断增长，便将目光放长远了一些，开始计划开放自行部署暮雪酱。但是暮雪酱 v2
仍是“单机版”，数据都保存在本地，第三方部署的话无法获取到已有用户的绑定数据，需要重新积累，无疑是一个很大的麻烦。想来想去，就有了暮雪酱
v3 的计划：独立出来一个中心服务器，承担数据获取、保存的任务；客户端负责处理由服务端下放的数据、图查生成等。这样一来，客户端单独部署就方便了很多。

有想法就开始行动了，半个月的时间大概过了一下 ASP.NET Core，月底就正式宣布了暮雪 v3
大更新。同时把暮雪[开源出来](https://github.com/bsdayo/YukiChan)
，也开通了哔哩哔哩官号 [@暮雪酱_Official](https://space.bilibili.com/13662066)。

暮雪 v3 架构图：
![暮雪 v3 架构图](yukichan-v3-architecture.jpg)

## 2023 年 2 - 3 月

这个阶段代码写的少了一些，主要都在修复以前留下没解决的陈年 bug。

lowiro 官宣了新功能 Arcaea Online，是一项官方提供的查分服务。当时有一些预感，想着看看再说。

## 2023 年 4 月

lowiro 正式推出了 Arcaea Online **订阅**，售价 200 源点 / 月。同时关闭了 ArcaeaLimitedAPI，并对 ArcaeaUnlimitedAPI
实行技术封锁，大量封禁后者的查分用账号。同时在注册环节上加了人机验证，让 AUA 的批量注册功能也瘫痪掉了。

种种操作导致 ArcaeaUnlimitedAPI 无法坚持下去，宣布无限期停止服务。这也意味着原本基于 AUA 的 Bot 查分功能全部被迫停止服务，且基本没有再恢复的可能。

616 你睡得着吗？

我睡不着。

## 想说的话

洋洋洒洒写了一堆，到了最后反倒说不出什么话了（笑）

一年多了，收获了很多很多知识，也认识了很多真心的好朋友。开发 Bot，和群友们水群，和 616 各种对线，回想起一路上的经历都很快乐。

虽说是 Arcaea 模块的前世今生，可暮雪原本就是为 Arcaea 查分而设计的 Bot，失去了查分功能，存在的意义也不大了，也许就全线停止服务了吧。暮雪也已经在
GitHub 上全面开源。  
[暮雪酱主仓库](https://github.com/bsdayo/YukiChan)&emsp;[暮雪酱服务端仓库](https://github.com/bsdayo/YukiChan.Server)

这一切值得吗？我认为是值得的。只要我们的服务能为用户带来帮助，产生了价值，那它就是值得的。

希望暮雪酱能在各位的记忆中留下一道痕迹。

差不多就到这里了。保重。

## 致谢

- **[Arcaea-Infinity](https://github.com/Arcaea-Infinity)**  
  Arcaea 开源界的中坚力量。梦开始的地方，也是一个真正能找到志同道合之人的地方。

- **[Awbugl](https://github.com/Awbugl)**  
  Andrea、ArcaeaUnlimitedAPI 项目维护方。最早支持、引导我的 Bot 开发的人之一。

- **[TheSnowfield](https://github.com/TheSnowfield)**  
  在我学习 .NET 的早期，以及在框架设计方面提供了大量的项目参考与指点。

- **[AkulaKirov](https://github.com/AkulaKirov)**  
  Bot 项目参考，暮雪酱的设计思路来源。学习 .NET 的过程中给予了许多帮助。

- **[InariAimu](https://github.com/InariAimu)**  
  Bot 项目参考，暮雪酱的设计思路来源。Arcanya 曲绘提供方。

- ...

- **暮雪酱 & lancelot 全体用户**

- **以及，正在阅读这篇文章的，你。**

## 大事记

<v-timeline side="end">
  <v-timeline-item size="small" v-for="(event, date) in events">
    <v-card>
      <v-card-title>{{ date }}</v-card-title>
      <v-card-text>{{ event }}</v-card-text>
    </v-card>
  </v-timeline-item>
</v-timeline>

<script setup>
const events = {
  "2022.01.22": "lancelot 第一次提交",
  "2022.01.27": "QQ 一群建立",
  "2022.02.12": "发布哔哩哔哩专栏《全新的 Arcaea 查分bot —— lancelot》",
  "2022.03.17": "QQ 频道建立",
  "2022.03.18": "QQ 二群建立",
  "2022.06.03": "暮雪酱 v1 第一次提交",
  "2022.07.08": "暮雪酱 v1 正式投入使用",
  "2022.10.15": "lancelot 放弃维护，暮雪酱 v2 第一次提交",
  "2022.11.08": "暮雪酱 v1 归档，全面切换至暮雪酱 v2",
  "2022.12.14": "暮雪酱 2022 年度调查问卷开放",
  "2023.01.28": "暮雪酱 v3 正式发布，哔哩哔哩官号开通",
  "2023.03.10": "Arcaea Online 官宣",
  "2023.04.26": "ArcaeaLimitedAPI 停止服务",
  "2023.04.27": "Arcaea Online 发布，ArcaeaUnlimitedAPI 停止服务，暮雪酱查分功能停止服务",
}
</script>
