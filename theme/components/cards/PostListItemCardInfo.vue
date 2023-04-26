<template>
  <v-card-subtitle>
    <v-icon icon="mdi-calendar-month" size="small" />
    <span>&nbsp;{{ formatTime(create) }}</span>
    |
    <v-icon icon="mdi-forum" size="small" />
    &nbsp;<span :class="`waline-comment-count-${postId}`" /> 条评论
  </v-card-subtitle>
</template>

<script lang="ts" setup>
import { formatTime } from '../../../theme/utils'
import { commentCount } from '@waline/client/dist/waline'
import { onMounted } from 'vue'
import { useData } from 'vitepress'
import { BsBlogThemeConfig } from 'theme'

const props = defineProps<{
  url: string
  create: number
}>()
const { theme } = useData<BsBlogThemeConfig>()

const postId =  /(?<=\/posts\/).*(?=\/)/.exec(props.url)![0]

onMounted(() => {
  commentCount({
    serverURL: theme.value.walineUrl,
    path: `/posts/${postId}/`,
    selector: `span.waline-comment-count-${postId}`,
  })
})
</script>

<style lang="scss" scoped></style>
