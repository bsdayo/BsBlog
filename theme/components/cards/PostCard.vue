<script setup lang="ts">
import { Post } from '../../types/common'
import { formatTime, getTag } from '../../utils'
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
           aspect-ratio="1.7778"
           max-height="300px">
      <v-card-title class="post-card-title pt-6 pb-4">{{ $props.post.title }}</v-card-title>
    </v-img>

    <v-card-text class="post-card-description" v-if="$props.post.description">
      {{ $props.post.description }}
    </v-card-text>

    <v-divider/>

    <v-card-text class="post-card-chips">
      <v-chip prepend-icon="mdi-calendar-month" variant="text">{{ formatTime($props.post.create) }}</v-chip>
      <v-spacer />
      <v-chip v-for="tag in $props.post.tags.map(t => getTag(t, theme))"
              :key="tag"
              variant="flat"
              :color="tag[1]!">
        {{ tag[0] }}
      </v-chip>
    </v-card-text>
  </v-card>
</template>

<style scoped lang="scss">
@import "../../styles/variables";

.post-card {
  .post-card-title {
    background: $content-card-title-overlay-bg;
    color: white;
    text-shadow: 0 0 4px #000;
    white-space: normal;
  }

  .post-card-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
}
</style>