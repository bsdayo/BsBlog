<template>
  <v-card
    class="post-content-card markdown"
    :class="$vuetify.display.mobile ? 'px-3 py-6' : 'pa-10'"
  >
    <Content />
  </v-card>
</template>
