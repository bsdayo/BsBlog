<script setup lang="ts">
import { Post } from '../../types/common'
import { formatTime, getTagColor } from '../../utils'
import { useData } from 'vitepress'
import { BsBlogThemeConfig } from '../../types/config'

defineProps<{ post: Post }>()

const { theme } = useData<BsBlogThemeConfig>()
</script>

<template>
  <v-card class="post-card" :href="$props.post.url">
    <v-img class="post-card-cover d-flex align-end"
           :src="$props.post.cover ?? theme.defaultPostCover"
           :cover="true"
           max-height="300px">
      <div class="post-card-title-overlay">
        <v-card-title class="post-card-title">{{ $props.post.title }}</v-card-title>
        <v-card-subtitle class="post-card-info pb-2">
          <v-icon icon="mdi-calendar-month"/>
          {{ formatTime($props.post.create) }}
        </v-card-subtitle>
      </div>
    </v-img>
    <!--  :src="$props.post.cover"  -->


    <v-card-text class="post-card-description" v-if="$props.post.description">
      {{ $props.post.description }}
    </v-card-text>

    <v-card-actions v-if="$props.post.tags && $props.post.tags.length > 0">
      <v-btn v-for="tag in $props.post.tags" :key="tag" variant="flat" :color="getTagColor(tag)">{{ tag }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped lang="scss">
@import "../../styles/variables";

.post-card {
  .post-card-cover {
    .post-card-title-overlay {
      background-color: $content-card-title-overlay-color;

      * {
        color: white;
        text-shadow: 0 0 4px #000;
        white-space: normal;
      }
    }
  }
}
</style>