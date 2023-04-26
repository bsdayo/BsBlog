<template>
    <v-img
    :src="frontmatter.image ?? theme.defaultHeaderImage"
    class="page-header d-flex justify-center align-center text-center pa-2"
    cover
  >
    <h1 class="text-h4 font-weight-bold text-white">{{ frontmatter.title ?? page.title }}</h1>
  </v-img>
</template>

<script lang="ts" setup>
import { BsBlogThemeConfig } from 'theme'
import { useData } from 'vitepress'

const { theme, frontmatter, page } = useData<BsBlogThemeConfig>()
</script>

<style lang="scss" scoped>
.page-header {
  height: 400px;
}
</style>