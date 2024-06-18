<template>
  <component :is="tag" :class="clazz" :href="href">
    <component :is="icon" :size="20" />
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { type Component, computed } from 'vue'
import clsx from 'clsx'

const props = withDefaults(
  defineProps<{
    variant: 'brand' | 'alt'
    href?: string
    as?: string
    icon?: Component
  }>(),
  {
    variant: 'brand',
  }
)

const tag = computed(() => (props.as || props.href ? 'a' : 'button'))
const clazz = computed(() =>
  clsx(
    'ui-button',

    'flex',
    'gap-4px',
    'justify-center',
    'items-center',
    'inline-block',
    'border',
    'text-center',
    'font-semibold',
    'whitespace-nowrap',
    'transition-colors',
    'duration-250',

    'px-20px',
    'rounded-20px',
    'leading-38px',
    'text-sm',

    props.variant === 'brand' && [
      'text-white',
      'bg-brand-3',
      'hover:bg-brand-2',
      'active:bg-brand-1',
    ],

    props.variant === 'alt' && [
      'text-text-1',
      'bg-default-3',
      'hover:bg-default-2',
      'active:bg-default-1',
    ]
  )
)
</script>
