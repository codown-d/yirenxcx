<template>
  <view class="forum-page">
    <!-- 顶部导航 -->
    <view class="forum-header">
      <view class="header-tabs">
        <view
          v-for="(tab, index) in tabs"
          :key="index"
          class="tab-item"
          :class="{ active: activeTab === index }"
          @click="switchTab(index)"
        >
          {{ tab.name }}
        </view>
      </view>
      <view class="search-icon" @click="handleSearch">
        <text class="iconfont icon-search">🔍</text>
      </view>
    </view>

    <!-- 帖子列表 -->
    <scroll-view
      class="forum-content"
      scroll-y
      @scrolltolower="loadMore"
      refresher-enabled
      @refresherrefresh="onRefresh"
      :refresher-triggered="refreshing"
    >
      <view class="post-list">
        <view
          v-for="(post, index) in postList"
          :key="post.id"
          class="post-item"
          @click="handlePostClick(post)"
        >
          <view class="post-header">
            <view class="user-info">
              <image :src="post.avatar" class="user-avatar" />
              <view class="user-details">
                <text class="username">{{ post.username }}</text>
                <text class="post-time">{{ post.createTime }}</text>
              </view>
            </view>
            <view class="post-category">{{ post.category }}</view>
          </view>
          
          <view class="post-content">
            <text class="post-title">{{ post.title }}</text>
            <text class="post-summary">{{ post.summary }}</text>
          </view>
          
          <view v-if="post.images && post.images.length > 0" class="post-images">
            <image
              v-for="(img, imgIndex) in post.images.slice(0, 3)"
              :key="imgIndex"
              :src="img"
              class="post-image"
              mode="aspectFill"
            />
          </view>
          
          <view class="post-footer">
            <view class="post-stats">
              <text class="stat-item">👍 {{ post.likeCount }}</text>
              <text class="stat-item">💬 {{ post.commentCount }}</text>
              <text class="stat-item">👁 {{ post.viewCount }}</text>
            </view>
          </view>
        </view>
      </view>
      
      <!-- 加载更多 -->
      <view v-if="loading" class="loading">
        <text>加载中...</text>
      </view>
    </scroll-view>

    <!-- 发帖按钮 -->
    <view class="fab-button" @click="handleCreatePost">
      <text class="fab-icon">✏️</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface PostItem {
  id: number
  title: string
  summary: string
  content: string
  username: string
  avatar: string
  createTime: string
  category: string
  likeCount: number
  commentCount: number
  viewCount: number
  images?: string[]
}

const activeTab = ref(0)
const refreshing = ref(false)
const loading = ref(false)
const postList = ref<PostItem[]>([])

const tabs = [
  { name: '推荐', type: 'recommend' },
  { name: '最新', type: 'latest' },
  { name: '热门', type: 'hot' }
]

// 模拟帖子数据
const mockPosts: PostItem[] = [
  {
    id: 1,
    title: '分享一个很棒的学习方法',
    summary: '最近发现了一个很有效的学习方法，想和大家分享一下...',
    content: '',
    username: '学习达人',
    avatar: '/static/images/default-avatar.png',
    createTime: '2小时前',
    category: '学习',
    likeCount: 128,
    commentCount: 45,
    viewCount: 1200,
    images: ['/static/images/avatar.jpg']
  },
  {
    id: 2,
    title: '今天的天气真不错',
    summary: '阳光明媚，适合出去走走，大家有什么好的去处推荐吗？',
    content: '',
    username: '阳光小子',
    avatar: '/static/images/default-avatar.png',
    createTime: '4小时前',
    category: '生活',
    likeCount: 56,
    commentCount: 23,
    viewCount: 890
  },
  {
    id: 3,
    title: '技术分享：Vue3的新特性',
    summary: 'Vue3带来了很多新的特性，让我们一起来了解一下...',
    content: '',
    username: '前端工程师',
    avatar: '/static/images/default-avatar.png',
    createTime: '1天前',
    category: '技术',
    likeCount: 234,
    commentCount: 67,
    viewCount: 2100
  }
]

