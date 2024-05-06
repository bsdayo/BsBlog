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

      <div class="mt-4 flex justify-end space-x-2">
        <div v-if="link.socials">
          <Button
            v-if="link.socials.github"
            class="important:text-foreground"
            variant="outline"
            as="a"
            target="_blank"
            :href="`https://github.com/${link.socials.github}`"
          >
            <font-awesome-icon :icon="faGithub" />
          </Button>
          <Button
            v-if="link.socials.x"
            class="important:text-foreground"
            variant="outline"
            as="a"
            target="_blank"
            :href="`https://twitter.com/${link.socials.x}`"
          >
            <font-awesome-icon :icon="faXTwitter" />
          </Button>
        </div>

        <Button as="a" target="_blank" :href="link.url" class="important:text-white">
          <font-awesome-icon :icon="faPaperPlane" />
        </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Button } from '@/components/ui/button'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import Link from './link'

defineProps<{ links: Link[] }>()
</script>
