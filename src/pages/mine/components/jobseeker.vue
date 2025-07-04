<template>
  <view class="min-h-screen">
    <!-- 用户信息卡片 -->
    <view class="mx-3 mt-2 rounded-4 p-4 shadow-sm bg-linear">
      <view class="flex items-center mb-4">
        <image :src="userInfo.avatar" mode="aspectFill" class="mr-4 w-20 h-20 rounded-full" />
        <view class="flex-1">
          <view class="flex items-center justify-between mb-2">
            <view class="flex items-center">
              <text class="text-4 font-bold text-gray-800 mr-2">{{ userInfo.name }}</text>
              <view class="bg-[#FFDD7E] text-[#B16D00] text-[20rpx] px-2 py-1 rounded-full">
                实名认证
              </view>
            </view>
            <wd-icon name="arrow-right" size="22px"></wd-icon>
          </view>
          <text class="text-[22rpx] text-gray-500 block mb-1">
            资料完整度{{ userInfo.completeness }}%，完善资料获得更多机会
          </text>
        </view>
      </view>

      <!-- 专业信息 -->
      <view class="mb-2">
        <text class="text-4">{{ userInfo.profession }}</text>
        <view class="flex flex-wrap gap-2 mb-3 mt-2">
          <wd-tag
            v-for="(tag, index) in userInfo.skills"
            custom-class="!text-4 !text-[#555555] !px-2"
            bg-color="#F5F6FA"
            :key="index"
          >
            {{ tag }}
          </wd-tag>
        </view>
      </view>

      <!-- 基本信息 -->
      <view class="flex items-center text-3 text-gray-500 space-x-6">
        <view class="flex items-center">
          <wd-icon name="time" size="20px" class="mr-1" />
          <text>{{ userInfo.experience }}</text>
        </view>
        <view class="flex items-center">
          <wd-icon name="school" size="20px" class="mr-1" />
          <text>{{ userInfo.education }}</text>
        </view>
        <view class="flex items-center">
          <wd-icon name="location" size="20px" class="mr-1" />
          <text>{{ userInfo.location }}</text>
        </view>
      </view>
      <wd-divider custom-class="!mx-0 !px-0"></wd-divider>
      <!-- 统计数据 -->
      <view class="flex justify-between">
        <view class="text-center flex-1">
          <text class="text-5 font-bold text-gray-800 block pb-2">{{ stats.browsed }}</text>
          <text class="text-4 text-gray-500">简历浏览</text>
        </view>
        <view class="text-center flex-1">
          <text class="text-5 font-bold text-gray-800 block pb-2">{{ stats.followed }}</text>
          <text class="text-4 text-gray-500">获得关注</text>
        </view>
        <view class="text-center flex-1">
          <text class="text-5 font-bold text-gray-800 block pb-2">{{ stats.applied }}</text>
          <text class="text-4 text-gray-500">投递简历</text>
        </view>
        <view class="text-center flex-1">
          <text class="text-5 font-bold text-gray-800 block pb-2">{{ stats.interviewed }}</text>
          <text class="text-4 text-gray-500">面试邀请</text>
        </view>
      </view>
    </view>

    <!-- 快捷功能 -->
    <view class="mx-8 mb-6">
      <view class="flex items-center mb-4">
        <wd-icon name="heart" size="16px" class="text-gray-600 mr-2" />
        <text class="text-7 font-medium text-gray-600">我的关注</text>
      </view>
      <view class="flex items-center mb-4">
        <wd-icon name="star" size="16px" class="text-gray-600 mr-2" />
        <text class="text-7 font-medium text-gray-600">我的收藏</text>
      </view>
      <view class="flex items-center">
        <wd-icon name="share" size="16px" class="text-gray-600 mr-2" />
        <text class="text-7 font-medium text-gray-600">我的足迹</text>
      </view>
    </view>

    <!-- VIP会员服务 -->
    <view
      class="mx-8 mb-6 bg-gradient-to-r from-gray-800 to-gray-600 rounded-6 p-6 text-white relative overflow-hidden"
    >
      <!-- 背景装饰 -->
      <view
        class="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16"
      ></view>

      <view class="flex items-center justify-between">
        <view class="flex-1">
          <text class="text-8 font-bold block mb-2">VIP会员服务</text>
          <text class="text-6 opacity-80">
            专享权益：简历置顶-查看谁看过我-优先沟通-专属职位推荐
          </text>
        </view>
        <wd-button
          type="warning"
          size="small"
          @click="upgradeVip"
          class="h-8 px-4 text-6 rounded-3 bg-orange-400 border-orange-400"
        >
          去升级
        </wd-button>
      </view>
    </view>

    <!-- 功能按钮 -->
    <view class="mx-8 mb-6">
      <view class="flex justify-between">
        <view class="flex-1 mr-4">
          <wd-button
            type="success"
            size="large"
            block
            @click="previewResume"
            class="h-12 rounded-4 text-7 bg-teal-500 border-teal-500"
          >
            <wd-icon name="file-text" size="16px" class="mr-2" />
            预览简历
          </wd-button>
        </view>
        <view class="flex-1">
          <wd-button
            type="success"
            size="large"
            block
            @click="publishJob"
            class="h-12 rounded-4 text-7 bg-green-500 border-green-500"
          >
            <wd-icon name="arrow-up" size="16px" class="mr-2" />
            发布求职
          </wd-button>
        </view>
      </view>
    </view>

    <!-- 其他功能 -->
    <view class="mx-8 mb-6 bg-white rounded-6 shadow-sm">
      <text class="text-7 font-medium text-gray-800 block p-6 pb-4">其他功能</text>

      <view class="flex justify-between px-6 pb-6">
        <view class="text-center flex-1" @click="goToMyFollows">
          <wd-icon name="heart" size="24px" class="text-gray-600 mb-2" />
          <text class="text-6 text-gray-600 block">我的关注</text>
        </view>
        <view class="text-center flex-1" @click="goToContract">
          <wd-icon name="file-text" size="24px" class="text-gray-600 mb-2" />
          <text class="text-6 text-gray-600 block">违约公示</text>
        </view>
        <view class="text-center flex-1" @click="goToSettings">
          <wd-icon name="setting" size="24px" class="text-gray-600 mb-2" />
          <text class="text-6 text-gray-600 block">设置</text>
        </view>
        <view class="text-center flex-1" @click="contactService">
          <wd-icon name="customer-service" size="24px" class="text-gray-600 mb-2" />
          <text class="text-6 text-gray-600 block">联系客服</text>
        </view>
      </view>
    </view>

    <!-- 底部安全区域 -->
    <view class="pb-safe"></view>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/store/user'
