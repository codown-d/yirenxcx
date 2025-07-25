<template>
  <wd-cell :title="title" :custom-class="className" title-width="60px">
    <wd-col-picker
      v-model="pickerValue"
      :columns="area"
      :column-change="columnChange"
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
    type: Array<string>,
    default: () => [],
  },
  className: {
    type: String,
    default: '',
  },
})
console.log(props, 'props.modelValue')
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

function handleConfirm({ value }) {
  console.log(value)
}
watch(
  () => props.modelValue,
  (val) => {
    console.log(val)
    pickerValue.value = val
    area.value = [
      colPickerData.map((item) => {
        return {
          value: item.value,
          label: item.text,
        }
      }),
      ...val.map((item) => {
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

const emit = defineEmits(['update:modelValue'])

watch(pickerValue, (val) => {
  emit('update:modelValue', val)
})
</script>
