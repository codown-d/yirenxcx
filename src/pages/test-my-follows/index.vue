<template>
  <view class="min-h-screen p-10 bg-gray-100">
    <view class="text-center mb-15">
      <text class="text-12 font-bold text-gray-800">我的关注功能测试</text>
    </view>
    
    <view class="space-y-4">
      <!-- 功能按钮 -->
      <wd-button 
        type="primary" 
        size="large" 
        block 
        @click="goToMyFollows"
        class="h-24 rounded-12 text-8 mb-4"
      >
        跳转到我的关注页面
      </wd-button>

      <wd-button 
        type="success" 
        size="large" 
        block 
        @click="simulateFollow"
        class="h-24 rounded-12 text-8 mb-4"
      >
        模拟关注公司
      </wd-button>

      <wd-button 
        type="warning" 
        size="large" 
        block 
        @click="clearFollows"
        class="h-24 rounded-12 text-8 mb-4"
      >
        清空关注列表
      </wd-button>
      
      <!-- 当前关注统计 -->
      <view class="bg-white rounded-4 p-8 shadow-sm mb-6">
        <text class="text-8 font-semibold text-gray-800 block mb-4">关注统计：</text>
        <view class="flex justify-between items-center">
          <text class="text-7 text-gray-600">已关注公司数量</text>
          <text class="text-8 font-bold text-primary">{{ followCount }}家</text>
        </view>
      </view>

      <!-- 功能说明 -->
      <view class="bg-white rounded-4 p-8 shadow-sm">
        <text class="text-8 font-semibold text-gray-800 block mb-6">我的关注功能说明：</text>
        <view class="space-y-2">
          <text class="block text-7 text-gray-600 leading-8">• 显示已关注的公司列表</text>
          <text class="block text-7 text-gray-600 leading-8">• 支持向公司发送私信</text>
          <text class="block text-7 text-gray-600 leading-8">• 分页加载和下拉刷新</text>
          <text class="block text-7 text-gray-600 leading-8">• 空状态引导用户发现</text>
          <text class="block text-7 text-gray-600 leading-8">• 公司标签和基本信息展示</text>
          <text class="block text-7 text-gray-600 leading-8">• 关注时间记录</text>
        </view>
      </view>

      <!-- 最近关注的公司 -->
      <view v-if="recentFollows.length > 0" class="bg-white rounded-4 p-8 shadow-sm">
        <text class="text-8 font-semibold text-gray-800 block mb-6">最近关注：</text>
        <view class="space-y-3">
          <view 
            v-for="company in recentFollows" 
            :key="company.id"
            class="flex items-center p-4 bg-gray-50 rounded-3"
          >
            <image 
              :src="company.logo" 
              mode="aspectFit" 
              class="w-12 h-12 rounded-2 mr-3 bg-gray-200"
            />
            <view class="flex-1">
              <text class="text-7 font-medium text-gray-800 block">{{ company.companyName }}</text>
              <text class="text-5 text-gray-500">{{ company.industry }} · {{ company.location }}</text>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { toast } from '@/utils/toast'
import { MOCK_FOLLOW_DATA } from '@/constant/my-follows'

// 关注数据
const followList = ref<any[]>([])

// 关注数量
const followCount = computed(() => followList.value.length)

// 最近关注的公司（显示前3个）
const recentFollows = computed(() => followList.value.slice(0, 3))

// 页面加载
onMounted(() => {
  loadFollowData()
})

// 加载关注数据
const loadFollowData = () => {
  // 从本地存储获取关注数据，如果没有则使用模拟数据
  const storedFollows = uni.getStorageSync('myFollows')
  if (storedFollows && storedFollows.length > 0) {
    followList.value = storedFollows
  } else {
    // 默认显示前3个模拟数据
    followList.value = MOCK_FOLLOW_DATA.slice(0, 3)
    uni.setStorageSync('myFollows', followList.value)
  }
}

// 跳转到我的关注页面
const goToMyFollows = () => {
  uni.navigateTo({
    url: '/pages-sub/my-follows/index'
  })
}

// 模拟关注公司
const simulateFollow = () => {
  // 随机选择一个未关注的公司
  const unFollowedCompanies = MOCK_FOLLOW_DATA.filter(
    company => !followList.value.some(item => item.id === company.id)
  )
  
  if (unFollowedCompanies.length === 0) {
    toast.info('已关注所有公司')
    return
  }
  
  const randomCompany = unFollowedCompanies[Math.floor(Math.random() * unFollowedCompanies.length)]
  
  // 添加到关注列表
  const newFollow = {
    ...randomCompany,
    followTime: new Date().toISOString().split('T')[0].replace(/-/g, '.')
  }
  
  followList.value.unshift(newFollow)
  uni.setStorageSync('myFollows', followList.value)
  
  toast.success(`已关注${randomCompany.companyName}`)
}

// 清空关注列表
const clearFollows = () => {
  uni.showModal({
    title: '清空关注',
    content: '确定要清空所有关注吗？',
    success: (res) => {
      if (res.confirm) {
        followList.value = []
        uni.setStorageSync('myFollows', [])
        toast.success('已清空关注列表')
      }
    }
  })
}
</script>
