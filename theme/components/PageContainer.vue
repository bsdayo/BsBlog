<template>
  <v-container class="page-container" fluid>
    <v-row>
      <v-col :cols="$vuetify.display.mobile ? 12 : 8">
        <slot name="left" />
      </v-col>
      <v-col :cols="$vuetify.display.mobile ? 12 : 4">
        <slot name="right" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.page-container {
  max-width: 1200px;
}
</style>
