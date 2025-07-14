<route lang="json5">
{
  style: {
    navigationBarTitleText: '职位详情',
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <view class="min-h-screen bg-gray-50">
    <!-- 自定义导航栏 -->
    <wd-navbar
      :bordered="false"
      left-arrow
      title="职位详情"
      custom-class="font-bold"
      fixed
      safeAreaInsetTop
      @click-left="handleBack"
    >
      <template #right>
        <view class="flex items-center gap-3">
          <wd-icon name="share" size="20px" @click="handleShare" />
          <wd-icon name="more-horizontal" size="20px" @click="handleMore" />
          <wd-icon name="help" size="20px" @click="handleHelp" />
        </view>
      </template>
    </wd-navbar>

    <scroll-view
      :scroll-y="true"
      class="h-100vh"
      :style="{
        paddingTop: safeAreaInsets?.top + 44 + 'px',
      }"
    >
      <!-- 职位基本信息 -->
      <view class="bg-white mx-3 mt-3 rounded-3 p-4">
        <view class="flex items-start justify-between mb-3">
          <view class="flex-1">
            <text class="text-5 font-bold text-gray-800 block mb-2">{{ jobDetail.title }}</text>
            <text class="text-4 font-bold text-primary">{{ jobDetail.salary }}</text>
          </view>
        </view>

        <!-- 职位标签 -->
        <view class="flex items-center gap-2 mb-3">
          <wd-tag type="primary" size="small">{{ jobDetail.experience }}</wd-tag>
          <wd-tag type="success" size="small">{{ jobDetail.education }}</wd-tag>
          <wd-tag type="warning" size="small">{{ jobDetail.workTime }}</wd-tag>
        </view>

        <!-- 职位要求 -->
        <view class="text-3 text-gray-600 leading-relaxed">
          {{ jobDetail.requirements }}
        </view>
      </view>

      <!-- 福利待遇 -->
      <view class="bg-white mx-3 mt-3 rounded-3 p-4">
        <text class="text-4 font-bold text-gray-800 block mb-3">福利/待遇</text>
        <view class="flex flex-wrap gap-2">
          <wd-tag
            v-for="benefit in jobDetail.benefits"
            :key="benefit"
            type="info"
            size="small"
            plain
          >
            {{ benefit }}
          </wd-tag>
        </view>
      </view>

      <!-- 职位描述 -->
      <view class="bg-white mx-3 mt-3 rounded-3 p-4">
        <text class="text-4 font-bold text-gray-800 block mb-3">职位描述</text>
        <view class="text-3 text-gray-600 leading-relaxed">
          <text class="block mb-2">{{ jobDetail.description }}</text>

          <text class="block font-medium mb-2 mt-4">职位包含：</text>
          <view class="pl-3">
            <text v-for="(item, index) in jobDetail.jobIncludes" :key="index" class="block mb-1">
              • {{ item }}
            </text>
          </view>

          <text class="block font-medium mb-2 mt-4">工作时间安排：</text>
          <view class="pl-3">
            <text v-for="(time, index) in jobDetail.workSchedule" :key="index" class="block mb-1">
              • {{ time }}
            </text>
          </view>
        </view>
      </view>

      <!-- 公司信息 -->
      <view class="bg-white mx-3 mt-3 rounded-3 p-4">
        <view class="flex items-center justify-between mb-3">
          <view class="flex items-center">
            <image
              :src="jobDetail.company.logo"
              class="w-12 h-12 rounded-2 mr-3"
              mode="aspectFill"
            />
            <view>
              <text class="text-4 font-bold text-gray-800 block">{{ jobDetail.company.name }}</text>
              <text class="text-3 text-gray-500">{{ jobDetail.company.scale }}</text>
            </view>
          </view>
          <wd-icon name="arrow-right" size="16px" color="#999" @click="goToCompany" />
        </view>
      </view>

      <!-- 即将项目 -->
      <view class="bg-white mx-3 mt-3 rounded-3 p-4">
        <text class="text-4 font-bold text-gray-800 block mb-3">即将项目</text>
        <view class="space-y-3">
          <view
            v-for="project in jobDetail.upcomingProjects"
            :key="project.id"
            class="flex items-center"
          >
            <image :src="project.image" class="w-12 h-12 rounded-2 mr-3" mode="aspectFill" />
            <view class="flex-1">
              <text class="text-3 font-medium text-gray-800 block">{{ project.title }}</text>
              <text class="text-2 text-gray-500">{{ project.date }} • {{ project.location }}</text>
            </view>
          </view>
        </view>
      </view>

      <!-- 相似职位 -->
      <view class="bg-white mx-3 mt-3 rounded-3 p-4 mb-20">
        <text class="text-4 font-bold text-gray-800 block mb-3">相似职位</text>
        <view class="space-y-3">
          <view
            v-for="similarJob in jobDetail.similarJobs"
            :key="similarJob.id"
            class="border border-gray-100 rounded-2 p-3"
            @click="goToJob(similarJob.id)"
          >
            <view class="flex items-start justify-between mb-2">
              <text class="text-3 font-medium text-gray-800 flex-1">{{ similarJob.title }}</text>
              <text class="text-3 font-bold text-primary">{{ similarJob.salary }}</text>
            </view>
            <text class="text-2 text-gray-500">{{ similarJob.company }}</text>
          </view>
        </view>
      </view>
    </scroll-view>

    <!-- 底部操作栏 -->
    <view
      class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 safe-area-inset-bottom"
    >
      <view class="flex items-center gap-3">
        <view class="flex items-center gap-4">
          <view class="flex flex-col items-center" @click="toggleFavorite">
            <wd-icon
              :name="isFavorited ? 'heart-filled' : 'heart'"
              :color="isFavorited ? '#ff4757' : '#999'"
              size="24px"
            />
            <text class="text-2 text-gray-500 mt-1">收藏</text>
          </view>
          <view class="flex flex-col items-center" @click="toggleStar">
            <wd-icon
              :name="isStarred ? 'star-filled' : 'star'"
              :color="isStarred ? '#ffd700' : '#999'"
              size="24px"
            />
            <text class="text-2 text-gray-500 mt-1">点赞</text>
          </view>
        </view>
        <wd-button type="success" custom-class="flex-1" :round="false" @click="handleContact">
          立即联系
        </wd-button>
        <wd-button type="primary" custom-class="flex-1" :round="false" @click="handleApply">
          立即申请
        </wd-button>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { toast } from '@/utils/toast'
import { getSystemInfoSync } from '@/utils'
import {
  getJobDetail,
  applyJob,
  toggleJobFavorite,
  recordJobView,
  shareJob,
  type JobDetail,
  type JobApplicationRequest,
  type JobFavoriteRequest,
} from '@/types/jobDetail'

const { safeAreaInsets } = getSystemInfoSync()

// 页面状态
const isFavorited = ref(false)
const isStarred = ref(false)
const loading = ref(false)
const jobId = ref('1') // 从路由参数获取

// 职位详情数据
const jobDetail = ref<JobDetail>({
  id: '1',
  title: '民族舞演员',
  salary: '8000-15000',
  experience: '3-5年',
  education: '舞蹈相关专业-民族舞',
  workTime: '9:00-18:00',
  requirements: '诚聘正在寻找有经验的民族舞演员加入我们的团队，参与各种文化表演和艺术活动。',
  benefits: ['五险一金', '青年公寓', '专业培训', '演出补贴', '灵活工作'],
  description: '我们正在寻找有经验的民族舞演员加入我们的团队，参与各种文化表演和艺术活动。',
  jobIncludes: [
    '参与团队日常训练',
    '参与各类演出活动',
    '参与户外演出活动',
    '配合各类宣传活动',
    '参与团队活动',
  ],
  workSchedule: [
    '工作时间：周一至周五 9:00-18:00',
    '休息时间：19:00-21:00（休息或自由支配）',
    '休息日：周六、周日（演出或自由支配）',
  ],
  company: {
    name: '东方歌舞团',
    scale: '文艺工作者 • 50-199人',
    logo: '/static/images/company-logo.png',
  },
  upcomingProjects: [
    {
      id: '1',
      title: '锦绣中华民族舞专场',
      date: '2024-06-15',
      location: '国家大剧院',
      image: '/static/images/project1.png',
    },
    {
      id: '2',
      title: '亚洲文化艺术节演出',
      date: '2024-06-15',
      location: '国家大剧院',
      image: '/static/images/project2.png',
    },
  ],
  similarJobs: [
    {
      id: '2',
      title: '儿童剧表演演员',
      salary: '6000-8000/月',
      company: 'XX儿童剧团',
    },
    {
      id: '3',
      title: '儿童剧表演演员',
      salary: '6000-8000/月',
      company: 'XX儿童剧团',
    },
  ],
})

onMounted(() => {
  // 获取职位详情
  loadJobDetail()
  // 记录浏览
  recordView()
})

// 加载职位详情
const loadJobDetail = async () => {
  try {
    loading.value = true
    const res = await getJobDetail({
      params: { jobId: jobId.value },
    })

    if (res.code === 0) {
      jobDetail.value = res.data
    } else {
      toast.error(res.msg || '获取职位详情失败')
    }
  } catch (error) {
    console.error('获取职位详情失败:', error)
    toast.error('获取职位详情失败')
  } finally {
    loading.value = false
  }
}

// 记录浏览
const recordView = async () => {
  try {
    await recordJobView({
      body: {
        jobId: jobId.value,
        viewSource: 'list',
      },
    })
  } catch (error) {
    console.error('记录浏览失败:', error)
  }
}

// 返回上一页
const handleBack = () => {
  uni.navigateBack()
}

// 分享
const handleShare = async () => {
  try {
    const res = await shareJob({
      body: {
        jobId: jobId.value,
        platform: 'wechat',
      },
    })

    if (res.code === 0) {
      toast.success('分享成功')
    } else {
      toast.error(res.msg || '分享失败')
    }
  } catch (error) {
    console.error('分享失败:', error)
    toast.error('分享失败')
  }
}

// 更多操作
const handleMore = () => {
  uni.showActionSheet({
    itemList: ['举报职位', '复制链接', '不感兴趣'],
    success: (res) => {
      switch (res.tapIndex) {
        case 0:
          handleReport()
          break
        case 1:
          handleCopyLink()
          break
        case 2:
          handleNotInterested()
          break
      }
    },
  })
}

// 帮助
const handleHelp = () => {
  toast.info('帮助功能')
}

// 切换收藏状态
const toggleFavorite = async () => {
  try {
    const action = isFavorited.value ? 'remove' : 'add'
    const res = await toggleJobFavorite({
      body: {
        jobId: jobId.value,
        action,
      },
    })

    if (res.code === 0) {
      isFavorited.value = !isFavorited.value
      toast.success(isFavorited.value ? '已收藏' : '已取消收藏')
    } else {
      toast.error(res.msg || '操作失败')
    }
  } catch (error) {
    console.error('收藏操作失败:', error)
    toast.error('操作失败')
  }
}

// 切换点赞状态
const toggleStar = () => {
  isStarred.value = !isStarred.value
  toast.success(isStarred.value ? '已点赞' : '已取消点赞')
}

// 立即联系
const handleContact = () => {
  uni.makePhoneCall({
    phoneNumber: '400-123-4567',
    success: () => {
      console.log('拨打电话成功')
    },
    fail: () => {
      toast.error('拨打电话失败')
    },
  })
}

// 立即申请
const handleApply = async () => {
  try {
    const res = await applyJob({
      body: {
        jobId: jobId.value,
        coverLetter: '我对这个职位很感兴趣，希望能有机会面试。',
      },
    })

    if (res.code === 0) {
      toast.success('申请成功！')
    } else {
      toast.error(res.msg || '申请失败')
    }
  } catch (error) {
    console.error('申请失败:', error)
    toast.error('申请失败')
  }
}

// 举报职位
const handleReport = () => {
  toast.info('举报功能')
}

// 复制链接
const handleCopyLink = () => {
  uni.setClipboardData({
    data: `https://app.yiren.com/job/${jobId.value}`,
    success: () => {
      toast.success('链接已复制')
    },
    fail: () => {
      toast.error('复制失败')
    },
  })
}

// 不感兴趣
const handleNotInterested = () => {
  toast.info('已标记为不感兴趣')
}

// 查看公司详情
const goToCompany = () => {
  uni.navigateTo({
    url: `/pages-sub/company-detail/company-detail?id=${jobDetail.value.company.id}`,
  })
}

// 查看相似职位
const goToJob = (jobId: string) => {
  uni.navigateTo({
    url: `/pages-sub/job-detail/job-detail?id=${jobId}`,
  })
}
</script>
