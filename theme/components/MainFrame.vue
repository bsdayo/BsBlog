<script setup lang="ts">
import { ref } from 'vue'
import { useData } from 'vitepress'
import { BsBlogThemeConfig } from '../types/config'

const drawerOpened = ref(false)

const { theme } = useData<BsBlogThemeConfig>()
</script>

<template>

  <v-app-bar>
    <v-app-bar-nav-icon @click="drawerOpened = !drawerOpened"/>
    <v-app-bar-title>BsBlog</v-app-bar-title>
  </v-app-bar>

  <v-navigation-drawer v-model="drawerOpened">
    <v-list :nav="true">
      <v-list-item v-for="link in theme.navLinks"
                   :key="link.href"
                   @click="drawerOpened = $vuetify.display.mobile ? false : drawerOpened"
                   :prepend-icon="link.icon"
                   :title="link.title"
                   :value="link.title"
                   :href="link.href"/>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped lang="scss">

</style>