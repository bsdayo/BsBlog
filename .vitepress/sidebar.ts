import { DefaultTheme } from 'vitepress'

export default {
  '/tools/': [
    {
      text: '杂项',
      items: [{ text: '出你姓氏', link: '/tools/guess-your-last-name/' }],
    },
  ],
} satisfies DefaultTheme.Sidebar
