import { defineConfigWithTheme } from 'vitepress'
import vuetify from 'vite-plugin-vuetify'
import { BsBlogThemeConfig } from '../../theme'
import { createContainer, indexPosts } from './utils'

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
    'pages/about/index.md': 'about.md',
  },

  themeConfig: {
    avatar: 'https://avatars.githubusercontent.com/u/41754841',
    defaultHeaderImage: 'https://w.wallhaven.cc/full/zy/wallhaven-zygeko.jpg',
    navLinks: [
      {
        href: '/',
        title: '首页',
        icon: 'mdi-home',
      },
      // {
      //   href: '/categories',
      //   title: '分类',
      //   icon: 'mdi-shape',
      // },
      // {
      //   href: '/tags',
      //   title: '标签',
      //   icon: 'mdi-tag',
      // },
      // {
      //   href: '/links',
      //   title: '友链',
      //   icon: 'mdi-link',
      // },
      {
        href: '/about',
        title: '关于',
        icon: 'mdi-information',
      },
    ],
    posts: indexPosts(),
  },

  vite: {
    plugins: [vuetify({ autoImport: true })],
    ssr: {
      noExternal: ['vuetify'],
    },
  },
})
