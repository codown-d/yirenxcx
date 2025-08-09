<template>
  <view class="grid grid-cols-3 gap-3 px-4 pb-2">
    <wd-button
      v-for="(item, index) in columns"
      :key="index"
      :type="`${selectedItems.includes(item.value) ? 'primary' : 'info'}`"
      :size="size"
      :round="round"
      @click="onSelect(item)"
    >
      {{ item.label }}
    </wd-button>
  </view>
</template>

<script lang="ts" setup>
import { ButtonType, Column, SizeType } from '@/types'
const props = defineProps({
  title: {
    type: String,
  },
  columns: {
    type: Array as PropType<Column[]>,
    default: () => [],
  },
  modelValue: {
    type: String,
    default: '',
  },
  type: {
    type: String as PropType<ButtonType>,
    default: 'primary',
  },
  size: {
    type: String as PropType<SizeType>,
    default: 'medium',
  },
  round: {
    type: Boolean,
    default: false,
  },
  plain: {
    type: Boolean,
    default: false,
  },
  className: {
    type: String,
    default: '',
  },
})
let selectedItems = ref([])
const emit = defineEmits(['update:modelValue'])
const onSelect = (item) => {
  const index = selectedItems.value.indexOf(item.value)
  if (index === -1) {
    // 不存在 → 添加
    selectedItems.value = [...selectedItems.value, item.value]
  } else {
    // 已存在 → 移除
    selectedItems.value = selectedItems.value.filter((v) => v !== item.value)
  }
  emit('update:modelValue', selectedItems.value.join(','))
}
watch(
  () => props.modelValue,
  (val) => {
    selectedItems.value = val?.split(',').filter((item) => !!item)
  },
)
</script>
