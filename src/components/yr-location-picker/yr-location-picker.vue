<template>
  <wd-cell :title="title" :custom-class="className" title-width="60px">
    <wd-col-picker
      style="--wot-input-disabled-color: #4d4d4d"
      v-model="pickerValue"
      :columns="area"
      :column-change="columnChange"
      :disabled="disabled"
      @confirm="handleConfirm"
    ></wd-col-picker>
  </wd-cell>
</template>
<script lang="ts" setup>
import { useColPickerData } from '@/hooks/useColPickerData'
const { colPickerData, findChildrenByCode } = useColPickerData()
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    default: () => '',
  },
  className: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
const pickerValue = ref([])
const area = ref<any[]>([])
const columnChange = ({ selectedItem, resolve, finish }) => {
  const areaData = findChildrenByCode(colPickerData, selectedItem.value)
  if (areaData && areaData.length) {
    resolve(
      areaData.map((item) => {
        return {
          value: item.value,
          label: item.text,
        }
      }),
    )
  } else {
    finish()
  }
}

watch(
  () => props.modelValue,
  (val) => {
    const arr = val.split(',').filter((item) => item)
    pickerValue.value = arr
    area.value = [
      colPickerData.map((item) => {
        return {
          value: item.value,
          label: item.text,
        }
      }),
      ...arr.slice(0, -1).map((item) => {
        return findChildrenByCode(colPickerData, item)!.map((item) => {
          return {
            value: item.value,
            label: item.text,
          }
        })
      }),
    ]
  },
  { immediate: true },
)

const emit = defineEmits(['update:modelValue', 'confirmLabel'])

// watch(pickerValue, (val) => {
//   emit('update:modelValue', val)
// })
function handleConfirm({ value, selectedItems }) {
  console.log(value, selectedItems)
  emit('update:modelValue', value.join(','))
  emit('confirmLabel', selectedItems.map((i) => i.label).join(','))
}
</script>
