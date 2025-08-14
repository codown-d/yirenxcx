<template>
  <view class="px-12">
    <view class="pt-20 mb-7">
      <view class="text-5 font-bold mb-2 drop-shadow-sm">{{ FORGOT_PASSWORD_CONFIG.title }}</view>
      <view class="text-3 opacity-80 text-[#8C8C8C]">{{ FORGOT_PASSWORD_CONFIG.subtitle }}</view>
    </view>

    <!-- 重置密码表单 -->
    <view class="space-y-6 mt-8">
      <!-- 手机号 -->
      <wd-input
        v-model="resetForm.phone"
        :placeholder="FORM_CONFIG.phonePlaceholder"
        type="number"
        :maxlength="11"
        clearable
      >
        <template #prefix>
          <wd-icon name="phone" size="16px" color="#999" />
        </template>
      </wd-input>

      <!-- 验证码 -->
      <view class="flex gap-4 items-center">
        <wd-input
          v-model="resetForm.smsCode"
          :placeholder="FORM_CONFIG.smsCodePlaceholder"
          type="number"
          :maxlength="6"
          clearable
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

      <!-- 新密码 -->
      <wd-input
        v-model="resetForm.newPassword"
        :placeholder="FORGOT_PASSWORD_CONFIG.newPasswordPlaceholder"
        type="text"
        show-password
        clearable
      >
        <template #prefix>
          <wd-icon name="secured" size="16px" color="#999" />
        </template>
      </wd-input>

      <!-- 确认新密码 -->
      <wd-input
        v-model="resetForm.confirmPassword"
        :placeholder="FORGOT_PASSWORD_CONFIG.confirmPasswordPlaceholder"
        type="text"
        show-password
        clearable
      >
        <template #prefix>
          <wd-icon name="secured" size="16px" color="#999" />
        </template>
      </wd-input>
    </view>

    <!-- 重置密码按钮和链接 -->
    <view class="text-8 font-medium">
      <view class="flex justify-between items-center mt-4 mb-11 text-3">
        <view class="flex-1">
          <text>想起密码了？</text>
          <text class="text-primary pl-2" @click="handleBackToLogin">
            {{ FORGOT_PASSWORD_CONFIG.backToLoginText }}
          </text>
        </view>
      </view>
      <wd-button
        block
        @click="handleResetPassword"
        :round="false"
        :loading="resetLoading"
        type="primary"
      >
        {{ FORGOT_PASSWORD_CONFIG.resetButtonText }}
      </wd-button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { toast } from '@/utils/toast'
import { FORM_CONFIG, REGEX_PATTERNS, FORGOT_PASSWORD_CONFIG } from '@/constant'

// 类型定义
interface ResetPasswordRequest {
  phone: string
  code: string
  password: string
  confirmPassword: string
}

// 模拟接口
const checkPhoneExists = async (params: any) => {
  return {
    code: 0,
    data: { exists: true },
    msg: 'success',
  }
}

const resetPassword = async (params: any) => {
  return {
    code: 0,
    data: { success: true },
    msg: 'success',
  }
}

const verifySmsCode = async (params: any) => {
  return {
    code: 0,
    data: {
      valid: true,
      token: 'verify_token_' + Date.now(),
    },
    msg: 'success',
  }
}

// Props
const props = defineProps({
  agreePrivacy: {
    type: Boolean,
    default: false,
  },
})

// Emits
const emit = defineEmits(['backToLogin', 'resetSuccess'])

// 响应式数据
const resetLoading = ref(false)
const smsCountdown = ref(0)

// 重置密码表单数据
const resetForm = ref({
  phone: '',
  smsCode: '',
  newPassword: '',
  confirmPassword: '',
})

// 计算属性
const agreePrivacy = computed(() => props.agreePrivacy)

// 发送短信验证码
const sendSmsCode = async () => {
  if (!resetForm.value.phone) {
    toast.error('请输入手机号')
    return
  }

  if (!REGEX_PATTERNS.PHONE.test(resetForm.value.phone)) {
    toast.error('请输入正确的手机号')
    return
  }

  try {
    toast.loading('发送中...')

    // 先检查手机号是否已注册
    const checkRes = await checkPhoneExists({
      body: { phone: resetForm.value.phone },
    })

    if (checkRes.code === 0 && !checkRes.data.exists) {
      toast.error('该手机号未注册，请先注册账号')
      return
    }

    // 发送短信验证码
    const res = await checkPhoneExists({
      body: {
        mobile: resetForm.value.phone,
        scene: 2, // 重置密码场景
      },
    })

    if (res.code === 0) {
      toast.success('验证码已发送')

      // 开始倒计时
      smsCountdown.value = res.data.countdown || 60
      const timer = setInterval(() => {
        smsCountdown.value--
        if (smsCountdown.value <= 0) {
          clearInterval(timer)
        }
      }, 1000)
    } else {
      toast.error(res.msg || '发送失败')
    }
  } catch (error) {
    console.error('发送短信失败:', error)
    toast.error('发送失败，请重试')
  }
}

// 表单验证
const validateForm = () => {
  if (!resetForm.value.phone) {
    toast.error('请输入手机号')
    return false
  }

  if (!REGEX_PATTERNS.PHONE.test(resetForm.value.phone)) {
    toast.error('请输入正确的手机号')
    return false
  }

  if (!resetForm.value.smsCode) {
    toast.error('请输入验证码')
    return false
  }

  if (resetForm.value.smsCode.length !== 6) {
    toast.error('请输入6位验证码')
    return false
  }

  if (!resetForm.value.newPassword) {
    toast.error('请输入新密码')
    return false
  }

  if (resetForm.value.newPassword.length < 6) {
    toast.error('密码长度不能少于6位')
    return false
  }

  if (!resetForm.value.confirmPassword) {
    toast.error('请确认新密码')
    return false
  }

  if (resetForm.value.newPassword !== resetForm.value.confirmPassword) {
    toast.error('两次输入的密码不一致')
    return false
  }

  return true
}

// 重置密码
const handleResetPassword = async () => {
  if (!agreePrivacy.value) {
    toast.error('请先阅读并同薏用户协议和隐私政策')
    return
  }

  if (!validateForm()) {
    return
  }

  try {
    resetLoading.value = true
    toast.loading('重置中...')

    // 先验证短信验证码
    const verifyRes = await verifySmsCode({
      body: {
        phone: resetForm.value.phone,
        smsCode: resetForm.value.smsCode,
        type: 'reset',
      },
    })

    if (verifyRes.code !== 0 || !verifyRes.data.valid) {
      toast.error('验证码错误或已过期')
      return
    }

    // 构建重置密码请求数据
    const resetData: ResetPasswordRequest = {
      phone: resetForm.value.phone,
      smsCode: resetForm.value.smsCode,
      newPassword: resetForm.value.newPassword,
      verifyToken: verifyRes.data.token,
    }

    // 调用重置密码API
    const res = await resetPassword({ body: resetData })

    if (res.code === 0) {
      toast.success('密码重置成功')

      // 触发重置成功事件
      emit('resetSuccess', {
        phone: resetForm.value.phone,
        message: '密码已重置，请使用新密码登录',
      })
    } else {
      toast.error(res.msg || '重置失败')
    }
  } catch (error) {
    console.error('重置密码失败:', error)
    toast.error('重置失败，请重试')
  } finally {
    resetLoading.value = false
  }
}

// 返回登录
const handleBackToLogin = () => {
  emit('backToLogin')
}
</script>
