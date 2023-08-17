<script setup lang="ts">
import { Post } from '../../types/common'
import { useData } from 'vitepress'
import { BsBlogThemeConfig } from '../../types/config'
import { formatTime } from '../../utils'

defineProps<{ post?: Post }>()

const { theme, frontmatter } = useData<BsBlogThemeConfig>()
</script>

<template>
  <v-card class="content-card">
    <v-img class="content-card-cover d-flex align-end"
           :src="$props.post?.cover ?? theme.defaultPostCover"
           max-height="300px"
           :cover="true">
      <div class="content-card-title-overlay" :class="{'pt-4 pb-2': !$vuetify.display.mobile}">
        <v-card-title class="content-card-title" :class="{'text-h4': !$vuetify.display.mobile}">
          {{ $props.post?.title ?? frontmatter.title }}
        </v-card-title>
        <v-card-subtitle v-if="$props.post"
                         class="content-card-info py-2"
                         :class="{'text-subtitle-1':  !$vuetify.display.mobile}">
          <span v-if="$props.post.create">
            <v-icon icon="mdi-calendar-month"/>
            {{ formatTime($props.post.create) }}
          </span>
        </v-card-subtitle>
      </div>
    </v-img>

    <v-card-text class="markdown" :class="{dark: $vuetify.theme.current.dark}">
      <Content/>
    </v-card-text>
  </v-card>
</template>

<style scoped lang="scss">
@import "../../styles/variables";

.content-card {
  .content-card-cover {
    color: white;
    text-shadow: 0 0 4px #000;

    .content-card-title-overlay {
      background-color: $content-card-title-overlay-color;

      * {
        white-space: normal;
      }
    }
  }
}
</style>