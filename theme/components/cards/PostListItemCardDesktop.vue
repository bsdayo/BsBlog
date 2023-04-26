<template>
  <v-card
    class="post-card mb-6"
    v-for="(post, index) in posts"
    :key="post.url"
    :href="post.url"
    v-ripple
  >
    <v-container class="pa-0">
      <v-row class="ma-0">
        <v-col cols="5" class="pa-0" :order="index % 2 === 0 ? 1 : 3">
          <v-img height="200px" :src="post.cover" cover />
        </v-col>

        <v-col cols="7" class="px-4 d-flex align-center" order="2">
          <div>
            <v-card-title class="post-card-title">
              {{ post.title }}
            </v-card-title>
            <PostListItemCardInfo :url="post.url" :create="post.create" />
            <v-card-text>{{ post.description }}</v-card-text>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts" setup>
import PostListItemCardInfo from './PostListItemCardInfo.vue'

defineProps<{
  posts: {
    url: string
    title: string
    cover?: string
    description?: string
    create: number
  }[]
}>()
</script>

<style lang="scss" scoped>
.post-card * {
  white-space: normal;
}
</style>
