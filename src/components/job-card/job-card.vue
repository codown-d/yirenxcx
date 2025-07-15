<template>
  <view
    class="relative bg-white rounded-3 p-4 mb-3 shadow-sm border border-gray-100 active:bg-gray-50 transition-colors duration-200"
    @click="handleCardClick"
  >
    <!-- 顶部描述信息 -->
    <view v-if="jobData.description" class="flex items-center mb-3">
      <text class="text-orange-500 text-sm mr-2">🎭</text>
      <text class="text-3 text-gray-600 flex-1">{{ jobData.description }}</text>
    </view>

    <!-- 职位标题和急聘标签 -->
    <view class="flex items-center justify-between mb-2">
      <view class="flex items-center">
        <text class="text-4 font-bold text-gray-900 mr-3">{{ jobData.title }}</text>
        <view v-if="jobData.isUrgent" class="bg-red-500 text-white text-3 px-1 py-[4rpx] rounded-1">
          急聘
        </view>
      </view>
      <text class="text-4 font-bold text-teal-600">{{ jobData.salary }}</text>
    </view>

    <!-- 标签列表 -->
    <view class="flex flex-wrap gap-2 mb-2">
      <view
        v-for="tag in jobData.tags"
        :key="tag"
        class="bg-teal-50 text-teal-600 text-3 px-2 py-1 rounded-1"
      >
        {{ tag }}
      </view>
    </view>
    <view class="flex items-start justify-between gap-3 mb-2">
      <view class="flex flex-wrap gap-2">
        <view
          v-for="tag in jobData.requirements"
          :key="tag"
          class="bg-[#F5F6FA] text-[#555555] text-3 px-2 py-1 rounded-1"
        >
          {{ tag }}
        </view>
      </view>
      <!-- 收藏按钮 -->
      <view class="active:opacity-70 transition-opacity duration-200" @click.stop="handleFavorite">
        <wd-icon
          :name="isFavorited ? 'heart-filled' : 'heart'"
          :color="isFavorited ? '#ff4757' : '#ddd'"
          custom-class="text-6"
        />
      </view>
    </view>
    <!-- 底部信息：公司、地点、时间 -->
    <view class="flex items-center justify-between">
      <view class="flex items-center gap-4">
        <view class="flex items-center">
          <wd-icon name="evaluation" custom-class="text-4 mr-1"></wd-icon>
          <text class="text-3 text-gray-600">{{ jobData.company }}</text>
        </view>
        <view class="flex items-center">
          <wd-icon name="location" custom-class="text-4 mr-1"></wd-icon>
          <text class="text-3 text-gray-600">{{ jobData.location }}</text>
        </view>
      </view>

      <view class="flex items-center gap-3">
        <text class="text-3 text-gray-400">{{ jobData.publishTime }}</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import type { JobPosition } from '@/constant/recruitment'
import { navigateToSub } from '@/utils'

interface Props {
  jobData: JobPosition
  favorited?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  favorited: false,
})

const emit = defineEmits<{
  click: [job: JobPosition]
  favorite: [job: JobPosition, isFavorited: boolean]
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
  emit('click', props.jobData)
  navigateToSub(`/job-detail/job-detail?id=${props.jobData.id}`)
}

const handleFavorite = () => {
  isFavorited.value = !isFavorited.value
  emit('favorite', props.jobData, isFavorited.value)
}
</script>
