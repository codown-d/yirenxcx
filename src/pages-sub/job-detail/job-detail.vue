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
          <yr-salary :salaryMax="jobDetail.salaryMax" :salaryMin="jobDetail.salaryMin" />
        </view>

        <!-- 职位标签 -->
        <view class="grid grid-cols-2 gap-3 mb-3">
          <yr-img-title url="jingyan.svg" :title="jobDetail.experienceRequirement" />
          <yr-img-title url="zhuanye.svg" :title="jobDetail.educationRequirement" />
          <yr-img-title url="ljdg.svg" :title="jobDetail.comeToTime" />
          <yr-img-title url="time.svg" :title="jobDetail.workType" />
        </view>

        <view class="pt-4">
          <wd-divider custom-class="!px-0"></wd-divider>
        </view>
        <!-- 职位要求 -->
        <view class="mt-2">
          <text class="text-sm text-gray">演员要求</text>
          <view class="flex flex-wrap gap-2 mt-2">
            <view v-for="skill in requirementDetails" :key="skill" class="tag-default">
              {{ skill }}
            </view>
          </view>
        </view>
        <view class="mt-4">
          <text class="text-sm text-gray">福利/待遇</text>
          <view class="flex flex-wrap gap-2 mt-2">
            <view v-for="benefit in benefits" :key="benefit" class="tag-default">
              {{ benefit }}
            </view>
          </view>
        </view>
      </view>

      <!-- 职位描述 -->
      <view class="bg-white mt-3 rounded-3 p-4">
        <text class="text-4 font-bold text-gray-800 block mb-3">职位描述</text>
        <view class="text-3 text-gray-600 leading-relaxed">
          <text class="block mb-2">{{ jobDetail?.description }}</text>
        </view>
      </view>

      <!-- 公司信息 -->
      <view class="bg-white mt-3 rounded-3 p-4">
        <view class="flex items-center justify-between mb-3">
          <view class="flex items-center">
            <image
              :src="jobDetail.companyLogo"
              class="w-12 h-12 rounded-2 mr-3 bg-gray-50"
              mode="aspectFill"
            />
            <view>
              <text class="text-4 font-bold text-gray-800 block">{{ jobDetail.companyName }}</text>
              <text class="text-3 text-gray-500">{{ jobDetail.companyInfo }}</text>
            </view>
          </view>
          <wd-icon name="arrow-right" size="16px" color="#999" @click="goToCompany" />
        </view>
      </view>

      <!-- 即将项目 -->
      <view class="bg-white mt-3 rounded-3 p-4" v-if="false">
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
          <template v-if="similarJobList.length">
            <template v-for="(similarJob, index) in similarJobList" :key="similarJob.id">
              <view class="border border-gray-100 rounded-2 p-3" @click="goToJob(similarJob.id)">
                <view class="flex items-start justify-between mb-3">
                  <text class="text-4 font-medium text-gray-800 flex-1">
                    {{ similarJob.title }}
                  </text>
                  <yr-salary :salaryMax="jobDetail.salaryMax" :salaryMin="jobDetail.salaryMin" />
                </view>
                <yr-img-title url="time.svg" :title="jobDetail.description" />
              </view>
              <wd-divider custom-class="!px-0" v-if="similarJobList.length == index"></wd-divider>
            </template>
          </template>
          <yr-nodata v-else />
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
import {
  createLiJiTouDi,
  createZuJi,
  getJob,
  getJobPage1,
  getUserByIds,
  YRZPJobDO,
} from '@/service/app'
import { useConnect } from '@/hooks'
import { merge } from 'lodash'
import { navigateTo, navigateToSub } from '@/utils'
import { RoleEmu } from '@/store'
const { changeConnect, getGuanZhuJobSeekerFn } = useConnect()

const loading = ref(false)
const jobDetail = ref<YRZPJobDO>({})
const jobId = ref()
let isFavorited = ref(false)
let collect = ref(false)
const similarJobList = ref([])

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
  isFavorited.value = resGuanZhu.some((item2) => item2.guanZhuJobId == jobId.value)
  let resShouCang = await getGuanZhuJobSeekerFn({ field: 'shouCangJobId' })
  collect.value = resShouCang.some((item2) => item2.shouCangJobId == jobId.value)
  let res = await getJobPage1({ params: { pageNo: 1, pageSize: 99 } })
  similarJobList.value = res.data.list.filter((it) => it.id != jobId.value).slice(0, 3)
}
// 加载职位详情
const loadJobDetail = async () => {
  try {
    loading.value = true
    const res = await getJob({
      params: { ids: jobId.value },
    })
    console.log(123, res)
    let userInfo = await getUserByIds({ params: { userIds: res.data[0].companyId } })
    console.log(userInfo)
    let { companyName, companyInfo, companyLogo = '' } = userInfo.data
    jobDetail.value = merge(res.data[0] || {}, { companyName, companyInfo, companyLogo })
  } finally {
    loading.value = false
  }
}
const requirementDetails = computed(() => {
  console.log(jobDetail.value)
  return jobDetail.value?.requirementDetails?.split(',')
})
const benefits = computed(() => {
  return jobDetail.value?.benefits?.split(',')
})
// 切换收藏状态

// 立即联系
const handleContact = () => {
  navigateToSub(`/chat/chat?toUserID=im_${RoleEmu.employer}_${jobDetail.value.companyId}`)
}

// 立即申请
const handleApply = async () => {
  try {
    const res = await createLiJiTouDi({
      body: {
        toJobId: jobId.value,
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

const goToCompany = () => {
  navigateTo(`/company-detail/company-detail?id=${jobDetail.value.companyId}`)
}

// 查看相似职位
const goToJob = (jobId: string) => {
  uni.navigateTo({
    url: `/pages-sub/job-detail/job-detail?id=${jobId}`,
  })
}
//
const handleCollect = () => {
  changeConnect({ shouCangJobId: Number(jobId.value) }, collect.value, () => {
    collect.value = !collect.value
  })
}
const handleFavorite = () => {
  changeConnect({ guanZhuJobId: Number(jobId.value) }, isFavorited.value, () => {
    isFavorited.value = !isFavorited.value
  })
}
</script>