onMounted(() => {
  loadPosts()
})

const switchTab = (index: number) => {
  activeTab.value = index
  loadPosts()
}

const loadPosts = () => {
  loading.value = true
  // 模拟加载数据
  setTimeout(() => {
    postList.value = mockPosts
    loading.value = false
  }, 500)
}

const loadMore = () => {
  if (loading.value) return
  loading.value = true
  // 模拟加载更多数据
  setTimeout(() => {
    loading.value = false
  }, 1000)
}

const onRefresh = () => {
  refreshing.value = true
  setTimeout(() => {
    loadPosts()
    refreshing.value = false
  }, 1000)
}

const handleSearch = () => {
  uni.navigateTo({
    url: '/pages/forum/search'
  })
}

const handlePostClick = (post: PostItem) => {
  uni.navigateTo({
    url: `/pages/forum/detail?id=${post.id}`
  })
}

const handleCreatePost = () => {
  uni.navigateTo({
    url: '/pages/forum/create'
  })
}
</script>

<style lang="scss" scoped>
.forum-page {
  height: 100vh;
  background-color: #f5f5f5;
  position: relative;
}

.forum-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20rpx;
  background-color: #fff;
  border-bottom: 1rpx solid #eee;
}

.header-tabs {
  display: flex;
}

.tab-item {
  padding: 16rpx 32rpx;
  margin-right: 20rpx;
  font-size: 28rpx;
  color: #666;
  border-radius: 40rpx;
  
  &.active {
    background-color: #018d71;
    color: #fff;
  }
}

.search-icon {
  padding: 16rpx;
  font-size: 32rpx;
}

.forum-content {
  height: calc(100vh - 120rpx);
}

.post-list {
  padding: 20rpx;
}

.post-item {
  background-color: #fff;
  border-radius: 16rpx;
  padding: 30rpx;
  margin-bottom: 20rpx;
  
  &:active {
    background-color: #f9f9f9;
  }
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20rpx;
}

.user-info {
  display: flex;
  align-items: center;
}

.user-avatar {
  width: 60rpx;
  height: 60rpx;
  border-radius: 50%;
  margin-right: 20rpx;
}

.user-details {
  display: flex;
  flex-direction: column;
}

.username {
  font-size: 28rpx;
  color: #333;
  font-weight: 500;
}

.post-time {
  font-size: 24rpx;
  color: #999;
  margin-top: 4rpx;
}

.post-category {
  padding: 8rpx 16rpx;
  background-color: #f0f0f0;
  border-radius: 20rpx;
  font-size: 24rpx;
  color: #666;
}

.post-content {
  margin-bottom: 20rpx;
}

.post-title {
  font-size: 32rpx;
  font-weight: 500;
  color: #333;
  line-height: 1.4;
  margin-bottom: 10rpx;
  display: block;
}

.post-summary {
  font-size: 28rpx;
  color: #666;
  line-height: 1.5;
  display: block;
}

.post-images {
  display: flex;
  gap: 10rpx;
  margin-bottom: 20rpx;
}

.post-image {
  width: 200rpx;
  height: 200rpx;
  border-radius: 12rpx;
}

.post-footer {
  border-top: 1rpx solid #f0f0f0;
  padding-top: 20rpx;
}

.post-stats {
  display: flex;
  gap: 40rpx;
}

.stat-item {
  font-size: 24rpx;
  color: #999;
}

.loading {
  text-align: center;
  padding: 40rpx;
  color: #999;
}

.fab-button {
  position: fixed;
  right: 40rpx;
  bottom: 120rpx;
  width: 100rpx;
  height: 100rpx;
  background-color: #018d71;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4rpx 20rpx rgba(1, 141, 113, 0.3);
  z-index: 999;
  
  &:active {
    transform: scale(0.95);
  }
}

.fab-icon {
  font-size: 40rpx;
  color: #fff;
}
</style>
