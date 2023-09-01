<script setup lang="ts">
import { Post } from '../../types/common'
import { useData } from 'vitepress'
import { BsBlogThemeConfig } from '../../types/config'
import { onMounted } from 'vue'
import mediumZoom from 'medium-zoom'
import PostChips from '../common/PostChips.vue'
import PostCover from '../common/PostCover.vue'

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
    <template v-if="$props.post">
      <PostCover :post="$props.post"/>
      <PostChips :post="$props.post"/>
      <v-divider/>
    </template>

    <v-card-text class="markdown" :class="{dark: $vuetify.theme.current.dark}">
      <Content/>
    </v-card-text>
  </v-card>
</template>