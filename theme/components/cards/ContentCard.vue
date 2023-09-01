<script setup lang="ts">
import { Post } from '../../types/common'
import { useData } from 'vitepress'
import { BsBlogThemeConfig } from '../../types/config'
import { formatTime, getTag } from '../../utils'
import { onMounted } from 'vue'
import mediumZoom from 'medium-zoom'

defineProps<{ post?: Post }>()

const { theme, frontmatter } = useData<BsBlogThemeConfig>()
const mdImgSelector = '.content-card .markdown img'

onMounted(() => {
  mediumZoom(mdImgSelector, {
    background: 'rgba(0, 0, 0, 0.5)'
  })

  document.querySelectorAll(mdImgSelector).forEach((img) => {
    const alt = img.attributes.getNamedItem('alt')
    if (!alt) return

    const node = document.createElement('div')
    node.classList.add('img-alt')
    node.innerText = alt.value

    const parent = img.parentNode!
    if (parent.lastChild === img)
      parent.appendChild(node)
    else
      parent.insertBefore(node, img.nextSibling)
  })
})
</script>

<template>
  <v-card class="content-card">
    <v-img class="content-card-cover d-flex align-end"
           :src="$props.post?.cover ?? theme.defaultPostCover"
           max-height="300px"
           :cover="true">
      <v-card-title class="content-card-title pt-6 pb-4">
        {{ $props.post?.title ?? frontmatter.title }}
      </v-card-title>
    </v-img>

    <v-card-text class="content-card-chips" v-if="$props.post">
      <v-chip prepend-icon="mdi-calendar-month" variant="text">{{ formatTime($props.post.create) }}</v-chip>
      <v-spacer/>
      <v-chip v-for="tag in $props.post.tags.map(t => getTag(t, theme))"
              :key="tag"
              variant="flat"
              :color="tag[1]!">
        {{ tag[0] }}
      </v-chip>
    </v-card-text>

    <v-divider v-if="$props.post"/>

    <v-card-text class="markdown" :class="{dark: $vuetify.theme.current.dark}">
      <Content/>
    </v-card-text>
  </v-card>
</template>

<style scoped lang="scss">
@import "../../styles/variables";

.content-card {
  .content-card-title {
    color: white;
    text-shadow: 0 0 4px #000;
    background: $content-card-title-overlay-bg;
    white-space: normal;
  }

  .content-card-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
}
</style>