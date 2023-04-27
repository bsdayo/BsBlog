<template>
  <v-card class="post-card mb-6" :href="$props.url" v-ripple>
    <v-img :src="$props.cover" height="200px" cover />
    <v-card-title class="post-card-title">{{ $props.title }}</v-card-title>
    <PostListItemCardInfo :url="$props.url" :create="$props.create" />
    <v-card-text>{{ $props.description }}</v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
import PostListItemCardInfo from './PostListItemCardInfo.vue'

defineProps<{
  url: string
  title: string
  cover?: string
  description?: string
  create: number
}>()
</script>
