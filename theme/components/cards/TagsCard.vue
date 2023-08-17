<script setup lang="ts">
import { getTagColor } from '../../utils'

defineProps<{
  tags: string[]
}>()
</script>

<template>
  <v-card class="tags-card">
    <v-card-actions>
      <v-btn v-for="tag in $props.tags" :key="tag" variant="flat" :color="getTagColor(tag)">{{ tag }}</v-btn>
    </v-card-actions>
  </v-card>
</template>