<template>
  <view class="px-12">
    <view class="pt-20 mb-7">
      <view class="text-5 font-bold mb-2 drop-shadow-sm">{{ LOGIN_CONFIG.title }}</view>
    </view>
    <wd-tabs>
      <wd-tab title="密码登录">
        <view class="space-y-6 mt-8">
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
          <wd-input
            v-model="loginForm.password"
            :placeholder="FORM_CONFIG.passwordPlaceholder"
            type="text"
            show-password
            clearable
            class="h-22 bg-gray-50 rounded-3 px-6"
          >
            <template #prefix>
              <wd-icon name="secured" size="16px" color="#999" />
            </template>
          </wd-input>
        </view>
      </wd-tab>
      <wd-tab title="验证码登录">
        <view class="space-y-6 mt-8">
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

          <view class="flex gap-4 items-center">
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
              custom-class="w-20"
            >
              {{ smsCountdown > 0 ? `${smsCountdown}s` : FORM_CONFIG.sendSmsText }}
            </wd-button>
          </view>
        </view>
      </wd-tab>
    </wd-tabs>
    <!-- 登录按钮 -->

    <view class="text-8 font-medium">
      <view class="flex justify-between items-center mt-4 mb-11 text-3">
        <view class="flex-1">
          <text>还没有账户？</text>
          <text class="text-primary pl-2" @click="handleRegister">
            {{ FORM_CONFIG.registerText }}
          </text>
        </view>
        <view class="text-primary">忘记密码？</view>
      </view>
      <wd-button block @click="handleLogin" :round="false" :loading="loginLoading" type="primary">
        {{ LOGIN_CONFIG.loginButtonText }}
      </wd-button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { toast } from '@/utils/toast'
import { LOGIN_CONFIG, FORM_CONFIG } from '@/constant/login'

// 页面状态
const showLoginForm = ref(false)
const showRoleSelection = ref(false)
const currentTab = ref<'password' | 'sms'>('password')
const loginLoading = ref(false)
const smsCountdown = ref(0)

// 登录表单数据
const loginForm = ref({
  phone: '',
  password: '',
  smsCode: '',
})
let props = defineProps({
  agreePrivacy: {
    type: Boolean,
    default: false,
  },
})
// 页面加载完毕时触发
onLoad((option: any) => {
  console.log('登录页面加载', option)
})

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

let agreePrivacy = computed(() => props.agreePrivacy)
// 注册
const handleRegister = () => {
  toast.info('请联系客服注册账号')
}
</script>
