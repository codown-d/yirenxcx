<template>
  <view class="mb-4">
    <view
      :class="[
        'flex p-[10px] pb-1',
        isSelf ? 'justify-end gap-2' : 'flex-row-reverse justify-end gap-2',
      ]"
    >
      <view
        :class="[
          'bubble p-4 py-2 rounded-xl shadow-sm text-sm max-w-[60%] break-words',
          isSelf ? 'bg-[#248069]  text-[#FFFFFF]' : 'bg-[#fff] text-[#252525]',
        ]"
      >
        <text v-if="message.type === 'TIMTextElem'">
          {{ message.payload.text }}
        </text>
        <image v-else class="w-50vw" mode="widthFix" :src="getImageUrl(message)" />
      </view>
      <image
        class="w-[42px] h-[42px] rounded-full bg-gray-200"
        :src="message.avatar"
        mode="aspectFit"
      />
    </view>
    <yr-time-now
      :time="message.time * 1000"
      class="flex text-[#8A8D91] text-[12px] px-[60px]"
      :class="[isSelf ? 'justify-end ' : 'justify-start ']"
    ></yr-time-now>
  </view>
</template>

<script setup>
import { useRoleStore } from '@/store'
let { getRole } = useRoleStore()
let props = defineProps({
  message: Object,
})
/**
 * 获取图片 URL（取第二种规格或第一种）
 */
function getImageUrl(message) {
  const imageList = message.payload?.imageInfoArray
  if (!imageList || imageList.length === 0) return ''
  // 优先选择原图或大图
  return (
    imageList.find((img) => img.type === 2)?.url ||
    imageList.find((img) => img.type === 1)?.url ||
    imageList[0]?.url
  )
}
const isSelf = computed(() => {
  let userInfo = uni.getStorageSync('userInfo')
  return props.message.from === `im_${getRole()}_${userInfo.id}`
})
</script>
