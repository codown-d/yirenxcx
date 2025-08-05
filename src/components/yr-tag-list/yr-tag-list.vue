<template>
  <view class="flex items-center gap-2">
    <wd-tag :custom-class="`!px-2 !py-1 !rounded-1 ${className}`" :type="type" v-for="item in list">
      <view class="flex gap-1 items-center text-[24rpx]">
        {{ item }}
      </view>
    </wd-tag>
  </view>
</template>

<script lang="ts" setup>
import { TagType } from 'wot-design-uni/components/wd-tag/types'

let props = defineProps({
  type: {
    type: String as PropType<TagType>,
    default: 'primary',
  },
  modelValue: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: '',
  },
})
let list = ref(props.modelValue?.split(','))

watch(
  () => props.modelValue,
  (val) => {
    list.value = val?.split(',').filter((i) => !!i)
  },
)
const emit = defineEmits(['update:modelValue'])

// const handleConfirm = ({ selectedItems: items, value }: any) => {
//   selectVal.value = value
//   selectedItems.value = items
//   console.log(value)
//   emit('update:modelValue', selectVal.value)
// }
</script>
