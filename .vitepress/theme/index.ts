import { DefaultTheme as DefaultThemeType, Theme, ContentData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import { GiscusProps } from '@giscus/vue'
import './custom.scss'

const theme: Theme = {
  extends: DefaultTheme,
  Layout,
}

export default theme

export interface ThemeConfig extends DefaultThemeType.Config {
  giscus: GiscusProps
  tags: Record<string, [name: string, color?: string]>
}

export interface Post extends ContentData {
  id: string
  title: string
  description?: string
  create: number
  category?: string
  tags: string[]
}
