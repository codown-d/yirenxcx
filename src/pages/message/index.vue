<template>
  <view class="message-page">
    <!-- 顶部搜索栏 -->
    <view class="search-bar">
      <wd-search
        v-model="searchValue"
        placeholder="搜索消息"
        @search="handleSearch"
      />
    </view>

    <!-- 消息列表 -->
    <view class="message-list">
      <view
        v-for="(item, index) in messageList"
        :key="index"
        class="message-item"
        @click="handleMessageClick(item)"
      >
        <view class="avatar">
          <image :src="item.avatar" class="avatar-img" />
          <view v-if="item.unreadCount > 0" class="badge">
            {{ item.unreadCount > 99 ? '99+' : item.unreadCount }}
          </view>
        </view>
        
        <view class="message-content">
          <view class="message-header">
            <text class="username">{{ item.username }}</text>
            <text class="time">{{ item.time }}</text>
          </view>
          <view class="message-text">
            {{ item.lastMessage }}
          </view>
        </view>
      </view>
    </view>

    <!-- 空状态 -->
    <view v-if="messageList.length === 0" class="empty-state">
      <image src="/static/images/empty-message.png" class="empty-image" />
      <text class="empty-text">暂无消息</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface MessageItem {
  id: number
  username: string
  avatar: string
  lastMessage: string
  time: string
  unreadCount: number
}

const searchValue = ref('')
const messageList = ref<MessageItem[]>([])

// 模拟消息数据
const mockMessages: MessageItem[] = [
  {
    id: 1,
    username: '张三',
    avatar: '/static/images/avatar.jpg',
    lastMessage: '你好，最近怎么样？',
    time: '10:30',
    unreadCount: 2
  },
  {
    id: 2,
    username: '李四',
    avatar: '/static/images/default-avatar.png',
    lastMessage: '明天的会议记得参加',
    time: '09:15',
    unreadCount: 0
  },
  {
    id: 3,
    username: '王五',
    avatar: '/static/images/default-avatar.png',
    lastMessage: '文件已经发送给你了',
    time: '昨天',
    unreadCount: 1
  }
]

onMounted(() => {
  loadMessages()
})

const loadMessages = () => {
  // 模拟加载消息列表
  messageList.value = mockMessages
}

const handleSearch = (value: string) => {
  console.log('搜索:', value)
  // 实现搜索逻辑
}

const handleMessageClick = (item: MessageItem) => {
  console.log('点击消息:', item)
  // 跳转到聊天页面
  uni.navigateTo({
    url: `/pages/chat/index?userId=${item.id}&username=${item.username}`
  })
}
</script>

<style lang="scss" scoped>
.message-page {
  height: 100vh;
  background-color: #f5f5f5;
}

.search-bar {
  padding: 20rpx;
  background-color: #fff;
  border-bottom: 1rpx solid #eee;
}

.message-list {
  background-color: #fff;
}

.message-item {
  display: flex;
  padding: 30rpx 20rpx;
  border-bottom: 1rpx solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:active {
    background-color: #f5f5f5;
  }
}

.avatar {
  position: relative;
  margin-right: 20rpx;
  
  .avatar-img {
    width: 100rpx;
    height: 100rpx;
    border-radius: 50%;
  }
  
  .badge {
    position: absolute;
    top: -10rpx;
    right: -10rpx;
    min-width: 36rpx;
    height: 36rpx;
    line-height: 36rpx;
    text-align: center;
    background-color: #ff4757;
    color: #fff;
    font-size: 20rpx;
    border-radius: 18rpx;
    padding: 0 8rpx;
  }
}

.message-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.message-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10rpx;
}

.username {
  font-size: 32rpx;
  font-weight: 500;
  color: #333;
}

.time {
  font-size: 24rpx;
  color: #999;
}

.message-text {
  font-size: 28rpx;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 200rpx;
}

.empty-image {
  width: 200rpx;
  height: 200rpx;
  margin-bottom: 40rpx;
}

.empty-text {
  font-size: 28rpx;
  color: #999;
}
</style>
