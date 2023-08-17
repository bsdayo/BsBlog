<script setup lang="ts">
import { useData } from 'vitepress'
import { BsBlogThemeConfig } from '../../types/config'
import Giscus from '@giscus/vue'

const { page, theme } = useData<BsBlogThemeConfig>()
</script>

<template>
  <v-card :key="page.relativePath" class="giscus-card pa-4">
    <Giscus v-bind="theme.giscus" :theme="$vuetify.theme.current.dark ? 'transparent_dark' : 'light'"/>
  </v-card>
</template>