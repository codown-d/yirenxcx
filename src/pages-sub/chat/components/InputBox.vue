<template>
  <view class="flex items-center w-full bg-[#F5F6FA] px-[8px] py-[6px] rounded-1">
    <wd-input
      v-model="text"
      placeholder="输入消息..."
      @confirm="handleSend"
      no-border
      custom-class="flex-1 w-0 !bg-transparent placeholder-gray-500"
    />
    <view class="flex justify-around items-center w-[80px]">
      <view
        class="flex items-center justify-center w-7 h-7 rounded-full bg-[#C5C5C5]"
        @click="handleSendFile"
      >
        <wd-icon name="file" size="18px" custom-class="text-#F5F6FA font-bold"></wd-icon>
      </view>
      <image
        @click="handleSend"
        v-if="text"
        src="/static/images/fs-btn.svg"
        mode="scaleToFill"
        class="w-7 h-7"
      />
      <image v-else src="/static/images/unfs-btn.svg" mode="scaleToFill" class="w-7 h-7" />
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const text = ref('')
const emit = defineEmits(['send', 'sendFile'])
const handleSend = () => {
  if (!text.value.trim()) return
  emit('send', text.value)
  text.value = ''
}
const handleSendFile = () => {
  emit('sendFile')
}
</script>

<style scoped></style>
