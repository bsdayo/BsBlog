import { Theme } from 'vitepress'
import Layout from './Layout.vue'
import vuetify from './vuetify'

import './styles/global.scss'
import './styles/markdown.scss'
import './styles/containers.scss'

const theme: Theme = {
  Layout,

  enhanceApp({ app }) {
    app.use(vuetify)
  },
}

export default theme
