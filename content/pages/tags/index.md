---
title: 标签
---

## 当前已有 {{ tags.length }} 个标签

<ChipContainer>
  <template #prepend>
    <v-chip v-for="tag in tags.map(t => getTag(t, theme))"
            :key="tag.id"
            variant="flat"
            :href="`/tags/${tag.id}`"
            :color="tag.color">
      {{ tag.name }}
    </v-chip>
  </template>
</ChipContainer>

<script setup lang="ts">
import { data as posts } from '../../../theme/posts.data'
import { getTag } from '../../../theme/utils'
import { useData } from 'vitepress'
import { BsBlogThemeConfig } from '../../../theme/types/config'
import ChipContainer from '../../../theme/components/common/ChipContainer.vue'

const { theme } = useData<BsBlogThemeConfig>()
const set = new Set<string>()

for (const post of posts)
  for (const tag of post.tags)
    set.add(tag)

const tags = Array.from(set).sort()
</script>