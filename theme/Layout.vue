<script setup lang="ts">
import { useData } from 'vitepress'
import { BsBlogThemeConfig } from './types/config'
import { computed, onMounted } from 'vue'
import { useTheme } from 'vuetify'

import { data as posts } from './posts.data'

import MainFrame from './components/MainFrame.vue'
import HomePage from './components/pages/HomePage.vue'
import ContentPage from './components/pages/ContentPage.vue'
import TagPage from './components/pages/TagPage.vue'

const { page, frontmatter } = useData<BsBlogThemeConfig>()
const vuetifyTheme = useTheme()

const currentPost = computed(() => posts.find(p => p.title === frontmatter.value.title)!)

function toggleTheme(themeName?: string) {
  vuetifyTheme.global.name.value = themeName ?? (vuetifyTheme.global.current.value.dark ? 'light' : 'dark')
}

onMounted(() => {
  // 加载字体
  import('webfontloader').then((loader) =>
    loader.load({
      google: {
        families: ['Lato'],
      },
    })
  )

  // 监听暗色模式切换
  const darkMatch = matchMedia('(prefers-color-scheme: dark)')
  toggleTheme(darkMatch.matches ? 'dark' : 'light')
  darkMatch.addEventListener('change', (event) =>
    toggleTheme(event.matches ? 'dark' : 'light')
  )
})
</script>

<template>
  <v-app :class="$vuetify.theme.global.current.dark ? '' : 'bg-grey-lighten-5'">
    <MainFrame @toggle-theme="toggleTheme()"/>

    <v-main>
      <v-container class="main-container">
        <HomePage v-if="frontmatter.type === 'home'"/>
        <TagPage v-else-if="frontmatter.type === 'tag'"/>
        <ContentPage v-else :post="currentPost"/>
      </v-container>
    </v-main>
    <!--    <v-footer class="bg-grey-darken-4">-->
    <!--      {{ new Date().getFullYear() }} - {{ site.title }}-->
    <!--    </v-footer>-->
  </v-app>
</template>

<style lang="scss" scoped>
.main-container {
  max-width: 1032px;
}
</style>
