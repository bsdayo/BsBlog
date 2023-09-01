import { defineConfigWithTheme } from 'vitepress'
import vuetify from 'vite-plugin-vuetify'
import { BsBlogThemeConfig } from '../../theme/types/config'
import { createContainer } from './utils'

export default defineConfigWithTheme<BsBlogThemeConfig>({
  title: 'BsBlog',
  description: 'BsBlog v4 - Powered by VitePress',

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
    'pages/timeline/index.md': 'timeline/index.md',
    'pages/links/index.md': 'links/index.md',
    'pages/tags/index.md': 'tags/index.md',
    'pages/tags/:tag.md': 'tags/:tag.md',
  },

  ignoreDeadLinks: 'localhostLinks',

  transformPageData(pageData, { siteConfig }) {
    console.log(pageData.relativePath)

    if (!pageData.params?.tag)
      return

    const tagId = pageData.params.tag
    const tag = (siteConfig.site.themeConfig as BsBlogThemeConfig).tags[tagId]

    pageData.title = `${pageData.title} - ${tag?.[0] ?? tagId}`
    pageData.frontmatter.title = pageData.title
  },

  themeConfig: {
    author: 'bsdayo',
    bio: '怎么会是呢？',
    avatar: 'https://avatars.githubusercontent.com/u/41754841',
    avatarBg: '/img/avatarBg.jpg',
    defaultPostCover: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
    navLinks: [
      {
        href: '/',
        title: '首页',
        icon: 'mdi-home',
      },
      {
        href: '/timeline/',
        title: '时间线',
        icon: 'mdi-clock',
      },
      // {
      //   href: '/categories/',
      //   title: '分类',
      //   icon: 'mdi-shape',
      // },
      {
        href: '/tags/',
        title: '标签',
        icon: 'mdi-tag',
      },
      {
        href: '/links/',
        title: '友情链接',
        icon: 'mdi-link-variant',
      },
      {
        href: '/about/',
        title: '关于',
        icon: 'mdi-heart',
      },
    ],
    socialLinks: [
      {
        href: 'https://github.com/bsdayo',
        icon: 'si:github',
        desc: 'GitHub',
      },
      {
        href: 'https://steamcommunity.com/id/bsdayo/',
        icon: 'si:steam',
        desc: 'Steam',
      },
      {
        href: 'https://space.bilibili.com/33268404',
        icon: 'si:bilibili',
        desc: 'BiliBili',
      },
    ],
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

    tags: {
      'archlinux': ['Arch Linux', '#1793D1'],
      'csharp': ['C#', '#239120'],
      'git': ['Git', '#F05032'],
      'github': ['GitHub', '#181717'],
      'gpg': ['GPG'],
      'leetcode': ['LeetCode', '#FFA116'],
      'linux': ['Linux', '#FCC624'],
      'pixel-arts': ['像素画'],
      'raspberrypi': ['Raspberry Pi', '#A22846'],
      'skiasharp': ['SkiaSharp'],
      'ubuntu': ['Ubuntu', '#E95420'],
      'vscode': ['Visual Studio Code', '#007ACC'],
      'wsl': ['Windows Subsystem for Linux', '#0078D4']
    }
  },

  vite: {
    plugins: [vuetify({ autoImport: true })],
    ssr: {
      noExternal: ['vuetify'],
    },
  },
})
