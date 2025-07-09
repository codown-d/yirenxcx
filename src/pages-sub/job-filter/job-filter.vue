<route lang="json5" type="page">
{
  style: {
    navigationBarTitleText: '筛选',
    navigationStyle: 'default',
  },
}
</route>

<template>
  <view class="min-h-screen bg-gray-50">
    <!-- 位置 -->
    <view class="bg-white mb-3">
      <wd-cell-group>
        <wd-cell title="位置" is-link @click="goToLocationSelect">
          <view class="flex flex-wrap gap-2">
            <wd-tag
              v-for="location in selectedLocations"
              :key="location"
              type="primary"
              size="small"
              closable
              @close="removeLocation(location)"
            >
              {{ location }}
            </wd-tag>
            <text v-if="selectedLocations.length === 0" class="text-gray-400 text-sm">
              添加位置
            </text>
          </view>
        </wd-cell>
      </wd-cell-group>
    </view>

    <!-- 职业类别 -->
    <view class="bg-white mb-3">
      <wd-cell-group>
        <wd-cell title="职业类别" is-link @click="goToJobCategorySelect">
          <view class="flex flex-wrap gap-2">
            <wd-tag
              v-for="category in selectedCategories"
              :key="category"
              type="success"
              size="small"
              closable
              @close="removeCategory(category)"
            >
              {{ category }}
            </wd-tag>
            <text v-if="selectedCategories.length === 0" class="text-gray-400 text-sm">
              查看全部
            </text>
          </view>
        </wd-cell>
      </wd-cell-group>
    </view>

    <!-- 薪资范围 -->
    <view class="bg-white mb-3">
      <view class="px-4 py-3 border-b border-gray-100">
        <text class="text-base font-medium text-gray-900">薪资范围</text>
      </view>
      <wd-cell-group>
        <wd-input v-model="salaryRange" label="" placeholder="7-8K" readonly />
      </wd-cell-group>
    </view>

    <!-- 工作薪资 -->
    <view class="bg-white mb-3">
      <view class="px-4 py-3 border-b border-gray-100">
        <text class="text-base font-medium text-gray-900">工作薪资</text>
      </view>
      <view class="p-4">
        <view class="grid grid-cols-3 gap-3">
          <button
            v-for="salary in salaryOptions"
            :key="salary.value"
            :class="[
              'py-2 px-3 rounded-lg text-sm border transition-colors',
              selectedSalary === salary.value
                ? 'bg-primary-50 border-primary text-primary'
                : 'bg-white border-gray-200 text-gray-700',
            ]"
            @click="selectSalary(salary.value)"
          >
            {{ salary.label }}
          </button>
        </view>
      </view>
    </view>

    <!-- 福利待遇 -->
    <view class="bg-white mb-6">
      <view class="px-4 py-3 border-b border-gray-100">
        <text class="text-base font-medium text-gray-900">福利待遇</text>
      </view>
      <view class="p-4">
        <view class="grid grid-cols-3 gap-3">
          <button
            v-for="benefit in benefitOptions"
            :key="benefit.value"
            :class="[
              'py-2 px-3 rounded-lg text-sm border transition-colors',
              selectedBenefits.includes(benefit.value)
                ? 'bg-primary-50 border-primary text-primary'
                : 'bg-white border-gray-200 text-gray-700',
            ]"
            @click="toggleBenefit(benefit.value)"
          >
            {{ benefit.label }}
          </button>
        </view>
      </view>
    </view>

    <!-- 底部按钮 -->
    <view class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
      <view class="flex gap-3">
        <button
          class="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg text-base font-medium active:bg-gray-200 transition-colors"
          @click="resetFilter"
        >
          重置
        </button>
        <button
          class="flex-1 bg-primary text-white py-3 rounded-lg text-base font-medium active:bg-primary-600 transition-colors"
          @click="confirmFilter"
        >
          确定
        </button>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { toast } from '@/utils/toast'
import {
  getFilterOptions,
  filterJobs,
  type FilterOptions,
  type FilterRequest,
} from '@/service/index/filter'

// 响应式数据
const selectedLocations = ref<string[]>(['成都-武侯区', '上海'])
const selectedCategories = ref<string[]>(['导演', '分镜编剧'])
const salaryRange = ref('7-8K')
const selectedSalary = ref('不限')
const selectedBenefits = ref<string[]>(['五险一金'])

// 工作薪资选项
const salaryOptions = [
  { label: '不限', value: '不限' },
  { label: '全职', value: '全职' },
  { label: '兼职', value: '兼职' },
  { label: '临时', value: '临时' },
  { label: '合同制', value: '合同制' },
]

// 福利待遇选项
const benefitOptions = [
  { label: '五险一金', value: '五险一金' },
  { label: '工作补贴', value: '工作补贴' },
  { label: '提供住宿', value: '提供住宿' },
  { label: '培训机会', value: '培训机会' },
  { label: '国内出差', value: '国内出差' },
  { label: '国际出差', value: '国际出差' },
  { label: '项目奖金', value: '项目奖金' },
  { label: '灵活工作', value: '灵活工作' },
]

// 跳转到位置选择页面
const goToLocationSelect = () => {
  uni.navigateTo({
    url: '/pages-sub/location-select/location-select',
  })
}

// 跳转到职业类别选择页面
const goToJobCategorySelect = () => {
  uni.navigateTo({
    url: '/pages-sub/job-category-select/job-category-select',
  })
}

// 移除位置
const removeLocation = (location: string) => {
  const index = selectedLocations.value.indexOf(location)
  if (index > -1) {
    selectedLocations.value.splice(index, 1)
  }
}

// 移除职业类别
const removeCategory = (category: string) => {
  const index = selectedCategories.value.indexOf(category)
  if (index > -1) {
    selectedCategories.value.splice(index, 1)
  }
}

// 选择工作薪资
const selectSalary = (salary: string) => {
  selectedSalary.value = salary
}

// 切换福利待遇
const toggleBenefit = (benefit: string) => {
  const index = selectedBenefits.value.indexOf(benefit)
  if (index > -1) {
    selectedBenefits.value.splice(index, 1)
  } else {
    selectedBenefits.value.push(benefit)
  }
}

// 重置筛选
const resetFilter = () => {
  selectedLocations.value = []
  selectedCategories.value = []
  salaryRange.value = ''
  selectedSalary.value = '不限'
  selectedBenefits.value = []
  toast.success('已重置筛选条件')
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
  toast.success('筛选条件已应用')

  // 返回上一页并传递筛选数据
  uni.navigateBack()
}
</script>
