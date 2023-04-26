<template>
  <v-card
    class="post-card mb-6"
    v-for="post in $props.posts"
    :key="post.url"
    :href="post.url"
    v-ripple
  >
    <v-img :src="post.cover" height="200px" cover />
    <v-card-title class="post-card-title">{{ post.title }}</v-card-title>
    <PostListItemCardInfo :url="post.url" :create="post.create" />
    <v-card-text>{{ post.description }}</v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
import PostListItemCardInfo from './PostListItemCardInfo.vue'

defineProps<{
  posts: {
    url: string
    title: string
    cover?: string
    description?: string
    create: number
  }[]
}>()
</script>
