<template>
  <div class="my-4">
    <div
      v-for="post in posts"
      :key="post.id"
      class="pa-4 not-last:border-b not-last:border-b-input not-last:border-b-solid"
    >
      <a
        :href="getPostHref(post.id)"
        class="block important:decoration-none important:text-foreground important:hover:text-brand-1 text-xl"
      >
        {{ post.title }}
      </a>
      <p class="mt-2 space-x-2">
        <Badge type="tip">{{ new Date(post.create).toISOString().split('T')[0] }}</Badge>
        <Badge type="info" v-for="tag in post.tags" :key="tag">{{ tag }}</Badge>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useData } from 'vitepress'
import { data as posts } from '../../.vitepress/posts.data'
// import { Badge } from '@/components/ui/badge'

const { site } = useData()

function getPostHref(id: string) {
  return `${site.value.base}posts/${id}/`
}
</script>
