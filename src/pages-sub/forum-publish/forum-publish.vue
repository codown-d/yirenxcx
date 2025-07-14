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
  <view>
    <!-- 内容编辑区域 -->
    <view class="bg-white mx-3 mt-3 rounded-3 p-4">
      <!-- 图片上传区域 -->
      <view class="mb-4">
        <view class="flex flex-wrap gap-3">
          <!-- 已上传的图片 -->
          <view v-for="(image, index) in uploadedImages" :key="index" class="relative w-20 h-20">
            <image :src="image" class="w-full h-full rounded-2 object-cover" mode="aspectFill" />
            <view
              class="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center"
              @click="removeImage(index)"
            >
              <wd-icon name="close" size="12px" color="white" />
            </view>
          </view>

          <!-- 添加图片按钮 -->
          <view
            v-if="uploadedImages.length < 9"
            class="w-20 h-20 bg-gray-100 rounded-2 flex items-center justify-center border-2 border-dashed border-gray-300"
            @click="chooseImage"
          >
            <wd-icon name="add" size="24px" color="#999" />
          </view>
        </view>
      </view>

      <!-- 文字输入区域 -->
      <view class="mb-4">
        <wd-input
          v-model="content"
          placeholder="分享一个有趣的话题"
          custom-class="border-none p-0"
        />
      </view>

      <!-- 提示文字 -->
      <view class="mb-4">
        <wd-textarea
          v-model="content"
          placeholder="分享你的想法，经验或见解~"
          auto-height
          no-border
        />
        <!-- 选中的话题标签 -->
        <view v-if="selectedTopics.length > 0" class="mb-4 mt-2">
          <view class="flex flex-wrap gap-2">
            <tag
              v-for="topic in selectedTopics"
              :key="topic"
              :label="topic"
              :value="topic"
              @onRemove="removeTopic"
            ></tag>
          </view>
        </view>
        <!-- 选中的心情 -->
        <view v-if="selectedMood" class="mb-4">
          <wd-tag type="warning" size="small" closable @close="selectedMood = ''">
            {{ selectedMood }}
          </wd-tag>
        </view>
      </view>
      <!-- 话题和心情 -->
      <view class="flex items-center gap-3">
        <wd-button size="small" @click="showTopicPicker" type="info">
          <text class=""># 话题</text>
        </wd-button>
        <wd-button size="small" type="info" @click="showMoodPicker" v-if="false">
          <wd-icon name="heart" size="16px" class="mr-2" />
          <text class="">
            <wd-icon name="heart" size="16px" class="mr-2" />
            心情
          </text>
        </wd-button>
      </view>
    </view>
    <view class="bg-white mx-3 mt-3 rounded-3 overflow-hidden">
      <wd-cell-group>
        <wd-cell title="帖子分类" size="small">
          <wd-picker v-model="selectedCategory" :columns="categoryActions" clearable></wd-picker>
        </wd-cell>
        <wd-cell title="位置信息" size="small">
          <icon-text
            @on-click="showLocationPicker"
            @on-close="clearLocation"
            :text="selectedLocation"
          ></icon-text>
        </wd-cell>
        <wd-cell title="可见性设置" size="small">
          <wd-picker
            v-model="selectedVisibility"
            :columns="visibilityActions"
            clearable
          ></wd-picker>
        </wd-cell>
        <view class="pb-4 pl-4">
          <wd-checkbox-group v-model="allowComments" :inline="true">
            <wd-checkbox :modelValue="1">允许评论</wd-checkbox>
            <wd-checkbox :modelValue="2">匿名发布</wd-checkbox>
          </wd-checkbox-group>
        </view>
      </wd-cell-group>
    </view>
    <!-- 底部发布按钮 -->
    <view class="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-100">
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
    </view>

    <!-- 话题选择弹窗 -->
    <wd-popup v-model="showTopicModal" position="bottom" custom-class="rounded-t-4">
      <view class="p-4">
        <view class="text-center mb-4">
          <text class="text-4 font-bold">选择话题</text>
        </view>
        <view class="flex flex-wrap gap-2 mb-4">
          <wd-tag
            v-for="topic in availableTopics"
            :key="topic"
            type="primary"
            round
            @click="toggleTopic(topic)"
          >
            {{ topic }}
          </wd-tag>
        </view>
        <wd-button type="primary" block @click="showTopicModal = false">确定</wd-button>
      </view>
    </wd-popup>

    <!-- 心情选择弹窗 -->
    <wd-popup v-model="showMoodModal" position="bottom" custom-class="rounded-t-4">
      <view class="p-4">
        <view class="text-center mb-4">
          <text class="text-4 font-bold">选择心情</text>
        </view>
        <view class="flex flex-wrap gap-2 mb-4">
          <wd-tag v-for="mood in availableMoods" :key="mood" size="small" @click="selectMood(mood)">
            {{ mood }}
          </wd-tag>
        </view>
        <wd-button type="primary" block @click="showMoodModal = false">确定</wd-button>
      </view>
    </wd-popup>
  </view>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { toast } from '@/utils/toast'
