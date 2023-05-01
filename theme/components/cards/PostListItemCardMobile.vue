<template>
  <v-card class="post-card mb-6" :href="$props.url" v-ripple>
    <v-img :src="imgUrl" height="200px" cover />
    <v-card-title class="post-card-title">{{ $props.title }}</v-card-title>
    <PostListItemCardInfo :url="$props.url" :create="$props.create" />
    <v-card-text>{{ $props.description }}</v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { getRandomMoe } from '../../utils'
import PostListItemCardInfo from './PostListItemCardInfo.vue'

const props = defineProps<{
  url: string
  title: string
  cover?: string
  description?: string
  create: number
}>()

const imgUrl = ref(props.cover)
if (!imgUrl.value)
  getRandomMoe('small').then((moeUrl) => (imgUrl.value = moeUrl))
</script>
