import { Theme } from 'vitepress'
import Layout from './Layout.vue'
import vuetify from './vuetify'

import './styles/markdown.scss'
import './styles/containers.scss'

export interface BsBlogThemeConfig {
  avatar: string
  defaultHeaderImage?: string
  posts: Post[]
  navLinks: NavLink[]
}

export interface NavLink {
  href: string
  title: string
  icon: string
}

export interface Post {
  id: string
  title: string
  create: number
  cover?: string
}

const theme: Theme = {
  Layout,

  enhanceApp({ app }) {
    app.use(vuetify)
  },
}

export default theme
