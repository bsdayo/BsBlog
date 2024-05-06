<template>
  <Layout>
    <template #doc-before v-if="currentPost">
      <div class="vp-doc">
        <h1>{{ currentPost.title }}</h1>
        <p class="mt-2 space-x-2">
          <Badge type="tip">{{ new Date(currentPost.create).toISOString().split('T')[0] }}</Badge>
          <Badge type="info" v-for="tag in currentPost.tags" :key="tag">{{ tag }}</Badge>
        </p>
      </div>
    </template>

    <template #doc-after>
      <div class="VPDoc vp-doc">
        <h2 id="giscus">评论</h2>
      </div>
      <Giscus
        id="giscus"
        :key="page.relativePath"
        v-bind="theme.giscus"
        :theme="isDark ? 'transparent_dark' : 'light'"
      />
    </template>
  </Layout>
</template>

<script lang="ts" setup>
import { ref, nextTick, watch, onMounted } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Giscus from '@giscus/vue'
import mediumZoom from 'medium-zoom'

import { data as posts } from '@/.vitepress/posts.data'
import type { Post, ThemeConfig } from '.'

const { Layout } = DefaultTheme
const { page, theme, isDark } = useData<ThemeConfig>()

// Load fonts (client only)
onMounted(() =>
  import('webfontloader').then((webfont) =>
    webfont.load({
      google: {
        families: ['JetBrains Mono:400,500,600,700'],
      },
    })
  )
)

// Random taglines
watch(
  () => page.value.relativePath,
  async () => {
    await nextTick() // Wait for the DOM to update
    const taglineElement = document.querySelector('.tagline')
    if (!taglineElement) return
    taglineElement.innerHTML =
      theme.value.taglines[Math.floor(Math.random() * theme.value.taglines.length)]
  },
  { immediate: true }
)

// Post related
const currentPost = ref<Post | undefined>(undefined)
const mdImgSelector = '.vp-doc img'
watch(
  () => page.value.relativePath,
  async (newPath) => {
    await nextTick() // Wait for the DOM to update

    // Find current post
    const postId = newPath.match(/posts\/(.*)\//)?.[1]
    if (!postId) return
    currentPost.value = posts.find((post) => post.id === postId)

    // Append alt text to images
    document.querySelectorAll(mdImgSelector).forEach((img) => {
      const alt = img.attributes.getNamedItem('alt')
      if (!alt) return

      const node = document.createElement('div')
      node.classList.add('img-alt')
      node.innerText = alt.value

      const parent = img.parentNode!
      if (parent.lastChild === img) parent.appendChild(node)
      else parent.insertBefore(node, img.nextSibling)
    })

    // Apply medium-zoom
    mediumZoom(mdImgSelector, {
      background: 'rgba(0, 0, 0, 0.5)',
    })
  },
  { immediate: true }
)
</script>

<style lang="scss">
.post-header {
  margin-bottom: 64px;
}

.post-title {
  font-weight: 600;
  outline: none;
  line-height: 40px;
  font-size: 32px;
}
</style>
