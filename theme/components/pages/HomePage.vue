<script setup lang="ts">
import { data as posts } from '../../posts.data'
import PostCard from '../cards/PostCard.vue'
</script>

<template>
  <PostCard v-for="post in posts" :key="post.id" :post="post" class="mb-4"/>
</template>

<style scoped lang="scss">

</style>