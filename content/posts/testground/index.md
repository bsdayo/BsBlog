---
title: Test Ground
description: 测试一些 Markdown 功能
create: 2023-04-25T11:45:14+08:00
cover: /img/covers/testground.webp
---

## Standard Markdown

*This text will be italic*  
_This will also be italic_

**This text will be bold**  
__This will also be bold__

* Item 1
* Item 2
* Item 3

1. Item 1
2. Item 2
3. Item 3

[BsBlog Home Page](/)

> Reference `something`

`This is an inline code.`

```csharp
// This is a code block
for (var i = 0; i < 100; i++)
{
    Console.WriteLine($"Now is {i}");
}
```

## Custom Containers

Style borrowed from [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/reference/admonitions/).

::: note 备注 Note
Lorem ipsum dolor sit amet...
:::

::: abstract 摘要 Abstract
Lorem ipsum dolor sit amet...
:::

::: info 信息 Info
Lorem ipsum dolor sit amet...
:::

::: tip 提示 Tip
Lorem ipsum dolor sit amet...
:::

::: success 完成 Success
Lorem ipsum dolor sit amet...
:::

::: question 疑问 Question
Lorem ipsum dolor sit amet...
:::

::: warning 警告 Warning
Lorem ipsum dolor sit amet...
:::

::: failure 失败 Failure
Lorem ipsum dolor sit amet...
:::

::: danger 危险 Danger
Lorem ipsum dolor sit amet...
:::

::: bug 漏洞 Bug
Lorem ipsum dolor sit amet...
:::

::: example 示例 Example
Lorem ipsum dolor sit amet...
:::

::: quote 引用 Quote
Lorem ipsum dolor sit amet...
:::

::: tip Complex content in container
[BsBlog Home Page](/)

- Item 1
- Item 2

> Reference `something`

`This is an inline code.`

```csharp
// This is a code block
for (var i = 0; i < 100; i++)
{
    Console.WriteLine($"Now is {i}");
}
```

:::