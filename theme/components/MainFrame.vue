<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue'
import { useData } from 'vitepress'
import { BsBlogThemeConfig } from '../types/config'

const leftDrawerOpened = ref(false)
const rightDrawerOpened = ref(false)
const toc = ref<{ title: string, id: string }[]>([])
const activeTitleIndex = ref(-1)

const { theme, title, site } = useData<BsBlogThemeConfig>()

defineEmits<{
  toggleTheme: []
}>()

const props = defineProps<{
  inPost: boolean
}>()

const postContentSelector = '.content-card > .markdown > div > div'

onMounted(() => {
  watch(() => props.inPost, () => {
    if (!props.inPost) {
      toc.value = []
      return
    }

    nextTick(() => {
      const contentEl = document.querySelector(postContentSelector) as HTMLElement
      const titleEls = Array.from(contentEl.children)
        .filter(c => ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(c.tagName)) as HTMLElement[]
      toc.value = titleEls.map(el => {
        return {
          title: `${'　'.repeat(parseInt(el.tagName[1]) - 2)}${el.textContent}`,
          id: el.id
        }
      })

      document.onscroll = () => {
        titleEls.forEach((titleEl, titleIndex) => {
          const distance = titleEl.getBoundingClientRect().top
          if (distance > 0 && distance < 200)
            activeTitleIndex.value = titleIndex
        })
      }
    })
  }, { immediate: true })
})
</script>

<template>
  <v-navigation-drawer v-model="leftDrawerOpened">
    <v-list-item class="text-center pt-16 pb-8">
      <v-avatar size="128" class="mb-8">
        <v-img :src="theme.avatar"/>
      </v-avatar>

      <v-list-item-title class="text-h6 font-weight-bold">{{ theme.author }}</v-list-item-title>
      <v-list-item-subtitle>{{ theme.bio }}</v-list-item-subtitle>
    </v-list-item>

    <v-list :nav="true">
      <v-list-item v-for="link in theme.navLinks"
                   class="pl-4"
                   :key="link.href"
                   @click="leftDrawerOpened = $vuetify.display.mobile ? false : leftDrawerOpened"
                   :prepend-icon="link.icon"
                   :title="link.title"
                   :value="link.title"
                   :href="link.href"/>
    </v-list>
  </v-navigation-drawer>

  <v-navigation-drawer v-if="$props.inPost" v-model="rightDrawerOpened" location="right">
    <v-list :nav="true" density="compact">
      <v-list-item v-for="(title, titleIndex) in toc"
                   :key="title.id"
                   @click="leftDrawerOpened = $vuetify.display.mobile ? false : leftDrawerOpened"
                   :title="title.title"
                   :href="'#' + title.id"
                   :active="activeTitleIndex === titleIndex"/>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar scroll-behavior="hide">
    <template #prepend>
      <v-app-bar-nav-icon @click="leftDrawerOpened = !leftDrawerOpened"/>
    </template>

    <v-app-bar-title>{{ title.replace(` | ${site.title}`, '') }}</v-app-bar-title>

    <template #append>
      <v-btn icon="mdi-brightness-6" @click="$emit('toggleTheme')"/>
      <v-app-bar-nav-icon v-if="$props.inPost"
                          icon="mdi-table-of-contents"
                          @click="rightDrawerOpened = !rightDrawerOpened"/>
    </template>
  </v-app-bar>
</template>

<style scoped lang="scss">

</style>