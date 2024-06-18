<template>
  <input v-model="model" :class="clazz" :placeholder="$props.placeholder" />
</template>

<script lang="ts" setup>
import clsx from 'clsx'

defineProps<{
  placeholder?: string
}>()

const model = defineModel()

const clazz = clsx(
  'ui-input',

  'inline-block',
  'border',
  'border-solid',
  'border-border',
  'hover:border-brand-2',
  'focus:border-brand-1',
  'transition-colors',

  'px-20px',
  'rounded-20px',
  'leading-38px',
  'text-sm'
)
</script>
