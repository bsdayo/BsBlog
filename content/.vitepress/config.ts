import { defineConfigWithTheme } from 'vitepress'
import vuetify from 'vite-plugin-vuetify'
import { BsBlogThemeConfig } from '../../theme'
import { createContainer } from './utils'

export default defineConfigWithTheme<BsBlogThemeConfig>({
  title: 'BsBlog',
  description: 'BsBlog v4 - Built with VitePress',

  markdown: {
    theme: 'one-dark-pro',
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
    'pages/links/index.md': 'links/index.md',
  },

  themeConfig: {
    author: 'bsdayo',
    bio: '♪sakana——\\(＞○＜\\)♪',
    avatar: 'https://avatars.githubusercontent.com/u/41754841',
    navLinks: [
      {
        href: '/',
        title: '首页',
        icon: 'mdi-home',
      },
      // {
      //   href: '/categories/',
      //   title: '分类',
      //   icon: 'mdi-shape',
      // },
      // {
      //   href: '/tags/',
      //   title: '标签',
      //   icon: 'mdi-tag',
      // },
      {
        href: '/links/',
        title: '友链',
        icon: 'mdi-link',
      },
      {
        href: '/about/',
        title: '关于',
        icon: 'mdi-information',
      },
    ],
    socialLinks: [
      {
        href: 'https://github.com/bsdayo',
        icon: 'si:github',
        desc: 'GitHub',
      },
      {
        href: 'https://wakatime.com/@bsdayo',
        icon: 'si:wakatime',
        desc: 'WakaTime',
      },
      {
        href: 'https://space.bilibili.com/33268404',
        icon: 'si:bilibili',
        desc: 'BiliBili',
      },
      {
        href: 'mailto:bs@sorabs.cc',
        icon: 'si:gmail',
        desc: 'Mail',
      },
    ],
    loliconHost: 'lolicon-proxy.sorabs.cc',
    giscus: {
      host: 'https://giscus.app',
      repo: 'bsdayo/bsblog',
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
  },

  vite: {
    plugins: [vuetify({ autoImport: true })],
    ssr: {
      noExternal: ['vuetify'],
    },
  },
})
