<template>
  <wd-col-picker
    style="--wot-input-disabled-color: #4d4d4d"
    v-model="pickerValue"
    :columns="area"
    :column-change="columnChange"
    :disabled="disabled"
    @confirm="handleConfirm"
    :prop="prop"
  />
</template>
<script lang="ts" setup>
import { useColPickerData } from '@/hooks/useColPickerData'
const { colPickerData, findChildrenByCode } = useColPickerData()
const props = defineProps({
  title: String,
  modelValue: {
    type: String,
    default: () => '',
  },
  prop: {
    type: String,
    default: '',
  },

  disabled: {
    type: Boolean,
    default: false,
  },
})
console.log(props)
const pickerValue = ref([])
const area = ref<any[]>([
  colPickerData.map((item) => {
    return {
      value: item.value,
      label: item.text,
    }
  }),
])
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
    console.log(val)
    if (val) {
      const arr = val?.split(',')?.filter((item) => item)
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
    }
  },
  { immediate: true },
)

const emit = defineEmits(['update:modelValue', 'confirmLabel'])

function handleConfirm({ value, selectedItems }) {
  console.log(value, selectedItems)
  emit('update:modelValue', value.join(','))
  emit('confirmLabel', selectedItems.map((i) => i.label).join(','))
}
</script>
