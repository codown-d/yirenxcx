<template>
  <!-- 登录方式选择 -->
  <!-- Logo 区域 -->
  <view class="text-center pt-16">
    <view class="mb-4">
      <image :src="LOGIN_CONFIG.logo" class="w-21 h-21 mb-4" />
    </view>
    <view class="text-5 font-bold mb-2 drop-shadow-sm">{{ LOGIN_CONFIG.welcomeText }}</view>
    <view class="text-3 opacity-80 text-[#8C8C8C]">{{ LOGIN_CONFIG.subtitle }}</view>
  </view>
  <view class="px-12 space-y-4 mt-11">
    <!-- 微信授权登录 -->
    <wd-button type="success" size="large" :round="false" block @click="handleWechatAuth">
      {{ LOGIN_CONFIG.wechatAuthText }}
    </wd-button>

    <!-- 手机号登录 -->
    <wd-button type="info" size="large" :round="false" block @click="handlePhoneLogin">
      <text class="text-[#555555]">
        {{ LOGIN_CONFIG.phoneLoginText }}
      </text>
    </wd-button>
  </view>
</template>

<script setup lang="ts">
import { toast } from '@/utils/toast'
import { LOGIN_CONFIG } from '@/constant/login'

let props = defineProps({
  agreePrivacy: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['onChange'])
// 微信授权登录
const handleWechatAuth = async () => {
  console.log('微信授权登录', agreePrivacy)
  if (!agreePrivacy.value) {
    toast.error('请先阅读并同意用户协议和隐私政策')
    return
  }

  try {
    // 模拟微信授权登录
    toast.loading('微信授权中...')
    wx.login({
      success: (res) => {
        if (res.code) {
          wx.request({
            url: 'https://your-server.com/api/wx-login',
            method: 'POST',
            data: {
              code: res.code,
            },
            success: (res) => {
              const { token } = res.data
              if (token) {
                console.log('token: ', token)
                wx.setStorageSync('token', token)
                toast.success('授权成功')
              } else {
                toast.error('授权失败')
              }
            },
          })
        }
      },
    })
  } catch (error) {
    toast.error('授权失败，请重试')
  }
}
let agreePrivacy = computed(() => props.agreePrivacy)

// 手机号登录
const handlePhoneLogin = () => {
  emit('onChange', 'pwd')
}
</script>
