<script setup lang="ts">
import { data as posts } from '../../posts.data'
import { useData } from 'vitepress'
import PostCard from '../cards/PostCard.vue'

const { params } = useData()
const postsOfTag = posts.filter(p => p.tags.includes(params.value?.tag))
</script>

<template>
  <PostCard v-for="post in postsOfTag" :key="post.id" :post="post" class="mt-4"/>
</template>

<style scoped lang="scss">

</style>