<template>
  <div v-if="step < 6">
    <h2>第 {{ step + 1 }} 步</h2>

    <div class="flex flex-wrap text-xl">
      <div v-for="name in page" :key="name" class="pa-2 b b-solid b-divider">
        {{ name }}
      </div>
    </div>

    <div class="mt-4 flex flex-wrap items-center justify-between">
      这里面有你的姓氏吗？
      <div class="flex gap-2">
        <ui-button variant="alt" @click="() => next(false)">无</ui-button>
        <ui-button @click="() => next(true)">有</ui-button>
      </div>
    </div>
  </div>
  <div v-else>
    <h2>你的姓氏是：{{ result }}</h2>
    <div class="mt-4 flex flex-wrap items-center justify-between">
      非常神奇二进制，使我的数位旋转
      <ui-button @click="() => reset()">重置</ui-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

const allNames =
  '王张李刘陈杨黄周胡赵吴徐林高孙宋罗朱郭马曹何梁韩谢郑于唐董夏傅冯袁薛许姚彭曾汪江苏卢贾余肖魏邓谭阎丁潘杜戴毛钟廖田任姜范方叶蔡程'.split(
    ''
  )
const pages = allNames.reduce(
  (result: string[][], curr: string, currIndex: number) => {
    for (let i = 0; i < 6; i++) {
      if ((currIndex & (1 << i)) == 1 << i) {
        result[i].push(curr)
      }
    }
    return result
  },
  [[], [], [], [], [], []]
)

const step = ref(0)
const page = computed(() => pages[step.value])
const resultIndex = ref(0)
const result = computed(() => allNames[resultIndex.value])

function next(contains: boolean) {
  if (contains) resultIndex.value |= 1 << step.value
  step.value++
}

function reset() {
  step.value = 0
  resultIndex.value = 0
}
</script>
