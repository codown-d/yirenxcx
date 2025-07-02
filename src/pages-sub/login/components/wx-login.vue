<template>
  <!-- 登录方式选择 -->
  <!-- Logo 区域 -->
  <view class="text-center pt-16 mb-11">
    <view class="mb-4">
      <image :src="LOGIN_CONFIG.logo" class="w-21 h-21 mb-4" />
    </view>
    <view class="text-5 font-bold mb-2 drop-shadow-sm">{{ LOGIN_CONFIG.welcomeText }}</view>
    <view class="text-3 opacity-80 text-[#8C8C8C]">{{ LOGIN_CONFIG.subtitle }}</view>
  </view>
  <view class="px-12 mb-4 space-y-4">
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
import { ref } from 'vue'
import { toast } from '@/utils/toast'
import {
  LOGIN_CONFIG,
  LOGIN_TABS,
  FORM_CONFIG,
  ROLE_CONFIG,
  PRIVACY_CONFIG,
} from '@/constant/login'

// 页面状态
const showLoginForm = ref(false)
const showRoleSelection = ref(false)
const currentTab = ref<'password' | 'sms'>('password')
const selectedRole = ref('')
const agreePrivacy = ref(false)
const loginLoading = ref(false)
const smsCountdown = ref(0)

// 登录表单数据
const loginForm = ref({
  phone: '',
  password: '',
  smsCode: '',
})

// 页面加载完毕时触发
onLoad((option: any) => {
  console.log('登录页面加载', option)
})

// 返回上一页
const goBack = () => {
  uni.navigateBack()
}

// 微信授权登录
const handleWechatAuth = async () => {
  if (!agreePrivacy.value) {
    toast.error('请先阅读并同意用户协议和隐私政策')
    return
  }

  try {
    // 模拟微信授权登录
    toast.loading('微信授权中...')
    await new Promise((resolve) => setTimeout(resolve, 1500))
    toast.success('授权成功')

    // 显示身份选择
    showRoleSelection.value = true
  } catch (error) {
    toast.error('授权失败，请重试')
  }
}

// 手机号登录
const handlePhoneLogin = () => {
  showLoginForm.value = true
}

// 切换登录方式
const switchTab = (tab: 'password' | 'sms') => {
  currentTab.value = tab
  // 清空表单
  loginForm.value = {
    phone: '',
    password: '',
    smsCode: '',
  }
}

// 发送短信验证码
const sendSmsCode = async () => {
  if (!loginForm.value.phone) {
    toast.error('请输入手机号')
    return
  }

  if (!/^1[3-9]\d{9}$/.test(loginForm.value.phone)) {
    toast.error('请输入正确的手机号')
    return
  }

  try {
    toast.loading('发送中...')
    // 模拟发送短信
    await new Promise((resolve) => setTimeout(resolve, 1000))
    toast.success('验证码已发送')

    // 开始倒计时
    smsCountdown.value = 60
    const timer = setInterval(() => {
      smsCountdown.value--
      if (smsCountdown.value <= 0) {
        clearInterval(timer)
      }
    }, 1000)
  } catch (error) {
    toast.error('发送失败，请重试')
  }
}

// 登录
const handleLogin = async () => {
  if (!agreePrivacy.value) {
    toast.error('请先阅读并同意用户协议和隐私政策')
    return
  }

  // 表单验证
  if (!loginForm.value.phone) {
    toast.error('请输入手机号')
    return
  }

  if (!/^1[3-9]\d{9}$/.test(loginForm.value.phone)) {
    toast.error('请输入正确的手机号')
    return
  }

  if (currentTab.value === 'password') {
    if (!loginForm.value.password) {
      toast.error('请输入密码')
      return
    }
  } else {
    if (!loginForm.value.smsCode) {
      toast.error('请输入验证码')
      return
    }
  }

  try {
    loginLoading.value = true
    toast.loading('登录中...')

    // 模拟登录
    await new Promise((resolve) => setTimeout(resolve, 1500))
    toast.success('登录成功')

    // 显示身份选择
    showLoginForm.value = false
    showRoleSelection.value = true
  } catch (error) {
    toast.error('登录失败，请重试')
  } finally {
    loginLoading.value = false
  }
}

// 忘记密码
const handleForgotPassword = () => {
  toast.info('请联系客服重置密码')
}

// 注册
const handleRegister = () => {
  toast.info('请联系客服注册账号')
}

// 选择身份
const selectRole = (roleKey: string) => {
  selectedRole.value = roleKey
}

// 确认身份
const confirmRole = () => {
  if (!selectedRole.value) {
    toast.error('请选择身份')
    return
  }

  toast.success('身份选择成功')

  // 跳转到首页
  setTimeout(() => {
    uni.switchTab({
      url: '/pages/index/index',
    })
  }, 1000)
}

// 查看协议
const viewAgreement = (type: 'user' | 'privacy') => {
  const title = type === 'user' ? '用户协议' : '隐私政策'
  toast.info(`查看${title}`)
  // 实际项目中可以跳转到对应的协议页面
}
</script>
