<template>
  <v-container class="page-container" fluid>
    <v-row>
      <v-col
        :class="{ 'pa-1': $vuetify.display.mobile }"
        :cols="$vuetify.display.mobile ? 12 : 9"
      >
        <slot name="left" />
      </v-col>

      <v-col
        :cols="$vuetify.display.mobile ? 12 : 3"
        :class="{ 'pa-1 pt-5': $vuetify.display.mobile }"
      >
        <slot name="right" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.page-container {
  max-width: 1200px;
}
</style>
