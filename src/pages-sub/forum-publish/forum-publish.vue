<route lang="json5">
{
  layout: 'common',
  style: {
    navigationBarTitleText: '发布动态',
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <view @click="closeOutside">
    <!-- 内容编辑区域 -->
    <view class="bg-white mx-3 mt-3 rounded-3 p-4">
      <!-- 图片上传区域 -->
      <yr-upload v-model="postData.images" :limit="5"></yr-upload>
      <wd-input v-model="postData.title" placeholder="分享一个有趣的话题" />

      <!-- 提示文字 -->
      <view class="mb-3 mt-1">
        <wd-textarea
          v-model="postData.content"
          placeholder="分享你的想法，经验或见解~"
          auto-height
          no-border
        />
        <!-- 选中的话题标签 -->
        <view class="flex flex-wrap gap-2">
          <yr-tag-list v-model="postData.tags" />
        </view>
      </view>
      <!-- 话题和心情 -->
      <view class="flex items-center gap-3">
        <yr-popup v-model="postData.tags">
          <wd-button size="small" type="info">
            <text class=""># 话题</text>
          </wd-button>
        </yr-popup>
        <wd-popover use-content-slot placement="bottom">
          <template #content>
            <view class="flex flex-wrap w-[210px] gap-1 p-2">
              <text
                @click="addMood(item)"
                v-for="(item, index) in mood"
                class="text-[18px]"
                :key="index"
              >
                {{ item }}
              </text>
            </view>
          </template>
          <wd-button size="small" type="info">
            <wd-icon name="heart" />
            心情
          </wd-button>
        </wd-popover>
      </view>
    </view>
    <wd-card custom-class="!mt-4">
      <wd-cell title="帖子分类">
        <yr-picker :columns="dictData.PostCategory" v-model="postData.category" />
      </wd-cell>
      <wd-cell title="位置信息">
        <yr-location-picker
          v-model="postData.locationCode"
          @confirmLabel="(val) => (postData.location = val)"
        />
      </wd-cell>
      <wd-cell title="可见性设置">
        <yr-picker
          v-model="postData.visibilitySetting"
          :columns="dictData.visibilitySetting"
          title="可见性设置"
        />
      </wd-cell>
    </wd-card>
    <yr-page-footer>
      <wd-button
        type="primary"
        :round="false"
        block
        :loading="publishing"
        :disabled="!canPublish"
        @click="publishPost"
      >
        {{ publishing ? '发布中...' : '发布' }}
      </wd-button>
    </yr-page-footer>
  </view>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useUserStore } from '@/store'
import { createForumPost } from '@/service/app'
import { navigateBack } from '@/utils'
import { useQueue } from 'wot-design-uni'
import { useDictData } from '@/hooks'
let { dictData } = useDictData()

const { closeOutside } = useQueue()
const { getUserInfo } = useUserStore()

const mood = [
  '😀',
  '😁',
  '😂',
  '🤣',
  '😅',
  '😆',
  '😉',
  '😊',
  '😎',
  '🥳',
  '🤔',
  '😏',
  '😮',
  '😍',
  '🤩',
  '😢',
  '😭',
  '😤',
  '😡',
  '🤯',
]
// 页面状态
const publishing = ref(false)

const postData = ref({
  /** 标题 */
  title: '',
  /** 内容 */
  content: '',
  /** 用户id */
  userId: 0,
  /** 帖子分类 */
  category: '',
  /** 心情状态 */
  moodStatus: '',
  /** 话题标签 */
  tags: '',
  /** 上传图片 */
  images: '',
  /** 上传视频 */
  video: '',
  locationCode: '',
  /** 位置信息 */
  location: '',
  /** 可见性设置 */
  visibilitySetting: '',
  /** 允许评论 */
  allowed: 0,
  /** 匿名发布 */
  anonymity: 0,
  allowComments: ['1'],
})
const canPublish = computed(() => {
  return postData.value.content.trim().length > 0 || postData.value.images
})
const addMood = (mod) => {
  postData.value.content = postData.value.content + mod
  // 分类选项
}
const publishPost = async () => {
  let userInfo = await getUserInfo()
  console.log(userInfo, postData.value)
  publishing.value = true
  const res = await createForumPost({
    body: { ...postData.value, userId: userInfo.data.id },
  })
  publishing.value = false
  if (res.code === 0) {
    navigateBack()
  }
}
onShow(() => {})
</script>
