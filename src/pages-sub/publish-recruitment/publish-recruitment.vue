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
  <view class="min-h-screen bg-[#F5F6FA]">
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
        <select-picker
          :columns="skillActions"
          v-model="formData.skills"
          title="职位类别"
        ></select-picker>
        <yr-location-picker :modelValue="formData.locations" title="工作地点"></yr-location-picker>
        <wd-cell title="报名截止时间" custom-class="pr-0">
          <wd-calendar v-model="formData.time" custom-class="pr-0" />
        </wd-cell>
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
            placeholder="请选择期望薪资"
            prop="expectedSalary"
          />
        </wd-cell>

        <!-- 工作性质 -->
        <wd-cell title="工作性质">
          <wd-picker
            v-model="formData.jobType"
            :columns="jobTypeColumns"
            placeholder="请选择工作性质"
            prop="jobType"
          />
        </wd-cell>

        <!-- 专业技能 -->
        <select-picker
          :columns="skillActions"
          v-model="formData.skills"
          title="专业技能"
        ></select-picker>
      </wd-card>

      <!-- 个人背景 -->
      <view class="px-3 py-3">
        <text class="text-base font-bold text-gray-900">任职要求</text>
      </view>
      <wd-card>
        <!-- 工作经验 -->
        <wd-cell title="招聘人数">
          <wd-picker
            v-model="formData.workExperience"
            :columns="experienceColumns"
            placeholder="请选择"
            prop="workExperience"
          />
        </wd-cell>
        <wd-cell title="工作经验">
          <wd-picker
            v-model="formData.education"
            :columns="educationColumns"
            placeholder="请选择"
            prop="education"
          />
        </wd-cell>
        <!-- 学历水平 -->
        <wd-cell title="学历水平">
          <wd-picker
            v-model="formData.education"
            :columns="educationColumns"
            placeholder="请选择"
            prop="education"
          />
        </wd-cell>

        <select-picker
          :columns="skillActions"
          v-model="formData.skills"
          title="具体要求"
        ></select-picker>
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
            v-model="formData.contactInfo"
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
        <wd-cell title="公开工作">
          <wd-switch v-model="formData.isPublic" />
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
import { ref } from 'vue'
import { toast } from '@/utils/toast'
import {
  educationColumns,
  experienceColumns,
  jobTypeColumns,
  salaryColumns,
  skillActions,
} from '@/constant/jobSeeking'
import { ItemProps } from '../job-filter/job-filter.vue'
import { useCategoriesStore, useLocationStore } from '@/store'
import { createJobSeeker1 } from '@/service/app'
const { getLocation, locations } = useLocationStore()
const { categories, getCategory } = useCategoriesStore()

// 表单数据
const formData = ref<any>({
  userId: uni.getStorageSync('userId'),
  realName: uni.getStorageSync('realName'),
  gender: uni.getStorageSync('gender'),
  age: uni.getStorageSync('age'),
  category: '',
  title: '',
  description: '',
  expectedSalary: '',
  jobType: '',
  availableTime: '',
  workExperience: '',
  education: '',
  contactInfo: '',
  isPublic: true,
  skills: [],
  advantages: [],
  specialty: '民族舞',
  experience: 3,
  height: 175,
  weight: 65,
  school: '北京舞蹈学院',
  certificate: '舞蹈教师资格证',
  award: '全国舞蹈大赛金奖',
  status: 1,
  isCertified: true,
})
let selectedLocations = ref<ItemProps[]>(locations)
let selectedCategories = ref<ItemProps[]>(categories)

watch(formData, (val) => {
  console.log('表单数据变化', val)
})

// 表单验证规则
const rules = {
  title: [{ required: true, message: '请输入求职标题' }],
  description: [{ required: true, message: '请输入个人简介' }],
  expectedSalary: [{ required: true, message: '请选择期望薪资' }],
  jobType: [{ required: true, message: '请选择工作性质' }],
  contactInfo: [{ required: true, message: '请输入联系方式' }],
}

// 响应式数据
const formRef = ref()
const loading = ref(false)

// 保存草稿
const saveDraft = () => {
  uni.showModal({
    title: '提示',
    content: '确定要取消发布吗？',
    success: (res) => {
      if (res.confirm) {
        uni.navigateBack()
      }
    },
  })
}

// 发布求职信息
const publishJobSeekingInfo = async () => {
  try {
    // 表单验证
    const valid = await formRef.value.validate()
    if (!valid) {
      return
    }

    loading.value = true

    // 构建提交数据
    const submitData = {
      title: formData.title,
      description: formData.description,
      expectedSalary: formData.expectedSalary,
      jobType: formData.jobType,
      availableTime: formData.availableTime,
      workExperience: formData.workExperience,
      education: formData.education,
      skills: formData.skills,
      advantages: formData.advantages,
      contactInfo: formData.contactInfo,
      isPublic: formData.isPublic,
    }

    const res = await createJobSeeker1({ body: submitData })

    if (res.code === 0) {
      toast.success('发布成功')

      // 延迟跳转
      setTimeout(() => {
        uni.navigateBack()
      }, 1500)
    } else {
      toast.error(res.msg || '发布失败')
    }
  } catch (error) {
    console.error('发布失败:', error)
    toast.error('网络错误，请稍后重试')
  } finally {
    loading.value = false
  }
}
onShow(() => {
  selectedCategories.value = getCategory()
  selectedLocations.value = getLocation()
})
</script>
