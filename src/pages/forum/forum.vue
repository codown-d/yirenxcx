<route lang="json5">
{
  layout: 'blank',
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '论坛',
  },
}
</route>

<template>
  <view
    class="text-[#252525]"
    :style="'background: linear-gradient( 180deg,rgba(56, 200, 164, 0.25) 0%,rgba(56, 200, 164, 0) 200rpx,rgba(245, 246, 250, 1) 50%);'"
  >
    <scroll-view :scroll-y="true" class="h-100vh" @scroll="handleScroll" @scrolltolower="loadMore">
      <!-- 热门话题 -->
      <wd-navbar
        :bordered="false"
        :left-arrow="false"
        left-text="论坛"
        custom-class="font-bold text-primary"
        fixed
        safeAreaInsetTop
        :custom-style="`background-color: rgba(255,255,255, ${opacity})!important`"
      ></wd-navbar>
      <view
        class="bg-transparent pb-4"
        :style="{
          paddingTop: safeAreaInsets?.top + 44 + 'px',
        }"
      >
        <view class="px-4 pt-2">
          <view class="flex items-center justify-between">
            <view class="flex items-center gap-2">
              <text class="text-4 font-bold text-gray-800">热门话题</text>
              <wd-img src="/static/images/fire.png" width="13" height="16" />
            </view>
            <view class="flex items-center" @click="goToMoreTopics">
              <text class="text-3 text-[#999]">更多</text>
              <wd-icon name="arrow-right" custom-class="ml-1 !text-[#999]" />
            </view>
          </view>

          <view class="flex flex-wrap gap-2 mt-3" v-if="hotTopics?.length > 0">
            <scroll-view :scroll-x="true">
              <view class="flex items-center gap-2 w-[600px] flex-wrap">
                <wd-tag
                  v-for="topic in hotTopics"
                  :key="topic.id"
                  type="primary"
                  round
                  :bg-color="'#cce9e3'"
                  @click="goToTopic(topic.id)"
                >
                  #
                  <text class="text-[14px] text-primary px-2">{{ topic.name }}</text>
                  <text class="text-[12px] text-gray-500">{{ topic.count }}</text>
                </wd-tag>
              </view>
            </scroll-view>
          </view>
        </view>
        <wd-tabs v-model="categoryType">
          <block v-for="category in tabCategory" :key="category.id">
            <wd-tab :title="`${category.label}`"></wd-tab>
          </block>
        </wd-tabs>

        <!-- 帖子列表 -->
        <view class="mx-4 mt-3 space-y-3">
          <view
            v-for="post in postList"
            :key="post.id"
            class="bg-white rounded-3 p-4"
            @click="goToPostDetail(post.id)"
          >
            <!-- 用户信息 -->
            <view class="flex items-center justify-between mb-3">
              <view class="flex items-center">
                <image
                  :src="post.author.avatar"
                  class="w-10 h-10 rounded-full mr-3"
                  mode="aspectFill"
                />
                <view>
                  <text class="text-3 font-medium text-gray-800 block">{{ post.author.name }}</text>
                  <text class="text-2 text-gray-500">{{ post.author.title }}</text>
                </view>
              </view>
              <view class="flex items-center">
                <text class="text-2 text-gray-400">{{ post.publishTime }}</text>
                <wd-icon name="more-horizontal" size="16px" color="#ccc" class="ml-2" />
              </view>
            </view>

            <!-- 帖子内容 -->
            <view class="mb-3">
              <text class="text-3 text-gray-800 leading-relaxed">{{ post.content }}</text>
            </view>

            <!-- 图片展示 -->
            <view v-if="post.images && post.images.length > 0" class="mb-3">
              <view class="flex gap-2">
                <image
                  v-for="(image, index) in post.images.slice(0, 3)"
                  :key="index"
                  :src="image"
                  class="w-20 h-20 rounded-2 flex-shrink-0"
                  mode="aspectFill"
                  @click.stop="previewImage(post.images, index)"
                />
              </view>
            </view>

            <!-- 话题标签 -->
            <view v-if="post.topics && post.topics.length > 0" class="mb-3">
              <view class="flex flex-wrap gap-2">
                <wd-tag v-for="topic in post.topics" :key="topic" type="primary" size="small" plain>
                  {{ topic }}
                </wd-tag>
              </view>
            </view>

            <!-- 互动数据 -->
            <view class="flex items-center justify-between">
              <view class="flex items-center gap-4">
                <view class="flex items-center" @click.stop="toggleLike(post.id)">
                  <wd-icon
                    :name="post.isLiked ? 'heart-filled' : 'heart'"
                    :color="post.isLiked ? '#ff4757' : '#999'"
                    size="16px"
                  />
                  <text class="text-2 text-gray-500 ml-1">{{ post.likeCount }}</text>
                </view>
                <view class="flex items-center" @click.stop="goToComments(post.id)">
                  <wd-icon name="chat" size="16px" color="#999" />
                  <text class="text-2 text-gray-500 ml-1">{{ post.commentCount }}</text>
                </view>
              </view>
              <view class="flex items-center" @click.stop="sharePost(post.id)">
                <wd-icon name="share" size="16px" color="#999" />
                <text class="text-2 text-gray-500 ml-1">{{ post.shareCount }}</text>
              </view>
            </view>
          </view>
        </view>

        <!-- 加载更多 -->
        <wd-loadmore :state="loading ? 'loading' : 'finished'"></wd-loadmore>
      </view>
    </scroll-view>

    <!-- 发布按钮 -->
    <view class="fixed bottom-25 right-4 z-10">
      <wd-button type="primary" round size="medium" @click="goToPublish">
        <view class="flex items-center gap-1">
          <wd-img src="/static/images/fabu.png" width="20" height="20" />
          发动态
        </view>
      </wd-button>
    </view>

    <!-- 底部导航 -->
    <yr-tab-bar :tab-index="3"></yr-tab-bar>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { toast } from '@/utils/toast'
