<template>
  <!-- 用户信息卡片 -->
  <view class="mx-3 mb-3 rounded-2 p-4 shadow-sm bg-linear">
    <view class="flex items-center mb-4">
      <image
        :src="userInfo.avatar"
        mode="aspectFill"
        class="mr-4 w-20 h-20 rounded-full bg-[#F5F6FA]"
      />
      <view class="flex-1">
        <view class="flex items-center justify-between mb-2" @click="goToOnlineResume">
          <view class="flex items-center">
            <text class="text-4 font-bold text-gray-800 mr-2">{{ userInfo.name }}</text>
            <view class="bg-[#FFDD7E] text-[#B16D00] text-[20rpx] px-2 py-1 rounded-full">
              实名认证
            </view>
          </view>
          <view class="flex items-center gap-2">
            <wd-icon name="arrow-right" size="22px"></wd-icon>
          </view>
        </view>
        <text class="text-[22rpx] text-gray-500 block mb-1" v-if="false">
          资料完整度{{ userInfo.completeness || 80 }}%，完善资料获得更多机会
        </text>
      </view>
    </view>

    <!-- 专业信息 -->
    <view class="mb-2">
      <text class="text-4">专业：{{ userInfo.teChang }}</text>
      <view class="flex flex-wrap gap-2 mb-3 mt-2">
        <wd-tag
          v-for="(tag, index) in tags"
          custom-class="!text-3 !text-[#555555] !px-2 !py-1"
          bg-color="#F5F6FA"
          :key="index"
        >
          {{ tag }}
        </wd-tag>
      </view>
    </view>

    <!-- 基本信息 -->
    <view class="flex items-center text-gray-500 justify-between mb-4">
      <yr-img-title url="jingyan.svg" :title="userInfo.experience" />
      <yr-img-title url="school.svg" :title="userInfo.biYeYuanXiao" />
      <yr-img-title url="weizhi.svg" :title="userInfo.location" />
    </view>
    <wd-divider custom-class="!px-0" />
    <!-- 统计数据 -->
    <view class="flex justify-between mt-4">
      <view class="text-center flex-1">
        <text class="text-6 font-bold text-gray-800 block pb-2">{{ stats.browsed }}</text>
        <text class="text-4 text-gray-500">简历浏览</text>
      </view>
      <view class="text-center flex-1">
        <text class="text-6 font-bold text-gray-800 block pb-2">{{ stats.followed }}</text>
        <text class="text-4 text-gray-500">获得关注</text>
      </view>
      <view class="text-center flex-1">
        <text class="text-6 font-bold text-gray-800 block pb-2">{{ stats.applied }}</text>
        <text class="text-4 text-gray-500">投递简历</text>
      </view>
      <view class="text-center flex-1">
        <text class="text-6 font-bold text-gray-800 block pb-2">{{ stats.interviewed }}</text>
        <text class="text-4 text-gray-500">面试邀请</text>
      </view>
    </view>
  </view>

  <!-- 快捷功能 -->
  <view class="mx-3 mb-3 flex items-center justify-between bg-white rounded-2 px-4 py-4">
    <view class="flex items-center gap-2 flex-col" @click="goToMyFollows">
      <wd-icon name="heart" custom-class="text-[#252525] text-8" />
      <text class="text-4 font-medium text-gray-600">我的关注</text>
    </view>
    <wd-divider vertical></wd-divider>
    <view class="flex items-center gap-2 flex-col" @click="goToMyCollections">
      <wd-icon name="star" custom-class="text-[#252525] text-8" />
      <text class="text-4 font-medium text-gray-600">我的收藏</text>
    </view>

    <wd-divider vertical></wd-divider>
    <view class="flex items-center gap-2 flex-col">
      <image class="w-[36px] h-[36px]" src="/static/images/zuji.svg" mode="scaleToFill" />
      <text class="text-4 font-medium text-gray-600">我的足迹</text>
    </view>
  </view>

  <!-- VIP会员服务 -->
  <view
    class="mx-3 mb-3 bg-gradient-to-r from-gray-800 to-gray-600 rounded-2 p-4 text-white relative overflow-hidden"
    :style="`background: linear-gradient(90deg, #38342b 0%, #1f1b18 100%)`"
  >
    <view
      class="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16"
    ></view>
    <view class="">
      <view class="flex items-center justify-between">
        <text class="text-4 font-bold block mb-2 text-[#F2E6D4]">VIP会员服务</text>
        <wd-button
          size="small"
          @click="upgradeVip"
          custom-class="!text-3 !h-6  !bg-[#F3D799] !text-[#543509] !bg-gradient-to-r !from-[#FEEDCD]  !to-[#F3D799]"
        >
          去升级
        </wd-button>
      </view>
      <text class="text-3 text-[#DBD6D3]">
        专享权益：简历置顶-查看谁看过我-优先沟通-专属职位推荐
      </text>
    </view>
  </view>

  <!-- 功能按钮 -->
  <view class="mx-3 mb-3">
    <view class="flex justify-between gap-2">
      <navigate-to
        class="flex-1 flex items-center bg-linear-100 h-14 rounded-2 text-4 gap-3 pl-5"
        to-sub="/preview-resume/preview-resume"
      >
        <image src="/static/images/yljl.png" mode="scaleToFill" class="w-7 h-7" />
        <text>在线简历</text>
      </navigate-to>
      <navigate-to
        class="flex-1 flex items-center bg-linear-100 h-14 rounded-2 text-4 gap-3 pl-5"
        to-sub="/publish-job-seeking/publish-job-seeking"
      >
        <image src="/static/images/fbqz.png" mode="scaleToFill" class="w-7 h-7" />
        <text>发布求职</text>
      </navigate-to>
    </view>
  </view>

  <!-- 其他功能 -->
  <view class="mx-3 bg-white rounded-2 shadow-sm p-3">
    <text class="text-4 font-medium text-gray-800 block pb-4">其他功能</text>
    <view class="flex justify-between">
      <navigate-to v-for="item in tools" :to-sub="item.path" :key="item.icon">
        <view class="flex items-center justify-center flex-col flex-1 gap-2">
          <image :src="item.icon" mode="scaleToFill" class="w-7 h-7" />
          <text class="text-[28rpx] text-gray-600 block">{{ item.name }}</text>
        </view>
      </navigate-to>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/store/user'
