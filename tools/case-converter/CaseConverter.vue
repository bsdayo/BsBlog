<template>
  <h2>输入</h2>
  <n-input placeholder="输入" v-model:value="input" />

  <h2>转换</h2>
  <n-flex vertical>
    <div v-for="(value, key) in values" :key="key">
      <n-input-group>
        <n-input :placeholder="key" :value="value" />
        <n-button type="primary" @click="copyToClipboard(value)">复制</n-button>
      </n-input-group>
    </div>
  </n-flex>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import jsConvert from 'js-convert-case'
import { copyToClipboard } from '../utils'

const input = ref('')
const values = ref({
  camelCase: '',
  snake_case: '',
  PascalCase: '',
  'dot.case': '',
  'path/case': '',
  'text case': '',
  'Sentence case': '',
  'Header Case': '',
  UPPERCASE: '',
  lowercase: '',
  'kebab-case': '',
})

watch(
  () => input.value,
  (val) => {
    values.value['camelCase'] = jsConvert.toCamelCase(val)
    values.value['snake_case'] = jsConvert.toSnakeCase(val)
    values.value['PascalCase'] = jsConvert.toPascalCase(val)
    values.value['dot.case'] = jsConvert.toDotCase(val)
    values.value['path/case'] = jsConvert.toPathCase(val)
    values.value['text case'] = jsConvert.toTextCase(val)
    values.value['Sentence case'] = jsConvert.toSentenceCase(val)
    values.value['Header Case'] = jsConvert.toHeaderCase(val)
    values.value['UPPERCASE'] = jsConvert.toUpperCase(val)
    values.value['lowercase'] = jsConvert.toLowerCase(val)
    values.value['kebab-case'] = jsConvert.toKebabCase(val)
  }
)
</script>

<style lang="scss" scoped></style>