import { getSystemInfoSync, navigateToSub } from '@/utils'

import { tabCategory, hotTopics as hotList, postList as pl } from '@/constant'
import { getForumPostPage, getForumPost } from '@/service/index/yirenzhipinApPluntantiezi'
import type { YRZPForumPostRespAppVO } from '@/service/index/types'

// 临时类型定义，应该从service中获取
interface ForumTopic {
  id: string
  name: string
  count: number
  isFollowed?: boolean
}

interface ForumPost {
  id: string
  title: string
  content: string
  author: {
    id: string
    name: string
    avatar: string
  }
  createTime: string
  publishTime?: string
  viewCount: number
  likeCount: number
  commentCount: number
  isLiked?: boolean
  images?: string[]
  topics?: string[]
  shareCount?: number
}

// 模拟接口方法
const getHotTopics = async (params: any) => {
  return {
    code: 0,
    data: hotList,
    msg: 'success',
  }
}

const getForumPosts = async (params: any) => {
  return {
    code: 0,
    data: {
      list: pl,
      total: pl.length,
      hasMore: false,
    },
    msg: 'success',
  }
}

const togglePostLike = async (params: any) => {
  return {
    code: 0,
    data: {
      isLiked: params.body.action === 'like',
      likeCount: Math.floor(Math.random() * 100),
    },
    msg: 'success',
  }
}

const shareForumPost = async (params: any) => {
  return {
    code: 0,
    data: {
      shareCount: Math.floor(Math.random() * 50),
    },
    msg: 'success',
  }
}

const { safeAreaInsets } = getSystemInfoSync()

// 页面状态
const opacity = ref(0)
const categoryType = ref('hot')
const loading = ref(false)
const hasMore = ref(true)
const selectedCategory = ref('hot')
const currentPage = ref(1)
const pageSize = ref(10)
const hotTopics = ref<ForumTopic[]>(hotList)
const postList = ref<ForumPost[]>(pl)

