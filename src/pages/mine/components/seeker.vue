<template>
  <view class="mx-3 mb-3 rounded-2 p-4 shadow-sm bg-linear">
    <view class="flex items-center mb-4">
      <yr-avatar-img :img="userInfo?.avatar" />
      <wd-button type="text" v-if="userInfo.gerenAttestation == -1 && !token" @click="goToLogin">
        请点击授权登录
      </wd-button>
      <view class="flex-1" v-else>
        <view class="flex items-center justify-between mb-2" @click="goToOnlineResume">
          <view class="flex items-center">
            <text class="text-4 font-bold text-gray-800 mr-2">{{ userInfo?.name }}</text>
            <view
              @click.stop="goAttestation"
              class="bg-[#eee] text-[20rpx] px-2 py-1 rounded-full"
              :class="[userInfo?.gerenAttestation == 1 ? 'bg-[#FFDD7E] text-[#B16D00]' : '']"
            >
              实名认证
            </view>
          </view>
          <view class="flex items-center text-[12px]">
            个人信息
            <wd-icon name="arrow-right" size="22px"></wd-icon>
          </view>
        </view>
        <text class="text-[12px] text-gray-500 block mb-1">id:{{ userInfo?.id }}</text>
        <text class="text-[22rpx] text-gray-500 block mb-1" v-if="false">
          资料完整度{{ 80 }}%，完善资料获得更多机会
        </text>
      </view>
    </view>
    <view v-if="userInfo.gerenAttestation !== -1 && token">
      <!-- 专业信息 -->
      <view class="mb-2">
        {{ title1 }}
      </view>
      <view class="flex flex-wrap gap-2 mb-3">
        <yr-tag-list v-model="userInfo.tags" class-name="!text-[14px]"></yr-tag-list>
      </view>
      <!-- 基本信息 -->
      <view class="flex items-center text-gray-500 justify-between mb-5">
        <yr-img-title
          url="jingyan.svg"
          :title="userInfo?.gongZuoJingYan"
          v-if="userInfo?.gongZuoJingYan"
        />
        <yr-img-title
          url="school.svg"
          :title="userInfo?.biYeYuanXiao"
          v-if="userInfo?.biYeYuanXiao"
        />
        <yr-img-title url="weizhi.svg" :title="userInfo?.location" v-if="userInfo?.location" />
      </view>
      <wd-divider custom-class="!px-0 mt-4" />
    </view>
    <!-- 统计数据 -->
    <view class="flex justify-between mt-4">
      <view class="text-center flex-1">
        <text class="text-6 font-bold text-gray-800 block pb-2">
          {{ userInfo?.jianLiLiuLan || 0 }}
        </text>
        <text class="text-4 text-gray-500">简历浏览</text>
      </view>
      <view class="text-center flex-1">
        <text class="text-6 font-bold text-gray-800 block pb-2">{{ userInfo?.guanZhu || 0 }}</text>
        <text class="text-4 text-gray-500">获得关注</text>
      </view>
      <view class="text-center flex-1">
        <text class="text-6 font-bold text-gray-800 block pb-2">
          {{ userInfo?.touDiJianLi || 0 }}
        </text>
        <text class="text-4 text-gray-500">投递简历</text>
      </view>
      <view class="text-center flex-1">
        <text class="text-6 font-bold text-gray-800 block pb-2">
          {{ userInfo?.mianShiYaoQing || 0 }}
        </text>
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
    <view class="flex items-center gap-2 flex-col" @click="goToMyZuJi">
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
        to-tab="/plus/plus"
      >
        <image src="/static/images/fbqz.png" mode="scaleToFill" class="w-7 h-7" />
        <text>发布求职</text>
      </navigate-to>
    </view>
  </view>

  <!-- 其他功能 -->
  <wd-card>
    <text class="text-4 font-medium text-gray-800 block pb-3">其他功能</text>
    <wd-cell
      :title="item.name"
      is-link
      :to="'/pages-sub' + item.path"
      :key="item.name"
      v-for="item in tools"
    ></wd-cell>
  </wd-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { toast } from '@/utils/toast'
import { navigateToSub } from '@/utils'
import { useUserInfoTitle } from '@/hooks'
let { getTitle } = useUserInfoTitle()

// 用户信息
let props = defineProps({
  userInfo: {
    type: Object,
    default: () => ({
      gerenAttestation: -1,
    }),
  },
})
let token = ref(uni.getStorageSync('token'))
let title1 = computed(() => {
  return getTitle([
    {
      preUnit: '专业：',
      value: props.userInfo.teChang,
    },
  ])
})
let tools = ref([
  // {
  //   name: '我的关注',
  //   icon: '/static/images/guanzhu.svg',
  //   path: '/my-follows/my-follows',
  // },
  {
    name: '违约公示',
    icon: '/static/images/weiyuegongshi.svg',
    path: '/violation-notice/violation-notice',
  },

  // {
  //   name: '设置',
  //   icon: '/static/images/shezhi.svg',
  //   path: '/profile-settings/profile-settings',
  // },
  // {
  //   name: '联系客服',
  //   icon: '/static/images/kefu.svg',
  //   path: '',
  // },
])
// 升级VIP
const upgradeVip = () => {
  toast.info('跳转到VIP升级页面')
}
const goToLogin = () => {
  navigateToSub('/login/login')
}
// 跳转到在线简历
const goToOnlineResume = () => {
  navigateToSub('/seeker-edit/seeker-edit')
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
const goToMyZuJi = () => {
  navigateToSub('/my-zuji/my-zuji')
}

// 联系客服
const contactService = () => {
  toast.info('联系客服')
}
const goAttestation = () => {
  if (props.userInfo?.gerenAttestation == 0) {
    navigateToSub('/seeker-authentication/seeker-authentication')
  }
}
watch(
  () => props.userInfo,
  () => {
    console.log(123456)
  },
)
onShow(() => {
  console.log(props.userInfo, 'onShow')
})
</script>
