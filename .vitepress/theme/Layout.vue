<template>
  <n-config-provider :theme="currentTheme">
    <Layout>
      <template #doc-before v-if="currentPost">
        <n-thing class="post-header">
          <template #header>
            <h1 class="post-title">{{ currentPost.title }}</h1>
          </template>
          <template #description>{{ currentPost.description }}</template>
          <template #footer>
            <n-flex justify="space-between">
              <DateTag :time="currentPost.create" />
              <n-flex>
                <PostTag v-for="tag in currentPost.tags" :key="tag" :tag="tag" />
              </n-flex>
            </n-flex>
          </template>
        </n-thing>
      </template>

      <template #doc-after>
        <n-divider />
        <Giscus
          :key="page.relativePath"
          v-bind="theme.giscus"
          :theme="isDark ? 'transparent_dark' : 'light'"
        />
      </template>
    </Layout>
  </n-config-provider>
</template>

<script lang="ts" setup>
import { ref, computed, nextTick, watch, onMounted } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { data as posts } from '../posts.data'
import { NConfigProvider, NThing, NDivider, NFlex, lightTheme, darkTheme } from 'naive-ui'
import Giscus from '@giscus/vue'
import mediumZoom from 'medium-zoom'
import { ThemeConfig } from '.'
import PostTag from '../../components/PostTag.vue'
import DateTag from '../../components/DateTag.vue'

const { Layout } = DefaultTheme
const { page, theme, isDark } = useData<ThemeConfig>()

const currentTheme = ref(isDark ? darkTheme : lightTheme)

const taglines: string[] = [
  '<code>(() => &lt;bs moe/&gt;)()</code>',
  "<code>h('bs', { moe: true })</code>",
  '<code>[moe.things]::bs</code>',
  '<code>bs.nyan()</code>',
  '<code>Start-Sleep -Duration 365d</code>',
  '<code>while (true) { eat() }</code>',
  '你是？不能忘记的人，很重要的人',
]
const mdImgSelector = '.vp-doc img'

function setRandomTagline() {
  const taglineElement = document.querySelector('.tagline')
  if (!taglineElement) return
  taglineElement.innerHTML = taglines[Math.floor(Math.random() * taglines.length)]
}

function appendImgAlt() {
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
}

function addMediumZoom() {
  mediumZoom(mdImgSelector, {
    background: 'rgba(0, 0, 0, 0.5)',
  })
}

onMounted(() => {
  watch(
    () => isDark.value,
    (dark) => {
      currentTheme.value = dark ? darkTheme : lightTheme
    },
    { immediate: true }
  )

  import('webfontloader').then((webfont) =>
    webfont.load({
      google: {
        families: ['JetBrains Mono:400,500,600,700'],
      },
    })
  )

  watch(
    () => page.value.relativePath,
    () =>
      nextTick(() => {
        setRandomTagline()
        appendImgAlt()
        addMediumZoom()
      }),
    { immediate: true }
  )
})

const currentPost = computed(() => {
  const postId = page.value.relativePath.match(/posts\/(.*)\//)?.[1]
  if (!postId) return null
  return posts.find((post) => post.id === postId)
})
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
