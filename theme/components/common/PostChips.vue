<script setup lang="ts">
import { BsBlogThemeConfig } from '../../types/config'
import { useData } from 'vitepress'
import { formatTime, getTag } from '../../utils'
import { Post } from '../../types/common'
import ChipContainer from './ChipContainer.vue'

const props = defineProps<{ post: Post }>()

const { theme } = useData<BsBlogThemeConfig>()

const tags = props.post.tags.map(t => getTag(t, theme.value))
</script>

<template>
  <v-card-text>
    <ChipContainer>
      <template #prepend>
        <v-chip prepend-icon="mdi-calendar-month" variant="text">{{ formatTime($props.post.create) }}</v-chip>
      </template>

      <template #append>
        <!-- Seems the v-chip component with href attribute set is not SSR friendly -->
        <ClientOnly>
          <v-chip v-for="tag in tags"
                  :key="tag.id"
                  variant="flat"
                  :href="`/tags/${tag.id}`"
                  :color="tag.color">
            {{ tag.name }}
          </v-chip>
        </ClientOnly>
      </template>
    </ChipContainer>
  </v-card-text>
</template>