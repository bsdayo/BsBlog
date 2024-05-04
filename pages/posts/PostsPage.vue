<template>
  <n-card
    class="posts-page"
    :bordered="!isMobile"
    :size="isMobile ? 'small' : 'medium'"
  >
    <n-list hoverable clickable>
      <a
        v-for="post in posts"
        :key="post.id"
        :href="getPostHref(post.id)"
        class="post-list-item"
      >
        <n-list-item>
          <n-thing :title="post.title">
            <template #footer>
              <n-flex size="small" justify="space-between">
                <DateTag :time="post.create" small />
                <n-flex>
                  <PostTag
                    v-for="tag in post.tags"
                    :key="tag"
                    :tag="tag"
                    small
                  />
                </n-flex>
              </n-flex>
            </template>

            <span class="post-list-item-description">
              {{ post.description }}
            </span>
          </n-thing>
        </n-list-item>
      </a>
    </n-list>
  </n-card>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useData } from 'vitepress'
import { NCard, NList, NListItem, NThing, NFlex, NTag, NTime } from 'naive-ui'
import { data as posts } from '../../.vitepress/posts.data'
import PostTag from '../../components/PostTag.vue'
import DateTag from '../../components/DateTag.vue'

const { site } = useData()

function getPostHref(id: string) {
  return `${site.value.base}posts/${id}/`
}

const isMobile = ref(false)
onMounted(() => {
  const mobile = window.matchMedia('(max-width: 768px)')
  isMobile.value = mobile.matches
  mobile.addEventListener('change', () => (isMobile.value = mobile.matches))
})
</script>

<style lang="scss" scoped>
.posts-page {
  margin: 32px auto;
  max-width: 768px;

  @media (max-width: 768px) {
    margin: 0;
  }
}

.post-list-item {
  display: block;
  &:not(:last-child) {
    border-bottom: 1px solid var(--vp-c-divider);
  }

  span.post-list-item-description {
    display: -webkit-inline-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media (max-width: 768px) {
      -webkit-line-clamp: 3;
    }
  }
}
</style>
