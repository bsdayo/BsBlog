<script setup lang="ts">
import { data as posts } from '../../posts.data'
import PostCard from '../cards/PostCard.vue'

const sortedPosts = posts.sort((a, b) => b.create - a.create)
</script>

<template>
  <PostCard v-for="post in sortedPosts" :key="post.id" :post="post" class="mb-4"/>
</template>

<style scoped lang="scss">

</style>