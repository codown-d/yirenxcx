<template>
  <wd-picker
    :columns="columns"
    v-model="dataVal"
    :column-change="onChangeDistrict"
    :display-format="displayFormat"
    @confirm="handleConfirm"
    :z-index="999999999"
  />
</template>
<script lang="ts" setup>
import { useDictData } from '@/hooks'
let { dictData } = useDictData()
const props = defineProps({
  jobType: {
    type: String,
    default: '',
  },
  jobDomain: {
    type: String,
    default: '',
  },
  jobSpecific: {
    type: String,
    default: '',
  },
})

const dataVal = ref<any>([])
const columns = ref([])
watch(
  () => dictData.value.ALL_CATEGORIES_DISPLAY,
  (val) => {
    if (!val || val?.length == 0) {
      columns.value = []
    } else {
      columns.value = [
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
        val?.filter(
          (category) => category.value.startsWith('台前-') && category.value.split('-').length == 2,
        ),
        val?.filter((category) => category.value.startsWith('台前-演员-')),
      ]
    }
  },
  { immediate: true, deep: true },
)
let getColumn = (value) => {
  let arr = dictData.value.ALL_CATEGORIES_DISPLAY?.filter((data) => data.value.indexOf(value) === 0)
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

watch(
  () => props,
  (val) => {
    let { jobType, jobDomain, jobSpecific } = val
    if (jobType && jobDomain && jobSpecific) {
      nextTick(() => {
        dataVal.value = [jobType, jobDomain, jobSpecific]
      })
    }
  },
  { immediate: true },
)

const emit = defineEmits(['confirmLabel'])

const handleConfirm = (item) => {
  emit('confirmLabel', item.value)
}
</script>
