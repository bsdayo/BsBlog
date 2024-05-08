---
title: 开启 Moonlight Android 端的原生触控支持
create: 2024-05-08T11:30:31+08:00
---

## TL;DR

Moonlight 实际上已经做好了原生触控的支持，但是在源码中被注释掉了，取消注释就能正常工作。

修改 [app/src/main/java/com/limelight/Game.java](https://github.com/moonlight-stream/moonlight-android/blob/master/app/src/main/java/com/limelight/Game.java#L2019-L2023)，
去掉第 2019 和第 2023 行（可能不一致，编写本文时的提交为 `f54f8c8`）的注释即可

```java:line-numbers=2016 {4,8}
// TODO: Re-enable native touch when have a better solution for handling
// cancelled touches from Android gestures and 3 finger taps to activate
// the software keyboard.
if (!prefConfig.touchscreenTrackpad && trySendTouchEvent(view, event)) {
    // If this host supports touch events and absolute touch is enabled,
    // send it directly as a touch event.
    return true;
}
```

随后编译安装，在设置里找到“将触控屏作为触摸板使用”并关闭，就可以享受丝滑的原生触控了。

## 经过

前段时间把平板换成了小米平板 6，发现在这颗骁龙 870 的加持下串流效果很不错，感觉不到多少延迟。但由于 Moonlight 里触控默认是直接操作鼠标指针，而不是原生的触屏，感觉操作还是不太方便（例如享受不到 Windows 原生的触控优化，以及不能多点触控）

前往 GitHub Issues 搜索 `multi touch`，找到[这样一个回复](https://github.com/moonlight-stream/moonlight-android/issues/1271#issuecomment-1806897929)

::: quote Maintainer @cgutman 的回复
Yep, this is actually already implemented but disabled. The problem preventing us from shipping it on Android is that full native multi-touch interferes with the ability to launch the virtual keyboard using the 3-finger tap combo. We need to implement some kind of overlay or something to allow activation of the keyboard before we can turn it on. We should also probably add some type of zoom feature since touch targets can be very tiny on a phone/tablet screen.

This wasn't an issue with the PC client because it never had virtual keyboard support.
:::

大意是 Android 端实际上已经做好了原生触控的功能，但是由于和三指打开键盘的功能冲突了，所以被临时注释掉了。
再往下有[一条评论](https://github.com/moonlight-stream/moonlight-android/issues/1271#issuecomment-2002416426)指出了应该修改的地方，也就是上面 [TL;DR](#tl-dr) 部分的内容。

## 体验

非常丝滑，局域网环境下和真正的 Windows 平板体验都差不太多

屏幕键盘可以用 Windows 自带的，够用