import { categoryActions, visibilityActions, availableTopics, availableMoods } from '@/constant'
import { useLocationStore } from '@/store'
import { navigateToSub } from '@/utils'
import { publishForumPost } from '@/types/forum'
const { getLocation } = useLocationStore()

// 页面状态
const publishing = ref(false)
const content = ref('')
const uploadedImages = ref<string[]>([])
const selectedTopics = ref<string[]>([])
const selectedMood = ref('')
const selectedCategory = ref('作品展示')
const selectedLocation = ref('成都')
const selectedVisibility = ref('公开所有人可见')
const allowComments = ref([1, 2])

// 弹窗状态
const showTopicModal = ref(false)
const showMoodModal = ref(false)

// 计算属性
const canPublish = computed(() => {
  return content.value.trim().length > 0 || uploadedImages.value.length > 0
})

// 选择图片
const chooseImage = () => {
  uni.chooseImage({
    count: 9 - uploadedImages.value.length,
    sizeType: ['compressed'],
    sourceType: ['album', 'camera'],
    success: (res) => {
      uploadedImages.value.push(...res.tempFilePaths)
    },
  })
}

// 删除图片
const removeImage = (index: number) => {
  uploadedImages.value.splice(index, 1)
}

// 显示话题选择器
const showTopicPicker = () => {
  showTopicModal.value = true
}
const showLocationPicker = () => {
  navigateToSub('/location-select/location-select')
}
const clearLocation = () => {
  selectedLocation.value = ''
}

// 切换话题选择
const toggleTopic = (topic: string) => {
  const index = selectedTopics.value.indexOf(topic)
  if (index > -1) {
    selectedTopics.value.splice(index, 1)
  } else if (selectedTopics.value.length < 3) {
    selectedTopics.value.push(topic)
  } else {
    toast.error('最多只能选择3个话题')
  }
}

// 删除话题
const removeTopic = (topic: string) => {
  const index = selectedTopics.value.indexOf(topic)
  if (index > -1) {
    selectedTopics.value.splice(index, 1)
  }
}
// 显示心情选择器
const showMoodPicker = () => {
  showMoodModal.value = true
}

// 选择心情
const selectMood = (mood: string) => {
  selectedMood.value = selectedMood.value === mood ? '' : mood
}

// 发布帖子
const publishPost = async () => {
  if (!canPublish.value) {
    toast.error('请输入内容或上传图片')
    return
  }

  try {
    publishing.value = true

    const postData = {
      content: content.value,
      images: uploadedImages.value,
      topics: selectedTopics.value,
      type: uploadedImages.value.length > 0 ? 'image' : 'text',
      location: selectedLocation.value,
      isAnonymous: false,
    }

    const res = await publishForumPost({
      body: postData,
    })

    if (res.code === 0) {
      toast.success('发布成功')
      // 清空草稿
      uni.removeStorageSync('forum_draft')
      // 返回论坛页面
      uni.navigateBack()
    } else {
      toast.error(res.msg || '发布失败')
    }
  } catch (error) {
    console.error('发布失败:', error)
    toast.error('发布失败')
  } finally {
    publishing.value = false
  }
}
onShow(() => {
  let item = getLocation()?.[0] || { label: '', value: '' }
  selectedLocation.value = item.label
})
</script>
