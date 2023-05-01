<template>
  <v-card class="post-card mb-6" :href="$props.url" v-ripple>
    <v-container class="pa-0">
      <v-row class="ma-0">
        <v-col cols="5" class="pa-0" :order="$props.index % 2 === 0 ? 1 : 3">
          <v-img height="200px" :src="imgUrl" cover />
        </v-col>

        <v-col cols="7" class="px-4 d-flex align-center" order="2">
          <div>
            <v-card-title class="post-card-title">
              {{ $props.title }}
            </v-card-title>
            <PostListItemCardInfo :url="$props.url" :create="$props.create" />
            <v-card-text>{{ $props.description }}</v-card-text>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { getRandomMoe } from '../../utils'
import PostListItemCardInfo from './PostListItemCardInfo.vue'

const props = defineProps<{
  index: number
  url: string
  title: string
  cover?: string
  description?: string
  create: number
}>()

const imgUrl = ref(props.cover)
if (!imgUrl.value)
  getRandomMoe('small').then(moeUrl => imgUrl.value = moeUrl)
</script>

<style lang="scss" scoped>
.post-card * {
  white-space: normal;
}
</style>
