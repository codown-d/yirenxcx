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
      <wd-cell title="位置">
        <yr-location-picker
          v-model="formData.locationCode"
          @confirmLabel="(val) => (formData.location = val)"
        />
      </wd-cell>
      <wd-cell title="职位类别">
        <post-picker title="职位类别" v-model="category" @confirmLabel="onConfirmLabel" />
      </wd-cell>
      <wd-cell title="薪资范围">
        <wd-picker
          :columns="salaryColumns"
          v-model="formData.salary"
          prop="expectedSalary"
          size="small"
        />
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
        清空
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
import { navigateBack, navigateTo } from '@/utils'
import { useFilterStore } from '@/store'
let { setFilter, getFilter } = useFilterStore()

let formData = ref(getFilter() || {})

const category = ref([getFilter()?.jobType, getFilter()?.jobDomain, getFilter()?.jobSpecific])
console.log(getFilter())

const resetFilter = () => {
  formData.value = {
    locationCode: '',
    location: '',
    expectedSalary: '',
    workType: '',
    benefits: '',
    jobType: '',
    jobDomain: '',
    jobSpecific: '',
  }
  category.value = []
  setFilter(formData.value)
  navigateTo('/index/index')
}
const onConfirmLabel = (data) => {
  formData.value = { ...formData.value, jobType: data[0], jobDomain: data[1], jobSpecific: data[2] }
}
const confirmFilter = () => {
  setFilter(formData.value)
  navigateTo('/index/index')
}
</script>
