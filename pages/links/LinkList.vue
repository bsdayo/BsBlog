<template>
  <div class="space-y-4">
    <div v-for="link in links" :key="link.title" class="rounded-lg text-sm px-4 bg-bg-soft py-4">
      <div class="flex">
        <img class="h-12 w-12 mr-4 rounded" :src="link.avatar" />

        <div class="flex-grow-1">
          <div class="flex justify-between">
            <span class="font-bold text-base">{{ link.title }}</span>
            <span v-if="link.author">@{{ link.author }}</span>
          </div>

          <div>{{ link.description }}</div>
        </div>
      </div>

      <div class="mt-4 flex justify-between">
        <div class="space-x-2">
          <LinkButton
            v-if="link.socials?.github"
            :url="`https://github.com/${link.socials.github}`"
            :icon="Link2"
          >
            GitHub
          </LinkButton>
          <LinkButton
            v-if="link.socials?.x"
            :url="`https://twitter.com/${link.socials.x}`"
            :icon="Link2"
          >
            Twitter
          </LinkButton>
        </div>

        <LinkButton brand :url="link.url" :icon="Accessibility">Go!</LinkButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Link2, Accessibility } from 'lucide-vue-next'
import LinkButton from './LinkButton.vue'
import type Link from './link'

defineProps<{ links: Link[] }>()
</script>
