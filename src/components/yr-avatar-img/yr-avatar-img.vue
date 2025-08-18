<template>
  <view class="mr-4 w-20 h-20 rounded-full overflow-hidden">
    <wd-img
      :src="img || '/static/images/yiren.png'"
      mode="aspectFill"
      custom-class="mr-4 w-20 h-20 bg-[#F5F6FA]"
      :enable-preview="!!img"
    />
  </view>
</template>
<script lang="ts" setup>
defineProps({
  img: {
    type: String,
  },
})
</script>
