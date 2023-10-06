---
title: 《深圳 I/O》部分个人解法
create: 2023-10-06T08:23:26.322Z
cover: /img/covers/shenzhen-io-solutions.webp

tags:
  - game
---

仅摘取耗费了我许多时间思考，或十分感兴趣的关卡

## 红外线探测器 - 重要

- 产品成本：￥8
- 电量使用：659
- 代码行数：18

![连接图](./infrared-sensor.webp)

```
上方 MC4000
==================
  slx x0
  tlt x0 20
- mov 100 p1
+ mov 0 p1
```

```
下方 MC6000
==================
  mov 0 acc
  tlt x2 x1
+ jmp s_e
e_s: tlt p1 x2
+ tcp p1 x1
- jmp write
  jmp end
s_e: tlt p1 x1
- jmp end
+ tlt p1 x2
+ jmp end
write: mov p0 acc
end: mov acc x0
  slp 1
```
