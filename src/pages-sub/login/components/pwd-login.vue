<template>
  <view class="bg-white rounded-t-8 px-12 mt-auto min-h-60vh">
    <wd-tabs v-model="currentTab">
      <block v-for="tab in LOGIN_TABS" :key="tab.key">
        <wd-tab :title="`${tab.label}`" @click="switchTab(tab.key)">
          <view v-if="currentTab === 'password'" class="space-y-8">
            <view class="mb-8">
              <wd-input
                v-model="loginForm.phone"
                :placeholder="FORM_CONFIG.phonePlaceholder"
                type="number"
                :maxlength="11"
                clearable
                class="h-22 bg-gray-50 rounded-3 px-6"
              >
                <template #prefix>
                  <wd-icon name="phone" size="16px" color="#999" />
                </template>
              </wd-input>
            </view>

            <view class="mb-8">
              <wd-input
                v-model="loginForm.password"
                :placeholder="FORM_CONFIG.passwordPlaceholder"
                type="text"
                show-password
                clearable
                class="h-22 bg-gray-50 rounded-3 px-6"
              >
                <template #prefix>
                  <wd-icon name="lock-on" size="16px" color="#999" />
                </template>
              </wd-input>
            </view>

            <view class="flex justify-between items-center mb-12 text-6">
              <view class="text-primary p-2" @click="handleForgotPassword">
                {{ FORM_CONFIG.forgotPasswordText }}
              </view>
              <view class="text-primary p-2" @click="handleRegister">
                {{ FORM_CONFIG.registerText }}
              </view>
            </view>
          </view>
          <!-- 验证码登录表单 -->
          <view v-else class="space-y-8">
            <view class="mb-8">
              <wd-input
                v-model="loginForm.phone"
                :placeholder="FORM_CONFIG.phonePlaceholder"
                type="number"
                :maxlength="11"
                clearable
                class="h-22 bg-gray-50 rounded-3 px-6"
              >
                <template #prefix>
                  <wd-icon name="phone" size="16px" color="#999" />
                </template>
              </wd-input>
            </view>

            <view class="flex gap-4 mb-8">
              <wd-input
                v-model="loginForm.smsCode"
                :placeholder="FORM_CONFIG.smsCodePlaceholder"
                type="number"
                :maxlength="6"
                clearable
                class="flex-1 h-22 bg-gray-50 rounded-3 px-6"
              >
                <template #prefix>
                  <wd-icon name="secured" size="16px" color="#999" />
                </template>
              </wd-input>
              <wd-button
                :disabled="smsCountdown > 0"
                @click="sendSmsCode"
                size="small"
                type="primary"
                plain
                class="w-40 h-22 rounded-3"
              >
                {{ smsCountdown > 0 ? `${smsCountdown}s` : FORM_CONFIG.sendSmsText }}
              </wd-button>
            </view>

            <view class="flex justify-end mb-12 text-6">
              <view class="text-primary p-2" @click="handleRegister">
                {{ FORM_CONFIG.registerText }}
              </view>
            </view>
          </view>
        </wd-tab>
      </block>
    </wd-tabs>
    <!-- 登录按钮 -->
    <wd-button
      size="large"
      block
      @click="handleLogin"
      :loading="loginLoading"
      class="text-8 font-medium mt-6"
    >
      {{ LOGIN_CONFIG.loginButtonText }}
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
