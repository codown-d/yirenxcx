<template>
  <view class="flex justify-center" :class="className">
    <text>暂无数据</text>
  </view>
</template>

<script lang="ts" setup>
const props = defineProps({
  className: {
    type: String,
    default: () => '',
  },
})
</script>
