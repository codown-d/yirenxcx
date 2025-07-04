<route lang="json5" type="page">
{
  style: {
    navigationBarTitleText: '切换身份',
    navigationStyle: 'custom',
  },
}
</route>
<template>
  <view class="min-h-screen bg-gray-50">
    <!-- 自定义导航栏 -->
    <view class="flex items-center justify-between h-22 px-8 pt-safe bg-white">
      <wd-icon name="arrow-left" size="20px" @click="goBack" class="text-gray-800 p-2" />
      <view class="text-9 font-semibold text-gray-800">切换身份</view>
      <view class="w-10"></view>
    </view>

    <!-- 当前身份显示 -->
    <view class="bg-white px-12 py-16">
      <view class="text-center">
        <view class="text-8 text-gray-600 mb-8">您当前身份是"{{ currentRole.name }}"</view>
        
        <!-- 当前角色头像 -->
        <view class="relative mx-auto w-32 h-32 mb-8">
          <image 
            :src="currentRole.avatar" 
            mode="aspectFit" 
            class="w-full h-full rounded-full bg-gray-100"
          />
        </view>

        <!-- 当前角色信息 -->
        <view class="text-center mb-12">
          <view class="text-11 font-bold text-gray-800 mb-3">{{ currentRole.name }}</view>
          <view class="text-7 text-gray-600 mb-4">{{ currentRole.description }}</view>
          <view class="text-6 text-gray-500 leading-relaxed px-8">
            {{ currentRole.features }}
          </view>
        </view>
      </view>
    </view>

    <!-- 切换选项 -->
    <view class="px-12 py-8">
      <view class="bg-white rounded-4 p-8">
        <view class="text-8 font-semibold text-gray-800 mb-6">切换到其他身份</view>
        
        <view 
          v-for="role in otherRoles" 
          :key="role.key"
          class="flex items-center p-6 bg-gray-50 rounded-3 mb-4 last:mb-0 transition-all duration-300 active:bg-gray-100"
          @click="showSwitchConfirm(role)"
        >
          <image 
            :src="role.avatar" 
            mode="aspectFit" 
            class="w-16 h-16 rounded-full mr-4"
          />
          <view class="flex-1">
            <view class="text-8 font-semibold text-gray-800 mb-1">{{ role.name }}</view>
            <view class="text-6 text-gray-600">{{ role.description }}</view>
          </view>
          <wd-icon name="arrow-right" size="16px" class="text-gray-400" />
        </view>
      </view>
    </view>

    <!-- 说明文字 -->
    <view class="px-12 py-4">
      <view class="text-6 text-gray-500 text-center leading-relaxed">
        {{ ROLE_SWITCH_CONFIG.note }}
      </view>
    </view>

    <!-- 底部按钮区域 -->
    <view class="px-12 py-8 mt-auto">
      <wd-button
        type="primary"
        size="large"
        block
        @click="showSwitchConfirm(targetRole)"
        class="h-24 rounded-12 text-8 font-medium mb-4"
        v-if="targetRole"
      >
        切换为{{ targetRole.name }}
      </wd-button>
      
      <wd-button
        type="info"
        size="large"
        block
        plain
        @click="goBack"
        class="h-24 rounded-12 text-8 font-medium"
      >
        返回
      </wd-button>
    </view>

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
  return USER_ROLES.find(role => role.key === currentUserRole.value) || USER_ROLES[0]
})

// 其他角色选项
const otherRoles = computed(() => {
  return USER_ROLES.filter(role => role.key !== currentUserRole.value)
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
  return selectedRole.value ? 
    `确认要切换身份为"${selectedRole.value.name}"吗？切换后您将看到对应身份的功能和内容。` : ''
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
    await new Promise(resolve => setTimeout(resolve, 1500))
    
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
