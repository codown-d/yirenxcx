<route lang="json5" type="page">
{
  layout: 'common',
  style: {
    navigationBarTitleText: '发布求职信息',
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <view class="min-h-screen bg-[#F5F6FA]">
    <view class="py-3 px-3">
      <text class="text-base font-bold text-gray-900">基本信息</text>
    </view>
    <wd-form ref="formRef" :model="formData" :rules="rules" custom-class="mb-20">
      <!-- 基本信息 -->
      <wd-card>
        <!-- 求职标题 -->
        <wd-cell title="求职标题" vertical>
          <wd-input
            v-model="formData.title"
            no-border
            placeholder="如：专业古典舞蹈演员求职"
            prop="title"
            required
          />
        </wd-cell>
        <!-- 个人简介 -->
        <wd-cell title="个人简介" vertical custom-class="mt-4">
          <wd-textarea
            no-border
            v-model="formData.description"
            placeholder="请简要介绍您的专业背景、表演经验、个人特长等"
            prop="description"
            :maxlength="200"
            :auto-height="true"
          />
        </wd-cell>
        <post-picker title="期望职位" :modelValue="formData.post"></post-picker>
        <fg-location-picker title="工作地点" :modelValue="formData.location"></fg-location-picker>
      </wd-card>

      <!-- 求职期望 -->
      <view class="px-3 py-3">
        <text class="text-base font-bold text-gray-900">求职期望</text>
      </view>
      <wd-card>
        <!-- 期望薪资 -->
        <wd-cell title="期望薪资">
          <wd-picker
            v-model="formData.expectedSalary"
            :columns="salaryColumns"
            placeholder="请选择期望薪资"
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

        <!-- 到岗时间 -->
        <wd-cell title="到岗时间">
          <wd-picker
            v-model="formData.comeToTime"
            :columns="availableTimeColumns"
            placeholder="请选择到岗时间"
            prop="availableTime"
          />
        </wd-cell>
      </wd-card>

      <!-- 个人背景 -->
      <view class="px-3 py-3">
        <text class="text-base font-bold text-gray-900">个人背景</text>
      </view>
      <wd-card>
        <!-- 工作经验 -->
        <wd-cell title="工作经验">
          <wd-picker
            v-model="formData.experience"
            :columns="experienceColumns"
            placeholder="请选择工作经验"
            prop="workExperience"
          />
        </wd-cell>

        <!-- 学历水平 -->
        <wd-cell title="学历水平">
          <wd-picker
            v-model="formData.education"
            :columns="educationColumns"
            placeholder="请选择学历水平"
            prop="education"
          />
        </wd-cell>

        <wd-cell title="专业技能" vertical custom-class="mt-4">
          <wd-input v-model="formData.specialty" no-border placeholder="请输入技能" />
        </wd-cell>
        <!-- 个人优势 -->
        <wd-cell title="个人优势" vertical custom-class="mt-4">
          <wd-input v-model="formData.advantage" no-border placeholder="请输入个人优势" />
        </wd-cell>
      </wd-card>

      <!-- 联系方式 -->
      <view class="px-3 py-3">
        <text class="text-base font-bold text-gray-900">联系方式</text>
      </view>
      <wd-card>
        <!-- 联系方式 -->
        <wd-cell title="联系方式" vertical>
          <wd-input no-border v-model="formData.contactMobile" placeholder="请输入手机号/微信号" />
        </wd-cell>
      </wd-card>

      <!-- 其他选项 -->
      <view class="px-3 py-3">
        <text class="text-base font-bold text-gray-900">其他选项</text>
      </view>
      <wd-card>
        <!-- 是否公开 -->
        <wd-cell title="公开工作">
          <wd-switch v-model="formData.other" />
        </wd-cell>
      </wd-card>
    </wd-form>

    <!-- 底部按钮 -->
    <view class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 !pb-safe">
      <view class="flex gap-3">
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
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { toast } from '@/utils/toast'
import {
  educationColumns,
  experienceColumns,
  jobTypeColumns,
  availableTimeColumns,
  salaryColumns,
} from '@/constant'
import { useCategoriesStore, useLocationStore } from '@/store'
import { createJobSeeker } from '@/service/app'
import { navigateBack } from '@/utils'
const { getLocation, locations } = useLocationStore()
const { categories, removeCategory, getCategory } = useCategoriesStore()

// 表单数据
const formData = ref({
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
  location: [],
  advantage: '',
  other: '',
  expectedSalary: '',
})

// 表单验证规则
const rules = {
  title: [{ required: true, message: '请输入求职标题' }],
  description: [{ required: true, message: '请输入个人简介' }],
  expectedSalary: [{ required: true, message: '请选择期望薪资' }],
  contactInfo: [{ required: true, message: '请输入联系方式' }],
}

// 响应式数据
const formRef = ref()
const loading = ref(false)

const saveDraft = () => {
  navigateBack()
}
const postData = computed(() => {
  let { post, location, expectedSalary, ...restData } = formData.value
  let [salaryMin, salaryMax] = expectedSalary.split('-')
  return {
    ...restData,
    jobType: post[0],
    jobDomain: post[1],
    jobSpecific: post[2],
    salaryMin,
    salaryMax,
    location: location.join(','),
  }
})
// 发布求职信息
const publishJobSeekingInfo = async () => {
  try {
    const valid = await formRef.value.validate()
    if (!valid) {
      return
    }
    loading.value = true
    const res = await createJobSeeker({ body: postData.value })
    if (res.code === 0) {
      toast.success('发布成功')
      // 延迟跳转
      navigateBack()
    } else {
      toast.error(res.msg || '发布失败')
    }
  } catch (error) {
    toast.error('网络错误，请稍后重试')
  } finally {
    loading.value = false
  }
}
onShow(() => {
  // selectedCategories.value = getCategory()
  // selectedLocations.value = getLocation()
})
</script>
