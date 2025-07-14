<route lang="json5" type="page">
{
  style: {
    navigationBarTitleText: '消息',
    navigationStyle: 'default',
  },
}
</route>

<template>
  <view class="min-h-screen bg-gray-50">
    <!-- Tab切换 -->
    <view class="bg-white">
      <wd-tabs v-model="activeTab" @change="onTabChange">
        <wd-tab title="聊天" name="chat"></wd-tab>
        <wd-tab title="系统通知" name="system"></wd-tab>
      </wd-tabs>
    </view>

    <!-- 聊天列表 -->
    <view v-if="activeTab === 'chat'" class="px-4 py-2">
      <view
        v-for="(item, index) in chatList"
        :key="item.id"
        class="bg-white rounded-lg p-4 mb-3 shadow-sm"
        @click="openChat(item)"
      >
        <view class="flex items-center">
          <!-- 头像 -->
          <view class="relative mr-3">
            <image :src="item.avatar" mode="aspectFill" class="w-12 h-12 rounded-full" />
            <!-- 未读消息数量 -->
            <view
              v-if="item.unreadCount > 0"
              class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full min-w-5 h-5 flex items-center justify-center px-1"
            >
              {{ item.unreadCount > 99 ? '99+' : item.unreadCount }}
            </view>
          </view>

          <!-- 消息内容 -->
          <view class="flex-1 min-w-0">
            <view class="flex items-center justify-between mb-1">
              <text class="text-base font-medium text-gray-900 truncate">{{ item.name }}</text>
              <text class="text-xs text-gray-400">{{ formatTime(item.lastMessageTime) }}</text>
            </view>
            <view class="flex items-center">
              <!-- 招聘方标识 -->
              <view
                v-if="item.isRecruiter"
                class="bg-green-100 text-green-600 text-xs px-2 py-0.5 rounded mr-2 flex-shrink-0"
              >
                招聘方
              </view>
              <text class="text-sm text-gray-500 truncate">{{ item.lastMessage }}</text>
            </view>
          </view>
        </view>
      </view>

      <!-- 空状态 -->
      <view v-if="chatList.length === 0" class="text-center py-20">
        <image
          src="/static/images/empty-chat.png"
          mode="aspectFit"
          class="w-24 h-24 mx-auto mb-4"
        />
        <text class="text-gray-400 text-sm">暂无聊天记录</text>
      </view>
    </view>

    <!-- 系统通知列表 -->
    <view v-if="activeTab === 'system'" class="px-4 py-2">
      <view
        v-for="(item, index) in systemNotifications"
        :key="item.id"
        class="bg-white rounded-lg p-4 mb-3 shadow-sm"
        @click="openNotification(item)"
      >
        <view class="flex items-center">
          <!-- 图标 -->
          <view class="mr-3">
            <view
              class="w-12 h-12 rounded-lg flex items-center justify-center"
              :class="getNotificationIconClass(item.type)"
            >
              <uni-icons
                :type="getNotificationIcon(item.type)"
                size="24"
                :color="getNotificationIconColor(item.type)"
              />
            </view>
          </view>

          <!-- 通知内容 -->
          <view class="flex-1 min-w-0">
            <view class="flex items-center justify-between mb-1">
              <text class="text-base font-medium text-gray-900 truncate">{{ item.title }}</text>
              <text class="text-xs text-gray-400">{{ formatTime(item.createTime) }}</text>
            </view>
            <text class="text-sm text-gray-500 truncate">{{ item.content }}</text>
          </view>

          <!-- 未读标识 -->
          <view v-if="!item.isRead" class="w-2 h-2 bg-red-500 rounded-full ml-2"></view>
        </view>
      </view>

      <!-- 空状态 -->
      <view v-if="systemNotifications.length === 0" class="text-center py-20">
        <image
          src="/static/images/empty-notification.png"
          mode="aspectFit"
          class="w-24 h-24 mx-auto mb-4"
        />
        <text class="text-gray-400 text-sm">暂无系统通知</text>
      </view>
    </view>

    <!-- 加载更多 -->
    <view v-if="hasMore" class="flex justify-center py-4">
      <button class="text-primary text-sm" :disabled="loading" @click="loadMore">
        {{ loading ? '加载中...' : '加载更多' }}
      </button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { toast } from '@/utils/toast'
import dayjs from 'dayjs'

// 响应式数据
const activeTab = ref('chat')
const chatList = ref<ChatItem[]>([])
const systemNotifications = ref<SystemNotification[]>([])
const loading = ref(false)
const hasMore = ref(true)
const currentPage = ref(1)
const pageSize = ref(20)

// 页面加载
onMounted(() => {
  loadChatList()
  loadSystemNotifications()
})

// Tab切换
const onTabChange = (tabName: string) => {
  activeTab.value = tabName
  if (tabName === 'chat' && chatList.value.length === 0) {
    loadChatList()
  } else if (tabName === 'system' && systemNotifications.value.length === 0) {
    loadSystemNotifications()
  }
}

