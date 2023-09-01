<template>
  <div class="chip-container">
    <slot name="prepend"/>
    <v-spacer/>
    <slot name="append"/>
  </div>
</template>

<style scoped lang="scss">
.chip-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>