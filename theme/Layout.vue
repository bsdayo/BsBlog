<template>
  <v-app>
    <v-navigation-drawer
      v-if="$vuetify.display.mobile"
      v-model="isNavDrawerOpened"
      temporary
    >
      <v-list>
        <v-list-item
          :prepend-avatar="theme.avatar"
          title="bsdayo"
          subtitle="♪sakana——\(＞○＜\)♪"
        >
          <!-- <template v-slot:append>
          <v-btn size="small" variant="text" icon="mdi-menu-down" />
        </template> -->
        </v-list-item>
      </v-list>
      <v-divider />
      <v-list nav density="compact">
        <v-list-item
          v-for="link in theme.navLinks"
          :key="link.href"
          :prepend-icon="link.icon"
          :href="link.href"
          :title="link.title"
          exact
        />
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      class="nav-bar"
      :class="{ collapsed: !isScrollingUp, top: isScrolledToTop }"
      :elevation="navBarElevation"
    >
      <v-app-bar-nav-icon
        v-if="$vuetify.display.mobile"
        @click="isNavDrawerOpened = !isNavDrawerOpened"
      />
      <v-toolbar-title :class="{ 'ml-1': $vuetify.display.mobile }">
        <v-btn class="text-h6" :href="site.base">{{ site.title }}</v-btn>
      </v-toolbar-title>

      <div class="nav-links mr-4" v-if="!$vuetify.display.mobile">
        <v-btn
          class="ml-2"
          v-for="link in theme.navLinks"
          :key="link.href"
          :prepend-icon="link.icon"
          :href="link.href"
          exact
          >{{ link.title }}
        </v-btn>
      </div>
    </v-app-bar>

    <HomeHeader v-if="frontmatter.home" />
    <PageHeader v-else />

    <PageContainer>
      <template #left>
        <PostListCard v-if="frontmatter.home" />
        <PostContentCard v-else />
      </template>
    </PageContainer>

    <v-footer class="bg-indigo-lighten-1">
      {{ new Date().getFullYear() }} - {{ site.title }}
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { BsBlogThemeConfig } from 'theme'
import { ref, onMounted, onUnmounted } from 'vue'

import PageContainer from './components/PageContainer.vue'
import HomeHeader from './components/headers/HomeHeader.vue'
import PageHeader from './components/headers/PageHeader.vue'
import PostContentCard from './components/cards/PostContentCard.vue'
import PostListCard from './components/cards/PostListCard.vue'

const { site, theme, frontmatter } = useData<BsBlogThemeConfig>()

const navBarElevation = ref(0)
const isNavDrawerOpened = ref(false)
const isScrolledToTop = ref(false)
const isScrollingUp = ref(true)

let lastScrollY = 0
function handleScroll() {
  isScrolledToTop.value = window.scrollY <= 64
  isScrollingUp.value = lastScrollY >= window.scrollY
  navBarElevation.value = isScrolledToTop.value ? 0 : 2
  lastScrollY = window.scrollY
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.nav-bar {
  position: fixed;
  transition: all 0.5s, color 0.1s;
  background-color: rgba(255, 255, 255, 0.8) !important;

  &.collapsed {
    top: -64px !important;
  }

  &.top {
    background: linear-gradient(rgba(0, 0, 0, 0.5), transparent) !important;
    color: white !important;
  }
}
</style>
