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
        <post-picker title="职位类别" @confirmLabel="onConfirmLabel" />
        <yr-location-picker
          title="工作地点"
          @confirmLabel="(val) => (formData.location = val)"
          v-model="formData.locationCode"
        ></yr-location-picker>
        <yr-calendar title="报名截止时间" v-model="formData.comeToTime" />
      </wd-card>

      <!-- 求职期望 -->
      <view class="px-3 py-3">
        <text class="text-base font-bold text-gray-900">薪资待遇</text>
      </view>
      <wd-card>
        <yr-salary-picker
          title="薪资范围"
          placeholder="请选择"
          :salaryMin="formData.salaryMin"
          :salaryMax="formData.salaryMax"
          @changeValue="onSalaryChange"
        />
        <yr-modal-picker v-model="formData.benefits" modal-title="福利待遇" />
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
        <yr-modal-picker v-model="formData.requirementDetails" modal-title="具体要求" />
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
        <!-- 工作性质 -->
        <wd-cell title="工作性质">
          <wd-picker
            v-model="formData.workType"
            :columns="jobTypeColumns"
            placeholder="请选择工作性质"
            prop="jobType"
          />
        </wd-cell>
        <wd-cell title="招聘人数" vertical>
          <wd-input v-model="formData.headcount" placeholder="请输入" prop="headcount" no-border />
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
import { educationColumns, experienceColumns, jobTypeColumns } from '@/constant'
import { navigateBack } from '@/utils'
import { createJob } from '@/service/app'
import { toast } from '@/utils/toast'

// 表单数据
const formData = ref<any>({
  salaryMin: 3000,
  salaryMax: 8000,
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
// 发布求职信息
const publishJobSeekingInfo = async () => {
  try {
    // 表单验证
    const valid = await formRef.value.validate()
    if (!valid) {
      return
    }
    loading.value = true
    const res = await createJob({
      body: formData.value,
    })
    if (res.code === 0) {
      toast.success('发布成功')
      navigateBack()
    }
  } finally {
    loading.value = false
  }
}
const onSalaryChange = (data) => {
  formData.value = { ...formData.value, salaryMin: Number(data[0]), salaryMax: Number(data[1]) }
}
const onConfirmLabel = (data) => {
  formData.value = { ...formData.value, jobType: data[0], jobDomain: data[1], jobSpecific: data[2] }
}
</script>
