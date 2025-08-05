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

    <yr-tag-list v-model="jobData.requirementDetails" />
    <view class="flex items-center justify-between gap-3 mb-3 mt-3">
      <yr-tag-list v-model="jobData.benefits" class-name="!bg-[#F5F6FA] !text-[#555555]" />
      <view class="active:opacity-70 transition-opacity duration-200" @click.stop="handleFavorite">
        <wd-icon
          :name="isFavorited ? 'heart-filled' : 'heart'"
          :color="isFavorited ? '#ff4757' : '#ddd'"
          custom-class="text-6"
        />
      </view>
    </view>
    <view class="flex items-center justify-between">
      <view class="flex items-center gap-4">
        <yr-img-title :title="jobData.companyName" url="jigou.svg" />
        <yr-img-title :title="jobData.location" url="weizhi.svg" />
      </view>

      <yr-time-now :time="Number(jobData.createTime)" />
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { navigateToSub } from '@/utils'
import { YRZPJobDO } from '@/service/app'
import { useConnect } from '@/hooks'
const { changeConnect } = useConnect()
interface Props {
  jobData: YRZPJobDO
  favorited?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  favorited: false,
})

const isFavorited = ref(props.favorited)

watch(
  () => props.favorited,
  (newVal) => {
    isFavorited.value = newVal
  },
)

const emit = defineEmits(['click', 'favorite'])
const handleCardClick = () => {
  emit('click', props.jobData)
  console.log(props.jobData)
  navigateToSub(`/job-detail/job-detail?id=${props.jobData.JobId}`)
}

const handleFavorite = () => {
  changeConnect({ guanZhuJobId: props.jobData.id }, isFavorited.value, () => {
    isFavorited.value = !isFavorited.value
    emit('favorite', props.jobData, isFavorited.value)
  })
}
</script>
