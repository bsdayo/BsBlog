---
comment: true
---

# 关于

## 关于自己

> ~~苦逼高三生~~ ~~毕业了！~~ 苦逼大一生

**开发方面**
- 自学过 Python、JS/TS、Node.js 等技术栈，现在稳定在 .NET/C#，且短时间内不打算更换
- 热衷于“折腾”，兴致来了会沉迷在钻研的过程，即便结果在事后看来/他人眼里并没有什么意义
- 喜欢研究设计模式、底层原理，但算法方面很弱
- 总想写项目，但是经常想不到什么可写的
- 喜欢以各种设计模式重构已有项目
- 对开源事业抱有感恩和热情，但并不迷信
- 相比硬件开发还是更喜欢软件/互联网
- 比较喜欢追最新的东西，或者版本

**娱乐方面**
- 目前主要活跃于 PC 端
- 有点电子 ED，玩一些游戏容易三分钟热度
- 游戏消费基本都在买游戏上，很少氪金
- FPS 爱好者，但是手残（翻译：菜）
- 命运 2 萌新玩家，~~目前打算玩下去~~ 退坑了.jpg
- 喜欢 MMORPG 或者带一些 MMO 属性的游戏，只是实际玩过的确实不太多
- 自动化类游戏爱好者，但中间隔太久没玩了，需要一个契机让我重新捡起来（
- Minecraft 断断续续玩，一般和朋友一起
- 音游人，但是大部分已经退坑或半退坑，有时间和机会会去机厅出勤
- 会打一点雀
- 舟游半退坑玩家

**其他方面**
- 术术/车万人
- 数码爱好者
- 比较喜欢听歌，绝大多数是术曲/日语歌，其他基本不怎么听
- 对平面设计比较感兴趣，自己做过一些但总是不尽人意
- 不善言辞，很多心里话表达不出来，经常为此很苦恼
- 不是也讨厌现充，但是和朋友能一起玩的很开心。面对不得已的交际正在学习给自己打气
- 面对生活并不认真，甚至很随意
- 正在努力纠正作息时间
- 非常讨厌看短视频开外放的人

## 关于博客

经历过 v1 的 Hexo、v2 用 Vue 从头写、v3 的 Hugo，博客 v4 终于还是来了...

这一次是基于 [VitePress](https://vitepress.dev/) 的纯前端 SSG 博客，虽然和 v2 一样还是基于 Vue，但是底层（例如 Markdown
处理、脚手架等等等等）就完全不用自己写了。魔改了一下默认主题，先用着试试

VitePress 好用的功能还是挺多的，比如直接在 Markdown 中使用 Vue 组件。例如我用 [shadcn-vue](https://www.shadcn-vue.com/) 定制的 Button）：

<div class="space-x-2">
  <Button>这是一个自定义的 Button</Button>
  <Button variant="destructive">这是另一个</Button>
</div>

和一些内置的 [Markdown 扩展](https://vitepress.dev/guide/markdown)（修改了一些样式）：

::: tip 这是一个自定义的文本块
♪sakana——\\(＞○＜\\)♪ &emsp; `:fish:` → :fish: Emoji 支持

更多样式预览可以前往[这里](/posts/blog-style-overview/)查看
:::

整个博客已经[开源在了 GitHub 上](https://github.com/bsdayo/blog)，内容部分采用 CC BY-NC-SA 4.0 协议，其他部分采用 MIT 协议。

## PGP 公钥

```
-----BEGIN PGP PUBLIC KEY BLOCK-----

mDMEZOo7cRYJKwYBBAHaRw8BAQdABhgFhzsAe5ZWELwJZQC5ZW6mKpKnc19I/lE9
Sx8q9oK0G2JzZGF5byA8YnNkYXlvQG91dGxvb2suY29tPoiTBBMWCgA7FiEE9Aw3
FJMAyhFf/6ksSIn3505VXKIFAmTqO3ECGwEFCwkIBwICIgIGFQoJCAsCBBYCAwEC
HgcCF4AACgkQSIn3505VXKKhmQD9ERhKXVXa5be7g9YX/SQD+mNwfTlSt3iXLK6o
+L4LoTUBAPp9J1u1WqnnGPfqnoH97mhzPoZXdqqgeRGiPjSA9sMKuDMEZOo/sRYJ
KwYBBAHaRw8BAQdAsxDbBuD+fwHoRdikUvc8yfWcHVWYd6ZDqReKvFfe3saI7wQY
FgoAIBYhBPQMNxSTAMoRX/+pLEiJ9+dOVVyiBQJk6j+xAhsCAIEJEEiJ9+dOVVyi
diAEGRYKAB0WIQQFHShJOKqbC3e2lmxYAQJymnVvdQUCZOo/sQAKCRBYAQJymnVv
dYdQAQD4sB1ngBkLu6a64QgsrrSjZLJX2gYZDr5nc0iqVrDYDQD+Ix3QVVfitROi
KdCufgw3QSK/nRKH//x6dCTKUT6SQAadWwD/eZwR22HonloYMmdxvZFg6tgsB+SV
qcLLEny5ABdzm1oA/jDzid9T9giWo2/0e6a/xQYj4Jqt6JONvruKg027x3sA
=r2MB
-----END PGP PUBLIC KEY BLOCK-----
```

## 碎碎念

折腾这么多年，博客写写停停，时间都花在折腾博客框架本身去了...自己写博客的初衷又是什么呢？

这一次还是希望自己能坚持写下去x

底下的评论区就当个留言板罢

<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>
