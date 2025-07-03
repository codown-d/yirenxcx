<template>
  <view
    class="relative bg-white rounded-3 p-4 mb-3 shadow-sm border border-gray-100 active:bg-gray-50 transition-colors duration-200"
    @click="handleCardClick"
  >
    <!-- 紧急招聘标签 -->
    <view
      v-if="jobData.isUrgent"
      class="absolute top-0 right-3 bg-gradient-to-b from-red-400 to-red-500 rounded-b-2 px-2 py-1"
    >
      <text class="text-white text-xs font-medium">急聘</text>
    </view>

    <!-- 职位标题和薪资 -->
    <view class="flex justify-between items-start mb-2">
      <view class="text-base font-semibold text-gray-800 flex-1 mr-3">{{ jobData.title }}</view>
      <view class="text-base font-semibold text-primary">{{ jobData.salary }}</view>
    </view>

    <!-- 公司和地点 -->
    <view class="mb-3">
      <view class="flex items-center gap-3">
        <text class="text-sm text-gray-600">{{ jobData.company }}</text>
        <text class="text-sm text-gray-400">📍{{ jobData.location }}</text>
      </view>
    </view>

    <!-- 标签列表 -->
    <view class="flex flex-wrap gap-1.5 mb-3">
      <view
        v-for="tag in jobData.tags"
        :key="tag"
        class="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-1 border border-blue-100"
      >
        {{ tag }}
      </view>
    </view>

    <!-- 发布时间和收藏按钮 -->
    <view class="flex justify-between items-center">
      <text class="text-xs text-gray-400">{{ jobData.publishTime }}</text>
      <view
        class="p-1 active:opacity-70 transition-opacity duration-200"
        @click.stop="handleFavorite"
      >
        <uni-icons
          :type="isFavorited ? 'heart-filled' : 'heart'"
          :color="isFavorited ? '#ff4757' : '#ddd'"
          size="20"
        />
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import type { JobPosition } from '@/constant/recruitment'

interface Props {
  jobData: JobPosition
}

const props = defineProps<Props>()
const emit = defineEmits<{
  click: [job: JobPosition]
  favorite: [job: JobPosition, isFavorited: boolean]
}>()

const isFavorited = ref(false)

const handleCardClick = () => {
  emit('click', props.jobData)
}

const handleFavorite = () => {
  isFavorited.value = !isFavorited.value
  emit('favorite', props.jobData, isFavorited.value)
}
</script>