import { toast } from '@/utils/toast'

// 用户信息
const userInfo = ref({
  name: '李小华',
  avatar: '/static/images/default-avatar.png',
  completeness: 85,
  profession: '专业古典舞演员',
  skills: ['古典舞', '民族舞', '芭蕾基础'],
  experience: '3年经验',
  education: '北京舞蹈学院',
  location: '北京市朝阳区',
})

// 统计数据
const stats = ref({
  browsed: 156,
  followed: 156,
  applied: 156,
  interviewed: 156,
})

const userStore = useUserStore()

onMounted(() => {
  // 加载用户数据
  loadUserData()
})

// 加载用户数据
const loadUserData = () => {
  // 这里可以从API获取真实数据
  console.log('加载用户数据')
}

// 升级VIP
const upgradeVip = () => {
  toast.info('跳转到VIP升级页面')
}

// 预览简历
const previewResume = () => {
  toast.info('预览简历')
}

// 发布求职
const publishJob = () => {
  toast.info('发布求职信息')
}

// 跳转到我的关注
const goToMyFollows = () => {
  uni.navigateTo({
    url: '/pages-sub/my-follows/index',
  })
}

// 违约公示
const goToContract = () => {
  toast.info('违约公示')
}

// 设置
const goToSettings = () => {
  toast.info('设置')
}

// 联系客服
const contactService = () => {
  toast.info('联系客服')
}
</script>
