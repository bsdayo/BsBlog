<script setup lang="ts">
import { ref } from 'vue'
import { useData } from 'vitepress'
import { BsBlogThemeConfig } from '../types/config'

const drawerOpened = ref(false)

const { theme } = useData<BsBlogThemeConfig>()

defineEmits<{
  toggleTheme: []
}>()
</script>

<template>
  <v-navigation-drawer v-model="drawerOpened">
    <v-img class="d-flex align-end text-white" :src="theme.avatarBg" height="150px" :cover="true">
      <v-list-item>
        <template #prepend>
          <v-avatar size="56">
            <v-img :src="theme.avatar"/>
          </v-avatar>
        </template>

        <v-list-item-title>{{ theme.author }}</v-list-item-title>
        <v-list-item-subtitle>{{ theme.bio }}</v-list-item-subtitle>
      </v-list-item>
    </v-img>

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

  <v-app-bar>
    <template #prepend>
      <v-app-bar-nav-icon @click="drawerOpened = !drawerOpened"/>
    </template>

    <v-app-bar-title>BsBlog</v-app-bar-title>

    <template #append>
      <v-btn icon="mdi-brightness-6" @click="$emit('toggleTheme')"/>
    </template>
  </v-app-bar>
</template>

<style scoped lang="scss">

</style>