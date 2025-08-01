<route lang="json5">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '职位详情',
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <view class="min-h-screen bg-gray-50">
    <view class="p-4">
      <!-- 职位基本信息 -->
      <view class="bg-white rounded-2 p-4">
        <view class="flex items-center justify-between mb-3">
          <text class="text-5 font-bold text-gray-800 block mb-2">{{ jobDetail.title }}</text>
          <text class="text-4 font-bold text-primary">{{ jobDetail.salary }}</text>
        </view>

        <!-- 职位标签 -->
        <view class="grid grid-cols-2 gap-3 mb-3">
          <yr-img-title url="jingyan.svg" :title="jobDetail.experience" />
          <yr-img-title url="zhuanye.svg" :title="jobDetail.education" />
          <yr-img-title url="ljdg.svg" :title="jobDetail.positionSituation" />
          <yr-img-title url="time.svg" :title="jobDetail.workTime" />
        </view>

        <view class="pt-4">
          <wd-divider custom-class="!px-0"></wd-divider>
        </view>
        <!-- 职位要求 -->
        <view class="mt-2">
          <text class="text-sm text-gray">演员要求</text>
          <view class="flex flex-wrap gap-2 mt-2">
            <view v-for="skill in jobDetail.requirements" :key="skill" class="tag-default">
              {{ skill }}
            </view>
          </view>
        </view>
        <view class="mt-4">
          <text class="text-sm text-gray">福利/待遇</text>
          <view class="flex flex-wrap gap-2 mt-2">
            <view v-for="benefit in jobDetail.benefits" :key="benefit" class="tag-default">
              {{ benefit }}
            </view>
          </view>
        </view>
      </view>

      <!-- 职位描述 -->
      <view class="bg-white mt-3 rounded-3 p-4">
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
      <view class="bg-white mt-3 rounded-3 p-4">
        <view class="flex items-center justify-between mb-3">
          <view class="flex items-center">
            <image
              :src="jobDetail.company.logo"
              class="w-12 h-12 rounded-2 mr-3 bg-gray-50"
              mode="aspectFill"
            />
            <view>
              <text class="text-4 font-bold text-gray-800 block">jobDetail.company.name</text>
              <text class="text-3 text-gray-500">jobDetail.company.scale</text>
            </view>
          </view>
          <wd-icon name="arrow-right" size="16px" color="#999" @click="goToCompany" />
        </view>
      </view>

      <!-- 即将项目 -->
      <view class="bg-white mt-3 rounded-3 p-4">
        <text class="text-4 font-bold text-gray-800 block mb-3">即将项目</text>
        <view class="space-y-3">
          <view
            v-for="project in 2"
            :key="project.id"
            class="flex items-center bg-[#EEF5F3] p-[6px] rounded-[6px]"
          >
            <image
              :src="project.image"
              class="w-12 h-12 rounded-2 mr-3 bg-gray-50"
              mode="aspectFill"
            />
            <view class="flex-1">
              <text class="text-3 font-medium text-gray-800 block">project.title</text>
              <text class="text-2 text-gray-500">project.date • project.location</text>
            </view>
          </view>
        </view>
      </view>

      <!-- 相似职位 -->
      <view class="bg-white mt-3 rounded-3 p-4 mb-5">
        <text class="text-4 font-bold text-gray-800 block mb-3">相似职位</text>
        <view class="space-y-3">
          <template v-for="similarJob in 2" :key="similarJob.id">
            <view class="border border-gray-100 rounded-2 p-3" @click="goToJob(similarJob.id)">
              <view class="flex items-start justify-between mb-3">
                <text class="text-4 font-medium text-gray-800 flex-1">similarJob.title</text>
                <text class="text-3 font-bold text-primary">similarJob.salary</text>
              </view>
              <yr-img-title url="time.svg" :title="jobDetail.workTime" />
            </view>
            <wd-divider custom-class="!px-0" v-if="similarJob !== 2"></wd-divider>
          </template>
        </view>
      </view>

      <!-- 底部操作栏 -->

      <yr-page-footer>
        <view class="flex items-center justify-between gap-3 w-full">
          <view class="flex items-center gap-4">
            <view @click="handleFavorite">
              <wd-icon
                :name="isFavorited ? 'heart-filled' : 'heart'"
                :color="isFavorited ? '#ff4757' : '#999'"
                custom-class="text-6"
              />
            </view>
            <view @click="handleCollect">
              <wd-icon
                :name="collect ? 'star-filled' : 'star'"
                :color="collect ? '#ffd700' : '#999'"
                custom-class="text-6"
              />
            </view>
          </view>
          <wd-button
            type="success"
            block
            custom-class="flex-1 "
            :round="false"
            @click="handleContact"
          >
            立即联系
          </wd-button>
          <wd-button
            type="primary"
            block
            custom-class="flex-1 !bg-[#EC9508]"
            :round="false"
            @click="handleApply"
          >
            立即申请
          </wd-button>
        </view>
      </yr-page-footer>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { toast } from '@/utils/toast'
import { createZuJi, getJob1, YRZPJobDO } from '@/service/app'
import { useConnect } from '@/hooks'
const { changeConnect, getGuanZhuJobSeekerFn } = useConnect()

const loading = ref(false)
const jobDetail = ref<YRZPJobDO>()
const jobId = ref()
let isFavorited = ref(false)
let collect = ref(false)

// 页面加载
onLoad((options) => {
  if (options?.id) {
    jobId.value = options.id
    loadJobDetail()
    getData()
  }
})
let getData = async () => {
  createZuJi({ body: { jobId: jobId.value } })
  let resGuanZhu = await getGuanZhuJobSeekerFn({ field: 'guanZhuJobId' })
  isFavorited.value = resGuanZhu.some((item2) => item2.guanZhuJobSeekerId === jobId.value)
  let resShouCang = await getGuanZhuJobSeekerFn({ field: 'shouCangJobId' })
  collect.value = resShouCang.some((item2) => item2.shouCangJobSeekerId === jobId.value)
}
// 加载职位详情
const loadJobDetail = async () => {
  try {
    loading.value = true
    const res = await getJob1({
      params: { id: jobId.value },
    })
    jobDetail.value = res.data
  } finally {
    loading.value = false
  }
}
// 切换收藏状态

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
//
const handleCollect = () => {
  changeConnect({ shouCangJobSeekerId: Number(jobId.value) }, collect.value, () => {
    collect.value = !collect.value
  })
}
const handleFavorite = () => {
  changeConnect({ guanZhuJobSeekerId: Number(jobId.value) }, isFavorited.value, () => {
    isFavorited.value = !isFavorited.value
  })
}
</script>
