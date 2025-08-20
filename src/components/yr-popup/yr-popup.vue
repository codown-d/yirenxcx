<!-- 话题选择弹窗 -->

<template>
  <view @click="showTopicPicker">
    <slot></slot>
  </view>
  <wd-popup v-model="showTopicModal" position="bottom" custom-class="rounded-t-4">
    <view class="p-4">
      <view class="text-center mb-4">
        <text class="text-4 font-bold">选择话题</text>
      </view>
      <view class="flex flex-wrap gap-2 mb-4">
        <wd-tag
          v-for="topic in dictData.availableTopics"
          :key="topic.value"
          :custom-class="`${selectedTopics.includes(topic.value) ? '!bg-[#E9F7F4] !text-primary' : ''}`"
          round
          @click="toggleTopic(topic.value)"
        >
          {{ topic.label }}
        </wd-tag>
      </view>
      <wd-button type="primary" block @click="handleConfirm">确定</wd-button>
    </view>
  </wd-popup>
</template>
<script lang="ts" setup>
import { toast } from '@/utils/toast'
import { useDictData } from '@/hooks'
let { dictData } = useDictData()

let props = defineProps({
  modelValue: {
    type: [String, Number],
    default: () => '',
  },
})

// 弹窗状态
const showTopicModal = ref(false)
const selectedTopics = ref<any>([])
// 切换话题选择
const toggleTopic = (topic: any) => {
  const index = selectedTopics.value.indexOf(topic)
  if (index > -1) {
    selectedTopics.value.splice(index, 1)
  } else if (selectedTopics.value.length < 3) {
    selectedTopics.value.push(topic)
  } else {
    toast.error('最多只能选择3个话题', { duration: 1000 })
  }
}

watch(
  () => props.modelValue,
  (val) => {
    selectedTopics.value = (val + '').split(',').filter((item) => !!item)
  },
)
// 显示话题选择器
const showTopicPicker = () => {
  showTopicModal.value = true
}
const emit = defineEmits(['update:modelValue'])

const handleConfirm = () => {
  emit('update:modelValue', selectedTopics.value.join(','))
  showTopicModal.value = false
}
</script>
