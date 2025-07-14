<route lang="json5">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '热门话题',
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <view class="p-4 space-y-3 bg-[#F5F6FA] min-h-100vh">
    <view
      v-for="topic in topicList"
      :key="topic.id"
      class="bg-white rounded-3 p-4"
      @click="goToTopicDetail(topic.id)"
    >
      <view class="flex items-center justify-between">
        <!-- 话题信息 -->
        <view class="flex flex-1">
          <wd-img src="/static/images/jinhao.png" width="20" height="20" />
          <view class="flex-1 ml-2">
            <view class="flex mb-1">
              <text class="text-4 font-medium text-gray-800 mr-2">{{ topic.name }}</text>
              <wd-img src="/static/images/fire.png" width="18" height="20" />
            </view>
            <text class="text-3 text-gray-500">{{ topic.participantCount }}人参与</text>
          </view>
        </view>

        <!-- 参与按钮 -->
        <wd-button
          custom-class="px-4"
          size="small"
          :round="false"
          @click.stop="participateTopic(topic.id)"
        >
          {{ '去参与' }}
        </wd-button>
      </view>
    </view>
    <wd-loadmore :state="loading ? 'loading' : 'finished'"></wd-loadmore>

    <view class="pb-safe"></view>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { toast } from '@/utils/toast'
import { navigateToSub } from '@/utils'
import { ForumTopic, getHotTopics } from '@/types/forum'

// 页面状态
const loading = ref(false)
const hasMore = ref(true)
const currentPage = ref(1)
const pageSize = ref(20)

// 扩展话题类型
interface ExtendedForumTopic extends ForumTopic {
  participantCount: number
  isParticipated: boolean
  latestPosts?: {
    id: string
    content: string
    author: {
      name: string
    }
    publishTime: string
  }[]
}

// 话题列表数据
const topicList = ref<ExtendedForumTopic[]>([
  {
    id: '1',
    name: '话题名称',
    description: '这是一个关于舞蹈技巧分享的话题，大家可以在这里交流各种舞蹈心得和技巧。',
    count: 1233,
    participantCount: 1233,
    isHot: true,
    isFollowed: false,
    isParticipated: false,
    latestPosts: [
      {
        id: '1',
        content: '刚刚学会了一个新的舞蹈动作，想和大家分享一下心得...',
        author: { name: '舞蹈小王子' },
        publishTime: '2小时前',
      },
      {
        id: '2',
        content: '有没有人知道这个动作怎么做得更标准？',
        author: { name: '舞蹈爱好者' },
        publishTime: '3小时前',
      },
    ],
  },
  {
    id: '2',
    name: '话题名称',
    description: '招聘信息分享，包括各种演出机会、工作岗位等。',
    count: 1233,
    participantCount: 1233,
    isHot: true,
    isFollowed: false,
    isParticipated: true,
    latestPosts: [],
  },
  {
    id: '3',
    name: '话题名称',
    description: '武术交流讨论，分享武术心得和技巧。',
    count: 1233,
    participantCount: 1233,
    isHot: true,
    isFollowed: false,
    isParticipated: false,
    latestPosts: [],
  },
  {
    id: '4',
    name: '话题名称',
    description: '一般性话题讨论，各种日常交流。',
    count: 1233,
    participantCount: 1233,
    isHot: false,
    isFollowed: false,
    isParticipated: false,
    latestPosts: [],
  },
  {
    id: '5',
    name: '话题名称',
    description: '更多有趣的话题等你来发现和参与。',
    count: 1233,
    participantCount: 1233,
    isHot: false,
    isFollowed: false,
    isParticipated: false,
    latestPosts: [],
  },
])

onMounted(() => {
  loadTopicList()
})

// 加载话题列表
const loadTopicList = async (isRefresh = false) => {
  try {
    loading.value = true

    if (isRefresh) {
      currentPage.value = 1
      hasMore.value = true
    }

    const res = await getHotTopics({
      params: {
        limit: pageSize.value,
      },
    })

    if (res.code === 0) {
      // 转换数据格式
      const topics = res.data.map((topic) => ({
        ...topic,
        participantCount: topic.count,
        isParticipated: Math.random() > 0.5, // 模拟参与状态
        latestPosts:
          Math.random() > 0.5
            ? [
                {
                  id: '1',
                  content: '这是一个示例帖子内容，展示话题下的最新讨论...',
                  author: { name: '用户' + Math.floor(Math.random() * 100) },
                  publishTime: Math.floor(Math.random() * 24) + '小时前',
                },
              ]
            : [],
      }))

      if (isRefresh) {
        topicList.value = topics
      } else {
        topicList.value.push(...topics)
      }

      hasMore.value = topics.length === pageSize.value
      currentPage.value++
    } else {
      toast.error(res.msg || '加载失败')
    }
  } catch (error) {
    console.error('加载话题列表失败:', error)
    toast.error('加载失败')
  } finally {
    loading.value = false
  }
}

// 加载更多
const loadMore = async () => {
  if (loading.value || !hasMore.value) return
  await loadTopicList(false)
}

// 刷新话题
const refreshTopics = () => {
  loadTopicList(true)
}

// 返回上一页
const handleBack = () => {
  uni.navigateBack()
}

// 更多操作
const handleMore = () => {
  uni.showActionSheet({
    itemList: ['搜索话题', '创建话题', '我的话题'],
    success: (res) => {
      switch (res.tapIndex) {
        case 0:
          toast.info('搜索话题功能')
          break
        case 1:
          goToCreateTopic()
          break
        case 2:
          goToMyTopics()
          break
      }
    },
  })
}

// 帮助
const handleHelp = () => {
  toast.info('话题帮助功能')
}

// 参与话题
const participateTopic = async (topicId: string) => {
  navigateToSub('/forum-publish/forum-publish')
}

// 跳转到话题详情
const goToTopicDetail = (topicId: string) => {
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

// 跳转到创建话题
const goToCreateTopic = () => {
  uni.navigateTo({
    url: '/pages-sub/forum-create-topic/forum-create-topic',
  })
}

// 跳转到我的话题
const goToMyTopics = () => {
  uni.navigateTo({
    url: '/pages-sub/forum-my-topics/forum-my-topics',
  })
}
</script>
