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
  <view class="min-h-screen overflow-hidden">
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
        <post-picker title="期望职位" @confirmLabel="onConfirmLabel" />
        <yr-location-picker
          title="工作地点"
          v-model="formData.locationCode"
          @confirmLabel="(val) => (formData.location = val)"
        ></yr-location-picker>
      </wd-card>

      <!-- 求职期望 -->
      <view class="px-3 py-3">
        <text class="text-base font-bold text-gray-900">求职期望</text>
      </view>
      <wd-card>
        <!-- 期望薪资 -->
        <yr-salary-picker
          title="期望薪资"
          placeholder="请选择期望薪资"
          :salaryMin="formData.salaryMin"
          :salaryMax="formData.salaryMax"
          @changeValue="onSalaryChange"
        />

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

        <yr-modal-picker
          v-model="formData.specialty"
          modal-title="专业技能"
          placeholder="请输入专业技能"
        />

        <yr-modal-picker
          v-model="formData.advantage"
          modal-title="个人优势"
          placeholder="请输入个人优势"
        />
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
        <wd-cell title="求职类型">
          <wd-picker
            v-model="formData.workType"
            :columns="jobTypeColumns"
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
import { ref, computed } from 'vue'
import { toast } from '@/utils/toast'
import {
  educationColumns,
  experienceColumns,
  jobTypeColumns,
  availableTimeColumns,
  salaryColumns,
} from '@/constant'
import { createJobSeeker } from '@/service/app'
import { navigateBack } from '@/utils'

// 表单数据
const formData = ref<any>({
  title: '求职标题',
  description: '个人简介',
  jobType: '',
  jobDomain: '',
  jobSpecific: '',
  salaryMin: 3000,
  salaryMax: 8000,
  workType: '',
  comeToTime: '',
  experience: '',
  education: '',
  specialty: '',
  contactMobile: '',
  isCertified: '',
  locationCode: '',
  advantage: '',
  other: '',
})

// 响应式数据
const formRef = ref()
const loading = ref(false)

// 表单验证规则
const rules = {
  title: [{ required: true, message: '请输入求职标题' }],
  description: [{ required: true, message: '请输入个人简介' }],
  contactInfo: [{ required: true, message: '请输入联系方式' }],
}

const saveDraft = () => {
  navigateBack()
}

// 发布求职信息
const publishJobSeekingInfo = async () => {
  try {
    const valid = await formRef.value.validate()
    if (!valid) {
      return
    }
    console.log(formData.value)
    loading.value = true
    const res = await createJobSeeker({ body: formData.value })
    if (res.code === 0) {
      toast.success('发布成功')
      // navigateBack()
    } else {
      toast.error(res.msg || '发布失败')
    }
  } catch (error) {
    toast.error('网络错误，请稍后重试')
  } finally {
    loading.value = false
  }
}
const onSalaryChange = (data) => {
  formData.value = { ...formData.value, salaryMin: data[0], salaryMax: data[1] }
}
const onConfirmLabel = (data) => {
  formData.value = { ...formData.value, jobType: data[0], jobDomain: data[1], jobSpecific: data[2] }
}
</script>
