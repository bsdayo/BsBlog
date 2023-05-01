<template>
  <v-img
    :src="imgUrl"
    class="page-header"
    :height="$vuetify.display.mobile ? '320px' : '400px'"
    cover
  >
    <div
      class="page-header-overlay d-flex justify-center align-center text-center pa-2"
    >
      <h1 class="page-header-title text-h4 font-weight-bold text-white">
        {{ frontmatter.title ?? page.title }}
      </h1>
    </div>
  </v-img>
</template>

<script lang="ts" setup>
import { BsBlogThemeConfig } from 'theme'
import { useData } from 'vitepress'
import { ref } from 'vue'
import { getRandomMoe } from '../../utils'

const { frontmatter, page } = useData<BsBlogThemeConfig>()

const imgUrl = ref(frontmatter.value.cover)
if (!imgUrl.value)
  getRandomMoe('regular').then((moeUrl) => (imgUrl.value = moeUrl))
</script>

<style lang="scss" scoped>
.page-header div.page-header-overlay {
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
