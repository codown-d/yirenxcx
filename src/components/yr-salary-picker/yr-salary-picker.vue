<template>
  <wd-picker
    safe-area-inset-bottom
    :columns="dictData.salaryColumns"
    v-model="salaryValue"
    @confirm="handleConfirm"
    :placeholder="placeholder"
  />
</template>

<script lang="ts" setup>
import { useDictData } from '@/hooks'
let { dictData } = useDictData()
const props = defineProps({
  placeholder: {
    type: String,
    default: '请选择',
  },
})

const salaryValue = ref()
const emit = defineEmits(['changeValue'])
const handleConfirm = ({ value }) => {
  emit('changeValue', value.split('-'))
}
</script>
