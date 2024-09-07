<template>
  <ui-button
    :variant="$props.brand ? 'brand' : 'alt'"
    :icon="$props.icon"
    target="_blank"
    :href="url"
  >
    <slot />
  </ui-button>
</template>

<script lang="ts" setup>
import { type Component } from 'vue'

defineProps<{
  brand?: boolean
  url: string
  icon?: Component
}>()
</script>
