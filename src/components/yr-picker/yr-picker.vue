<template>
  <wd-cell :title="title" :custom-class="className">
    <wd-picker
      v-model="selectVal"
      :columns="columns"
      @confirm="handleConfirm"
      custom-class="text-left"
    ></wd-picker>
  </wd-cell>
</template>

<script lang="ts" setup>
export interface Column {
  label: string
  value: string | number
}
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
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
  className: {
    type: String,
    default: '',
  },
  multiple: {
    type: Boolean,
    default: false,
  },
})

let selectVal = ref([])
let selectedItems = ref<Column[]>([])

const emit = defineEmits(['update:modelValue'])

const handleConfirm = ({ selectedItems: items, value }: any) => {
  selectVal.value = value
  selectedItems.value = items
  console.log(value)
  emit('update:modelValue', selectVal.value)
}

watch(
  () => props.modelValue,
  (val) => {
    let arr = [val]
    if (typeof val === 'string') {
      arr = (val + '').split(',').filter((item) => item)
    }
    selectVal.value = arr
    selectedItems.value = props.columns.filter((item) => arr.includes(item.value))
  },
)
</script>
