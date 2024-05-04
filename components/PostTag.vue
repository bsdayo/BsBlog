<template>
  <n-tag round :size="$props.small ? 'small' : 'medium'">
    {{ title }}
  </n-tag>
</template>

<script lang="ts" setup>
import { NTag } from 'naive-ui'
import { useData } from 'vitepress'
import { ThemeConfig } from '../.vitepress/theme'

const props = defineProps<{
  small?: boolean
  tag: string
}>()

const { theme } = useData<ThemeConfig>()

const tag = theme.value.tags[props.tag]

const title = tag?.[0] || props.tag
// const color = { color: tag?.[1] || 'var(--vp-c-brand)', textColor: '#ffffff' }
</script>

<style lang="scss" scoped></style>
