import { createVuetify } from 'vuetify'
import { h } from 'vue'

import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import 'simple-icons-font/font/simple-icons.min.css'

export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
        },
      },
    },
  },
  display: {
    mobileBreakpoint: 768,
  },
  icons: {
    defaultSet: 'mdi',
    sets: {
      si: {
        component: (props) =>
          h('i', {
            class: `si si-${props.icon}`,
          }),
      },
    },
  },
})
