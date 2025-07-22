<template>
  <wd-cell :title="title" :custom-class="className" title-width="60px">
    <wd-col-picker
      v-model="value"
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
    type: Array,
    default: () => [],
  },
  className: {
    type: String,
    default: '',
  },
})

const value = ref([])
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

function handleConfirm({ value }) {
  console.log(value)
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
