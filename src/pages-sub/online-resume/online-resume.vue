<route lang="json5" type="page">
{
  layout: 'common',
  style: {
    navigationBarTitleText: '在线简历',
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <view class="mt-4">
    <!-- 用户基本信息卡片 -->
    <wd-form ref="form" :model="userInfo">
      <wd-card>
        <!-- 头像和基本信息 -->
        <view class="mb-4">
          <view class="flex items-center">
            <image :src="userInfo.avatar" mode="aspectFill" class="w-16 h-16 rounded-full mr-4" />
            <view class="flex-1 flex items-center justify-between">
              <view class="flex flex-col gap-">
                <text class="text-lg font-bold text-gray-800 mr-2">{{ userInfo.name }}</text>
                <view class="">{{ userInfo.age }}岁 · {{ userInfo.education }}</view>
              </view>
              <view @click="goToProfileEdit">
                <wd-icon name="arrow-right" custom-class="text-4"></wd-icon>
              </view>
            </view>
          </view>
          <view class="flex gap-5 mt-2">
            <view class="flex gap-1">
              <wd-icon name="phone" custom-class="text-4"></wd-icon>
              <text class="text-sm text-gray-500 mb-1">
                {{ userInfo.phone }}
              </text>
            </view>
            <view class="flex gap-1">
              <wd-icon name="mail" custom-class="text-4"></wd-icon>
              <text class="text-sm text-gray-500">
                {{ userInfo.email }}
              </text>
            </view>
          </view>
        </view>
        <wd-divider></wd-divider>
        <!-- 个人简介 -->
        <wd-cell title="个人简介" vertical class="mt-4">
          <wd-textarea v-model="userInfo.introduction" placeholder="请输入个人简介" />
        </wd-cell>
      </wd-card>

      <!-- 技能标签 -->
      <view class="flex items-center justify-between mb-3 px-4 mt-1">
        <text class="text-base font-semibold text-gray-800">技能标签</text>
        <wd-icon name="add-circle" custom-class="text-5" @click="addSkill" />
      </view>
      <wd-card>
        <view class="flex flex-wrap gap-2">
          <view
            v-for="(skill, index) in userInfo.skills"
            :key="index"
            class="flex items-center bg-green-50 text-green-600 text-sm px-3 py-1.5 rounded-full border border-green-200"
          >
            <text class="mr-1">{{ skill }}</text>
            <wd-icon name="close" size="14px" @click="removeSkill(index)" />
          </view>
        </view>
      </wd-card>

      <!-- 代表作品 -->
      <view class="flex items-center justify-between mb-3 px-4 mt-1">
        <text class="text-base font-semibold text-gray-800">代表作品</text>
        <wd-icon name="add-circle" custom-class="text-5" @click="addWork" />
      </view>
      <wd-card>
        <view class="flex flex-wrap gap-2">
          <view
            v-for="(work, index) in userInfo.works"
            :key="index"
            class="flex items-center justify-between p-3 bg-gray-50 rounded-2 mb-2 last:mb-0"
          >
            <view class="flex items-center flex-1">
              <view class="w-2 h-2 bg-primary rounded-full mr-3"></view>
              <text class="text-sm text-gray-700 flex-1">{{ work.title }}</text>
            </view>
            <wd-icon name="arrow-right" size="16px" color="#999" />
          </view>
        </view>
      </wd-card>

      <!-- 个人展示 -->
      <view class="flex items-center justify-between mb-3 px-4 mt-1">
        <text class="text-base font-semibold text-gray-800">个人展示</text>
      </view>
      <wd-card>
        <!-- 个人展示项目 -->
        <view v-for="(item, index) in userInfo.showcase" :key="index" class="mb-4 last:mb-0">
          <view class="flex items-center justify-between mb-2">
            <text class="text-sm font-medium text-gray-700">{{ item.title }}</text>
            <text class="text-xs text-gray-400">{{ item.count }}</text>
          </view>
          <text class="text-xs text-gray-500 block mb-3">{{ item.description }}</text>

          <!-- 图片展示区域 -->
          <view class="grid grid-cols-3 gap-2">
            <view
              v-for="(photo, photoIndex) in item.photos"
              :key="photoIndex"
              class="relative aspect-square bg-gray-100 rounded-2 overflow-hidden"
              @click="previewImage(photo, item.photos)"
            >
              <image
                v-if="photo.type === 'image'"
                :src="photo.url"
                mode="aspectFill"
                class="w-full h-full"
              />
              <view
                v-else-if="photo.type === 'video'"
                class="w-full h-full bg-gray-200 flex items-center justify-center"
              >
                <wd-icon name="play-circle-filled" size="24px" color="#666" />
              </view>
              <view v-else class="w-full h-full bg-gray-200 flex items-center justify-center">
                <wd-icon name="add" size="24px" color="#999" />
              </view>
            </view>
          </view>
        </view>
      </wd-card>

      <!-- 求职意向 -->
      <view class="flex items-center justify-between mb-3 px-4 mt-1">
        <text class="text-base font-semibold text-gray-800">求职意向</text>
      </view>
      <wd-card>
        <view class="space-y-2">
          <view class="flex items-center" v-if="false">
            <text class="text-sm text-gray-500 w-20">期望职位：</text>
            <text class="text-sm text-gray-700">{{ userInfo.jobIntention.position }}</text>
          </view>
          <wd-cell title="期望薪资">
            <wd-picker :columns="columns" v-model="userInfo.jobIntention.salary" />
          </wd-cell>
          <view class="flex items-center" v-if="false">
            <text class="text-sm text-gray-500 w-20">工作地点：</text>
            <text class="text-sm text-gray-700">{{ userInfo.jobIntention.location }}</text>
          </view>
        </view>
      </wd-card>

      <!-- 操作按钮 -->
      <view class="gap-4 flex mt-4 mx-4">
        <!-- 预览简历按钮 -->
        <wd-button type="info" :round="false" custom-class="flex-1" @click="previewResume">
          预览简历
        </wd-button>
        <!-- 保存按钮 -->
        <wd-button type="primary" :round="false" custom-class="flex-1" @click="saveResume">
          保存
        </wd-button>
      </view>
    </wd-form>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { toast } from '@/utils/toast'
import {
  DEFAULT_RESUME_DATA,
  SKILL_CATEGORIES,
  type UserResumeInfo,
  type ShowcasePhoto,
} from '@/constant/resume'
import { navigateToSub } from '@/utils'

// 用户信息数据
const userInfo = ref<UserResumeInfo>({
  ...DEFAULT_RESUME_DATA,
  id: '1',
  name: '李小华',
  age: 24,
  education: '北京舞蹈学院',
  phone: '138****8888',
  email: '138****8888',
  avatar: '/static/images/default-avatar.png',
  introduction:
    '我是一名专业的古典舞演员，拥有扎实的舞蹈基础和丰富的舞台表演经验。热爱舞蹈艺术，善于表达情感，具有良好的团队合作精神。',
  skills: ['古典舞', '民族舞', '芭蕾基础', '现代舞'],
  works: [
    {
      id: '1',
      title: '《梅花三弄》主要演员',
      description: '古典舞剧',
      type: 'performance',
      date: '2023-10',
    },
    {
      id: '2',
      title: '《春江花月夜》独舞',
      description: '个人作品',
      type: 'performance',
      date: '2023-08',
    },
  ],
  showcase: [
    {
      id: '1',
      title: '个人展示图片 (最多4张)',
      count: '4个',
      description: '展示您的形象、舞台风采或专业照片',
      category: 'personal',
      photos: [
        { type: 'image', url: '/static/images/avatar.jpg' },
        { type: 'video', url: '/static/videos/dance1.mp4' },
        { type: 'add', url: '' },
      ],
    },
    {
      id: '2',
      title: '自我介绍视频 (1个)',
      count: '1个',
      description: '展示您的形象、舞台风采或专业照片',
      category: 'stage',
      photos: [
        { type: 'image', url: '/static/images/avatar.jpg' },
        { type: 'image', url: '/static/images/avatar.jpg' },
        { type: 'add', url: '' },
      ],
    },
    {
      id: '3',
      title: '专业技能视频 (最多3个)',
      count: '3个',
      description: '展示您的专业技能、表演片段或作品集锦',
      category: 'stage',
      photos: [
        { type: 'image', url: '/static/images/avatar.jpg' },
        { type: 'image', url: '/static/images/avatar.jpg' },
        { type: 'add', url: '' },
      ],
    },
  ],
  jobIntention: {
    position: '舞蹈演员',
    salary: '8000-12000元',
    location: '北京市',
    workType: 'full-time',
  },
  completeness: 85,
  status: 'published',
  createdAt: '2024-01-01',
  updatedAt: '2024-01-15',
})
const columns = ref([
  {
    label: '不限',
    value: '不限',
  },
  {
    label: '3000以下',
    value: '3000以下',
  },
  {
    label: '3000-5000',
    value: '3000-5000',
  },
  {
    label: '5000-8000',
    value: '5000-8000',
  },
  {
    label: '8000-12000',
    value: '8000-12000',
  },
  {
    label: '12000-20000',
    value: '12000-20000',
  },
  {
    label: '20000以上',
    value: '20000以上',
  },
])
// 跳转到个人资料编辑
const goToProfileEdit = () => {
  navigateToSub('/profile-edit/profile-edit')
}
const handleConfirm = () => {
  console.log('confirm')
}
// 计算简历完整度
const completenessPercentage = computed(() => {
  let score = 0
  const maxScore = 100

  // 基本信息 (30分)
  if (userInfo.value.name) score += 5
  if (userInfo.value.phone) score += 5
  if (userInfo.value.email) score += 5
  if (userInfo.value.education) score += 5
  if (userInfo.value.introduction) score += 10

  // 技能标签 (20分)
  score += Math.min(userInfo.value.skills.length * 4, 20)

  // 代表作品 (20分)
  score += Math.min(userInfo.value.works.length * 10, 20)

  // 个人展示 (20分)
  const hasPhotos = userInfo.value.showcase.some((item) =>
    item.photos.some((photo) => photo.type !== 'add'),
  )
  if (hasPhotos) score += 20

  // 求职意向 (10分)
  if (userInfo.value.jobIntention.position) score += 10

  return Math.min(score, maxScore)
})

onMounted(() => {
  loadUserData()
})

// 加载用户数据
const loadUserData = () => {
  console.log('加载用户简历数据')
}

// 添加技能
const addSkill = () => {
  // 这里可以打开技能选择弹窗
  uni.showActionSheet({
    itemList: SKILL_CATEGORIES.map((cat) => cat.label),
    success: (res) => {
      const category = SKILL_CATEGORIES[res.tapIndex]
      // 显示该分类下的技能选项
      uni.showActionSheet({
        itemList: category.skills,
        success: (skillRes) => {
          const skill = category.skills[skillRes.tapIndex]
          if (!userInfo.value.skills.includes(skill)) {
            userInfo.value.skills.push(skill)
            toast.success(`已添加技能：${skill}`)
          } else {
            toast.info('该技能已存在')
          }
        },
      })
    },
  })
}

// 移除技能
const removeSkill = (index: number) => {
  const skill = userInfo.value.skills[index]
  userInfo.value.skills.splice(index, 1)
  toast.success(`已移除技能：${skill}`)
}

// 添加作品
const addWork = () => {
  // 这里可以跳转到添加作品页面
  toast.info('跳转到添加作品页面')
  // uni.navigateTo({
  //   url: '/pages-sub/add-work/add-work'
  // })
}

// 预览图片
const previewImage = (photo: ShowcasePhoto, photos: ShowcasePhoto[]) => {
  if (photo.type === 'image') {
    const urls = photos.filter((p) => p.type === 'image').map((p) => p.url)
    uni.previewImage({
      urls,
      current: photo.url,
    })
  } else if (photo.type === 'video') {
    toast.info('播放视频功能开发中')
    // 这里可以实现视频播放功能
  } else {
    // 添加展示内容
    uni.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        // 这里应该上传图片到服务器
        toast.success('图片上传成功')
        // 临时添加到展示中
        const showcaseIndex = userInfo.value.showcase.findIndex((item) =>
          item.photos.some((p) => p === photo),
        )
        if (showcaseIndex !== -1) {
          const photoIndex = userInfo.value.showcase[showcaseIndex].photos.findIndex(
            (p) => p === photo,
          )
          if (photoIndex !== -1) {
            userInfo.value.showcase[showcaseIndex].photos[photoIndex] = {
              type: 'image',
              url: res.tempFilePaths[0],
            }
            // 如果还有空位，添加新的添加按钮
            if (userInfo.value.showcase[showcaseIndex].photos.length < 6) {
              userInfo.value.showcase[showcaseIndex].photos.push({ type: 'add', url: '' })
            }
          }
        }
      },
    })
  }
}

// 预览简历
const previewResume = () => {
  toast.info('跳转到简历预览页面')
  // uni.navigateTo({
  //   url: '/pages-sub/resume-preview/resume-preview?id=' + userInfo.value.id
  // })
}

// 保存简历
const saveResume = () => {
  // 验证必填信息
  if (!userInfo.value.name.trim()) {
    toast.error('请填写姓名')
    return
  }
  if (!userInfo.value.phone.trim()) {
    toast.error('请填写联系电话')
    return
  }

  // 更新时间
  userInfo.value.updatedAt = new Date().toISOString().split('T')[0]

  // 这里应该调用API保存数据
  toast.success('简历保存成功')

  // 可以返回上一页或跳转到简历列表
  setTimeout(() => {
    uni.navigateBack()
  }, 1500)
}
</script>
