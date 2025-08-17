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
    :style="'background: linear-gradient( 180deg,rgba(56, 200, 164, 0.25) 0%,rgba(56, 200, 164, 0) 100rpx,rgba(245, 246, 250, 1)200px);'"
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
          <view class="flex items-center gap-2">
            <text class="text-4 font-bold text-gray-800">热门话题</text>
            <wd-img src="/static/images/fire.png" width="13" height="16" />
          </view>
          <view class="flex flex-wrap gap-2 mt-3" v-if="hotTopics?.length > 0">
            <scroll-view :scroll-x="true">
              <view class="flex items-center gap-2 w-[600px] flex-wrap py-2">
                <wd-tag
                  v-for="topic in hotTopics"
                  :key="topic.id"
                  type="primary"
                  round
                  :bg-color="'#cce9e3'"
                >
                  #
                  <text class="text-[14px] text-primary px-2">{{ topic.name }}</text>
                  <text class="text-[12px] text-primary" v-if="false">{{ topic.count }}</text>
                </wd-tag>
              </view>
            </scroll-view>
          </view>
        </view>
        <wd-tabs v-model="categoryType" custom-class="mb-4">
          <block v-for="category in tabCategory" :key="category.id">
            <wd-tab :title="`${category.label}`"></wd-tab>
          </block>
        </wd-tabs>
        <template v-for="item in postList" :key="item.id">
          <posts :post="item"></posts>
        </template>
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
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getSystemInfoSync, navigateToSub } from '@/utils'
import { tabCategory, hotTopics as hotList } from '@/constant'
import { getForumPostPage, YRZPForumPostDO } from '@/service/app'
import { useConnect } from '@/hooks'
import posts from '@/pages/forum/components/posts.vue'
const { safeAreaInsets } = getSystemInfoSync()
const { getTieZiIds } = useConnect()

// 页面状态
const opacity = ref(0)
const categoryType = ref('hot')
const loading = ref(false)
const hasMore = ref(true)
const currentPage = ref(1)
const pageSize = ref(10)
const hotTopics = ref(hotList)
const postList = ref<YRZPForumPostDO[]>([])

const loadPostList = async (isRefresh = false) => {
  try {
    let ids = await getTieZiIds()
    const res = await getForumPostPage({
      params: {
        title: '',
        tags: '',
        type: '',
        pageNo: currentPage.value,
        pageSize: pageSize.value,
      },
    })
    postList.value = res.data.list.map((item) => {
      let info = JSON.parse(item?.info ?? '{}')
      return { ...item, isLiked: ids.includes(item.id), info }
    })
  } finally {
    loading.value = false
  }
}

// 加载初始数据
const loadInitialData = async () => {
  await Promise.all([loadPostList()])
}
const loadMore = async () => {
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

const goToPublish = () => {
  navigateToSub('/forum-publish/forum-publish')
}
onShow(() => {
  loadInitialData()
})
</script>
