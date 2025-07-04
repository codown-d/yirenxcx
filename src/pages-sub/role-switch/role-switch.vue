<route lang="json5" type="page">
{
  layout: 'common',
  style: {
    navigationBarTitleText: ' ',
    navigationStyle: 'custom',
  },
}
</route>
<template>
  <view class="">
    <!-- 当前身份显示 -->
    <view class="px-6 pt-8">
      <view class="text-center">
        <view class="text-5 mb-3 font-bold">您当前身份是"{{ currentRole.name }}"</view>
      </view>
      <view class="pt-4 pb-15">
        <view
          v-for="role in otherRoles"
          :key="role.key"
          class="flex items-center rounded-8 mb-4 flex-col gap-4"
        >
          <image :src="role.avatar" mode="aspectFit" class="w-40 h-40 rounded-full" />
          <view class="flex-1 flex flex-col items-center justify-center gap-1">
            <view class="text-4 text-gray-800 font-bold">{{ role.name }}</view>
            <view class="text-3 text-gray-600">{{ role.description }}</view>
            <view class="text-3 text-gray-600">{{ role.features }}</view>
          </view>
        </view>
      </view>
      <view class="pb-4">
        <view class="text-3 text-gray-500 text-center">
          {{ ROLE_SWITCH_CONFIG.note }}
        </view>
      </view>
      <view class="flex flex-col gap-4">
        <wd-button
          type="primary"
          size="large"
          :round="false"
          @click="showSwitchConfirm(targetRole)"
          custom-class=" !rounded-2"
          v-if="targetRole"
        >
          切换为{{ targetRole.name }}
        </wd-button>

        <wd-button
          type="info"
          size="large"
          :round="false"
          plain
          @click="goBack"
          custom-class=" !rounded-2"
        >
          返回
        </wd-button>
      </view>
    </view>

    <!-- 切换选项 -->

    <!-- 说明文字 -->

    <!-- 底部按钮区域 -->

    <!-- 确认弹窗 -->
    <wd-message-box
      v-model="showConfirm"
      type="confirm"
      :title="confirmTitle"
      :content="confirmContent"
      confirm-button-text="确认切换"
      cancel-button-text="取消"
      @confirm="handleRoleSwitch"
      @cancel="showConfirm = false"
    />
  </view>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { toast } from '@/utils/toast'
import { ROLE_SWITCH_CONFIG, USER_ROLES } from '@/constant/role-switch'

// 页面状态
const showConfirm = ref(false)
const currentUserRole = ref<'jobseeker' | 'employer'>('jobseeker')
const selectedRole = ref<any>(null)

// 当前角色信息
const currentRole = computed(() => {
  return USER_ROLES.find((role) => role.key === currentUserRole.value) || USER_ROLES[0]
})

// 其他角色选项
const otherRoles = computed(() => {
  return USER_ROLES.filter((role) => role.key !== currentUserRole.value)
})

// 目标角色（用于底部按钮）
const targetRole = computed(() => {
  return otherRoles.value[0] || null
})

// 确认弹窗标题和内容
const confirmTitle = computed(() => {
  return selectedRole.value ? `切换为${selectedRole.value.name}` : ''
})

const confirmContent = computed(() => {
  return selectedRole.value
    ? `确认要切换身份为"${selectedRole.value.name}"吗？切换后您将看到对应身份的功能和内容。`
    : ''
})

// 页面加载时获取当前用户角色
onMounted(() => {
  // 从本地存储或路由参数获取当前角色
  const pages = getCurrentPages()
  const currentPage = pages[pages.length - 1]
  const options = currentPage.options || {}

  if (options.currentRole) {
    currentUserRole.value = options.currentRole as 'jobseeker' | 'employer'
  } else {
    // 默认从本地存储获取
    const storedRole = uni.getStorageSync('userRole')
    if (storedRole) {
      currentUserRole.value = storedRole
    }
  }
})

// 返回上一页
const goBack = () => {
  uni.navigateBack()
}

// 显示切换确认
const showSwitchConfirm = (role: any) => {
  selectedRole.value = role
  showConfirm.value = true
}

// 处理角色切换
const handleRoleSwitch = async () => {
  if (!selectedRole.value) return

  try {
    toast.loading('切换中...')

    // 模拟切换过程
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // 保存新角色到本地存储
    uni.setStorageSync('userRole', selectedRole.value.key)
    currentUserRole.value = selectedRole.value.key

    toast.success(`已切换为${selectedRole.value.name}`)

    // 延迟返回上一页
    setTimeout(() => {
      uni.navigateBack()
    }, 1000)
  } catch (error) {
    toast.error('切换失败，请重试')
  } finally {
    showConfirm.value = false
    selectedRole.value = null
  }
}
</script>
