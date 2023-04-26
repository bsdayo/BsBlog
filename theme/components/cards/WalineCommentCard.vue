<template>
  <v-card class="waline-comment-card pa-4">
    <Waline :serverURL="theme.walineUrl" :path="currentPath" :emoji="emoji" />
  </v-card>
</template>

<script lang="ts" setup>
import { useData } from 'vitepress'
import { BsBlogThemeConfig } from 'theme'
import { computed } from 'vue'
import { Waline } from '@waline/client/component'
import { normalizeRelativePath } from '../../utils'

import '@waline/client/dist/waline.css'

const { page, theme } = useData<BsBlogThemeConfig>()

const emoji = [
  'https://unpkg.com/@waline/emojis@1.1.0/tieba',
  'https://unpkg.com/@waline/emojis@1.1.0/bilibili',
  'https://unpkg.com/@waline/emojis@1.1.0/qq',
]

const currentPath = computed(() =>
  normalizeRelativePath(page.value.relativePath)
)
</script>

<style lang="scss">
// Hide Waline GIF button
button.wl-action[title='表情包'] {
  display: none;
}
</style>
