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
          <view class="flex flex-wrap gap-2 mt-3" v-if="dictData.availableTopics?.length > 0">
            <scroll-view :scroll-x="true">
              <view class="flex items-center gap-2 w-[600px] flex-wrap py-2">
                <wd-tag
                  v-for="topic in dictData.availableTopics"
                  :key="topic.value"
                  type="primary"
                  round
                  bg-color="#cce9e3"
                  @click="toggleTopic(topic.value)"
                >
                  #
                  <text class="text-[14px] text-primary px-2">{{ topic.value }}</text>
                </wd-tag>
              </view>
            </scroll-view>
          </view>
        </view>
        <wd-tabs v-model="categoryType" custom-class="mb-4" @change="onChange">
          <wd-tab
            v-for="category in tabCategory"
            :title="`${category.label}`"
            :key="category.value"
            :name="category.value"
          ></wd-tab>
        </wd-tabs>
        <template v-for="item in postList" :key="item.id">
          <posts :post="item" @favorite="loadPostList"></posts>
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

    <yr-tab-bar :tabIndex="3"></yr-tab-bar>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getSystemInfoSync, navigateToSub } from '@/utils'
import { getForumPostPage, YRZPForumPostDO } from '@/service/app'
import { useConnect } from '@/hooks'
import posts from '@/pages/forum/components/posts.vue'

import { useDictData } from '@/hooks'
let { dictData } = useDictData()

const { safeAreaInsets } = getSystemInfoSync()
const { getTieZiIds } = useConnect()
// 分类数据
const tabCategory = ref([
  { id: '1', label: '热门', value: '1', postCount: 0, isDefault: true },
  { id: '2', label: '最新', value: '2', postCount: 0, isDefault: false },
  { id: '3', label: '关注', value: '3', postCount: 0, isDefault: false },
  { id: '4', label: '我的', value: '4', postCount: 0, isDefault: false },
])
// 页面状态
const opacity = ref(0)
const categoryType = ref('1')
const tags = ref()
const loading = ref(false)
const hasMore = ref(true)
const currentPage = ref(1)
const pageSize = ref(10)
const postList = ref<YRZPForumPostDO[]>([])

const onChange = ({ index, name }) => {
  categoryType.value = name
  loadPostList()
}
const toggleTopic = (val) => {
  tags.value = val
  loadPostList()
}
const loadPostList = async (isRefresh = false) => {
  try {
    let ids = await getTieZiIds()
    const res = await getForumPostPage({
      params: {
        title: '',
        tags: tags.value,
        type: categoryType.value,
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
