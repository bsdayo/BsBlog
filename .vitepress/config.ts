import { EnhanceAppContext, defineConfigWithTheme } from 'vitepress'
import { setup } from '@css-render/vue3-ssr'
import { createContainer } from './utils'
import { ThemeConfig } from './theme'
import tags from './tags'
import { renderToString } from 'vue/server-renderer'
import { Mutex } from 'async-mutex'

const transformHtmlMutex = new Mutex()

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

  async transformHtml(html, id, ctx) {
    // VitePress 似乎是对所有页面同时进行渲染，但因为限制只能拿到一个固定的 App 实例，所以需要加互斥锁，防止抢 router
    const release = await transformHtmlMutex.acquire()
    try {
      // ./theme/index.ts 中存了一个全局的 App 实例下来
      const { app, router } = (globalThis as any).__EnhanceAppContext__ as EnhanceAppContext
      const { collect } = setup(app)

      // 随后仿照 VitePress 走 SSR 渲染流程
      // https://github.com/vuejs/vitepress/blob/main/src/client/app/ssr.ts
      const path = (this.base || '/') + ctx.page.replace(/\.md$/, '.html')
      await router.go(path)
      await renderToString(app)

      // 此时可以收集到所有的 CSS 了！
      const styles = collect()
      return html.replace('<head>', `<head>${styles}`)
    } finally {
      // 释放互斥锁
      release()
    }
  },

  themeConfig: {
    tags,

    outline: {
      level: [2, 3],
    },

    nav: [
      { text: '文章', link: '/posts/' },
      { text: '工具', link: '/tools/' },
      { text: '友链', link: '/links/' },
      { text: '关于', link: '/about/' },
    ],

    sidebar: {
      '/tools/': [{ text: '命名风格转换', link: '/tools/case-converter/' }],
    },

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

  vite: {
    ssr: {
      noExternal: ['naive-ui'],
    },
  },
})