// 加载热门话题
const loadHotTopics = async () => {
  const res = await getHotTopics({
    params: { limit: 10 },
  })
  if (res.code === 0) {
    hotTopics.value = res.data
  } else {
    hotTopics.value = hotList
  }
}

// 加载帖子列表
const loadPostList = async (isRefresh = false) => {
  try {
    loading.value = true
    if (isRefresh) {
      currentPage.value = 1
      hasMore.value = true
      postList.value = []
    }

    const res = await getForumPosts({
      params: {
        category: selectedCategory.value,
        page: currentPage.value,
        size: pageSize.value,
        sortBy: selectedCategory.value === 'hot' ? 'hot' : 'latest',
      },
    })

    if (res.code === 0) {
      postList.value.push(...res.data.list)
      hasMore.value = res.data.hasMore
      if (hasMore.value) {
        currentPage.value++
      }
    } else {
      toast.error(res.msg || '加载失败')
    }
  } finally {
    loading.value = false
  }
}

// 加载初始数据
const loadInitialData = async () => {
  await Promise.all([loadHotTopics(), loadPostList()])
}
// 加载更多
const loadMore = async () => {
  console.log('加载更多', loading.value, hasMore.value)
  if (loading.value || !hasMore.value) return
  await loadPostList(false)
}
const handleScroll = (e: any) => {
  if (e.detail.scrollTop > 100) {
    opacity.value = 1
  } else {
    opacity.value = e.detail.scrollTop / 100
  }
}

// 跳转到更多话题
const goToMoreTopics = () => {
  navigateToSub('/forum-topics/forum-topics')
}

// 跳转到话题详情
const goToTopic = (topicId: string) => {
  uni.navigateTo({
    url: `/pages-sub/forum-topic-detail/forum-topic-detail?id=${topicId}`,
  })
}

// 跳转到帖子详情
const goToPostDetail = (postId: string) => {
  uni.navigateTo({
    url: `/pages-sub/forum-post-detail/forum-post-detail?id=${postId}`,
  })
}

// 切换点赞
const toggleLike = async (postId: string) => {
  const post = postList.value.find((p) => p.id === postId)
  if (!post) return

  try {
    const action = post.isLiked ? 'unlike' : 'like'
    const res = await togglePostLike({
      body: { postId, action },
    })

    if (res.code === 0) {
      post.isLiked = res.data.isLiked
      post.likeCount = res.data.likeCount
      toast.success(post.isLiked ? '点赞成功' : '取消点赞')
    } else {
      toast.error(res.msg || '操作失败')
    }
  } catch (error) {
    console.error('点赞失败:', error)
    toast.error('操作失败')
  }
}

// 跳转到评论
const goToComments = (postId: string) => {
  uni.navigateTo({
    url: `/pages-sub/forum-post-detail/forum-post-detail?id=${postId}&tab=comments`,
  })
}

// 分享帖子
const sharePost = async (postId: string) => {
  try {
    const res = await shareForumPost({
      body: {
        postId,
        platform: 'wechat',
      },
    })

    if (res.code === 0) {
      // 更新分享数量
      const post = postList.value.find((p) => p.id === postId)
      if (post) {
        post.shareCount = res.data.shareCount
      }
      toast.success('分享成功')
    } else {
      toast.error(res.msg || '分享失败')
    }
  } catch (error) {
    console.error('分享失败:', error)
    toast.error('分享失败')
  }
}

// 预览图片
const previewImage = (images: string[], current: number) => {
  uni.previewImage({
    urls: images,
    current: current,
  })
}

// 跳转到发布页面
const goToPublish = () => {
  uni.navigateTo({
    url: '/pages-sub/forum-publish/forum-publish',
  })
}
onMounted(() => {
  loadInitialData()
})
</script>
