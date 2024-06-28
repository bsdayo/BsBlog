---
title: Blazor 集成 UnoCSS
create: 2024-06-28T21:20:54+08:00
tags:
    - blazor
---

“原子化 CSS”是当前前端开发的一种潮流趋势，大致是使用组合 HTML Class 的方式来完成样式设置，业界最出名的相关技术应该是 Tailwind CSS。而 [UnoCSS](https://unocss.dev) 作为一个“原子化 CSS 引擎”新星，得到了越来越广泛的关注。我自己在前端项目里用过一段时间，也感觉非常不错。

UnoCSS 在各种 JavaScript 前端框架都有很成熟的集成示例，但 Blazor 这块好像并没有看到相关的分享。自己探索了一下，成功在 Blazor 项目中用上了 UnoCSS，并且有原生的热重载支持，这里记录一下。

首先创建一个新的 Blazor 项目做示范：

```shell
$ dotnet new blazor -o BlazorUnoCssDemo
$ cd BlazorUnoCssDemo
```

然后安装 UnoCSS（确保已经安装了 [Node.js](https://nodejs.org/)）：

```shell
$ npm install -D unocss @unocss/cli
```

这里会自动创建 `node_modules` 目录，记得加进 `.gitignore` 里

在项目根目录创建一个 `uno.config.ts`，用于存放 UnoCSS 的配置：

```ts
// uno.config.ts

import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno()],
  cli: {
    entry: {
      patterns: ['**/*.razor'],   // 输入的文件
      outFile: 'wwwroot/uno.css', // 输出的文件
    },
  },
})
```

随后，可以执行以下命令打包 UnoCSS 输出：

```shell
$ npx unocss
```

可以在 `wwwroot` 目录下看到 `uno.css`，这就是 UnoCSS 扫描上面配置里 `patterns` 指定的所有文件后，生成的所需 CSS 文件。

随后在 `App.razor` 中引用：

```razor
<head>
    <!-- ... -->
    <link rel="stylesheet" href="app.css" />
    <link rel="stylesheet" href="uno.css" /> // [!code ++]
    <!-- ... -->
    <HeadOutlet />
</head>
```

在随便一个 razor 文件里加一个 UnoCSS class 试一下：

```razor{7}
<!-- Components/Pages/Home.razor -->

@page "/"

<PageTitle>Home</PageTitle>

<h1 class="text-red">Hello, world!</h1>
```

再次执行 `npx unocss`，会生成新的 `wwwroot/uno.css`，随后重启应用即可看到效果。

重启应用？每次都重启未免有些太麻烦了，好在 UnoCSS 和 .NET 都为我们提供了热重载的选项。

执行 `npx unocss --watch`：

```shell
$ npx unocss --watch
◐ UnoCSS in watch mode...
ℹ Watching for changes in **/*.razor
```

另开一个终端，执行 `dotnet watch`，运行 .NET SDK 内置的热重载工具：

```shell
$ dotnet watch
dotnet watch 🔥 Hot reload enabled. For a list of supported edits, see https://aka.ms/dotnet/hot-reload.
  💡 Press "Ctrl + R" to restart.
dotnet watch ⌚ Started
Building...
info: Microsoft.Hosting.Lifetime[14]
      Now listening on: http://localhost:5014
```

`dotnet watch` 会自动用浏览器打开页面。现在再试试修改 razor 页面中的 class，可以看到两边终端都成功进行了热重载：

```shell
# npx unocss --watch
change Components\Pages\Counter.razor

# dotnet watch
dotnet watch ⌚ File changed: .\Components\Pages\Counter.razor.
dotnet watch 🔥 Hot reload of changes succeeded.
dotnet watch ⌚ File changed: .\wwwroot\uno.css.
dotnet watch 🔥 Hot reload of static file succeeded.
```

回到浏览器，也可以看到样式被正确地刷新了。
