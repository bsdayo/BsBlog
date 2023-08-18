<script setup lang="ts">
interface SocialCardProp {
  icon: string
  title: string
  href: string
  color: string
  textColor: string
}

const cards: SocialCardProp[] = [
  {
    color: '#181717',
    icon: 'si:github',
    title: 'GitHub',
    href: 'https://github.com/bsdayo',
    textColor: 'white'
  },
  {
    color: '#000000',
    icon: 'si:wakatime',
    title: 'WakaTime',
    href: 'https://wakatime.com/@bsdayo',
    textColor: 'white'
  },
  {
    color: '#000000',
    icon: 'si:steam',
    title: 'Steam',
    href: 'https://steamcommunity.com/id/bsdayo',
    textColor: 'white'
  },
  {
    color: '#00a1d6',
    icon: 'si:bilibili',
    title: '哔哩哔哩',
    href: 'https://space.bilibili.com/33268404',
    textColor: 'white'
  },
  {
    color: '#13af64',
    icon: 'si:android',
    title: '酷安',
    href: 'https://www.coolapk.com/u/2352972',
    textColor: 'white'
  },
]
</script>

<template>
  <v-container class="pa-0">
    <v-row>
      <v-col cols="6" md="4" lg="3" v-for="card in cards" :key="card.title">
        <v-card class="social-card text-center"
                :class="`text-${card.textColor}`"
                :href="card.href" target="_blank" :color="card.color">
          <v-icon class="mt-4" :icon="card.icon" size="40"/>
          <v-card-title>{{ card.title }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">

</style>