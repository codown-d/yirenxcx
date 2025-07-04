<route lang="json5" type="page">
{
  style: {
    navigationBarTitleText: '我的收藏',
    navigationStyle: 'custom',
  },
}
</route>
<template>
  <view class="min-h-screen bg-gray-50">
    <!-- 自定义导航栏 -->
    <view class="flex items-center justify-between h-22 px-8 pt-safe bg-white">
      <wd-icon name="arrow-left" size="20px" @click="goBack" class="text-gray-800 p-2" />
      <view class="text-9 font-semibold text-gray-800">我的收藏</view>
      <wd-icon name="more" size="20px" class="text-gray-800 p-2" />
    </view>

    <!-- 统计信息 -->
    <view class="bg-white px-8 py-4 border-b border-gray-100">
      <view class="text-6 text-gray-500 text-right">共{{ collectionList.length }}条记录</view>
    </view>

    <!-- 收藏列表 -->
    <view class="px-8 py-4">
      <view 
        v-for="(item, index) in collectionList" 
        :key="item.id"
        class="bg-white rounded-4 p-6 mb-4 shadow-sm"
      >
        <view class="flex items-start justify-between">
          <!-- 职位信息 -->
          <view class="flex-1">
            <view class="flex items-center mb-3">
              <text class="text-9 font-semibold text-gray-800 mr-3">{{ item.jobTitle }}</text>
              <!-- 职位标签 -->
              <view class="flex gap-2">
                <text 
                  v-for="tag in item.tags" 
                  :key="tag"
                  class="px-2 py-1 text-3 rounded-1"
                  :class="getTagClass(tag)"
                >
                  {{ tag }}
                </text>
              </view>
            </view>
            
            <!-- 公司信息 -->
            <view class="flex items-center mb-3">
              <wd-icon name="building" size="14px" class="text-gray-400 mr-2" />
              <text class="text-7 text-gray-600 mr-4">{{ item.companyName }}</text>
              <wd-icon name="location" size="14px" class="text-gray-400 mr-2" />
              <text class="text-7 text-gray-600">{{ item.location }}</text>
            </view>
            
            <!-- 收藏时间 -->
            <view class="text-5 text-gray-400">{{ item.collectionTime }}收藏</view>
          </view>
          
          <!-- 薪资和申请按钮 -->
          <view class="flex flex-col items-end">
            <text class="text-9 font-bold text-green-600 mb-4">{{ item.salary }}</text>
            <wd-button
              type="success"
              size="small"
              @click="applyJob(item)"
              class="h-8 px-4 text-6 rounded-2"
            >
              申请
            </wd-button>
          </view>
        </view>
      </view>
    </view>

    <!-- 空状态 -->
    <view v-if="collectionList.length === 0" class="flex flex-col items-center justify-center py-32">
      <image 
        src="/static/images/empty-collection.png" 
        mode="aspectFit" 
        class="w-32 h-32 mb-6 opacity-60"
      />
      <text class="text-7 text-gray-500 mb-4">暂无收藏的职位</text>
      <text class="text-6 text-gray-400">去发现更多心仪职位吧</text>
      <wd-button
        type="primary"
        size="medium"
        @click="goToJobList"
        class="mt-8 h-10 px-8 rounded-3"
      >
        去找工作
      </wd-button>
    </view>

    <!-- 加载更多 -->
    <view v-if="collectionList.length > 0 && hasMore" class="flex justify-center py-8">
      <wd-button
        type="info"
        size="small"
        plain
        @click="loadMore"
        :loading="loading"
        class="h-8 px-6 text-6"
      >
        {{ loading ? '加载中...' : '加载更多' }}
      </wd-button>
    </view>

    <!-- 底部提示 -->
    <view v-if="collectionList.length > 0 && !hasMore" class="text-center py-8">
      <text class="text-6 text-gray-400">已显示全部收藏</text>
    </view>

    <!-- 取消收藏确认弹窗 -->
    <wd-message-box
      v-model="showUnCollectConfirm"
      type="confirm"
      title="取消收藏"
      :content="`确定要取消收藏"${selectedJob?.jobTitle}"吗？`"
      confirm-button-text="确认"
      cancel-button-text="取消"
      @confirm="handleUnCollect"
      @cancel="showUnCollectConfirm = false"
    />
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { toast } from '@/utils/toast'
import { MY_COLLECTIONS_CONFIG, MOCK_COLLECTION_DATA } from '@/constant/my-collections'

// 页面状态
const collectionList = ref<any[]>([])
const loading = ref(false)
const hasMore = ref(true)
const currentPage = ref(1)
const pageSize = 10
const showUnCollectConfirm = ref(false)
const selectedJob = ref<any>(null)

// 页面加载
onMounted(() => {
  loadCollectionList()
})

// 返回上一页
const goBack = () => {
  uni.navigateBack()
}

// 加载收藏列表
const loadCollectionList = async (isLoadMore = false) => {
  if (loading.value) return
  
  try {
    loading.value = true
    
    // 模拟API请求
    await new Promise(resolve => setTimeout(resolve, 800))
    
    // 模拟分页数据
    const startIndex = (currentPage.value - 1) * pageSize
    const endIndex = startIndex + pageSize
    const newData = MOCK_COLLECTION_DATA.slice(startIndex, endIndex)
    
    if (isLoadMore) {
      collectionList.value = [...collectionList.value, ...newData]
    } else {
      collectionList.value = newData
    }
    
    // 判断是否还有更多数据
    hasMore.value = endIndex < MOCK_COLLECTION_DATA.length
    
    if (newData.length > 0) {
      currentPage.value++
    }
    
  } catch (error) {
    toast.error('加载失败，请重试')
  } finally {
    loading.value = false
  }
}

// 加载更多
const loadMore = () => {
  loadCollectionList(true)
}

// 申请职位
const applyJob = (job: any) => {
  toast.success(`已申请${job.jobTitle}职位`)
  // 实际项目中跳转到申请页面
  // uni.navigateTo({
  //   url: `/pages/job/apply?jobId=${job.id}`
  // })
}

// 去找工作页面
const goToJobList = () => {
  toast.info('跳转到职位列表')
  // 实际项目中跳转到职位列表页面
  // uni.switchTab({
  //   url: '/pages/job/index'
  // })
}

// 取消收藏
const showUnCollectDialog = (job: any) => {
  selectedJob.value = job
  showUnCollectConfirm.value = true
}

// 处理取消收藏
const handleUnCollect = () => {
  if (!selectedJob.value) return
  
  // 从列表中移除
  const index = collectionList.value.findIndex(item => item.id === selectedJob.value.id)
  if (index > -1) {
    collectionList.value.splice(index, 1)
    toast.success('已取消收藏')
  }
  
  showUnCollectConfirm.value = false
  selectedJob.value = null
}

// 获取标签样式
const getTagClass = (tag: string) => {
  const tagStyles: Record<string, string> = {
    '急招': 'bg-red-100 text-red-600',
    '企业': 'bg-blue-100 text-blue-600',
    '五险一金': 'bg-green-100 text-green-600',
    '双休': 'bg-purple-100 text-purple-600',
    '包住': 'bg-orange-100 text-orange-600',
    '年终奖': 'bg-yellow-100 text-yellow-600'
  }
  return tagStyles[tag] || 'bg-gray-100 text-gray-600'
}
</script>
