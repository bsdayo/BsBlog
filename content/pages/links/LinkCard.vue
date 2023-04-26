<template>
  <v-card class="link-card text-center" :href="$props.url" target="_blank">
    <div class="d-flex justify-center pt-4 pb-1">
      <v-avatar size="110">
        <v-img class="link-card-avatar" cover :src="$props.avatar" />
      </v-avatar>
    </div>
    <v-card-title>{{ $props.title }}</v-card-title>
    <v-card-subtitle>{{ $props.desc }}</v-card-subtitle>
    <v-card-actions class="d-flex justify-center">
      <v-btn icon="mdi-open-in-new" :href="$props.url" target="_blank" />
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
  desc: string
  avatar: string
  url: string
}>()
</script>

<style lang="scss">
.link-card-avatar img {
  margin: 0;
}
</style>
