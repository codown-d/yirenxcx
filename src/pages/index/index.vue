<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5" type="home">
{
  layout: 'blank',
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '意仁直聘',
  },
}
</route>
<template>
  <view
    class="text-[#252525]"
    :style="'background: linear-gradient( 180deg,rgba(56, 200, 164, 0.25) 0%,rgba(56, 200, 164, 0) 200rpx,rgba(245, 246, 250, 1) 50%);'"
  >
    <scroll-view
      :scroll-y="true"
      class="h-100vh"
      @scroll="handleScroll"
      @scrolltolower="onScrollToLower"
    >
      <wd-navbar
        :bordered="false"
        :left-arrow="false"
        left-text="意仁直聘"
        custom-class="font-bold text-primary"
        fixed
        safeAreaInsetTop
        :custom-style="`background-color: rgba(255,255,255, ${opacity})!important`"
      ></wd-navbar>
      <view
        class="bg-transparent pb-4"
        :style="{
          paddingTop: safeAreaInsets?.top + 44 + 'px',
        }"
      >
        <view class="px-4">
          <!-- 搜索栏 -->
          <search placeholder="请输入职位名称" class-name="mt-2" />
          <!-- 招聘横幅 -->
          <view class="relative my-3 rounded-3 overflow-hidden h-40">
            <wd-swiper :list="swiperList" autoplay></wd-swiper>
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
                <text class="text-sm" @click="navigateToSub('/job-filter/job-filter')">筛选</text>
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
        </view>
      </view>
    </scroll-view>
  </view>
  <wd-popup v-model="show" custom-class="!bg-transparent" closable>
    <view class="flex flex-col gap-3 rounded-3 bg-linear-100 p-5 w-[260px]">
      <view class="text-primary font-bold text-4 text-center">请选择您的身份</view>
      <view class="text-[14px] text-center">注册后浏览更多信息</view>
      <view class="flex flex-col gap-3 mt-3" @click="handleClick">
        <view class="bg-[#F5F6FA] rounded-[6px] flex items-center">
          <wd-img :width="88" :height="76" src="/static/images/yiren.png" custom-class="mr-5" />
          <view>
            <view class="text-[#252525]">薏人</view>
            <view class="flex gap-1 mt-2">
              <tag label="找工作" :closeable="false"></tag>
              <tag label="投简历" :closeable="false"></tag>
            </view>
          </view>
        </view>
        <view class="bg-[#F5F6FA] rounded-[6px] flex items-center">
          <wd-img :width="88" :height="76" src="/static/images/zp.png" custom-class="mr-5" />
          <view>
            <view class="text-[#252525]">我来招聘</view>
            <view class="flex gap-1 mt-2">
              <tag
                label="招人才"
                :closeable="false"
                class-name="!bg-[#e0ebf8] !text-[#1D83E2]"
              ></tag>
              <tag
                label="发职位"
                :closeable="false"
                class-name="!bg-[#e0ebf8] !text-[#1D83E2]"
              ></tag>
            </view>
          </view>
        </view>
        <view class="text-[#8C8C8C] text-3 mt-4 text-center">选择身份后将跳转到登录页面</view>
      </view>
    </view>
  </wd-popup>
  <yr-tab-bar :tab-index="0"></yr-tab-bar>
</template>

<script lang="ts" setup>
import JobCard from '@/components/job-card/job-card.vue'
import {
  JOB_POSITIONS,
  FILTER_TAGS,
  type JobPosition,
  type FilterTag,
} from '@/constant/recruitment'
import { getSystemInfoSync, navigateTo, navigateToSub, switchTab } from '@/utils'

const { safeAreaInsets } = getSystemInfoSync()
// 响应式数据
const opacity = ref(0)

const searchKeyword = ref('')
const show = ref(false)
const activeFilterTag = ref('all')
const activeTab = ref('recruit')
const jobList = ref<JobPosition[]>(JOB_POSITIONS)
const filterTags = ref<FilterTag[]>(FILTER_TAGS)

// 计算属性
const filteredJobs = computed(() => {
  if (activeFilterTag.value === 'all') {
    return jobList.value
  }
  // 这里可以根据不同的筛选条件进行过滤
  return jobList.value
})
const swiperList = ref([
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/capybara.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/capybara.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/panda.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/moon.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/meng.jpg',
])
function handleClick(e) {
  console.log(e)
  navigateToSub('/login/login')
}
const handleScroll = (e: any) => {
  if (e.detail.scrollTop > 100) {
    opacity.value = 1
  } else {
    opacity.value = e.detail.scrollTop / 100
  }
}
const onScrollToLower = () => {
  if (!isShowPopup.value) {
    show.value = true
    isShowPopup.value = true
  }
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
const isShowPopup = ref(false)

// 生命周期
onLoad(() => {
  console.log('招聘页面加载完成')
  navigateToSub('/publish-job-seeking/publish-job-seeking')
  // uni.setTabBarItem({
  //   index: 0, // 第几个 tabBar 项，从 0 开始
  //   text: '首页', // 修改显示文字
  //   success(res) {
  //     console.log('修改成功', res)
  //   },
  //   fail(err) {
  //     console.error('修改失败', err)
  //   },
  // })
})
</script>
