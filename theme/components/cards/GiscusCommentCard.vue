<template>
  <v-card :key="page.relativePath" class="giscus-comment-card pa-6">
    <Giscus
      v-bind="theme.giscus"
      :theme="$vuetify.theme.current.dark ? 'transparent_dark' : 'light'"
    />
  </v-card>
</template>

<script lang="ts" setup>
import Giscus from '@giscus/vue'
import { useData } from 'vitepress'
import { BsBlogThemeConfig } from 'theme'

const { theme, page } = useData<BsBlogThemeConfig>()
</script>
