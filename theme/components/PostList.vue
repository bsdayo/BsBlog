<template>
  <PostListItemCardMobile
    v-if="$vuetify.display.mobile"
    :posts="currentPosts"
  />
  <PostListItemCardDesktop v-else :posts="currentPosts" />

  <v-pagination
    v-model="currentPage"
    :length="Math.ceil(sortedPosts.length / 5)"
  />
</template>

<script lang="ts" setup>
import { useData } from 'vitepress'
import { ref, computed } from 'vue'
import { BsBlogThemeConfig } from 'theme'
import { data as posts } from '../scripts/posts.data'

import PostListItemCardDesktop from './cards/PostListItemCardDesktop.vue'
import PostListItemCardMobile from './cards/PostListItemCardMobile.vue'

const { theme } = useData<BsBlogThemeConfig>()

const sortedPosts = posts
  .map((p) => {
    return {
      ...p,
      url: p.url.replace('index.html', ''),
      id: /(?<=\/posts\/).*(?=\/)/.exec(p.url)![0],
      title: p.frontmatter.title ?? 'Untitled Post',
      cover: p.frontmatter.cover ?? theme.value.defaultPostCover,
      description: p.frontmatter.description,
      create: p.frontmatter.create
        ? new Date(p.frontmatter.create).getTime()
        : Date.now(),
    }
  })
  .sort((a, b) => b.create - a.create)

const currentPage = ref(1)
const currentPosts = computed(() =>
  sortedPosts.slice(5 * (currentPage.value - 1), 5 * currentPage.value)
)
</script>

<style lang="scss">
.post-card * {
  white-space: normal;
}
</style>
