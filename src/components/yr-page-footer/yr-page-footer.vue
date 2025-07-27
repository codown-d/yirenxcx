<template>
  <view class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe">
    <view class="flex gap-3 p-4" :style="pb">
      <slot />
    </view>
  </view>
</template>

<script lang="ts" setup>
import PLATFORM from '@/utils/platform'

let { isH5 } = PLATFORM

const pb = computed(() => {
  if (isH5) {
    return 'padding-bottom:16px'
  } else {
    return 'padding-bottom:0'
  }
})
</script>
