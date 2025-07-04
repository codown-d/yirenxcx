<template>
  <view class="min-h-screen p-10 bg-gray-100">
    <view class="text-center mb-15">
      <text class="text-12 font-bold text-gray-800">我的收藏功能测试</text>
    </view>
    
    <view class="space-y-4">
      <!-- 功能按钮 -->
      <wd-button 
        type="primary" 
        size="large" 
        block 
        @click="goToMyCollections"
        class="h-24 rounded-12 text-8 mb-4"
      >
        跳转到我的收藏页面
      </wd-button>

      <wd-button 
        type="success" 
        size="large" 
        block 
        @click="simulateCollect"
        class="h-24 rounded-12 text-8 mb-4"
      >
        模拟收藏职位
      </wd-button>

      <wd-button 
        type="warning" 
        size="large" 
        block 
        @click="clearCollections"
        class="h-24 rounded-12 text-8 mb-4"
      >
        清空收藏列表
      </wd-button>
      
      <!-- 当前收藏统计 -->
      <view class="bg-white rounded-4 p-8 shadow-sm mb-6">
        <text class="text-8 font-semibold text-gray-800 block mb-4">收藏统计：</text>
        <view class="flex justify-between items-center">
          <text class="text-7 text-gray-600">已收藏职位数量</text>
          <text class="text-8 font-bold text-primary">{{ collectionCount }}个</text>
        </view>
      </view>

      <!-- 功能说明 -->
      <view class="bg-white rounded-4 p-8 shadow-sm">
        <text class="text-8 font-semibold text-gray-800 block mb-6">我的收藏功能说明：</text>
        <view class="space-y-2">
          <text class="block text-7 text-gray-600 leading-8">• 显示已收藏的职位列表</text>
          <text class="block text-7 text-gray-600 leading-8">• 支持直接申请职位</text>
          <text class="block text-7 text-gray-600 leading-8">• 分页加载和下拉刷新</text>
          <text class="block text-7 text-gray-600 leading-8">• 空状态引导用户找工作</text>
          <text class="block text-7 text-gray-600 leading-8">• 职位标签和薪资展示</text>
          <text class="block text-7 text-gray-600 leading-8">• 收藏时间记录</text>
          <text class="block text-7 text-gray-600 leading-8">• 取消收藏功能</text>
        </view>
      </view>

      <!-- 最近收藏的职位 -->
      <view v-if="recentCollections.length > 0" class="bg-white rounded-4 p-8 shadow-sm">
        <text class="text-8 font-semibold text-gray-800 block mb-6">最近收藏：</text>
        <view class="space-y-3">
          <view 
            v-for="job in recentCollections" 
            :key="job.id"
            class="flex items-center justify-between p-4 bg-gray-50 rounded-3"
          >
            <view class="flex-1">
              <text class="text-7 font-medium text-gray-800 block">{{ job.jobTitle }}</text>
              <text class="text-5 text-gray-500">{{ job.companyName }} · {{ job.location }}</text>
            </view>
            <view class="text-right">
              <text class="text-7 font-bold text-green-600 block">{{ job.salary }}</text>
              <text class="text-4 text-gray-400">{{ job.collectionTime }}</text>
            </view>
          </view>
        </view>
      </view>

      <!-- 职位标签统计 -->
      <view v-if="tagStats.length > 0" class="bg-white rounded-4 p-8 shadow-sm">
        <text class="text-8 font-semibold text-gray-800 block mb-6">标签统计：</text>
        <view class="flex flex-wrap gap-2">
          <view 
            v-for="tag in tagStats" 
            :key="tag.name"
            class="flex items-center px-3 py-2 bg-blue-50 rounded-2"
          >
            <text class="text-6 text-blue-600 mr-2">{{ tag.name }}</text>
            <text class="text-5 text-blue-400">{{ tag.count }}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { toast } from '@/utils/toast'
import { MOCK_COLLECTION_DATA } from '@/constant/my-collections'

// 收藏数据
const collectionList = ref<any[]>([])

// 收藏数量
const collectionCount = computed(() => collectionList.value.length)

// 最近收藏的职位（显示前3个）
const recentCollections = computed(() => collectionList.value.slice(0, 3))

// 标签统计
const tagStats = computed(() => {
  const tagMap = new Map<string, number>()
  
  collectionList.value.forEach(job => {
    job.tags.forEach((tag: string) => {
      tagMap.set(tag, (tagMap.get(tag) || 0) + 1)
    })
  })
  
  return Array.from(tagMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 6)
})

// 页面加载
onMounted(() => {
  loadCollectionData()
})

// 加载收藏数据
const loadCollectionData = () => {
  // 从本地存储获取收藏数据，如果没有则使用模拟数据
  const storedCollections = uni.getStorageSync('myCollections')
  if (storedCollections && storedCollections.length > 0) {
    collectionList.value = storedCollections
  } else {
    // 默认显示前3个模拟数据
    collectionList.value = MOCK_COLLECTION_DATA.slice(0, 3)
    uni.setStorageSync('myCollections', collectionList.value)
  }
}

// 跳转到我的收藏页面
const goToMyCollections = () => {
  uni.navigateTo({
    url: '/pages-sub/my-collections/index'
  })
}

// 模拟收藏职位
const simulateCollect = () => {
  // 随机选择一个未收藏的职位
  const unCollectedJobs = MOCK_COLLECTION_DATA.filter(
    job => !collectionList.value.some(item => item.id === job.id)
  )
  
  if (unCollectedJobs.length === 0) {
    toast.info('已收藏所有职位')
    return
  }
  
  const randomJob = unCollectedJobs[Math.floor(Math.random() * unCollectedJobs.length)]
  
  // 添加到收藏列表
  const newCollection = {
    ...randomJob,
    collectionTime: new Date().toISOString().split('T')[0].replace(/-/g, '.')
  }
  
  collectionList.value.unshift(newCollection)
  uni.setStorageSync('myCollections', collectionList.value)
  
  toast.success(`已收藏${randomJob.jobTitle}职位`)
}

// 清空收藏列表
const clearCollections = () => {
  uni.showModal({
    title: '清空收藏',
    content: '确定要清空所有收藏吗？',
    success: (res) => {
      if (res.confirm) {
        collectionList.value = []
        uni.setStorageSync('myCollections', [])
        toast.success('已清空收藏列表')
      }
    }
  })
}
</script>
