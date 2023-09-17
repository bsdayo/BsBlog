<script setup lang="ts">
import { data as posts } from '../../../theme/posts.data'
import { Post } from '../../../theme/types/common'
import { formatTime } from '../../../theme/utils'

// const timeline: Record<number, Record<number, Post>> = {}

const timeline: Array<{ year: number, months: Array<{ month: number, posts: Post[] }> }> = []

for (const post of posts) {
  const create = new Date(post.create)
  const year = create.getFullYear()
  const month = create.getMonth() + 1

  let yearItem = timeline.find(y => y.year === year)
  if (!yearItem) {
    yearItem = { year, months: [] }
    timeline.push(yearItem)
  }

  let monthItem = yearItem.months.find(m => m.month === month)
  if (!monthItem) {
    monthItem = { month, posts: [] }
    yearItem.months.push(monthItem)
  }

  monthItem.posts.push(post)
}
</script>

<template>
  <v-timeline side="end">
    <template v-for="year in timeline" :key="year.year">
      <v-timeline-item class="text-h5 font-weight-bold">
        <template #opposite>{{ year.year }}</template>
      </v-timeline-item>

      <template v-for="month in year.months" :key="month.month">
        <v-timeline-item class="text-h6 font-weight-bold" size="small">
          <template #opposite>{{ month.month }} 月</template>
        </v-timeline-item>

        <v-timeline-item v-for="post in month.posts" :key="post.id" size="x-small">
          <template #opposite>{{ formatTime(post.create, false).substring(2) }}</template>
          <v-card :href="post.url" variant="flat">
            <v-card-text>{{ post.title }}</v-card-text>
          </v-card>
        </v-timeline-item>
      </template>
    </template>
  </v-timeline>
</template>