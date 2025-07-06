<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5" type="home">
{
  layout: 'common',
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '意仁直聘',
    leftTextClass: 'font-bold text-primary',
  },
  isTab: true,
}
</route>
<template>
  <view class="min-h-screen px-4">
    <!-- 搜索栏 -->
    <search placeholder="请输入职位名称" class-name="mt-2" />
    <!-- 招聘横幅 -->
    <view class="relative my-3 rounded-3 overflow-hidden h-40">
      <wd-swiper :list="swiperList" autoplay @click="handleClick"></wd-swiper>
    </view>

    <!-- 筛选标签 -->
    <scroll-view class="whitespace-nowrap" scroll-x>
      <view class="flex items-center justify-between">
        <view class="flex gap-3">
          <view
            v-for="tag in filterTags"
            :key="tag.id"
            class="flex items-center gap-1 px-2 py-1.5 rounded-1 bg-white"
            :class="{
              '!bg-primary-100 text-primary': activeFilterTag === tag.id,
              'text-gray-600': activeFilterTag !== tag.id,
            }"
            @click="handleFilterChange(tag.id)"
          >
            <wd-icon name="camera" size="22px"></wd-icon>
            <text class="text-sm">{{ tag.label }}</text>
          </view>
        </view>
        <view class="flex items-center rounded-1 bg-white px-3 py-1.5 gap-1">
          <wd-icon name="filter" size="22px"></wd-icon>
          <text class="text-sm">筛选</text>
        </view>
      </view>
    </scroll-view>
    <!-- 推荐招聘职位标题 -->
    <view class="py-4">
      <text class="text-lg font-semibold text-gray-800">推荐招聘职位</text>
    </view>
    <!-- 职位列表 -->
    <view class="">
      <job-card
        v-for="job in filteredJobs"
        :key="job.id"
        :job-data="job"
        @click="handleJobClick"
        @favorite="handleJobFavorite"
      />
    </view>
    <!-- 底部安全区域 -->
    <view class="pb-safe"></view>
  </view>
</template>

<script lang="ts" setup>
import JobCard from '@/components/job-card/job-card.vue'
import {
  JOB_POSITIONS,
  FILTER_TAGS,
  TAB_BAR_LIST,
  type JobPosition,
  type FilterTag,
} from '@/constant/recruitment'
import { navigateToSub } from '@/utils'

defineOptions({
  name: 'RecruitmentHome',
})

// 注：由于使用了 layout: 'common'，不再需要手动处理安全区域

// 响应式数据
const searchKeyword = ref('')
const activeFilterTag = ref('all')
const activeTab = ref('recruit')
const jobList = ref<JobPosition[]>(JOB_POSITIONS)
const filterTags = ref<FilterTag[]>(FILTER_TAGS)
const tabBarList = ref(TAB_BAR_LIST)

// 计算属性
const filteredJobs = computed(() => {
  if (activeFilterTag.value === 'all') {
    return jobList.value
  }
  // 这里可以根据不同的筛选条件进行过滤
  return jobList.value
})
const swiperList = ref([
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/redpanda.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/capybara.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/panda.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/moon.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/meng.jpg',
])
function handleClick(e) {
  console.log(e)
}

const handleFilterChange = (tagId: string) => {
  activeFilterTag.value = tagId
  console.log('切换筛选标签:', tagId)
}

const handleJobClick = (job: JobPosition) => {
  console.log('点击职位:', job.title)
  uni.showToast({
    title: `查看职位: ${job.title}`,
    icon: 'none',
  })
}

const handleJobFavorite = (job: JobPosition, isFavorited: boolean) => {
  const action = isFavorited ? '收藏' : '取消收藏'
  console.log(`${action}职位:`, job.title)
  uni.showToast({
    title: `${action}: ${job.title}`,
    icon: 'none',
  })
}

const handleTabChange = (tabId: string) => {
  if (tabId === activeTab.value) return

  activeTab.value = tabId
  console.log('切换标签:', tabId)

  // 根据不同标签进行页面跳转
  switch (tabId) {
    case 'message':
      uni.showToast({ title: '消息功能开发中', icon: 'none' })
      break
    case 'add':
      uni.showToast({ title: '发布功能开发中', icon: 'none' })
      break
    case 'forum':
      uni.showToast({ title: '论坛功能开发中', icon: 'none' })
      break
    case 'mine':
      uni.showToast({ title: '我的功能开发中', icon: 'none' })
      break
  }
}
// 生命周期
onLoad(() => {
  console.log('招聘页面加载完成')
  navigateToSub('/violation-notice/violation-notice')
})
</script>
