<script setup lang="ts">
import { ref } from 'vue'
import { useData } from 'vitepress'
import { BsBlogThemeConfig } from '../types/config'

const leftDrawerOpened = ref(false)
const rightDrawerOpened = ref(false)

const { theme, title, site } = useData<BsBlogThemeConfig>()

defineEmits<{
  toggleTheme: []
}>()
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

  <!--  <v-navigation-drawer v-model="rightDrawerOpened" location="right">-->
  <!--    <v-list :nav="true">-->
  <!--      <v-list-item v-for="link in theme.navLinks"-->
  <!--                   :key="link.href"-->
  <!--                   @click="leftDrawerOpened = $vuetify.display.mobile ? false : leftDrawerOpened"-->
  <!--                   :title="link.title"-->
  <!--                   :value="link.title"/>-->
  <!--    </v-list>-->
  <!--  </v-navigation-drawer>-->

  <v-app-bar scroll-behavior="hide">
    <template #prepend>
      <v-app-bar-nav-icon @click="leftDrawerOpened = !leftDrawerOpened"/>
    </template>

    <v-app-bar-title>{{ title.replace(` | ${site.title}`, '') }}</v-app-bar-title>

    <template #append>
      <v-btn icon="mdi-brightness-6" @click="$emit('toggleTheme')"/>
      <!--      <v-app-bar-nav-icon @click="rightDrawerOpened = !rightDrawerOpened"/>-->
    </template>
  </v-app-bar>
</template>

<style scoped lang="scss">

</style>