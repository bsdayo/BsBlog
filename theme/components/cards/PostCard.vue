<script setup lang="ts">
import { Post } from '../../types/common'
import { useData } from 'vitepress'
import { BsBlogThemeConfig } from '../../types/config'
import PostChips from '../common/PostChips.vue'
import PostCover from '../common/PostCover.vue'

defineProps<{ post: Post }>()

const { theme } = useData<BsBlogThemeConfig>()
</script>

<template>
  <v-card class="post-card" :href="$props.post.url">
    <PostCover :post="$props.post"/>

    <v-card-text class="post-card-description" v-if="$props.post.description">
      {{ $props.post.description }}
    </v-card-text>

    <v-divider/>

    <PostChips :post="$props.post"/>
  </v-card>
</template>