<template>
  <view
    class="relative bg-white rounded-3 p-4 mb-3 shadow-sm border border-gray-100 active:bg-gray-50 transition-colors duration-200"
    @click="handleCardClick"
  >
    <!-- VIP标签 -->
    <view
      v-if="seekerData?.isVip"
      class="absolute top-0 right-3 bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-b-2 px-2 py-1"
    >
      <text class="text-white text-xs font-medium">VIP</text>
    </view>
    <!-- 描述信息 -->
    <view v-if="seekerData.description" class="mb-3">
      <wd-img src="/static/images/img1.png" width="12" height="12" custom-class="mt-[2rpx] mr-1" />
      <text class="text-[24rpx] text-[#999999]">{{ seekerData.description }}</text>
    </view>
    <!-- 头像和基本信息 -->
    <view class="flex items-start mb-3 gap-2">
      <!-- 头像 -->
      <wd-img
        :src="seekerData?.avatar || '/static/images/default-avatar.png'"
        custom-class="w-16 h-16 rounded-full bg-gray-100"
      />
      <!-- 基本信息 -->
      <view class="flex-1">
        <view class="flex mb-1 justify-between">
          <view class="flex items-center">
            <text class="text-base font-semibold text-gray-800 mr-2">{{ seekerData.name }}</text>
            <!-- 认证标识 -->
            <view v-if="seekerData?.isVerified">
              <wd-tag type="primary" custom-class="!px-[12rpx] !py-[4rpx] !rounded-[2px] !text-3">
                认证
              </wd-tag>
            </view>
          </view>
          <!-- 收藏按钮 -->
          <view
            class="active:opacity-70 transition-opacity duration-200"
            @click.stop="handleFavorite"
          >
            <wd-icon
              :name="isFavorited ? 'heart-filled' : 'heart'"
              :color="isFavorited ? '#ff4757' : '#ddd'"
              custom-class="text-6"
            />
          </view>
        </view>
        <view class="mb-1">
          <text class="text-sm text-gray-600">
            {{ seekerData.age }}岁 • {{ seekerData.profession }} • {{ seekerData.experience }}
          </text>
        </view>
      </view>
    </view>

    <!-- 标签列表 -->
    <view class="flex flex-wrap gap-1.5 mb-2">
      <view
        v-for="tag in seekerData.tags"
        :key="tag"
        class="bg-green-50 text-green-600 text-xs px-2 py-1 rounded-1 border border-green-100"
      >
        {{ tag }}
      </view>
    </view>
    <view class="flex items-center text-3 text-gray-400 mb-2">
      <wd-icon name="evaluation" custom-class="text-4 mr-1"></wd-icon>
      <text v-if="seekerData.education">{{ seekerData.education }}</text>
    </view>
    <!-- 联系方式和期望薪资 -->
    <view v-if="seekerData.phone || seekerData.expectedSalary" class="mb-3">
      <view class="flex items-center justify-between text-sm">
        <view>
          <wd-icon name="call" custom-class="text-4 mr-1"></wd-icon>
          <text v-if="seekerData.phone" class="text-gray-600">
            {{ seekerData.phone }}
          </text>
        </view>

        <text v-if="seekerData.expectedSalary" class="text-primary font-medium">
          {{ seekerData.expectedSalary }}
        </text>
      </view>
    </view>

    <!-- 发布时间和操作按钮 -->
    <view class="flex justify-between items-center">
      <text class="text-xs text-gray-400">{{ seekerData.publishTime }}</text>
      <view class="flex items-center gap-2">
        <!-- 联系按钮 -->
        <wd-button type="primary" size="small" @click.stop="handleContact">联系</wd-button>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import type { JobSeeker } from '@/constant/job-seeking'
import { navigateToSub } from '@/utils'
import { useConnect } from '@/hooks'
const { createGuanLianFn } = useConnect()

interface Props {
  seekerData: JobSeeker
  favorited?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  favorited: false,
})
const emit = defineEmits<{
  click: [seeker: JobSeeker]
  favorite: [seeker: JobSeeker, isFavorited: boolean]
  contact: [seeker: JobSeeker]
}>()

const isFavorited = ref(props.favorited)

// 监听favorited属性变化
watch(
  () => props.favorited,
  (newVal) => {
    isFavorited.value = newVal
  },
)

const handleCardClick = () => {
  emit('click', props.seekerData)
}

const handleFavorite = () => {
  createGuanLianFn({ guanZhuJobSeekerId: props.seekerData.id }, () => {
    isFavorited.value = !isFavorited.value
    emit('favorite', props.seekerData, isFavorited.value)
  })
}

const handleContact = () => {
  emit('contact', props.seekerData)
  console.log('handleContact', props)
  navigateToSub(`/seeker-detail/seeker-detail?id=${props.seekerData.id}`)
}
</script>
