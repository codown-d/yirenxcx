<route lang="json5" type="page">
{
  layout: 'common',
  style: {
    navigationBarTitleText: '筛选',
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <view class="">
    <view class="bg-[#F5F6FA] h-2"></view>
    <view class="pt-2">
      <yr-location-picker
        title="位置"
        v-model="formData.locationCode"
        @confirmLabel="(val) => (formData.location = val)"
        class="no-padding"
      />
      <post-picker title="职位类别" @confirmLabel="onConfirmLabel" class="no-padding" />
      <wd-cell title="薪资范围" class="no-padding">
        <wd-picker :columns="salaryColumns" prop="expectedSalary" size="small" />
      </wd-cell>
    </view>
    <view class="bg-white mb-3">
      <view class="px-4 py-3 border-b border-gray-100">
        <text class="text-base font-medium text-gray-900">工作类型</text>
      </view>
      <yr-btn-select :columns="jobTypeColumns" v-model="formData.workType" />
    </view>
    <view class="bg-white mb-6">
      <view class="px-4 py-3 border-b border-gray-100">
        <text class="text-base font-medium text-gray-900">福利待遇</text>
      </view>
      <yr-btn-select :columns="benefitsOptions" v-model="formData.benefits" />
    </view>
    <yr-page-footer>
      <wd-button type="info" custom-class="w-[33%]" :round="false" @click="resetFilter">
        取消
      </wd-button>
      <wd-button type="primary" custom-class="flex-1" :round="false" @click="confirmFilter">
        确定
      </wd-button>
    </yr-page-footer>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { salaryColumns, jobTypeColumns, benefitsOptions } from '@/constant'
import { navigateBack, switchTab } from '@/utils'
import { useFilterStore } from '@/store'
let { setFilter } = useFilterStore()

let formData = ref({
  location: '',
  locationCode: '',
  workType: '',
  jobType: '',
  jobSpecific: '',
  jobDomain: '',
  benefits: '',
})

const resetFilter = () => {
  navigateBack()
}
const onConfirmLabel = (data) => {
  formData.value = { ...formData.value, jobType: data[0], jobDomain: data[1], jobSpecific: data[2] }
}
const confirmFilter = () => {
  setFilter(formData.value)
  switchTab('/index/index')
}
</script>