// 加载聊天列表
const loadChatList = async (reset = false) => {
  if (loading.value) return

  try {
    loading.value = true

    if (reset) {
      currentPage.value = 1
      chatList.value = []
    }

    // 调用真实的API接口
    const params: ChatListParams = {
      page: currentPage.value,
      pageSize: pageSize.value,
    }

    const res = await getChatList({ params })

    if (res.code === 0 && res.data) {
      const newData = res.data.list || []

      if (reset) {
        chatList.value = newData
      } else {
        chatList.value.push(...newData)
      }

      hasMore.value = newData.length === pageSize.value && currentPage.value < (res.data.pages || 1)
      currentPage.value++
      return
    } else {
      toast.error(res.msg || '获取聊天列表失败')
      return
    }
  } catch (error) {
    console.error('加载聊天列表失败:', error)
    toast.error('加载失败，请重试')
  } finally {
    loading.value = false
  }
}

// 加载系统通知
const loadSystemNotifications = async (reset = false) => {
  if (loading.value) return

  try {
    loading.value = true

    if (reset) {
      currentPage.value = 1
      systemNotifications.value = []
    }

    const params: NotificationListParams = {
      page: currentPage.value,
      pageSize: pageSize.value,
    }

    const res = await getNotificationList({ params })

    if (res.code === 0 && res.data) {
      const newData = res.data.list || []

      if (reset) {
        systemNotifications.value = newData
      } else {
        systemNotifications.value.push(...newData)
      }

      hasMore.value = newData.length === pageSize.value
      currentPage.value++
      return
    } else {
      toast.error(res.msg || '获取系统通知失败')
      return
    }
  } catch (error) {
    console.error('加载系统通知失败:', error)
    toast.error('加载失败，请重试')
  } finally {
    loading.value = false
  }
}

// 加载更多
const loadMore = () => {
  if (activeTab.value === 'chat') {
    loadChatList(false)
  } else {
    loadSystemNotifications(false)
  }
}

// 打开聊天
const openChat = async (item: ChatItem) => {
  try {
    // 标记消息为已读
    if (item.unreadCount > 0) {
      await markMessageAsRead({
        body: {
          conversationId: item.conversationId,
        },
      })
      item.unreadCount = 0
    }
  } catch (error) {
    console.error('标记消息已读失败:', error)
  }

  // 跳转到聊天详情页面
  uni.navigateTo({
    url: `/pages-sub/chat-detail/chat-detail?conversationId=${item.conversationId}&userId=${item.userId}&name=${item.name}`,
  })
}

// 打开通知详情
const openNotification = async (item: SystemNotification) => {
  try {
    // 标记通知为已读
    if (!item.isRead) {
      await markNotificationAsRead({
        body: {
          notificationIds: [item.id],
        },
      })
      item.isRead = true
    }
  } catch (error) {
    console.error('标记通知已读失败:', error)
  }

  // 根据通知类型跳转到不同页面
  switch (item.type) {
    case 'job_recommendation':
      toast.info('跳转到职位推荐页面')
      // uni.navigateTo({
      //   url: '/pages-sub/job-recommendation/job-recommendation'
      // })
      break
    case 'interview_invitation':
      toast.info('跳转到面试邀约页面')
      // uni.navigateTo({
      //   url: '/pages-sub/interview-invitation/interview-invitation'
      // })
      break
    case 'application_update':
      toast.info('跳转到申请状态页面')
      // uni.navigateTo({
      //   url: '/pages-sub/application-status/application-status'
      // })
      break
    case 'system_update':
      toast.info('跳转到系统更新页面')
      // uni.navigateTo({
      //   url: '/pages-sub/system-update/system-update'
      // })
      break
    default:
      toast.info('查看通知详情')
  }
}

// 获取通知图标
const getNotificationIcon = (type: string) => {
  switch (type) {
    case 'job_recommendation':
      return 'eye'
    case 'interview_invitation':
      return 'briefcase'
    case 'application_update':
      return 'email'
    case 'system_update':
      return 'gear'
    default:
      return 'info'
  }
}

// 获取通知图标背景色
const getNotificationIconClass = (type: string) => {
  switch (type) {
    case 'job_recommendation':
      return 'bg-green-100'
    case 'interview_invitation':
      return 'bg-blue-100'
    case 'application_update':
      return 'bg-orange-100'
    case 'system_update':
      return 'bg-green-100'
    default:
      return 'bg-gray-100'
  }
}

// 获取通知图标颜色
const getNotificationIconColor = (type: string) => {
  switch (type) {
    case 'job_recommendation':
      return '#059669'
    case 'interview_invitation':
      return '#3b82f6'
    case 'application_update':
      return '#f59e0b'
    case 'system_update':
      return '#059669'
    default:
      return '#6b7280'
  }
}

// 格式化时间
const formatTime = (time: string) => {
  const now = dayjs()
  const messageTime = dayjs(time)

  if (now.diff(messageTime, 'day') === 0) {
    return messageTime.format('HH:mm')
  } else if (now.diff(messageTime, 'day') === 1) {
    return '昨天'
  } else if (now.diff(messageTime, 'day') < 7) {
    return messageTime.format('MM-DD')
  } else {
    return messageTime.format('YYYY-MM-DD')
  }
}
</script>
