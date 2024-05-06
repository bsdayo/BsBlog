<template>
  <Button
    :class="[
      $props.primary ? 'important:text-white' : 'important:text-foreground',
      'important:decoration-none',
    ]"
    :variant="$props.primary ? 'default' : 'outline'"
    as="a"
    target="_blank"
    :href="url"
  >
    <font-awesome-icon :icon="icon" class="mr-2" />
    <slot />
  </Button>
</template>

<script lang="ts" setup>
import { Button } from '@/components/ui/button'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

defineProps<{
  primary?: boolean
  url: string
  icon: IconDefinition
}>()
</script>

<style lang="scss" scoped></style>
