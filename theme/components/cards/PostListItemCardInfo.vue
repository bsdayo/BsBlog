<template>
  <v-card-subtitle>
    <v-icon icon="mdi-calendar-month" size="small" />
    <span>&nbsp;{{ formatTime(create) }}</span>
    <!-- <span v-if="$props.tags.length > 0">
      |
      <v-icon icon="mdi-tag" size="small" />
      <span>&nbsp;{{ $props.tags.join(' ') }}</span>
    </span> -->
  </v-card-subtitle>
</template>

<script lang="ts" setup>
import { formatTime } from '../../../theme/utils'

defineProps<{
  url: string
  create: number
  // tags: string[]
}>()
</script>

<style lang="scss" scoped></style>
