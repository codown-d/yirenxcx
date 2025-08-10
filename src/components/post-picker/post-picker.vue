<template>
  <wd-picker
    :columns="columns"
    v-model="value"
    :column-change="onChangeDistrict"
    :display-format="displayFormat"
    @confirm="handleConfirm"
  />
</template>
<script lang="ts" setup>
import { ALL_CATEGORIES_DISPLAY } from '@/constant'

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
  },
})

const value = ref([])

const columns = ref([
  [
    {
      label: '台前',
      value: '台前',
    },
    {
      label: '幕后',
      value: '幕后',
    },
    {
      label: '运营',
      value: '运营',
    },
  ],
  ALL_CATEGORIES_DISPLAY.filter(
    (category) => category.value.startsWith('台前-') && category.value.split('-').length == 2,
  ),
  ALL_CATEGORIES_DISPLAY.filter((category) => category.value.startsWith('台前-演员-')),
])

let getColumn = (value) => {
  let arr = ALL_CATEGORIES_DISPLAY.filter((data) => data.value.indexOf(value) === 0)
  return arr.reduce(
    (pre, current) => {
      let len = current.value.split('-').length - 1
      switch (len) {
        case 0:
          pre[0].push(current)
          break
        case 1:
          pre[1].push(current)
          break
        case 2:
          pre[2].push(current)
          break
      }

      return pre
    },
    [[], [], []],
  )
}
const onChangeDistrict = (pickerView, item, columnIndex, resolve) => {
  let arr = getColumn(item[columnIndex].value)
  if (columnIndex === 0) {
    pickerView.setColumnData(1, arr[1])
    pickerView.setColumnData(2, arr[2])
  } else if (columnIndex === 1) {
    pickerView.setColumnData(2, arr[2])
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
// watch(
//   () => props.modelValue,
//   (val) => {
//     value.value = val
//   },
//   { immediate: true },
// )

const emit = defineEmits(['confirmLabel'])

const handleConfirm = (item) => {
  emit('confirmLabel', item.value)
}
</script>
