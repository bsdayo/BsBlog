<template>
  <n-card class="link-card">
    <n-list class="link-list">
      <n-list-item v-for="link in links" :key="link.title">
        <n-thing>
          <template #avatar>
            <n-avatar lazy :size="48" :src="link.avatar">
              <font-awesome-icon :icon="faLink" v-if="!link.avatar" />
            </n-avatar>
          </template>

          <template #header>{{ link.title }}</template>
          <template #header-extra v-if="link.author">
            @{{ link.author }}
          </template>

          <template #description>{{ link.description }}</template>

          <template #action>
            <n-flex justify="end">
              <n-flex v-if="link.socials">
                <n-button
                  v-if="link.socials.github"
                  tag="a"
                  target="_blank"
                  :href="`https://github.com/${link.socials.github}`"
                >
                  <font-awesome-icon :icon="faGithub" />
                </n-button>
                <n-button
                  v-if="link.socials.x"
                  tag="a"
                  target="_blank"
                  :href="`https://twitter.com/${link.socials.x}`"
                >
                  <font-awesome-icon :icon="faXTwitter" />
                </n-button>
              </n-flex>

              <n-button type="primary" tag="a" target="_blank" :href="link.url">
                <font-awesome-icon :icon="faPaperPlane" />
              </n-button>
            </n-flex>
          </template>
        </n-thing>
      </n-list-item>
    </n-list>
  </n-card>
</template>

<script lang="ts" setup>
import {
  NCard,
  NList,
  NListItem,
  NThing,
  NAvatar,
  NButton,
  NFlex,
} from 'naive-ui'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLink, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import Link from './link'

defineProps<{ links: Link[] }>()
</script>

<style lang="scss" scoped>
.link-list {
  margin: 0;
  padding: 0;

  a {
    text-decoration: none;
    color: var(--n-text-color);
  }
}
</style>
