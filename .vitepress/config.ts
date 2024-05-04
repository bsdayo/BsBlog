import { defineConfigWithTheme } from 'vitepress'
import { createContainer } from './utils'
import { ThemeConfig } from './theme'
import tags from './tags'

export default defineConfigWithTheme<ThemeConfig>({
  title: 'SynBlog',
  description: 'SynBlog v4 - Powered by VitePress',

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'one-dark-pro',
    },

    config(md) {
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

  rewrites: {
    'pages/about/index.md': 'about/index.md',
    'pages/posts/index.md': 'posts/index.md',
    'pages/links/index.md': 'links/index.md',
    'pages/tags/index.md': 'tags/index.md',
    'pages/tags/:tag.md': 'tags/:tag.md',
  },

  ignoreDeadLinks: 'localhostLinks',

  themeConfig: {
    tags,
    nav: [
      { text: '文章', link: '/posts/' },
      { text: '友链', link: '/links/' },
      { text: '关于', link: '/about/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bsdayo' },
      { icon: 'x', link: 'https://twitter.com/konobsdayo' },
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
})
