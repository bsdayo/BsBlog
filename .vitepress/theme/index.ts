import { DefaultTheme as DefaultThemeType, Theme, ContentData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import { GiscusProps } from '@giscus/vue'

import UIButton from '@/components/ui/UIButton.vue'
import UIInput from '@/components/ui/UIInput.vue'

import './custom.scss'
import 'virtual:uno.css'

const theme: Theme = {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('ui-button', UIButton)
    app.component('ui-input', UIInput)
  },
}

export default theme

export interface ThemeConfig extends DefaultThemeType.Config {
  giscus: GiscusProps
  taglines: string[]
}

export interface Post extends ContentData {
  id: string
  title: string
  description?: string
  create: number
  category?: string
  tags: string[]
}
