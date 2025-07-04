<route lang="json5" type="page">
{
  style: {
    navigationBarTitleText: '我的关注',
    navigationStyle: 'custom',
  },
}
</route>
<template>
  <view class="min-h-screen bg-gray-50">
    <!-- 自定义导航栏 -->
    <view class="flex items-center justify-between h-22 px-8 pt-safe bg-white">
      <wd-icon name="arrow-left" size="20px" @click="goBack" class="text-gray-800 p-2" />
      <view class="text-9 font-semibold text-gray-800">我的关注</view>
      <wd-icon name="more" size="20px" class="text-gray-800 p-2" />
    </view>

    <!-- 统计信息 -->
    <view class="bg-white px-8 py-4 border-b border-gray-100">
      <view class="text-6 text-gray-500 text-right">共{{ followList.length }}条记录</view>
    </view>

    <!-- 关注列表 -->
    <view class="px-8 py-4">
      <view 
        v-for="(item, index) in followList" 
        :key="item.id"
        class="bg-white rounded-4 p-6 mb-4 shadow-sm"
      >
        <view class="flex items-start">
          <!-- 公司logo -->
          <image 
            :src="item.logo" 
            mode="aspectFit" 
            class="w-16 h-16 rounded-2 mr-4 bg-gray-100"
          />
          
          <!-- 公司信息 -->
          <view class="flex-1">
            <view class="flex items-center mb-2">
              <text class="text-8 font-semibold text-gray-800 mr-2">{{ item.companyName }}</text>
              <!-- 标签 -->
              <view class="flex gap-1">
                <text 
                  v-for="tag in item.tags" 
                  :key="tag"
                  class="px-2 py-1 text-2xs rounded-1 bg-orange-100 text-orange-600"
                >
                  {{ tag }}
                </text>
              </view>
            </view>
            
            <view class="text-6 text-gray-600 mb-3">{{ item.industry }} · {{ item.location }}</view>
            
            <view class="text-5 text-gray-400">{{ item.followTime }}关注</view>
          </view>
          
          <!-- 私信按钮 -->
          <wd-button
            type="success"
            size="small"
            @click="sendMessage(item)"
            class="h-8 px-4 text-6 rounded-2"
          >
            私信
          </wd-button>
        </view>
      </view>
    </view>

    <!-- 空状态 -->
    <view v-if="followList.length === 0" class="flex flex-col items-center justify-center py-32">
      <image 
        src="/static/images/empty-follow.png" 
        mode="aspectFit" 
        class="w-32 h-32 mb-6 opacity-60"
      />
      <text class="text-7 text-gray-500 mb-4">暂无关注的公司</text>
      <text class="text-6 text-gray-400">去发现更多优质企业吧</text>
      <wd-button
        type="primary"
        size="medium"
        @click="goToDiscover"
        class="mt-8 h-10 px-8 rounded-3"
      >
        去发现
      </wd-button>
    </view>

    <!-- 加载更多 -->
    <view v-if="followList.length > 0 && hasMore" class="flex justify-center py-8">
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
    <view v-if="followList.length > 0 && !hasMore" class="text-center py-8">
      <text class="text-6 text-gray-400">已显示全部关注</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { toast } from '@/utils/toast'
import { MY_FOLLOWS_CONFIG, MOCK_FOLLOW_DATA } from '@/constant/my-follows'

// 页面状态
const followList = ref<any[]>([])
const loading = ref(false)
const hasMore = ref(true)
const currentPage = ref(1)
const pageSize = 10

// 页面加载
onMounted(() => {
  loadFollowList()
})

// 返回上一页
const goBack = () => {
  uni.navigateBack()
}

// 加载关注列表
const loadFollowList = async (isLoadMore = false) => {
  if (loading.value) return
  
  try {
    loading.value = true
    
    // 模拟API请求
    await new Promise(resolve => setTimeout(resolve, 800))
    
    // 模拟分页数据
    const startIndex = (currentPage.value - 1) * pageSize
    const endIndex = startIndex + pageSize
    const newData = MOCK_FOLLOW_DATA.slice(startIndex, endIndex)
    
    if (isLoadMore) {
      followList.value = [...followList.value, ...newData]
    } else {
      followList.value = newData
    }
    
    // 判断是否还有更多数据
    hasMore.value = endIndex < MOCK_FOLLOW_DATA.length
    
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
  loadFollowList(true)
}

// 发送私信
const sendMessage = (company: any) => {
  toast.info(`向${company.companyName}发送私信`)
  // 实际项目中跳转到私信页面
  // uni.navigateTo({
  //   url: `/pages/chat/index?companyId=${company.id}`
  // })
}

// 去发现页面
const goToDiscover = () => {
  toast.info('跳转到发现页面')
  // 实际项目中跳转到公司发现页面
  // uni.switchTab({
  //   url: '/pages/discover/index'
  // })
}

// 取消关注
const unfollowCompany = (company: any) => {
  uni.showModal({
    title: '取消关注',
    content: `确定要取消关注${company.companyName}吗？`,
    success: (res) => {
      if (res.confirm) {
        // 从列表中移除
        const index = followList.value.findIndex(item => item.id === company.id)
        if (index > -1) {
          followList.value.splice(index, 1)
          toast.success('已取消关注')
        }
      }
    }
  })
}
</script>
