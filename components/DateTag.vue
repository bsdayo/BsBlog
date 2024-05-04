<template>
  <n-tag type="info" :bordered="false" :size="small ? 'small' : 'medium'">
    <template #icon>
      <n-icon size="small">
        <font-awesome-icon :icon="faCalendar" />
      </n-icon>
    </template>

    <n-time :time="$props.time" type="date" />
  </n-tag>
</template>

<script lang="ts" setup>
import { NTag, NIcon, NTime } from 'naive-ui'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

defineProps<{ time: number | Date; small: boolean }>()
</script>
