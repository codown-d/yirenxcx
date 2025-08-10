<template>
  <!-- 用户信息 -->
  <wd-card>
    <view class="flex items-center justify-between mb-3">
      <view class="flex items-center">
        <image
          :src="post.info.avatar"
          class="w-10 h-10 rounded-full mr-3 bg-gray-100"
          mode="aspectFill"
        />
        <view>
          <text class="text-3 font-medium text-gray-800 block">{{ post.info.name }}</text>
          <text class="text-2 text-gray-500">{{ post.info.title }}</text>
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
        <wd-img
          v-for="(image, index) in post.images.slice(0, 3)"
          :width="100"
          :height="100"
          :src="image"
          :enable-preview="true"
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
            :name="isLiked ? 'heart-filled' : 'heart'"
            :color="isLiked ? '#ff4757' : '#999'"
            size="24px"
          />
          <text class="text-gray-500 ml-1">{{ post.likeCount }}</text>
        </view>
        <view class="flex items-center" @click.stop="goToComments(post.id)">
          <wd-icon name="chat" size="22px" />
          <text class="text-gray-500 ml-1">{{ post.commentCount }}</text>
        </view>
      </view>
    </view>
  </wd-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { useConnect } from '@/hooks'

const { changeConnect } = useConnect()
const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
})
const isLiked = ref(props.post.isLiked)
const toggleLike = (id) => {
  changeConnect({ tieZiId: id }, isLiked.value, () => {
    isLiked.value = !isLiked.value
  })
}
const goToComments = (val) => {
  console.log(val)
}
onShow(() => {})
</script>
