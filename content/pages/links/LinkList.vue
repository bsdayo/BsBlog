<script setup lang="ts">
interface Link {
  title: string
  desc?: string
  avatar: string
  url: string
}

defineProps<{ links: Link[] }>()
</script>

<template>
  <v-list lines="two">
    <v-list-item
      v-for="link in $props.links"
      :key="link.url"
      :title="link.title"
      :subtitle="link.desc ?? link.title"
      :href="link.url"
      target="_blank">
      <template #prepend>
        <v-avatar>
          <v-img :src="link.avatar"/>
        </v-avatar>
      </template>
    </v-list-item>
  </v-list>
</template>