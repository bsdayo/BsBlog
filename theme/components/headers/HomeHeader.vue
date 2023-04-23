<template>
  <v-img
    :src="frontmatter.image ?? theme.defaultHeaderImage"
    class="home-header h-screen d-flex justify-center align-center text-center"
    cover
  >
    <h1 class="text-h2 font-weight-bold text-white">{{ site.title }}</h1>

    <v-btn
      class="text-white scroll-btn bg-transparent"
      flat
      icon="mdi-chevron-down"
      @click="scrollToContent"
    />
  </v-img>
</template>

<script lang="ts" setup>
import { useData } from 'vitepress'

const { theme, site, frontmatter } = useData()

function scrollToContent() {
  window.scrollTo({
    top: document.documentElement.clientHeight,
    behavior: 'smooth',
  })
}
</script>

<style lang="scss" scoped>
@keyframes scroll-btn-move {
  0% {
    bottom: 25px;
  }
  50% {
    bottom: 15px;
  }
  100% {
    bottom: 25px;
  }
}

.home-header {
  position: relative;

  .scroll-btn {
    position: absolute;
    transform: translate(-50%, 0);
    animation: scroll-btn-move 1.2s linear infinite;
  }
}
</style>
