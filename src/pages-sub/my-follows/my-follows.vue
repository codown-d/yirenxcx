<route lang="json5" type="page">
{
  layout: 'common',
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '我的关注',
  },
}
</route>
<template>
  <view class="px-4">
    <!-- 统计信息 -->
    <view class="py-3 text-3 text-gray-500 text-right">共{{ followList.length }}条记录</view>

    <!-- 关注列表 -->
    <view class="pb-3 flex flex-col gap-3">
      <view
        v-for="(item, index) in followList"
        :key="item.id"
        class="bg-white rounded-4 p-6 mb-4 shadow-sm"
      >
        <view class="flex items-start justify-between">
          <!-- 公司logo -->
          <image :src="item.logo" mode="aspectFit" class="w-16 h-16 rounded-2 mr-4" />

          <!-- 公司信息 -->
          <view class="flex-1">
            <view class="flex mb-2">
              <text class="text-4 font-bold text-gray-800 mr-2">{{ item.companyName }}</text>
              <!-- 标签 -->
              <view class="flex gap-1 mt-[4rpx]">
                <wd-tag
                  v-for="tag in item.tags"
                  :key="tag"
                  bg-color="#F5F6FA"
                  mark
                  custom-class=" !bg-primary-100 !text-primary !leading-[30rpx] "
                >
                  {{ tag }}
                </wd-tag>
              </view>
            </view>

            <view class="text-3 text-gray-600 mb-3">{{ item.industry }} · {{ item.location }}</view>
            <view class="flex justify-between items-center">
              <view class="text-3 text-gray-400">{{ item.followTime }}关注</view>
              <wd-button
                size="small"
                :round="false"
                @click="sendMessage(item)"
                custom-class=" text-3 rounded-1"
              >
                私信
              </wd-button>
            </view>
          </view>

          <!-- 私信按钮 -->
        </view>
      </view>
    </view>

    <!-- 空状态 -->
    <view v-if="followList.length === 0" class="flex flex-col items-center justify-center">
      <image
        src="/static/images/empty-follow.png"
        mode="aspectFit"
        class="w-32 h-32 mb-6 opacity-60"
      />
      <text class="text-6 text-gray-500 mb-4">暂无关注的公司</text>
      <text class="text-4 text-gray-400">去发现更多优质企业吧</text>
      <wd-button
        type="primary"
        size="medium"
        @click="goToDiscover"
        :round="false"
        custom-class="mt-4  rounded-3"
      >
        去发现
      </wd-button>
    </view>

    <!-- 加载更多 -->
    <view v-if="followList.length > 0 && hasMore" class="flex justify-center py-4">
      <wd-button type="info" plain @click="loadMore" :loading="loading">
        {{ loading ? '加载中...' : '加载更多' }}
      </wd-button>
    </view>

    <!-- 底部提示 -->
    <view v-if="followList.length > 0 && !hasMore" class="text-center py-4">
      <text class="text-4 text-gray-400">已显示全部关注</text>
    </view>

    <view class="pb-safe"></view>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { toast } from '@/utils/toast'
import { MY_FOLLOWS_CONFIG, MOCK_FOLLOW_DATA } from '@/constant/my-follows'
import { YRZPJobSeekerDO } from '@/service/app'
const { getGuanZhu } = useConnect()

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

// 加载关注列表
const loadFollowList = async (isLoadMore = false) => {
  if (loading.value) return

  try {
    loading.value = true

    // 模拟API请求
    let res = await getGuanZhu()
    console.log(res)

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
    console.log(endIndex, MOCK_FOLLOW_DATA.length)
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
        const index = followList.value.findIndex((item) => item.id === company.id)
        if (index > -1) {
          followList.value.splice(index, 1)
          toast.success('已取消关注')
        }
      }
    },
  })
}
</script>
