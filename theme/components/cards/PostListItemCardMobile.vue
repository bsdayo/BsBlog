<template>
  <v-card class="post-card mb-6" :href="$props.url" v-ripple>
    <v-img :src="imgUrl" height="200px" cover />
    <v-card-title class="post-card-title">{{ $props.title }}</v-card-title>
      <slot />
    <v-card-text>{{ $props.description }}</v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { getRandomMoe } from '../../utils'

const props = defineProps<{
  url: string
  title: string
  cover?: string
  description?: string
}>()

const imgUrl = ref(props.cover)
if (!imgUrl.value)
  getRandomMoe('small').then((moeUrl) => (imgUrl.value = moeUrl))
</script>
