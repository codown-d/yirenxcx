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
    <wd-button
      type="primary"
      size="large"
      :round="false"
      :disabled="loginLoading"
      block
      open-type="getPhoneNumber"
      @getphonenumber="handleWechatPhoneAuth"
    >
      {{ loginLoading ? '授权中...' : LOGIN_CONFIG.wechatAuthText }}
    </wd-button>

    <!-- #endif -->

    <!-- 手机号登录 -->
    <wd-button
      type="info"
      size="large"
      :round="false"
      v-if="false"
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
import { useUserStore } from '@/store'
import { switchTab } from '@/utils'

const { wxLogin } = useUserStore()

let props = defineProps({
  agreePrivacy: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['onChange', 'register'])
const loginLoading = ref(false)

// 微信手机号授权登录（需要用户主动触发）
const handleWechatPhoneAuth = async (e: any) => {
  if (!agreePrivacy.value) {
    toast.error('请先阅读并同薏用户协议和隐私政策')
    return
  }
  const { code } = e
  await wxLogin(code)
  switchTab('/index/index')
}
let agreePrivacy = computed(() => props.agreePrivacy)

// 手机号登录
const handlePhoneLogin = () => {
  emit('onChange', 'pwd')
}
</script>
