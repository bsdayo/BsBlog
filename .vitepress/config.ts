import path from 'path'
import { defineConfigWithTheme } from 'vitepress'
import UnoCSS from 'unocss/vite'
import footnote from 'markdown-it-footnote'

import { createContainer } from './utils'
import { ThemeConfig } from './theme'
import sidebar from './sidebar'

export default defineConfigWithTheme<ThemeConfig>({
  title: 'SynBlog',
  description: 'SynBlog v4 - Powered by VitePress',
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'one-dark-pro',
    },

    math: true,

    config(md) {
      md.use(footnote)
      md.use(...createContainer('note', 'NOTE', md))
        .use(...createContainer('abstract', 'ABSTRACT', md))
        // info already added
        // tip already added
        .use(...createContainer('success', 'SUCCESS', md))
        .use(...createContainer('question', 'QUESTION', md))
        // warning already added
        .use(...createContainer('failure', 'FAILURE', md))
        // danger already added
        .use(...createContainer('bug', 'BUG', md))
        .use(...createContainer('example', 'EXAMPLE', md))
        .use(...createContainer('quote', 'QUOTE', md))
    },
  },

  ignoreDeadLinks: 'localhostLinks',

  themeConfig: {
    logo: 'https://avatars.githubusercontent.com/u/41754841',

    taglines: [
      '<code>(() => &lt;bs moe/&gt;)()</code>',
      "<code>h('bs', { moe: true })</code>",
      '<code>[moe.things]::bs</code>',
      '<code>bs.nyan()</code>',
      '<code>Start-Sleep -Duration 365d</code>',
      '<code>while (true) { eat() }</code>',
      '你是？不能忘记的人，很重要的人',
    ],

    outline: {
      label: '目录',
      level: 'deep',
    },

    nav: [
      { text: '文章', link: '/posts/' },
      { text: '工具', link: '/tools/' },
      { text: '友链', link: '/links/' },
      { text: '关于', link: '/about/' },
    ],

    sidebar,

    socialLinks: [
      { icon: 'x', link: 'https://twitter.com/konobsdayo' },
      { icon: 'github', link: 'https://github.com/bsdayo' },
    ],

    giscus: {
      host: 'https://giscus.app',
      repo: 'bsdayo/blog',
      repoId: 'R_kgDOJab-4g',
      category: 'Comments',
      categoryId: 'DIC_kwDOJab-4s4CWGFy',
      mapping: 'pathname',
      strict: '0',
      reactionsEnabled: '0',
      emitMetadata: '0',
      inputPosition: 'top',
      lang: 'zh-CN',
      loading: 'lazy',
    },

    footer: {
      message:
        '若无特别声明，所有内容均采用 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans" target="_blank">CC BY-NC-SA 4.0</a> 协议授权',
      copyright:
        'Copyright © 2024 bsdayo | <a href="https://github.com/bsdayo/blog" target="_blank">GitHub</a>',
    },
  },

  vite: {
    plugins: [UnoCSS()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '..'),
      },
    },
  },
})
