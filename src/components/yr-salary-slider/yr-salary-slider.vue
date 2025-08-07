<template>
  <wd-cell :title="title">
    <view class="flex items-center h-[44px]" @click="show = true">
      <view class="flex text-[14px] text-[#bfbfbf] pr-2">{{ placeholder }}</view>
      <wd-icon name="arrow-right" size="16px" custom-class="text-[#bfbfbf]"></wd-icon>
    </view>
  </wd-cell>
  <wd-popup
    v-model="show"
    position="bottom"
    :safe-area-inset-bottom="true"
    custom-style="height: 200px; border-radius:16px 16px 0 0"
    @close="handleClose"
  >
    <view class="flex justify-between items-center">
      <view class="text-[#666] text-[16px]" style="padding: 24px 15px 14px">取消</view>
      <view class="text-[#000] text-[16px]">{{ title }}</view>
      <view
        class="text-[#4d80f0] text-[16px]"
        style="padding: 24px 15px 14px"
        @click="handleConfirm"
      >
        确定
      </view>
    </view>
    <view class="px-6">
      <wd-slider v-model="value" :min="0" :max="100" />
    </view>
  </wd-popup>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  salaryMax: {
    type: Number,
    required: true,
  },
  salaryMin: {
    type: Number,
    required: true,
  },
  modelValue: {
    type: Array,
    default: () => [],
  },
  placeholder: {
    type: String,
    default: '请选择',
  },
})
let show = ref(false)
const value = ref([3000, 8000])

const emit = defineEmits(['changeValue'])

watchEffect(() => {
  value.value = [props.salaryMin, props.salaryMax]
})
const handleConfirm = () => {
  emit('changeValue', value.value)
  show.value = false
}
const handleClose = () => {
  show.value = false
}
</script>
