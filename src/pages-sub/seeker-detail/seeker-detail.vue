<route lang="json5">
{
  layout: 'common',
  style: {
    navigationBarTitleText: '求职者详情',
    navigationStyle: 'custom',
  },
}
</route>
<template>
  <view class="min-h-screen bg-gray-50">
    <!-- 内容区域 -->
    <view class="p-4">
      <!-- 个人基本信息 -->
      <view class="bg-white rounded-2 p-4 mb-4 shadow-sm">
        <view class="flex items-start mb-4">
          <!-- 头像 -->
          <view class="relative mr-4">
            <image
              :src="seekerInfo.avatar || '/static/images/default-avatar.png'"
              class="w-16 h-16 rounded-full bg-gray-100"
              mode="aspectFill"
            />
            <!-- 认证标识 -->
            <view
              v-if="seekerInfo.isVerified && false"
              class="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"
            >
              <text class="text-white text-xs">✓</text>
            </view>
          </view>

          <!-- 基本信息 -->
          <view class="flex-1">
            <view class="flex items-center mb-2">
              <text class="text-xl font-bold text-gray-900 mr-2">{{ seekerInfo.name }}</text>
              <view
                v-if="seekerInfo.isVip"
                class="bg-yellow-500 text-white text-xs px-2 py-1 rounded-1 font-medium"
              >
                VIP
              </view>
            </view>
            <text class="text-sm text-gray-600 mb-1">
              {{ seekerInfo.age }}岁 • {{ seekerInfo.profession }} • {{ seekerInfo.experience }}
            </text>
          </view>
        </view>
        <!-- 联系方式 -->
        <view class="flex items-center gap-4 mb-2">
          <view v-if="seekerInfo.phone" class="flex items-center">
            <wd-icon name="call" custom-class="text-4 mr-1"></wd-icon>

            <text class="text-sm text-gray-600 ml-1">{{ seekerInfo.phone }}</text>
          </view>
          <view v-if="seekerInfo.location" class="flex items-center">
            <wd-icon name="location" custom-class="text-4 mr-1"></wd-icon>
            <text class="text-sm text-gray-600 ml-1">{{ seekerInfo.location }}</text>
          </view>
        </view>

        <!-- 教育背景 -->
        <view v-if="seekerInfo.education" class="flex items-center">
          <wd-icon name="evaluation" custom-class="text-4 mr-1"></wd-icon>

          <text class="text-sm text-gray-600 ml-1">{{ seekerInfo.education }}</text>
        </view>
        <view class="pt-4">
          <wd-divider custom-class="!px-0"></wd-divider>
        </view>
        <!-- 求职意向 -->
        <view class="pt-3">
          <view class="flex justify-between items-center mb-2">
            <text class="text-sm text-gray">求职期望</text>
            <text class="text-[28rpx] font-bold text-teal-600">
              {{ seekerInfo.expectedSalary || '面议' }}
            </text>
          </view>
          <!-- 专业技能标签 -->
          <view class="mt-2">
            <text class="text-sm text-gray">专业技能</text>
            <view class="flex flex-wrap gap-2 mt-2">
              <view
                v-for="skill in seekerInfo.skills"
                :key="skill"
                class="bg-gray-50 text-gray text-xs px-2 py-1 rounded-1"
              >
                {{ skill }}
              </view>
            </view>
          </view>

          <!-- 工作类型和到岗时间 -->
          <view class="flex justify-between text-sm text-gray-600 mt-2" v-if="false">
            <text>{{ seekerInfo.workType || '全职' }}</text>
            <text>{{ seekerInfo.availability || '随时到岗' }}</text>
          </view>
        </view>
        <!-- 自我介绍 -->
        <view v-if="seekerInfo.description">
          <view class="flex mb-2 mt-2">
            <text class="text-sm text-gray">自我介绍</text>
          </view>
          <text class="text-sm text-gray-600 leading-relaxed">{{ seekerInfo.description }}</text>
        </view>
      </view>

      <!-- 个人展示 -->
      <view
        v-if="seekerInfo.portfolio && seekerInfo.portfolio.length > 0"
        class="bg-white rounded-3 p-4 mb-4 shadow-sm"
      >
        <text class="text-base font-semibold text-gray-800">个人展示</text>
        <view class="grid grid-cols-2 gap-3 mt-4">
          <image
            v-for="(item, index) in seekerInfo.portfolio"
            :key="index"
            :src="item"
            class="w-full h-32 rounded-2 bg-gray-100"
            mode="aspectFill"
            @click="previewImage(item, seekerInfo.portfolio)"
          />
        </view>
      </view>

      <!-- 代表作品 -->
      <view
        v-if="seekerInfo.works && seekerInfo.works.length > 0"
        class="bg-white rounded-3 p-4 mb-4 shadow-sm"
      >
        <text class="text-base font-semibold text-gray-800">代表作品</text>
        <view class="space-y-2 mt-4">
          <view
            v-for="work in seekerInfo.works"
            :key="work.id"
            class="bg-teal-50 p-3 rounded-2 border border-teal-100"
          >
            <text class="text-sm font-medium text-teal-700">{{ work.title }}</text>
            <text v-if="work.role" class="text-xs text-teal-600 ml-2">{{ work.role }}</text>
          </view>
        </view>
      </view>

      <!-- 教育背景 -->
      <view class="bg-white rounded-3 p-4 shadow-sm">
        <text class="text-base font-semibold text-gray-800">教育背景</text>
        <view class="flex justify-between items-center mt-4">
          <view class="flex flex-col gap-1">
            <text class="text-sm font-medium text-gray-800">
              {{ seekerInfo.school || '北京舞蹈学院' }}
            </text>
            <text class="text-xs text-gray-500 block">
              {{ seekerInfo.major || '本科 • 古典舞专业' }}
            </text>
          </view>
          <text class="text-xs text-gray-400">
            {{ seekerInfo.graduationTime || '2015.09 - 2019.06' }}
          </text>
        </view>
      </view>
    </view>
    <!-- 底部操作栏 -->
    <view class="h-[81px]">
      <view
        class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 safe-area-inset-bottom"
      >
        <view class="flex items-center gap-6">
          <!-- 收藏按钮 -->
          <view @click="handleFavorite">
            <wd-icon
              :name="isFavorited ? 'heart-filled' : 'heart'"
              :color="isFavorited ? '#ff4757' : '#999'"
              custom-class="text-7"
            />
          </view>

          <!-- 评分按钮 -->
          <view @click="handleRate">
            <wd-icon
              :name="isFavorited ? 'star-filled' : 'star'"
              :color="isFavorited ? '#ff4757' : '#999'"
              custom-class="text-7"
            />
          </view>
          <view class="flex-1">
            <!-- 立即联系按钮 -->
            <wd-button type="primary" block :round="false" @click="handleContact">
              立即联系
            </wd-button>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { toast } from '@/utils/toast'
