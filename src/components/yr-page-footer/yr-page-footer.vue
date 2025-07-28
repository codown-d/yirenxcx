<template>
  <view class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-9 p-safe">
    <view class="flex gap-3 p-4" :style="pb">
      <slot />
    </view>
  </view>
</template>

<script lang="ts" setup>
import PLATFORM from '@/utils/platform'

let { isH5 } = PLATFORM

const pb = computed(() => {
  return 'padding-bottom:16px'
})
</script>
