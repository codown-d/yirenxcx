<template>
  <!-- 用户信息 -->
  <wd-card>
    <view class="flex items-center justify-between mb-2">
      <view class="flex items-center">
        <image
          :src="post.info.avatar"
          class="w-10 h-10 rounded-full mr-3 bg-gray-100"
          mode="aspectFill"
        />
        <view @click.stop="goToComments(post.id)">
          <text class="font-medium text-gray-800 block text-[16px]">{{ post.title }}</text>
          <text class="text-2 text-gray-500" v-if="false">{{ post.title }}</text>
        </view>
      </view>
      <view class="flex items-center">
        <yr-time-now :time="post.createTime"></yr-time-now>
      </view>
    </view>

    <!-- 帖子内容 -->
    <view class="mb-2">
      <text class="text-gray-800 leading-relaxed text-[14px]">{{ post.content }}</text>
    </view>

    <!-- 图片展示 -->
    <view class="mb-2" v-if="post.images">
      <yr-img-preview v-model="post.images" />
    </view>
    <!-- 话题标签 -->
    <yr-tag-list v-model="post.tags" />

    <!-- 互动数据 -->
    <view class="flex items-center justify-between">
      <view class="flex items-center gap-4">
        <view class="flex items-center" @click.stop="toggleLike(post.id)">
          <wd-icon
            custom-class="text-[26px]"
            :name="isLiked ? 'heart-filled' : 'heart'"
            :color="isLiked ? '#ff4757' : '#999'"
          />
          <text class="text-gray-500 ml-1 text-[16px]">{{ post.likeCount }}</text>
        </view>
        <view class="flex items-center" @click.stop="goToComments(post.id)">
          <wd-icon name="chat" custom-class="text-[26px]" />
          <text class="text-gray-500 ml-1 text-[16px]">{{ post.commentCount }}</text>
        </view>
      </view>
    </view>
  </wd-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { useConnect } from '@/hooks'
import { navigateToSub } from '@/utils'

const { changeConnect } = useConnect()
const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
})
const isLiked = ref(props.post.isLiked)

const emit = defineEmits(['favorite'])
const toggleLike = (id) => {
  changeConnect({ tieZiId: id }, isLiked.value, () => {
    isLiked.value = !isLiked.value
    emit('favorite', isLiked.value)
  })
}
const goToComments = (postId) => {
  navigateToSub('/post-details/post-details?postId=' + postId)
}
</script>
