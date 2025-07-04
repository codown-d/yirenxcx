<template>
  <view class="min-h-screen p-10 bg-gray-100">
    <view class="text-center mb-15">
      <text class="text-12 font-bold text-gray-800">角色切换功能测试</text>
    </view>
    
    <view class="space-y-4">
      <!-- 当前角色显示 -->
      <view class="bg-white rounded-4 p-8 shadow-sm mb-6">
        <text class="text-8 font-semibold text-gray-800 block mb-4">当前角色状态：</text>
        <view class="flex items-center">
          <image 
            :src="currentRole.avatar" 
            mode="aspectFit" 
            class="w-16 h-16 rounded-full mr-4"
          />
          <view>
            <view class="text-8 font-semibold text-gray-800">{{ currentRole.name }}</view>
            <view class="text-6 text-gray-600">{{ currentRole.description }}</view>
          </view>
        </view>
      </view>

      <!-- 功能按钮 -->
      <wd-button 
        type="primary" 
        size="large" 
        block 
        @click="goToRoleSwitch"
        class="h-24 rounded-12 text-8 mb-4"
      >
        跳转到角色切换页面
      </wd-button>

      <wd-button 
        type="success" 
        size="large" 
        block 
        @click="simulateRoleSwitch"
        class="h-24 rounded-12 text-8 mb-4"
      >
        模拟切换角色
      </wd-button>

      <wd-button 
        type="info" 
        size="large" 
        block 
        @click="resetRole"
        class="h-24 rounded-12 text-8 mb-4"
      >
        重置为求职者
      </wd-button>
      
      <!-- 功能说明 -->
      <view class="bg-white rounded-4 p-8 shadow-sm">
        <text class="text-8 font-semibold text-gray-800 block mb-6">角色切换功能说明：</text>
        <view class="space-y-2">
          <text class="block text-7 text-gray-600 leading-8">• 支持求职者和雇主身份切换</text>
          <text class="block text-7 text-gray-600 leading-8">• 切换后保存到本地存储</text>
          <text class="block text-7 text-gray-600 leading-8">• 自定义导航栏设计</text>
          <text class="block text-7 text-gray-600 leading-8">• 确认弹窗防误操作</text>
          <text class="block text-7 text-gray-600 leading-8">• 角色信息配置化管理</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { toast } from '@/utils/toast'
import { USER_ROLES } from '@/constant/role-switch'

// 当前角色
const currentUserRole = ref<'jobseeker' | 'employer'>('jobseeker')

// 当前角色信息
const currentRole = computed(() => {
  return USER_ROLES.find(role => role.key === currentUserRole.value) || USER_ROLES[0]
})

// 页面加载时获取角色
onMounted(() => {
  const storedRole = uni.getStorageSync('userRole')
  if (storedRole) {
    currentUserRole.value = storedRole
  }
})

// 跳转到角色切换页面
const goToRoleSwitch = () => {
  uni.navigateTo({
    url: `/pages-sub/role-switch/index?currentRole=${currentUserRole.value}`
  })
}

// 模拟角色切换
const simulateRoleSwitch = () => {
  const newRole = currentUserRole.value === 'jobseeker' ? 'employer' : 'jobseeker'
  const newRoleInfo = USER_ROLES.find(role => role.key === newRole)
  
  if (newRoleInfo) {
    currentUserRole.value = newRole
    uni.setStorageSync('userRole', newRole)
    toast.success(`已切换为${newRoleInfo.name}`)
  }
}

// 重置角色
const resetRole = () => {
  currentUserRole.value = 'jobseeker'
  uni.setStorageSync('userRole', 'jobseeker')
  toast.success('已重置为求职者')
}
</script>
