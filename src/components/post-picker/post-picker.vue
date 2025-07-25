<template>
  <wd-cell :title="title" :custom-class="className" title-width="60px">
    <wd-picker
      :columns="columns"
      v-model="value"
      :column-change="onChangeDistrict"
      :display-format="displayFormat"
    />
  </wd-cell>
</template>
<script lang="ts" setup>
import { postColumns } from '@/constant'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  modelValue: {
    type: Array,
    default: () => [],
  },
  className: {
    type: String,
    default: '',
  },
})

const value = ref([])

const columns = ref([
  postColumns[0],
  postColumns[postColumns[0][0].value],
  postColumns[postColumns[postColumns[0][0].value][0].value],
])

const onChangeDistrict = (pickerView, value, columnIndex, resolve) => {
  const item = value[columnIndex]
  if (columnIndex === 0) {
    pickerView.setColumnData(1, postColumns[item.value])
    pickerView.setColumnData(2, postColumns[postColumns[item.value][0].value])
  } else if (columnIndex === 1) {
    pickerView.setColumnData(2, postColumns[item.value])
  }
  resolve()
}

const displayFormat = (items) => {
  return items
    .map((item) => {
      return item.label
    })
    .join('-')
}
watch(
  () => props.modelValue,
  (val) => {
    value.value = val
  },
  { immediate: true },
)

const emit = defineEmits(['update:modelValue'])

watch(value, (val) => {
  emit('update:modelValue', val)
})
</script>
