<!-- 话题选择弹窗 -->

<template>
  <view @click="showPicker">
    <slot></slot>
  </view>
  <wd-popup v-model="showModal" position="bottom" custom-class="rounded-t-4">
    <view class="p-4">
      <view class="text-center mb-4">
        <text class="text-4 font-bold">选择表情</text>
      </view>
      <view class="flex flex-wrap gap-3 px-4 mb-4">
        <text v-for="(item, index) in mood" :key="index">{{ item }}</text>
      </view>
      <wd-button type="primary" block @click="handleConfirm">确定</wd-button>
    </view>
  </wd-popup>
</template>
<script lang="ts" setup>
let props = defineProps({
  modelValue: {
    type: [String, Number],
    default: () => '',
  },
})

const mood = [
  '😀',
  '😁',
  '😂',
  '🤣',
  '😅',
  '😆',
  '😉',
  '😊',
  '😎',
  '🥳',
  '🤔',
  '😏',
  '😮',
  '😍',
  '🤩',
  '😢',
  '😭',
  '😤',
  '😡',
  '🤯',
]
// 弹窗状态
const showModal = ref(false)
const selected = ref<string[]>([])
// 切换话题选择

watch(
  () => props.modelValue,
  (val) => {
    selected.value = (val + '').split(',').filter((item) => !!item)
  },
)
// 显示话题选择器
const showPicker = () => {
  showModal.value = true
}
const emit = defineEmits(['update:modelValue'])

const handleConfirm = () => {
  console.log(selected.value)
  emit('update:modelValue', selected.value.join(','))
  showModal.value = false
}
</script>
