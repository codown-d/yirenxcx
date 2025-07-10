<template>
  <wd-tag
    :custom-class="`!px-2 !py-1 !rounded-1 !bg-[#E9F7F4] !text-primary ${className}`"
    type="primary"
  >
    <view class="flex gap-1 items-center">
      <text class="text-[24rpx]">{{ label }}</text>
      <wd-icon name="close-normal" custom-class="text-4" @click="handleSelect(value)"></wd-icon>
    </view>
  </wd-tag>
</template>

<script lang="ts" setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['onRemove'])

const handleSelect = (value) => {
  emit('onRemove', value)
}
</script>
