<template>
  <v-card
    class="post-card mb-6"
    v-for="post in theme.posts.slice(5 * (currentPage - 1), 5 * currentPage)"
    :key="post.id"
    :href="`${site.base}posts/${post.id}/`"
    v-ripple
  >
    <v-img
      :src="post.cover ?? 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'"
      height="200px"
      cover
    />
    <v-card-title>{{ post.title }}</v-card-title>
    <v-card-subtitle>{{ post.id }}</v-card-subtitle>
    <v-card-text>{{ formatTime(post.create) }}</v-card-text>
  </v-card>

  <v-pagination
    v-model="currentPage"
    :length="Math.ceil(theme.posts.length / 5)"
  />
</template>

<script lang="ts" setup>
import { BsBlogThemeConfig } from 'theme'
import { useData } from 'vitepress'
import { ref } from 'vue'
import {formatTime} from '../../utils'

const { site, theme } = useData<BsBlogThemeConfig>()

const currentPage = ref(1)
</script>

<style lang="scss" scoped></style>
