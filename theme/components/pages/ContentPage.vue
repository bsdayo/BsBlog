<script setup lang="ts">
import ContentCard from '../cards/ContentCard.vue'
import { Post } from '../../types/common'
import GiscusCard from '../cards/GiscusCard.vue'
import { useData } from 'vitepress'

defineProps<{ post?: Post }>()

const { frontmatter } = useData()
</script>

<template>
  <ContentCard :post="post"/>

  <GiscusCard v-if="post?.comment || frontmatter.comment" class="mt-4"/>
</template>

<style scoped lang="scss">

</style>