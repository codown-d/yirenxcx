<template>
  <view class="overflow-hidden">
    <view class="py-3 px-3">
      <text class="text-base font-bold text-gray-900">基本信息</text>
    </view>
    <wd-form ref="form" :model="formData" errorType="toast" :rules="rules">
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
        <wd-cell title="期望职位">
          <post-picker @confirmLabel="onConfirmLabel" />
        </wd-cell>
        <wd-cell title="工作地点">
          <yr-location-picker
            v-model="formData.locationCode"
            @confirmLabel="(val) => (formData.location = val)"
            prop="locationCode"
          />
        </wd-cell>
      </wd-card>

      <!-- 求职期望 -->
      <view class="px-3 py-3">
        <text class="text-base font-bold text-gray-900">求职期望</text>
      </view>
      <wd-card>
        <!-- 期望薪资 -->
        <wd-cell title="期望薪资">
          <yr-salary-picker
            placeholder="请选择期望薪资"
            @changeValue="onSalaryChange"
            prop="locationCode"
          />
        </wd-cell>

        <!-- 工作性质 -->
        <wd-cell title="工作性质">
          <wd-picker
            v-model="formData.workType"
            :columns="dictData.WORK_TYPES"
            placeholder="请选择工作性质"
            prop="workType"
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
            :columns="dictData.EXPERIENCE_LEVELS"
            placeholder="请选择工作经验"
            prop="experience"
          />
        </wd-cell>

        <!-- 学历水平 -->
        <wd-cell title="学历水平">
          <wd-picker
            v-model="formData.education"
            :columns="dictData.EDUCATION_LEVELS"
            placeholder="请选择学历水平"
            prop="education"
          />
        </wd-cell>
        <yr-modal-picker
          modalTitle="专业技能"
          v-model="formData.specialty"
          placeholder="请输入专业技能"
          prop="specialty"
        />
        <yr-modal-picker
          prop="advantage"
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
          <wd-input
            no-border
            inputmode="tel"
            v-model="formData.contactMobile"
            placeholder="请输入手机号/微信号"
            prop="contactMobile"
          />
        </wd-cell>
      </wd-card>
    </wd-form>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useDictData } from '@/hooks'
let { dictData } = useDictData()

// 表单数据
const formData = ref<any>({
  title: '',
  description: '',
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
const form = ref()

// 表单验证规则
const rules = {
  title: [{ required: true, message: '请输入求职标题' }],
  description: [{ required: true, message: '请输入个人简介' }],
  jobSpecific: [{ required: true, message: '请选择期望职位' }],
  education: [{ required: true, message: '请选择学历水平' }],
  workType: [{ required: true, message: '请选择工作性质' }],
  locationCode: [{ required: true, message: '请选择工作地点' }],
  experience: [{ required: true, message: '请选择工作经验' }],
  specialty: [{ required: true, message: '请选择专业技能' }],
  advantage: [{ required: true, message: '请选择个人优势' }],
  contactMobile: [{ required: true, message: '请选择联系方式' }],
}

defineExpose({
  getFormData: async () => {
    let res = await form.value.validate()
    if (!res.valid) {
      return null
    }
    return formData.value
  },
})
const onSalaryChange = (data) => {
  formData.value = { ...formData.value, salaryMin: data[0], salaryMax: data[1] }
}
const onConfirmLabel = (data) => {
  formData.value = { ...formData.value, jobType: data[0], jobDomain: data[1], jobSpecific: data[2] }
}
onShow(() => {
  formData.value = {}
})
</script>