import { JOB_SEEKERS, type JobSeeker } from '@/constant/job-seeking'

// 页面参数
const seekerId = ref('')
const seekerInfo = ref<JobSeeker>({} as JobSeeker)
const isFavorited = ref(false)

// 页面加载
onLoad((options) => {
  if (options?.id) {
    console.log('options', options)
    seekerId.value = options.id
    loadSeekerDetail()
  }
})

// 加载求职者详情
const loadSeekerDetail = () => {
  // 模拟从API获取数据
  const seeker = JOB_SEEKERS.find((item) => item.id === seekerId.value)
  if (seeker) {
    seekerInfo.value = {
      ...seeker,
      school: '北京舞蹈学院',
      major: '本科 • 古典舞专业',
      graduationTime: '2015.09 - 2019.06',
      portfolio: [
        '/static/images/portfolio1.jpg',
        '/static/images/portfolio2.jpg',
        '/static/images/portfolio3.jpg',
      ],
      works: [
        { id: '1', title: '《丝路花雨》', role: '主要舞者' },
        { id: '2', title: '《孔雀》', role: '独舞' },
      ],
    }
  }
}

// 收藏
const handleFavorite = () => {
  isFavorited.value = !isFavorited.value
  toast.success(isFavorited.value ? '已收藏' : '已取消收藏')
}

// 评分
const handleRate = () => {
  toast.success('评分功能')
}

// 联系
const handleContact = () => {
  if (seekerInfo.value.phone) {
    uni.showActionSheet({
      itemList: ['拨打电话', '发送短信'],
      success: (res) => {
        if (res.tapIndex === 0) {
          uni.makePhoneCall({
            phoneNumber: seekerInfo.value.phone!.replace(/\*/g, '1'),
          })
        }
      },
    })
  } else {
    toast.error('暂无联系方式')
  }
}

// 预览图片
const previewImage = (current: string, urls: string[]) => {
  uni.previewImage({
    current,
    urls,
  })
}
</script>
