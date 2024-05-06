---
title: 博客样式总览
description: 测试一些 Markdown 功能
create: 2024-05-06T11:45:14+08:00
---

## Markdown 样式

### 基本元素

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

[SynBlog Home Page](/)

> Reference `something`

### 代码

`./inline-code`

```csharp
// Code block
for (var i = 0; i < 100; i++)
{
    Console.WriteLine($"Count: {i}");
}
```

### 表格

| Header 1  | Header 2  | Header 3  |
| :-------: | :-------: | :-------: |
| Content 1 | Content 2 | Content 3 |
| Content 4 | Content 5 | Content 6 |
| Content 7 | Content 8 | Content 9 |

### 自定义文本块

Colors borrowed from [Material for MkDocs: Admonitions](https://squidfunk.github.io/mkdocs-material/reference/admonitions/).

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

::: success Complex content in container
[SynBlog Home Page](/)

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

## 组件样式

魔改自 [shadcn-vue](https://www.shadcn-vue.com)

### Button

<div class="mt-2 grid grid-cols-3 gap-2">
  <Button>Primary</Button>
  <Button variant="destructive">Destructive</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="ghost">Ghost</Button>
  <Button disabled>Disabled</Button>
</div>

### Input

<div class="mt-2">
  <Input placeholder="With placeholder" />
</div>

### Switch

<div class="mt-2 grid grid-cols-3 gap-2">
  <div class="flex justify-center items-center space-x-2">
    <Label>Normal</Label>
    <Switch />
  </div>
  <div class="flex justify-center items-center space-x-2">
    <Label>Checked</Label>
    <Switch checked />
  </div>
  <div class="flex justify-center items-center space-x-2">
    <Label>Disabled</Label>
    <Switch disabled />
  </div>
</div>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
</script>
