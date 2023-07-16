<template>
  <v-img
    :src="imgUrl"
    class="page-header"
    :height="$vuetify.display.mobile ? '320px' : '400px'"
    cover
  >
    <div
      class="page-header-overlay d-flex flex-column justify-center align-center text-center pa-2"
    >
      <h1 class="page-header-title text-h4 font-weight-bold text-white">
        {{ frontmatter.title ?? page.title }}
        <div v-if="postData" class="post-info mt-6 text-subtitle-1 text-white">
          <v-icon icon="mdi-calendar-month" size="small" />
          <span>&nbsp;{{ utils.formatTime(postData.create) }}</span>
        </div>
      </h1>
    </div>
  </v-img>
</template>

<script lang="ts" setup>
import { BsBlogThemeConfig } from 'theme'
import { useData } from 'vitepress'
import { ref } from 'vue'
import * as utils from '../../utils'
import { data as posts } from '../../scripts/posts.data'

const { frontmatter, page } = useData<BsBlogThemeConfig>()

const post = posts.find((p) =>
  p.url.includes(page.value.relativePath.replace('index.md', ''))
)
const postData = post ? utils.getPostFromData(post) : null

const imgUrl = ref(frontmatter.value.cover)
</script>

<style lang="scss" scoped>
.page-header {
  div.page-header-overlay {
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);

    .page-header-title {
      position: relative;

      .post-info {
        position: absolute;
        float: bottom;
        width: 100%;
      }
    }
  }
}
</style>
