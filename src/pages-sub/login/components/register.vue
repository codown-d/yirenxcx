<template>
  <view class="px-12">
    <view class="pt-20 mb-7">
      <view class="text-5 font-bold mb-2 drop-shadow-sm">{{ REGISTER_CONFIG.title }}</view>
      <view class="text-3 opacity-80 text-[#8C8C8C]">{{ REGISTER_CONFIG.subtitle }}</view>
    </view>

    <!-- 注册表单 -->
    <view class="space-y-6 mt-8">
      <!-- 手机号 -->
      <wd-input
        v-model="registerForm.phone"
        :placeholder="FORM_CONFIG.phonePlaceholder"
        type="number"
        :maxlength="11"
        clearable
        class="h-22 rounded-3 px-6"
      >
        <template #prefix>
          <wd-icon name="phone" size="16px" color="#999" />
        </template>
      </wd-input>

      <!-- 验证码 -->
      <view class="flex gap-4 items-center">
        <wd-input
          v-model="registerForm.smsCode"
          :placeholder="FORM_CONFIG.smsCodePlaceholder"
          type="number"
          :maxlength="6"
          clearable
          class="flex-1 h-22 rounded-3 px-6"
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

      <!-- 密码 -->
      <wd-input
        v-model="registerForm.password"
        :placeholder="REGISTER_CONFIG.passwordPlaceholder"
        type="text"
        show-password
        clearable
        class="h-22 rounded-3 px-6"
      >
        <template #prefix>
          <wd-icon name="secured" size="16px" color="#999" />
        </template>
      </wd-input>

      <!-- 确认密码 -->
      <wd-input
        v-model="registerForm.confirmPassword"
        :placeholder="REGISTER_CONFIG.confirmPasswordPlaceholder"
        type="text"
        show-password
        clearable
        class="h-22 rounded-3 px-6"
      >
        <template #prefix>
          <wd-icon name="secured" size="16px" color="#999" />
        </template>
      </wd-input>
    </view>

    <!-- 注册按钮和链接 -->
    <view class="text-8 font-medium">
      <view class="flex justify-between items-center mt-4 mb-11 text-3">
        <view class="flex-1">
          <text>已有账户？</text>
          <text class="text-primary pl-2" @click="handleBackToLogin">
            {{ REGISTER_CONFIG.backToLoginText }}
          </text>
        </view>
      </view>
      <wd-button
        block
        @click="handleRegister"
        :round="false"
        :loading="registerLoading"
        type="primary"
      >
        {{ REGISTER_CONFIG.registerButtonText }}
      </wd-button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { toast } from '@/utils/toast'
import { FORM_CONFIG, REGEX_PATTERNS, REGISTER_CONFIG } from '@/constant'
import {
  sendSmsCode as sendSms,
  registerUser,
  checkPhoneExists,
  validateInviteCode,
  type RegisterRequest,
} from '@/service/index/register'

// Props
const props = defineProps({
  agreePrivacy: {
    type: Boolean,
    default: false,
  },
})

// Emits
const emit = defineEmits(['backToLogin', 'registerSuccess'])

// 响应式数据
const registerLoading = ref(false)
const smsCountdown = ref(0)

// 注册表单数据
const registerForm = ref({
  phone: '',
  smsCode: '',
  password: '',
  confirmPassword: '',
  realName: '',
  inviteCode: '',
})

// 计算属性
const agreePrivacy = computed(() => props.agreePrivacy)

// 发送短信验证码
const sendSmsCode = async () => {
  if (!registerForm.value.phone) {
    toast.error('请输入手机号')
    return
  }

  if (!REGEX_PATTERNS.PHONE.test(registerForm.value.phone)) {
    toast.error('请输入正确的手机号')
    return
  }

  try {
    toast.loading('发送中...')

    // 先检查手机号是否已注册
    const checkRes = await checkPhoneExists({
      body: { phone: registerForm.value.phone },
    })

    if (checkRes.code === 0 && checkRes.data.exists) {
      toast.error('该手机号已注册，请直接登录')
      return
    }

    // 发送短信验证码
    const res = await sendSms({
      body: {
        phone: registerForm.value.phone,
        type: 'register',
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
  if (!registerForm.value.phone) {
    toast.error('请输入手机号')
    return false
  }

  if (!REGEX_PATTERNS.PHONE.test(registerForm.value.phone)) {
    toast.error('请输入正确的手机号')
    return false
  }

  if (!registerForm.value.smsCode) {
    toast.error('请输入验证码')
    return false
  }

  if (registerForm.value.smsCode.length !== 6) {
    toast.error('请输入6位验证码')
    return false
  }

  if (!registerForm.value.password) {
    toast.error('请设置登录密码')
    return false
  }

  if (registerForm.value.password.length < 6) {
    toast.error('密码长度不能少于6位')
    return false
  }

  if (!registerForm.value.confirmPassword) {
    toast.error('请确认登录密码')
    return false
  }

  if (registerForm.value.password !== registerForm.value.confirmPassword) {
    toast.error('两次输入的密码不一致')
    return false
  }

  if (!registerForm.value.realName) {
    toast.error('请输入真实姓名')
    return false
  }

  if (registerForm.value.realName.length < 2) {
    toast.error('姓名长度不能少于2位')
    return false
  }

  return true
}

// 注册
const handleRegister = async () => {
  if (!agreePrivacy.value) {
    toast.error('请先阅读并同意用户协议和隐私政策')
    return
  }

  if (!validateForm()) {
    return
  }

  try {
    registerLoading.value = true
    toast.loading('注册中...')

    // 如果有邀请码，先验证邀请码
    if (registerForm.value.inviteCode) {
      const inviteRes = await validateInviteCode({
        body: { inviteCode: registerForm.value.inviteCode },
      })

      if (inviteRes.code !== 0 || !inviteRes.data.valid) {
        toast.error('邀请码无效')
        return
      }
    }

    // 构建注册请求数据
    const registerData: RegisterRequest = {
      phone: registerForm.value.phone,
      smsCode: registerForm.value.smsCode,
      password: registerForm.value.password,
      realName: registerForm.value.realName,
      inviteCode: registerForm.value.inviteCode || undefined,
    }

    // 调用注册API
    const res = await registerUser({ body: registerData })

    if (res.code === 0) {
      toast.success('注册成功')

      // 触发注册成功事件
      emit('registerSuccess', {
        phone: res.data.phone,
        realName: res.data.realName,
        userId: res.data.userId,
        token: res.data.token,
        needRoleSelection: res.data.needRoleSelection,
      })
    } else {
      toast.error(res.msg || '注册失败')
    }
  } catch (error) {
    console.error('注册失败:', error)
    toast.error('注册失败，请重试')
  } finally {
    registerLoading.value = false
  }
}

// 返回登录
const handleBackToLogin = () => {
  emit('backToLogin')
}
</script>
