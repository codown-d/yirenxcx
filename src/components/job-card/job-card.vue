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
        <view v-if="jobData.workType" class="bg-red-500 text-white text-3 px-1 py-[4rpx] rounded-1">
          {{ jobData.workType }}
        </view>
      </view>
      <yr-salary :salaryMin="jobData.salaryMin" :salaryMax="jobData.salaryMax" />
    </view>

    <!-- 标签列表 -->
    <view class="flex flex-wrap gap-2 mb-2">
      <view
        v-for="tag in requirementDetails"
        :key="tag"
        class="bg-teal-50 text-teal-600 text-3 px-2 py-1 rounded-1"
      >
        {{ tag }}
      </view>
    </view>
    <view class="flex items-start justify-between gap-3 mb-3">
      <view class="flex flex-wrap gap-2">
        <view
          v-for="tag in benefits"
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
        <yr-img-title :title="jobData.companyName" url="jigou.svg" />
        <yr-img-title :title="jobData.location" url="weizhi.svg" />
      </view>

      <view class="flex items-center gap-3">
        <text class="text-3 text-gray-400">{{ updateTime }}</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { navigateToSub } from '@/utils'
import { YRZPJobDO } from '@/service/app'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn' // 如果你想显示中文
import { useConnect } from '@/hooks'

const { createGuanLianFn } = useConnect()
dayjs.extend(relativeTime)
dayjs.locale('zh-cn') // 设置为中文（可选）
interface Props {
  jobData: YRZPJobDO
  favorited?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  favorited: false,
})

const isFavorited = ref(props.favorited)
const benefits = computed(() => {
  console.log(props)
  return props.jobData.benefits.split(',')
})
const requirementDetails = computed(() => {
  console.log(props)
  return props.jobData.requirementDetails.split(',')
})
const updateTime = computed(() => {
  return dayjs(props.jobData.updateTime).fromNow()
})
const emit = defineEmits(['click', 'favorite'])

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
  createGuanLianFn({ guanZhuJobId: props.jobData.id }, () => {
    isFavorited.value = !isFavorited.value
    emit('favorite', props.jobData, isFavorited.value)
  })
}
</script>
