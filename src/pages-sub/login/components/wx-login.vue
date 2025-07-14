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
    <!-- 微信手机号一键登录 -->
    <!-- #ifdef MP-WEIXIN -->
    <button
      class="bg-primary text-white rounded-2"
      :disabled="loginLoading"
      block
      open-type="getPhoneNumber"
      @getphonenumber="handleWechatPhoneAuth"
    >
      {{ loginLoading ? '授权中...' : LOGIN_CONFIG.wechatAuthText }}
    </button>
    <!-- #endif -->

    <!-- 手机号登录 -->
    <wd-button
      type="info"
      size="large"
      :round="false"
      block
      :disabled="loginLoading"
      @click="handlePhoneLogin"
    >
      <text class="text-[#555555]">
        {{ LOGIN_CONFIG.phoneLoginText }}
      </text>
    </wd-button>
  </view>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { toast } from '@/utils/toast'
import { LOGIN_CONFIG } from '@/constant/login'
import { weixinMiniAppLogin } from '@/service/index/yonghuApPrenzheng'
import type { AppAuthWeixinMiniAppLoginReqVO } from '@/service/index/types'

let props = defineProps({
  agreePrivacy: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['onChange'])
const loginLoading = ref(false)

// 微信手机号授权登录（需要用户主动触发）
const handleWechatPhoneAuth = async (e: any) => {
  if (!agreePrivacy.value) {
    toast.error('请先阅读并同意用户协议和隐私政策')
    return
  }

  try {
    console.log('detail', e)
    const { code } = e.detail
    if (!code) {
      toast.error('获取手机号授权失败')
      return
    }

    loginLoading.value = true
    toast.loading('授权中...')

    // 先获取微信登录code
    const loginRes = await new Promise<UniApp.LoginRes>((resolve, reject) => {
      uni.login({
        provider: 'weixin',
        success: (res) => {
          console.log('loginRes', res)
          resolve(res)
        },
        fail: (error) => reject(new Error('获取登录code失败')),
      })
    })
    // 构建包含手机号授权的登录请求
    const loginData: AppAuthWeixinMiniAppLoginReqVO = {
      loginCode: loginRes.code,
      phoneCode: code, // 手机号授权code
      state: 'miniapp_phone_login',
    }

    const response = await weixinMiniAppLogin({
      body: loginData,
    })

    if (response.code === 0 && response.data) {
      const { accessToken, userId, refreshToken, expiresTime } = response.data

      uni.setStorageSync('token', accessToken)
      uni.setStorageSync('refreshToken', refreshToken)
      uni.setStorageSync('userId', userId)
      uni.setStorageSync('expiresTime', expiresTime)

      toast.success('授权登录成功')

      setTimeout(() => {
        uni.switchTab({
          url: '/pages/index/index',
        })
      }, 1000)
    } else {
      throw new Error(response.msg || '授权登录失败')
    }
  } catch (error) {
    console.error('微信手机号授权错误:', error)
    const errorMessage = error instanceof Error ? error.message : '授权失败，请重试'
    toast.error(errorMessage)
  } finally {
    loginLoading.value = false
  }
}

let agreePrivacy = computed(() => props.agreePrivacy)

// 手机号登录
const handlePhoneLogin = () => {
  emit('onChange', 'pwd')
}
</script>
