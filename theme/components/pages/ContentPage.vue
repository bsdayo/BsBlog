<script setup lang="ts">
import ContentCard from '../cards/ContentCard.vue'
import { Post } from '../../types/common'
import GiscusCard from '../cards/GiscusCard.vue'
import { useData } from 'vitepress'
import TagsCard from '../cards/TagsCard.vue'

defineProps<{ post?: Post }>()

const { frontmatter } = useData()
</script>

<template>
  <ContentCard :post="post"/>

  <TagsCard v-if="post && post.tags && post.tags.length > 0" :tags="post.tags" class="mt-4"/>

  <GiscusCard v-if="post?.comment || frontmatter.comment" class="mt-4"/>
</template>

<style scoped lang="scss">

</style>