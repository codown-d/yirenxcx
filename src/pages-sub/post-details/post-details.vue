<route lang="json5">
{
  layout: 'blank',
  style: {
    navigationBarTitleText: '论坛',
  },
}
</route>
<template>
  <scroll-view
    class="h-100vh bg-[#F5F6FA]"
    scroll-y
    :scroll-top="scrollTop"
    @scrolltolower="onScrollToLower"
  >
    <view class="flex flex-col px-2">
      <wd-card class="mb-4">
        <view class="flex items-center justify-between mb-2">
          <view class="flex items-center">
            <image
              :src="post.info.avatar"
              class="w-10 h-10 rounded-full mr-3 bg-gray-100"
              mode="aspectFill"
            />
            <view>
              <text class="font-medium text-gray-800 text-[16px]">{{ post.title }}</text>
              <text class="text-2 text-gray-500" v-if="false">{{ post.title }}</text>
            </view>
          </view>
          <yr-time-now :time="post.createTime"></yr-time-now>
        </view>

        <view class="mb-2">
          <text class="text-gray-800 leading-relaxed text-[14px]">{{ post.content }}</text>
        </view>

        <view class="mb-2" v-if="post.images">
          <yr-img-preview v-model="post.images" />
        </view>
        <yr-tag-list v-model="post.tags" />
      </wd-card>
      <view class="flex mb-4 px-4 text-black text-[16px]">评论</view>
      <wd-card v-for="(reply, index) in replies" :key="reply.id" custom-class="mb-3 ">
        <view class="flex items-center gap-2 mb-1">
          <image :src="reply.user.avatar" class="w-10 h-10 rounded-full" mode="aspectFill" />
          <text class="font-medium text-gray-700">{{ reply.user.name }}</text>
          <text class="text-gray-400 text-3">#{{ index + 1 }}</text>
          <text class="text-gray-400 text-3 ml-auto">{{ dayjs(reply.createTime).fromNow() }}</text>
        </view>
        <text class="ml-10 text-gray-800 text-[16px]">{{ reply.content }}</text>
      </wd-card>
      <wd-status-tip image="content" tip="暂无内容" v-if="replies.length == 0" />
      <view v-if="noMoreData && replies.length != 0" class="text-center text-gray-400 mt-4 pb-34">
        暂无更多数据
      </view>
    </view>
  </scroll-view>
  <yr-page-footer>
    <view class="flex w-full items-center gap-2">
      <wd-input
        v-model="replyContent"
        placeholder="写下你的回复..."
        custom-class="flex-1 border rounded-[6px] px-3 py-2 text-gray-800 text-[14px]"
        @confirm="sendReply"
      />
      <wd-button
        type="primary"
        custom-class="!px-2 rounded-2 !min-w-[68px]"
        :round="false"
        @click="sendReply"
      >
        发送
      </wd-button>
    </view>
  </yr-page-footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { toast } from '@/utils/toast'
import dayjs from 'dayjs'
import { getPostDetail, getReplies, sendReplyApi } from '@/service/app'
import { merge } from 'lodash-es'

const post = ref({
  info: { avatar: '', name: '' },
  title: '',
  content: '',
  images: '',
  tags: '',
  likeCount: 0,
  isLiked: false,
})

const isLiked = ref(false)
const replies = ref([])
const replyContent = ref('')
const scrollTop = ref(0)
let pageNo = ref(1)
let pageSize = ref(10)
let noMoreData = ref(false)

const postId = ref()
// 获取帖子详情
const fetchPostDetail = async () => {
  const res = await getPostDetail({ params: { id: postId.value } })
  post.value = merge({}, res.data, { info: JSON.parse(res.data.info) })
  isLiked.value = res.data.isLiked
}
let parentId = ref('')
// 获取回复列表
const fetchReplies = async () => {
  if (noMoreData.value) return
  const res = await getReplies({
    params: {
      postId: postId.value,
      parentId: parentId.value,
      pageNo: pageNo.value,
      pageSize: pageSize.value,
    },
  })
  if (pageSize.value == res.data.list.length) {
    pageNo.value++
  } else {
    noMoreData.value = true
  }
  replies.value = [
    ...replies.value,
    ...res.data.list.map((item) => {
      try {
        return merge({}, item, { user: JSON.parse(item.info) })
      } catch (e) {
        return merge({}, item, {
          user: {
            avatar: '/static/images/yiren.png',
            name: '-',
            id: '',
          },
        })
      }
    }),
  ]
}

// 发送回复
const sendReply = async () => {
  const content = replyContent.value.trim()
  if (!content) return toast.info('请输入回复内容')
  let userId = uni.getStorageSync('userId')
  const res = await sendReplyApi({ body: { postId: postId.value, content, userId } })
  if (res.code == 0) {
    noMoreData.value = false
    pageNo.value = 1
    replies.value = []
    fetchReplies()
    replyContent.value = ''
    scrollTop.value = 99999 // 滚动到底部
  }
}
const onScrollToLower = () => {
  fetchReplies()
}
onLoad((options) => {
  if (options?.postId) {
    postId.value = options.postId
    fetchPostDetail()
    fetchReplies()
  }
})
</script>
