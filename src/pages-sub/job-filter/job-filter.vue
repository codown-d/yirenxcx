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
    <!-- 位置 -->
    <wd-cell-group>
      <yr-location-picker title="位置" v-model="selectedLocations"></yr-location-picker>
      <wd-cell
        title="职业类别"
        value="查看全部"
        is-link
        to="/pages-sub/job-category-select/job-category-select"
      ></wd-cell>
      <view class="px-4 flex flex-wrap gap-2">
        <tag
          v-for="category in selectedCategories"
          :label="category?.label"
          :value="category?.value"
          :key="category?.value"
          @on-remove="removeCategory(category.value)"
        ></tag>
      </view>
      <wd-cell title="薪资范围">
        <wd-picker :columns="salaryColumns" prop="expectedSalary" size="small" />
      </wd-cell>
    </wd-cell-group>

    <!-- 工作薪资 -->
    <view class="bg-white mb-3">
      <view class="px-4 py-3 border-b border-gray-100">
        <text class="text-base font-medium text-gray-900">工作类型</text>
      </view>
      <view class="grid grid-cols-3 gap-3 px-4 pb-2">
        <wd-button
          v-for="salary in jobTypeColumns"
          :key="salary.value"
          :type="selectedSalary.includes(salary.value) ? 'primary' : 'info'"
          size="medium"
          :round="false"
          :plain="selectedSalary.includes(salary.value)"
          :custom-class="`${selectedSalary.includes(salary.value) ? '!bg-[#E9F7F4] !text-primary ' : ''}`"
          @click="selectSalary(salary.value)"
        >
          {{ salary.label }}
        </wd-button>
      </view>
    </view>

    <!-- 福利待遇 -->
    <view class="bg-white mb-6">
      <view class="px-4 py-3 border-b border-gray-100">
        <text class="text-base font-medium text-gray-900">福利待遇</text>
      </view>
      <view class="p-4">
        <view class="grid grid-cols-3 gap-3">
          <wd-button
            v-for="benefit in benefitsOptions"
            :key="benefit.value"
            :type="selectedBenefits.includes(benefit.value) ? 'primary' : 'info'"
            size="medium"
            :round="false"
            :plain="selectedBenefits.includes(benefit.value)"
            :custom-class="`${selectedBenefits.includes(benefit.value) ? '!bg-[#E9F7F4] !text-primary ' : ''}`"
            @click="selectBenefits(benefit.value)"
          >
            {{ benefit.label }}
          </wd-button>
        </view>
      </view>
    </view>

    <!-- 底部按钮 -->

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
import { useLocationStore } from '@/store/locations'
import { useCategoriesStore } from '@/store/categories'
import { salaryColumns, jobTypeColumns, benefitsOptions } from '@/constant'
import { navigateBack } from '@/utils'

export interface ItemProps {
  label: string
  value: string
}
const { getLocation, removeLocation, locations } = useLocationStore()
const { categories, removeCategory, getCategory } = useCategoriesStore()
// 响应式数据
const salaryRange = ref('7-8K')
const selectedSalary = ref(['不限'])
const selectedBenefits = ref(['五险一金'])
let selectedLocations = ref<ItemProps[]>(locations)
let selectedCategories = ref<ItemProps[]>(categories)

// 选择工作薪资
const selectSalary = (salary: string) => {
  const index = selectedSalary.value.indexOf(salary)
  if (index > -1) {
    selectedSalary.value.splice(index, 1)
  } else {
    selectedSalary.value.push(salary)
  }
}
const selectBenefits = (benefit: string) => {
  const index = selectedBenefits.value.indexOf(benefit)
  if (index > -1) {
    selectedBenefits.value.splice(index, 1)
  } else {
    selectedBenefits.value.push(benefit)
  }
}

// 重置筛选
const resetFilter = () => {
  navigateBack()
}

// 确定筛选
const confirmFilter = () => {
  const filterData = {
    locations: selectedLocations.value,
    categories: selectedCategories.value,
    salaryRange: salaryRange.value,
    salary: selectedSalary.value,
    benefits: selectedBenefits.value,
  }
  console.log('筛选条件:', filterData)
  navigateBack()
}
onShow(() => {
  selectedCategories.value = getCategory()
  selectedLocations.value = getLocation()
})
</script>
