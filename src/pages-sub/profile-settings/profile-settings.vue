<route lang="json5" type="page">
{
  layout: 'common',
  style: {
    navigationBarTitleText: '个人资料',
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <view class="px-4">
    <!-- 设置选项列表 -->
    <view class="bg-white rounded-2">
      <!-- 个人信息 -->
      <view class="px-4 py-4 border-b border-gray-100" @click="goToPersonalInfo">
        <view class="flex items-center justify-between">
          <view class="flex-1">
            <text class="text-base font-medium text-gray-900 block mb-1">个人信息</text>
            <text class="text-sm text-gray-500">管理您的个人资料和账户信息</text>
          </view>
          <wd-icon name="arrow-right" custom-class="text-[#B3B3B3]"></wd-icon>
        </view>
      </view>

      <wd-divider></wd-divider>
      <!-- 通知信息 -->
      <view class="px-4 py-4 border-b border-gray-100" @click="goToNotificationSettings">
        <view class="flex items-center justify-between">
          <view class="flex-1">
            <text class="text-base font-medium text-gray-900 block mb-1">通知信息</text>
            <text class="text-sm text-gray-500">管理推送通知消息提醒</text>
          </view>
          <wd-icon name="arrow-right" custom-class="text-[#B3B3B3]"></wd-icon>
        </view>
      </view>

      <wd-divider></wd-divider>

      <!-- 隐私与安全 -->
      <view class="px-4 py-4 border-b border-gray-100" @click="goToPrivacySecurity">
        <view class="flex items-center justify-between">
          <view class="flex-1">
            <text class="text-base font-medium text-gray-900 block mb-1">隐私与安全</text>
            <text class="text-sm text-gray-500">账户安全设置和隐私控制</text>
          </view>
          <wd-icon name="arrow-right" custom-class="text-[#B3B3B3]"></wd-icon>
        </view>
      </view>

      <wd-divider></wd-divider>

      <!-- 语言与地区 -->
      <view class="px-4 py-4 border-b border-gray-100" @click="goToLanguageRegion">
        <view class="flex items-center justify-between">
          <view class="flex-1">
            <text class="text-base font-medium text-gray-900 block mb-1">语言与地区</text>
            <text class="text-sm text-gray-500">设置语言偏好和地区信息</text>
          </view>
          <wd-icon name="arrow-right" custom-class="text-[#B3B3B3]"></wd-icon>
        </view>
      </view>

      <wd-divider></wd-divider>

      <!-- 帮助与支持 -->
      <view class="px-4 py-4" @click="goToHelpSupport">
        <view class="flex items-center justify-between">
          <view class="flex-1">
            <text class="text-base font-medium text-gray-900 block mb-1">帮助与支持</text>
            <text class="text-sm text-gray-500">获取帮助和联系客服</text>
          </view>
        </view>
      </view>
    </view>

    <!-- 退出登录按钮 -->
    <view class="px-4 py-6 mt-4">
      <wd-button type="info" block size="large" :round="false" @click="showLogoutConfirm">
        退出登录
      </wd-button>
    </view>

    <!-- 版本信息 -->
    <view class="text-center py-4">
      <text class="text-sm text-gray-400 block mb-1">艺仁直聘 v{{ appVersion }}</text>
      <text class="text-xs text-gray-400">求职者招聘平台</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { toast } from '@/utils/toast'
import { useUserStore } from '@/store/user'
import { useMessage } from 'wot-design-uni'

// 用户状态管理
const userStore = useUserStore()

// 响应式数据
const showLogoutDialog = ref(false)
const appVersion = ref('1.0.0')

// 页面加载
onMounted(() => {
  loadAppInfo()
})

// 加载应用信息
const loadAppInfo = () => {
  // 获取应用版本信息
  // #ifdef APP-PLUS
  plus.runtime.getProperty(plus.runtime.appid, (info) => {
    appVersion.value = info.version || '1.0.0'
  })
  // #endif

  // #ifdef H5
  appVersion.value = '1.0.0'
  // #endif

  // #ifdef MP
  const accountInfo = uni.getAccountInfoSync()
  appVersion.value = accountInfo.miniProgram?.version || '1.0.0'
  // #endif
}

// 跳转到个人信息页面
const goToPersonalInfo = () => {
  uni.navigateTo({
    url: '/pages-sub/profile-edit/profile-edit',
  })
}

// 跳转到通知设置页面
const goToNotificationSettings = () => {
  toast.info('通知设置功能开发中')
  // uni.navigateTo({
  //   url: '/pages-sub/notification-settings/notification-settings'
  // })
}

// 跳转到隐私与安全页面
const goToPrivacySecurity = () => {
  toast.info('隐私与安全功能开发中')
  // uni.navigateTo({
  //   url: '/pages-sub/privacy-security/privacy-security'
  // })
}

// 跳转到语言与地区页面
const goToLanguageRegion = () => {
  toast.info('语言与地区功能开发中')
  // uni.navigateTo({
  //   url: '/pages-sub/language-region/language-region'
  // })
}

// 跳转到帮助与支持页面
const goToHelpSupport = () => {
  toast.info('帮助与支持功能开发中')
  // uni.navigateTo({
  //   url: '/pages-sub/help-support/help-support'
  // })
}
const message = useMessage()
// 显示退出登录确认
const showLogoutConfirm = () => {
  message
    .confirm({
      msg: '确定要退出当前账户吗？',
      title: '退出登录',
    })
    .then(() => {})
    .catch(() => {})
}

// 处理退出登录
const handleLogout = async () => {
  try {
    // 清除用户数据
    await userStore.logout()

    toast.success('已退出登录')

    // 延迟跳转到登录页面
    setTimeout(() => {
      uni.reLaunch({
        url: '/pages-sub/login/index',
      })
    }, 1000)
  } catch (error) {
    console.error('退出登录失败:', error)
    toast.error('退出登录失败，请重试')
  } finally {
    showLogoutDialog.value = false
  }
}
</script>

<style scoped>
/* 如果需要额外的样式可以在这里添加 */
</style>
