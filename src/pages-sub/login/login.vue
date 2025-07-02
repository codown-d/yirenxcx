<route lang="json5">
{
  layout: 'common',
  style: {
    navigationBarTitleText: ' ',
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <view class="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
    <wx-login v-if="showType === 'wechat'"></wx-login>
    <!-- 登录表单（手机号登录时显示） -->

    <pwd-login v-if="showType === 'pwd'"></pwd-login>

    <!-- 身份选择（登录成功后显示） -->
    <view v-if="showRoleSelection" class="bg-white rounded-t-8 px-12 mt-auto min-h-60vh">
      <view class="text-12 font-bold text-gray-800 text-center mb-12">{{ ROLE_CONFIG.title }}</view>

      <view class="space-y-6 mb-8">
        <view
          v-for="role in ROLE_CONFIG.roles"
          :key="role.key"
          class="flex items-center p-8 bg-gray-50 rounded-4 border-2 border-transparent transition-all duration-300"
          :class="{
            'bg-blue-50 border-primary': selectedRole === role.key,
          }"
          @click="selectRole(role.key)"
        >
          <image :src="role.avatar" mode="aspectFit" class="w-30 h-30 rounded-4 mr-6" />
          <view class="flex-1">
            <view class="text-9 font-semibold text-gray-800 mb-2">{{ role.name }}</view>
            <view class="text-6 text-gray-600">{{ role.description }}</view>
          </view>
        </view>
      </view>

      <view class="text-6 text-gray-500 text-center mb-12 leading-relaxed">
        {{ ROLE_CONFIG.note }}
      </view>

      <wd-button
        type="primary"
        size="large"
        block
        @click="confirmRole"
        :disabled="!selectedRole"
        class="h-24 rounded-12 text-8 font-medium"
      >
        {{ ROLE_CONFIG.confirmText }}
      </wd-button>
    </view>

    <!-- 隐私协议 -->
    <view class="px-12 bg-white/95 backdrop-blur-sm border-t border-gray-100">
      <wd-checkbox v-model="agreePrivacy" shape="square" class="flex items-start justify-center">
        <view class="text-3 leading-relaxed text-gray-600">
          {{ PRIVACY_CONFIG.agreeText }}
          <text class="text-[#248069] font-bold" @click.stop="viewAgreement('user')">
            {{ PRIVACY_CONFIG.userAgreement }}
          </text>
          {{ PRIVACY_CONFIG.andText }}
          <text class="text-[#248069] font-bold" @click.stop="viewAgreement('privacy')">
            {{ PRIVACY_CONFIG.privacyPolicy }}
          </text>
        </view>
      </wd-checkbox>
    </view>
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
import WxLogin from './components/wx-login.vue'
import PwdLogin from './components/pwd-login.vue'

// 页面状态
const showType = ref('pwd')
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
