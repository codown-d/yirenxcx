<template>
  <view>
    <view class="py-3 px-3">
      <text class="text-base font-bold text-gray-900">职位信息</text>
    </view>
    <wd-form ref="formRef" :model="formData" errorType="toast" :rules="rules">
      <wd-card>
        <wd-cell title="职位标题" vertical>
          <wd-input
            v-model="formData.title"
            no-border
            placeholder="如：专业古典舞蹈演员求职"
            prop="title"
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
        <wd-cell title="职位类别">
          <post-picker title="职位类别" @confirmLabel="onConfirmLabel" />
        </wd-cell>
        <wd-cell title="工作地点">
          <yr-location-picker
            title="工作地点"
            @confirmLabel="(val) => (formData.location = val)"
            v-model="formData.locationCode"
            prop="locationCode"
          />
        </wd-cell>
        <wd-cell title="到岗时间">
          <yr-calendar v-model="formData.comeToTime" prop="comeToTime" />
        </wd-cell>
      </wd-card>

      <!-- 求职期望 -->
      <view class="px-3 py-3">
        <text class="text-base font-bold text-gray-900">薪资待遇</text>
      </view>
      <wd-card>
        <yr-salary-picker
          prop="salary"
          v-model="formData.salary"
          placeholder="请选择"
          title="薪资范围"
          @changeValue="onSalaryChange"
        />
        <yr-modal-picker prop="benefits" v-model="formData.benefits" modal-title="福利待遇" />
      </wd-card>

      <!-- 个人背景 -->
      <view class="px-3 py-3">
        <text class="text-base font-bold text-gray-900">任职要求</text>
      </view>
      <wd-card>
        <wd-cell title="工作经验">
          <yr-picker
            v-model="formData.experienceRequirement"
            :columns="dictData.EXPERIENCE_LEVELS"
            prop="experienceRequirement"
          />
        </wd-cell>
        <!-- 学历水平 -->
        <wd-cell title="学历水平">
          <yr-picker
            v-model="formData.educationRequirement"
            :columns="dictData.EDUCATION_LEVELS"
            prop="educationRequirement"
          />
        </wd-cell>
        <yr-modal-picker
          prop="requirementDetails"
          v-model="formData.requirementDetails"
          modal-title="具体要求"
        />
      </wd-card>

      <!-- 联系方式 -->
      <view class="px-3 py-3">
        <text class="text-base font-bold text-gray-900">联系方式</text>
      </view>
      <wd-card>
        <!-- 联系方式 -->
        <wd-cell title="联系方式">
          <wd-input
            no-border
            type="number"
            v-model="formData.phone"
            placeholder="请输入手机号/微信号"
            prop="phone"
            custom-class="!text-right pr-24px"
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
          <yr-picker v-model="formData.workType" :columns="dictData.WORK_TYPES" prop="workType" />
        </wd-cell>
        <wd-cell title="招聘人数">
          <wd-input
            v-model="formData.headcount"
            placeholder="请输入"
            prop="headcount"
            type="number"
            no-border
            custom-class="!text-right pr-24px"
          />
        </wd-cell>
      </wd-card>
    </wd-form>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useDictData } from '@/hooks'
import { merge } from 'lodash-es'
let { dictData } = useDictData()

// 表单数据
const formData = ref<any>({
  comeToTime: '',
  headcount: 0,
})
const rules = {
  title: [{ required: true, message: '请输入职位标题' }],
  description: [{ required: true, message: '请输入职位描述' }],
  locationCode: [{ required: true, message: '请输入工作地点' }],
  comeToTime: [{ required: true, message: '请输入到岗时间' }],
  salary: [{ required: true, message: '请选择薪资范围' }],
  benefits: [{ required: true, message: '请输入福利待遇' }],
  experienceRequirement: [{ required: true, message: '请输入工作经验' }],
  educationRequirement: [{ required: true, message: '请输入学历水平' }],
  requirementDetails: [{ required: true, message: '请输入具体要求' }],
  phone: [{ required: true, message: '请输入联系方式' }],
  workType: [{ required: true, message: '请输入工作性质' }],
}
const formRef = ref()

const onSalaryChange = (data) => {
  formData.value = {
    ...formData.value,
    salaryMin: data[0],
    salaryMax: data[1],
  }
}
const onConfirmLabel = (data) => {
  formData.value = { ...formData.value, jobType: data[0], jobDomain: data[1], jobSpecific: data[2] }
}
defineExpose({
  getFormData: async () => {
    let res = await formRef.value.validate()
    if (!res.valid) {
      return null
    }
    return merge({}, formData.value, { headcount: Number(formData.value.headcount) })
  },
})
onShow(() => {
  formData.value = {}
})
</script>
