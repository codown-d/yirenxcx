<template>
  <view class="min-h-screen bg-gray-50">
    <!-- 导航栏 -->
    <wd-navbar title="组件演示" left-arrow @click-left="goBack" />

    <!-- 内容区域 -->
    <view class="p-4">
      <!-- 标签切换 -->
      <wd-tabs v-model="activeTab" @change="handleTabChange">
        <wd-tab title="招聘职位" name="jobs" />
        <wd-tab title="求职者" name="seekers" />
      </wd-tabs>

      <!-- 招聘职位列表 -->
      <view v-if="activeTab === 'jobs'" class="mt-4">
        <view class="mb-3">
          <text class="text-lg font-semibold text-gray-800">招聘职位</text>
          <text class="text-sm text-gray-500 ml-2">({{ jobList.length }}个职位)</text>
        </view>

        <job-card
          v-for="job in jobList"
          :key="job.id"
          :job-data="job"
          :favorited="favoriteJobs.includes(job.id)"
          @click="handleJobClick"
          @favorite="handleJobFavorite"
        />
      </view>

      <!-- 求职者列表 -->
      <view v-if="activeTab === 'seekers'" class="mt-4">
        <view class="mb-3">
          <text class="text-lg font-semibold text-gray-800">求职者</text>
          <text class="text-sm text-gray-500 ml-2">({{ seekerList.length }}位求职者)</text>
        </view>

        <job-seeker-card
          v-for="seeker in seekerList"
          :key="seeker.id"
          :seeker-data="seeker"
          :favorited="favoriteSeekers.includes(seeker.id)"
          @click="handleSeekerClick"
          @favorite="handleSeekerFavorite"
          @contact="handleSeekerContact"
        />
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { toast } from '@/utils/toast'
import JobCard from '@/components/job-card/job-card.vue'
import JobSeekerCard from '@/components/job-seeker-card/job-seeker-card.vue'
import { JOB_POSITIONS, type JobPosition } from '@/constant/recruitment'
import { JOB_SEEKERS, type JobSeeker } from '@/constant/job-seeking'

// 页面状态
const activeTab = ref('jobs')
const jobList = ref<JobPosition[]>(JOB_POSITIONS)
const seekerList = ref<JobSeeker[]>(JOB_SEEKERS)
const favoriteJobs = ref<string[]>([])
const favoriteSeekers = ref<string[]>([])

// 返回上一页
const goBack = () => {
  uni.navigateBack()
}

// 切换标签
const handleTabChange = (name: string) => {
  activeTab.value = name
}

// 招聘职位相关事件
const handleJobClick = (job: JobPosition) => {
  console.log('点击职位:', job)
  toast.success(`点击了职位: ${job.title}`)

  // 实际项目中跳转到职位详情页
  // uni.navigateTo({
  //   url: `/pages-sub/job-detail/job-detail?id=${job.id}`
  // })
}

const handleJobFavorite = (job: JobPosition, isFavorited: boolean) => {
  console.log('收藏职位:', job, isFavorited)

  if (isFavorited) {
    favoriteJobs.value.push(job.id)
    toast.success(`已收藏职位: ${job.title}`)
  } else {
    const index = favoriteJobs.value.indexOf(job.id)
    if (index > -1) {
      favoriteJobs.value.splice(index, 1)
    }
    toast.success(`已取消收藏: ${job.title}`)
  }
}

// 求职者相关事件
const handleSeekerClick = (seeker: JobSeeker) => {
  console.log('点击求职者:', seeker)
  toast.success(`点击了求职者: ${seeker.name}`)

  // 实际项目中跳转到求职者详情页
  // uni.navigateTo({
  //   url: `/pages-sub/seeker-detail/seeker-detail?id=${seeker.id}`
  // })
}

const handleSeekerFavorite = (seeker: JobSeeker, isFavorited: boolean) => {
  console.log('收藏求职者:', seeker, isFavorited)

  if (isFavorited) {
    favoriteSeekers.value.push(seeker.id)
    toast.success(`已收藏求职者: ${seeker.name}`)
  } else {
    const index = favoriteSeekers.value.indexOf(seeker.id)
    if (index > -1) {
      favoriteSeekers.value.splice(index, 1)
    }
    toast.success(`已取消收藏: ${seeker.name}`)
  }
}

const handleSeekerContact = (seeker: JobSeeker) => {
  console.log('联系求职者:', seeker)

  if (seeker.phone) {
    // 显示联系方式选择
    uni.showActionSheet({
      itemList: ['拨打电话', '发送短信', '微信联系'],
      success: (res) => {
        switch (res.tapIndex) {
          case 0:
            // 拨打电话
            uni.makePhoneCall({
              phoneNumber: seeker.phone!.replace(/\*/g, '1'),
              success: () => {
                toast.success('正在拨打电话...')
              },
              fail: () => {
                toast.error('拨打电话失败')
              },
            })
            break
          case 1:
            // 发送短信
            toast.success('跳转到短信应用')
            break
          case 2:
            // 微信联系
            toast.success('跳转到微信')
            break
        }
      },
    })
  } else {
    toast.error('暂无联系方式')
  }
}
</script>

<style scoped>
.min-h-screen {
  min-height: 100vh;
}
</style>