import { toast } from '@/utils/toast'
import { navigateToSub } from '@/utils'
import { MemberTagRespVO, MemberUserDO } from '@/service/app'

const { getUserInfo } = useUserStore()
// 用户信息
const userInfo = ref<MemberUserDO>({})

let tools = ref([
  {
    name: '我的关注',
    icon: '/static/images/guanzhu.svg',
    path: '/my-follows/my-follows',
  },
  {
    name: '违约公示',
    icon: '/static/images/weiyuegongshi.svg',
    path: '/violation-notice/violation-notice',
  },

  {
    name: '设置',
    icon: '/static/images/shezhi.svg',
    path: '/profile-settings/profile-settings',
  },
  {
    name: '联系客服',
    icon: '/static/images/kefu.svg',
    path: '',
  },
])
// 统计数据
const stats = ref({
  browsed: 156,
  followed: 156,
  applied: 156,
  interviewed: 156,
})

// 加载用户数据
const loadUserData = async () => {
  let res = await getUserInfo()
  userInfo.value = res.data
  console.log(res.data)
}
const tags = computed(() => {
  console.log(userInfo.value)
  return userInfo.value.tags?.split(',')
})

// 升级VIP
const upgradeVip = () => {
  toast.info('跳转到VIP升级页面')
}

// 跳转到在线简历
const goToOnlineResume = () => {
  navigateToSub('/online-resume/online-resume')
}

// 预览简历
const previewResume = () => {
  toast.info('预览简历')
}

// 跳转到我的关注
const goToMyFollows = () => {
  navigateToSub('/my-follows/my-follows')
}
const goToMyCollections = () => {
  navigateToSub('/my-collections/my-collections')
}

// 违约公示
const goToContract = () => {
  navigateToSub('/violation-notice/violation-notice')
}

// 设置
const goToSettings = () => {
  navigateToSub('/profile-settings/profile-settings')
}

// 联系客服
const contactService = () => {
  toast.info('联系客服')
}
onShow(() => {
  loadUserData()
})
</script>
