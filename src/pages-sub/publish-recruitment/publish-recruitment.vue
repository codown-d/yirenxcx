<route lang="json5" type="page">
{
  layout: 'common',
  style: {
    navigationBarTitleText: '发布招聘信息',
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <view class="min-h-screen">
    <view class="py-3 px-3">
      <text class="text-base font-bold text-gray-900">职位信息</text>
    </view>
    <wd-form ref="formRef" :model="formData" :rules="rules" custom-class="mb-20">
      <wd-card>
        <wd-cell title="职位标题" vertical>
          <wd-input
            v-model="formData.title"
            no-border
            placeholder="如：专业古典舞蹈演员求职"
            prop="title"
            required
          />
        </wd-cell>
        <wd-cell title="职位描述" vertical custom-class="mt-4">
          <wd-textarea
            no-border
            v-model="formData.description"
            placeholder="请简要介绍职位相关描述"
            prop="description"
            :maxlength="200"
            :auto-height="true"
          />
        </wd-cell>
        <post-picker title="职位类别" :modelValue="formData.post"></post-picker>
        <yr-location-picker title="工作地点" v-model="formData.locationCode"></yr-location-picker>
        <yr-calendar title="报名截止时间" v-model="formData.comeToTime" />
      </wd-card>

      <!-- 求职期望 -->
      <view class="px-3 py-3">
        <text class="text-base font-bold text-gray-900">薪资待遇</text>
      </view>
      <wd-card>
        <!-- 期望薪资 -->
        <wd-cell title="薪资范围">
          <wd-picker
            v-model="formData.expectedSalary"
            :columns="salaryColumns"
            placeholder="请选择薪资范围"
            prop="expectedSalary"
          />
        </wd-cell>

        <!-- 工作性质 -->
        <wd-cell title="工作性质">
          <wd-picker
            v-model="formData.workType"
            :columns="jobTypeColumns"
            placeholder="请选择工作性质"
            prop="jobType"
          />
        </wd-cell>

        <yr-select-picker
          :columns="benefitsOptions"
          v-model="formData.benefits"
          title="福利待遇"
        ></yr-select-picker>
      </wd-card>

      <!-- 个人背景 -->
      <view class="px-3 py-3">
        <text class="text-base font-bold text-gray-900">任职要求</text>
      </view>
      <wd-card>
        <wd-cell title="工作经验">
          <wd-picker
            v-model="formData.experienceRequirement"
            :columns="experienceColumns"
            placeholder="请选择"
            prop="education"
          />
        </wd-cell>
        <!-- 学历水平 -->
        <wd-cell title="学历水平">
          <wd-picker
            v-model="formData.educationRequirement"
            :columns="educationColumns"
            placeholder="请选择"
            prop="education"
          />
        </wd-cell>

        <yr-select-picker
          :columns="advantageActions"
          v-model="formData.requirementDetails"
          title="具体要求"
        ></yr-select-picker>
      </wd-card>

      <!-- 联系方式 -->
      <view class="px-3 py-3">
        <text class="text-base font-bold text-gray-900">联系方式</text>
      </view>
      <wd-card>
        <!-- 联系方式 -->
        <wd-cell title="联系方式" vertical>
          <wd-input
            no-border
            v-model="formData.phone"
            placeholder="请输入手机号/微信号"
            prop="contactInfo"
          />
        </wd-cell>
      </wd-card>

      <!-- 其他选项 -->
      <view class="px-3 py-3">
        <text class="text-base font-bold text-gray-900">其他选项</text>
      </view>
      <wd-card>
        <!-- 是否公开 -->
        <wd-cell title="到岗时间">
          <wd-picker
            v-model="formData.comeToTime"
            :columns="availableTimeColumns"
            placeholder="请选择"
            prop="status"
          />
        </wd-cell>
      </wd-card>
    </wd-form>

    <!-- 底部按钮 -->

    <yr-page-footer>
      <wd-button type="info" custom-class="w-[33%]" :round="false" @click="saveDraft">
        取消
      </wd-button>
      <wd-button
        type="primary"
        custom-class="flex-1"
        :round="false"
        :disabled="loading"
        @click="publishJobSeekingInfo"
      >
        {{ loading ? '发布中...' : '发布' }}
      </wd-button>
    </yr-page-footer>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { toast } from '@/utils/toast'
import {
  educationColumns,
  experienceColumns,
  jobTypeColumns,
  salaryColumns,
  benefitsOptions,
  advantageActions,
  availableTimeColumns,
} from '@/constant'
import { createJob } from '@/service/app'
import { navigateBack } from '@/utils'

// 表单数据
const formData = ref<any>({
  title: '',
  description: '',
  jobType: '',
  jobDomain: '',
  jobSpecific: '',
  salaryMin: '',
  salaryMax: '',
  workType: '',
  comeToTime: '',
  experience: '',
  education: '',
  specialty: '',
  contactMobile: '',
  isCertified: '',
  post: [],
  location: '',
  locationCode: '',
  advantage: '',
  other: '',
  expectedSalary: '',
})
const rules = {
  title: [{ required: true, message: '请输入职位标题' }],
  description: [{ required: true, message: '请输入公司简介' }],
}

// 响应式数据
const formRef = ref()
const loading = ref(false)

// 保存草稿
const saveDraft = () => {
  navigateBack()
}
const postData = computed(() => {
  let { post, location, expectedSalary, benefits, requirementDetails, ...restData } = formData.value
  let [salaryMin, salaryMax] = expectedSalary.split('-')
  return {
    ...restData,
    jobType: post[0],
    jobDomain: post[1],
    jobSpecific: post[2],
    salaryMin,
    salaryMax,
    location: '',
    benefits: benefits.join(','),
    requirementDetails: requirementDetails.join(','),
    status: 1,
    headcount: 5,
  }
})
// 发布求职信息
const publishJobSeekingInfo = async () => {
  try {
    // 表单验证
    const valid = await formRef.value.validate()
    if (!valid) {
      return
    }

    loading.value = true
    console.log(postData.value)
    const res = await createJob({
      body: postData.value,
    })
    if (res.code === 0) {
      toast.success('发布成功')
      // 延迟跳转
      navigateBack()
    } else {
      toast.error(res.msg || '发布失败')
    }
  } finally {
    loading.value = false
  }
}
onShow(() => {
  // selectedCategories.value = getCategory()
  // selectedLocations.value = getLocation()
})
</script>
