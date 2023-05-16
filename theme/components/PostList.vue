<template>
  <div v-for="(post, index) in currentPosts" :key="post.url">
    <PostListItemCardMobile v-if="$vuetify.display.mobile" v-bind="post">
      <PostListItemCardInfo v-bind="post" />
    </PostListItemCardMobile>
    <PostListItemCardDesktop v-else v-bind="post" :index="index">
      <PostListItemCardInfo v-bind="post" />
    </PostListItemCardDesktop>
  </div>

  <v-pagination
    v-model="currentPage"
    :length="Math.ceil(sortedPosts.length / postPerPage)"
  />
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useData } from 'vitepress'
import { data as posts } from '../scripts/posts.data'
import { getPostFromData } from '../utils'
import { BsBlogThemeConfig } from 'theme'

import PostListItemCardDesktop from './cards/PostListItemCardDesktop.vue'
import PostListItemCardMobile from './cards/PostListItemCardMobile.vue'
import PostListItemCardInfo from './cards/PostListItemCardInfo.vue'

const { theme } = useData<BsBlogThemeConfig>()
const postPerPage = theme.value.postPerPage ?? 5

const sortedPosts = posts
  .map((p) => getPostFromData(p))
  .sort((a, b) => b.create - a.create)

const currentPage = ref(1)
const currentPosts = computed(() =>
  sortedPosts.slice(postPerPage * (currentPage.value - 1), postPerPage * currentPage.value)
)
</script>

<style lang="scss">
.post-card * {
  white-space: normal;
}
</style>
