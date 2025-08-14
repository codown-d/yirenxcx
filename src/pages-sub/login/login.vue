<route lang="json5">
{
  layout: 'login',
  style: {
    navigationBarTitleText: ' ',
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <view class="">
    <wx-login
      v-if="showType === 'wechat'"
      @onChange="onChange"
      :agreePrivacy="agreePrivacy"
      @register="handleShowRegister"
    ></wx-login>
    <!-- 登录表单（手机号登录时显示） -->

    <pwd-login
      v-if="showType === 'pwd'"
      :agreePrivacy="agreePrivacy"
      @register="handleShowRegister"
      @forgotPassword="handleShowForgotPassword"
    ></pwd-login>

    <!-- 注册表单 -->
    <register-form
      v-if="showType === 'register'"
      :agreePrivacy="agreePrivacy"
      @backToLogin="handleBackToLogin"
      @registerSuccess="handleRegisterSuccess"
    ></register-form>

    <!-- 忘记密码表单 -->
    <forgot-password-form
      v-if="showType === 'forgot'"
      :agreePrivacy="agreePrivacy"
      @backToLogin="handleBackToLogin"
      @resetSuccess="handleResetSuccess"
    ></forgot-password-form>

    <!-- 隐私协议 -->
    <view class="px-12 mt-4 backdrop-blur-sm border-t border-gray-100">
      <wd-checkbox v-model="agreePrivacy" shape="square" class="flex items-start justify-center">
        <view class="text-3 leading-relaxed text-gray-600">
          {{ PRIVACY_CONFIG.agreeText }}
          <text class="text-[#248069] font-bold" @click.stop="viewAgreement('user')">
            《用户协议》
          </text>

          {{ PRIVACY_CONFIG.andText }}
          <text class="text-[#248069] font-bold" @click.stop="viewAgreement('privacy')">
            {{ PRIVACY_CONFIG.privacyPolicy }}
          </text>
        </view>
      </wd-checkbox>
    </view>
  </view>
  <privacy-user
    :title="privacyInfo.title"
    :desc="privacyInfo.desc"
    :subDesc="privacyInfo.subDesc"
    :protocol="privacyInfo.protocol"
    :showPopup="showPopup"
    @agree="onAgree"
    @disagree="onDisagree"
  ></privacy-user>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PRIVACY_CONFIG } from '@/constant/login'
import { toast } from '@/utils/toast'
import WxLogin from './components/wx-login.vue'
import PwdLogin from './components/pwd-login.vue'
import RegisterForm from './components/register.vue'
import ForgotPasswordForm from './components/forgot-password.vue'
import { navigateBack } from '@/utils'

// 页面状态
const showType = ref<'wechat' | 'pwd' | 'register' | 'forgot'>('wechat')
const agreePrivacy = ref(false)
let privacyInfo = ref({
  title: '用户隐私保护提示',
  desc: '感谢您使用本应用，您使用本应用的服务之前请仔细阅读并同意',
  subDesc:
    '。当您点击同意并开始时用产品服务时，即表示你已理解并同息该条款内容，该条款将对您产生法律约束力。如您拒绝，将无法使用相应服务。',
  protocol: '《用户隐私保护指引》',
})
let showPopup = ref(false)

let onChange = (type: string) => {
  showType.value = type as 'wechat' | 'pwd' | 'register' | 'forgot'
}

// 显示注册页面
const handleShowRegister = () => {
  showType.value = 'register'
}

// 返回登录页面
const handleBackToLogin = () => {
  showType.value = 'wechat'
}

// 注册成功处理
const handleRegisterSuccess = (userInfo: { phone: string; realName: string }) => {
  toast.success(`欢迎您，${userInfo.realName}！`)

  // 注册成功后可以跳转到身份选择或直接登录
  setTimeout(() => {
    navigateBack()
  }, 1500)
}

// 显示忘记密码页面
const handleShowForgotPassword = () => {
  showType.value = 'forgot'
}

// 重置密码成功处理
const handleResetSuccess = (_resetInfo: { phone: string; message: string }) => {
  toast.success('密码重置成功！')

  // 重置成功后返回登录页面
  setTimeout(() => {
    showType.value = 'pwd'
    toast.info('请使用新密码登录')
  }, 1500)
}

// 查看协议
const viewAgreement = (type: 'user' | 'privacy') => {
  if (type === 'user') {
    privacyInfo.value.title = '用户协议'
  } else {
    privacyInfo.value.title = '隐私政策'
  }
  showPopup.value = true
}

let onAgree = () => {
  agreePrivacy.value = true
  showPopup.value = false
}

let onDisagree = () => {
  agreePrivacy.value = false
  showPopup.value = false
}
</script>
