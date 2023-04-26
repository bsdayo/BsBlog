<template>
  <v-card class="profile-card" v-ripple>
    <div width="100%" class="my-5 d-flex flex-column align-center">
      <v-avatar size="110">
        <v-img :src="theme.avatar" cover />
      </v-avatar>
      <v-card-title>{{ theme.author }}</v-card-title>
      <v-card-subtitle>{{ theme.bio }}</v-card-subtitle>
    </div>
    <v-card-actions class="d-flex justify-center">
      <v-btn
        v-for="social in theme.socialLinks ?? []"
        :key="social.href"
        size="small"
        :icon="social.icon"
      />
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" setup>
import { BsBlogThemeConfig } from 'theme'
import { useData } from 'vitepress'

const { theme } = useData<BsBlogThemeConfig>()
</script>

<style lang="scss" scoped>
.profile-card * {
  white-space: normal;
  text-align: center;
}
</style>
