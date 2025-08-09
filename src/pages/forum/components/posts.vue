<template>
  <!-- 用户信息 -->
  <wd-card>
    <view class="flex items-center justify-between mb-3">
      <view class="flex items-center">
        <image :src="post.avatar" class="w-10 h-10 rounded-full mr-3" mode="aspectFill" />
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
  </wd-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { useConnect } from '@/hooks'

const { changeConnect, getTieZi } = useConnect()
const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
})
let isLiked = ref(false)
const toggleLike = (id) => {
  changeConnect({ tieZiId: id }, isLiked.value, () => {
    isLiked.value = !isLiked.value
  })
}

let getInit = async () => {
  let res = await getTieZi()
  console.log(res)
}
onShow(() => {
  getInit()
})
console.log(props.post, 'props post')
</script>
