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
    :length="Math.ceil(sortedPosts.length / 5)"
  />
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { data as posts } from '../scripts/posts.data'
import { expandPostData } from '../utils'

import PostListItemCardDesktop from './cards/PostListItemCardDesktop.vue'
import PostListItemCardMobile from './cards/PostListItemCardMobile.vue'
import PostListItemCardInfo from './cards/PostListItemCardInfo.vue'

const sortedPosts = posts
  .map((p) => expandPostData(p))
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
