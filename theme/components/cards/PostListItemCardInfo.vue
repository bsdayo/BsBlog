<template>
  <v-card-subtitle>
    <v-icon icon="mdi-calendar-month" /> {{ formatTime(create) }}
  </v-card-subtitle>
</template>

<script lang="ts" setup>
import { formatTime } from '../../../theme/utils'

defineProps<{
  create: number
}>()
</script>

<style lang="scss" scoped></style>
