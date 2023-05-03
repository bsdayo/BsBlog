<template>
  <v-app class="bg-transparent">
    <NavBar @toggle-theme="toggleTheme()" />

    <HomeHeader v-if="frontmatter.home" />
    <PageHeader v-else :key="page.relativePath" />

    <PageContainer>
      <template #left>
        <PostList v-if="frontmatter.home" />
        <MarkdownContentCard v-else />
        <GiscusCommentCard
          v-if="isInPost || frontmatter.comment"
          class="my-4"
        />
      </template>

      <template #right>
        <ProfileCard />
      </template>
    </PageContainer>

    <v-footer class="bg-indigo-lighten-1">
      {{ new Date().getFullYear() }} - {{ site.title }}
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { BsBlogThemeConfig } from 'theme'
import { computed, onMounted } from 'vue'
import { useTheme } from 'vuetify'
import initRibbonUnder from './scripts/ribbon'

import NavBar from './components/NavBar.vue'
import PageContainer from './components/PageContainer.vue'
import PostList from './components/PostList.vue'

import HomeHeader from './components/headers/HomeHeader.vue'
import PageHeader from './components/headers/PageHeader.vue'

import MarkdownContentCard from './components/cards/MarkdownContentCard.vue'
import ProfileCard from './components/cards/ProfileCard.vue'
import GiscusCommentCard from './components/cards/GiscusCommentCard.vue'

const { site, page, frontmatter } = useData<BsBlogThemeConfig>()
const vuetifyTheme = useTheme()

const isInPost = computed(() => page.value.relativePath.includes('posts'))

function toggleTheme(themeName?: string) {
  vuetifyTheme.global.name.value =
    themeName ?? (vuetifyTheme.global.current.value.dark ? 'light' : 'dark')
  if (vuetifyTheme.global.name.value === 'dark')
    document.getElementsByTagName('html')[0].classList.add('dark')
  else document.getElementsByTagName('html')[0].classList.remove('dark')
}

onMounted(() => {
  // 加载字体
  import('webfontloader').then((loader) =>
    loader.load({
      google: {
        families: ['Inter'],
      },
    })
  )

  // 监听暗色模式切换
  const darkMatch = matchMedia('(prefers-color-scheme: dark)')
  toggleTheme(darkMatch.matches ? 'dark' : 'light')
  darkMatch.addEventListener('change', (event) =>
    toggleTheme(event.matches ? 'dark' : 'light')
  )

  // 初始化彩带背景
  initRibbonUnder('#app')
})
</script>
