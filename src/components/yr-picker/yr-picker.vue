<template>
  <wd-picker
    v-model="selectVal"
    :columns="columns"
    :disabled="disabled"
    @confirm="handleConfirm"
    :z-index="999999999"
    placeholder="请选择"
    :title="title"
    :prop="prop"
  ></wd-picker>
</template>

<script lang="ts" setup>
import { Column } from '../yr-select-picker/yr-select-picker.vue'

const props = defineProps({
  title: String,
  columns: {
    type: Array as PropType<Column[]>,
    default: () => [],
  },
  modelValue: {
    type: [String, Number],
    default: () => '',
  },
  placeholder: {
    type: String,
    default: '请输入',
  },
  prop: {
    type: String,
    default: '',
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

let selectVal = ref()
let selectedItems = ref<Column[]>([])

const emit = defineEmits(['update:modelValue'])

const handleConfirm = ({ selectedItems: items, value }: any) => {
  selectVal.value = value
  selectedItems.value = items
  emit('update:modelValue', selectVal.value)
}

watch(
  () => props.modelValue,
  (val) => {
    let arr = []
    if (typeof val === 'string') {
      arr = val.split(',').filter((item) => item)
    }
    selectVal.value = arr
    selectedItems.value = props.columns.filter((item) => arr.includes(item.value))
  },
)
</script>
