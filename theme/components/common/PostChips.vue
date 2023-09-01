<script setup lang="ts">
import { BsBlogThemeConfig } from '../../types/config'
import { useData } from 'vitepress'
import { formatTime, getTag } from '../../utils'
import { Post } from '../../types/common'
import ChipContainer from './ChipContainer.vue'

defineProps<{ post: Post }>()

const { theme } = useData<BsBlogThemeConfig>()
</script>

<template>
  <v-card-text>
    <ChipContainer>
      <template #prepend>
        <v-chip prepend-icon="mdi-calendar-month" variant="text">{{ formatTime($props.post.create) }}</v-chip>
      </template>

      <template #append>
        <v-chip v-for="tag in $props.post.tags.map(t => getTag(t, theme))"
                :key="tag.id"
                variant="flat"
                :href="`/tags/${tag.id}`"
                :color="tag.color">
          {{ tag.name }}
        </v-chip>
      </template>
    </ChipContainer>
  </v-card-text>
</template>