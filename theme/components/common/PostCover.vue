<script setup lang="ts">
import { Post } from '../../types/common'
import { useData } from 'vitepress'
import { BsBlogThemeConfig } from '../../types/config'

defineProps<{ post: Post }>()

const { theme } = useData<BsBlogThemeConfig>()
</script>

<template>
  <v-img class="post-card-cover d-flex align-end"
         :src="$props.post.cover ?? theme.defaultPostCover"
         :cover="true"
         max-height="300px">
    <v-card-title class="post-card-title pt-6 pb-4">{{ $props.post.title }}</v-card-title>
  </v-img>
</template>

<style scoped lang="scss">
@import "../../styles/variables";

.post-card-title {
  background: $content-card-title-overlay-bg;
  color: white;
  text-shadow: 0 0 4px #000;
  white-space: normal;
}
</style>