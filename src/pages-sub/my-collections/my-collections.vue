<route lang="json5" type="page">
{
  layout: 'common',
  style: {
    navigationBarTitleText: '我的收藏',
    navigationStyle: 'custom',
  },
}
</route>
<template>
  <view class="px-4">
    <!-- 统计信息 -->
    <view class="py-3 text-3 text-gray-500 text-right">共{{ collectionList.length }}条记录</view>

    <!-- 收藏列表 -->
    <view class="pb-3 flex flex-col gap-3">
      <view
        v-for="(item, index) in collectionList"
        :key="item.id"
        class="bg-white rounded-2 p-4 shadow-sm"
      >
        <view class="flex items-start justify-between">
          <!-- 职位信息 -->
          <view class="flex-1">
            <view class="flex items-center mb-3">
              <text class="text-4 font-bold text-gray-800 mr-3">{{ item.jobTitle }}</text>
              <!-- 职位标签 -->
              <view class="flex gap-1 mt-[4rpx]">
                <wd-tag
                  v-for="tag in item.tags"
                  :key="tag"
                  bg-color="#F5F6FA"
                  :plain="true"
                  custom-class=" !bg-primary-100 !text-primary !leading-[30rpx] "
                >
                  {{ tag }}
                </wd-tag>
              </view>
            </view>

            <!-- 公司信息 -->
            <view class="flex items-center mb-3 gap-2">
              <view>
                <wd-icon name="building" custom-class="text-gray-400 " />
                <text class="text-[28rpx] text-gray-600 mr-4">{{ item.companyName }}</text>
              </view>
              <view>
                <wd-icon name="location" custom-class="text-gray-400 " />
                <text class="text-3 text-gray-600">{{ item.location }}</text>
              </view>
            </view>

            <!-- 收藏时间 -->
            <view class="text-3 text-gray-400">{{ item.collectionTime }} 收藏</view>
          </view>

          <!-- 薪资和申请按钮 -->
          <view class="flex flex-col items-end">
            <text class="text-4 font-bold text-green-600 mb-3">{{ item.salary }}</text>
            <view class="gap-2 flex">
              <wd-button
                type="success"
                size="small"
                :round="false"
                custom-class="!rounded-1"
                @click="applyJob(item)"
              >
                申请
              </wd-button>
              <wd-button
                v-if="true"
                type="info"
                size="small"
                :round="false"
                custom-class="!rounded-1"
                @click="showUnCollectDialog(item)"
              >
                取消收藏
              </wd-button>
            </view>
          </view>
        </view>
      </view>
    </view>

    <!-- 空状态 -->
    <view v-if="collectionList.length === 0" class="flex flex-col items-center justify-center">
      <image
        src="/static/images/empty-collection.png"
        mode="aspectFit"
        class="w-32 h-32 mb-6 opacity-60"
      />
      <text class="text-6 text-gray-500 mb-4">暂无收藏的职位</text>
      <text class="text-4 text-gray-400">去发现更多心仪职位吧</text>
      <wd-button
        type="primary"
        size="medium"
        @click="goToJobList"
        :round="false"
        custom-class="mt-4 rounded-3"
      >
        去找工作
      </wd-button>
    </view>

    <!-- 加载更多 -->
    <view v-if="collectionList.length > 0 && hasMore" class="flex justify-center py-4">
      <wd-button type="info" plain @click="loadMore" :loading="loading">
        {{ loading ? '加载中...' : '加载更多' }}
      </wd-button>
    </view>

    <!-- 底部提示 -->
    <view v-if="collectionList.length > 0 && !hasMore" class="text-center py-4">
      <text class="text-4 text-gray-400">已显示全部收藏</text>
    </view>

    <!-- 取消收藏确认弹窗 -->
    <wd-message-box></wd-message-box>
    <view class="pb-safe"></view>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { toast } from '@/utils/toast'
import { MOCK_COLLECTION_DATA } from '@/constant/my-collections'
import { useMessage } from 'wot-design-uni'

// 页面状态
const collectionList = ref<any[]>([])
const loading = ref(false)
const hasMore = ref(true)
const currentPage = ref(1)
const pageSize = 10
const selectedJob = ref<any>(null)

// 页面加载
onMounted(() => {
  loadCollectionList()
})

// 加载收藏列表
const loadCollectionList = async (isLoadMore = false) => {
  if (loading.value) return

  try {
    loading.value = true
    // 模拟API请求
    await new Promise((resolve) => setTimeout(resolve, 800))
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
const message = useMessage()
const showUnCollectDialog = (job: any) => {
  selectedJob.value = job
  message
    .confirm({
      msg: '确定要取消收藏吗？',
      title: '取消收藏',
    })
    .then(() => {
      handleUnCollect()
    })
    .catch(() => {})
}

// 处理取消收藏
const handleUnCollect = () => {
  if (!selectedJob.value) return
  // 从列表中移除
  const index = collectionList.value.findIndex((item) => item.id === selectedJob.value.id)
  if (index > -1) {
    collectionList.value.splice(index, 1)
    toast.success('已取消收藏')
  }
  selectedJob.value = null
}

// 获取标签样式
const getTagClass = (tag: string) => {
  const tagStyles: Record<string, string> = {
    急招: 'bg-red-100 text-red-600',
    企业: 'bg-blue-100 text-blue-600',
    五险一金: 'bg-green-100 text-green-600',
    双休: 'bg-purple-100 text-purple-600',
    包住: 'bg-orange-100 text-orange-600',
    年终奖: 'bg-yellow-100 text-yellow-600',
  }
  return tagStyles[tag] || 'bg-gray-100 text-gray-600'
}
</script>
