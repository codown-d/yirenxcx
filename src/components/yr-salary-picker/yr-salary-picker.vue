<template>
  <wd-cell :title="title">
    <wd-picker
      safe-area-inset-bottom
      :columns="dictData.salaryColumns"
      v-model="salaryValue"
      @confirm="handleConfirm"
      :placeholder="placeholder"
      :prop="prop"
      :z-index="999999999"
    />
  </wd-cell>
</template>

<script lang="ts" setup>
import { useDictData } from '@/hooks'
let { dictData } = useDictData()
const props = defineProps({
  placeholder: {
    type: String,
    default: '请选择',
  },
  title: {
    type: String,
    default: '',
  },
  prop: {
    type: String,
    default: '',
  },
})
console.log(props)
const salaryValue = ref()
const emit = defineEmits(['changeValue', 'update:modelValue'])
function parseSalary(str) {
  str = str.replace(/\s+/g, '') // 去掉空格
  let lower = 0,
    upper = 0

  if (str.includes('-')) {
    // 区间范围
    const [min, max] = str.split('-')
    lower = parseInt(min) * 1000
    upper = parseInt(max) * 1000
  } else if (str.includes('以下')) {
    // 以下，表示 [0, x]
    lower = 0
    upper = parseInt(str) * 1000
  } else if (str.includes('以上')) {
    // 以上，表示 [x, 0] (0 代表无上限)
    lower = parseInt(str) * 1000
    upper = 0
  }

  return [lower, upper]
}
const handleConfirm = ({ value }) => {
  emit('changeValue', parseSalary(value))
  emit('update:modelValue', value)
}
</script>
