<route lang="json5" type="page">
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
          <image :src="role.avatar" mode="aspectFill" class="w-40 h-40 rounded-full bg-[#F5F6FA]" />
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
  </view>
  <wd-toast />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { ROLE_SWITCH_CONFIG, USER_ROLES } from '@/constant/role-switch'
import { RoleEmu, useRoleStore, useUserStore } from '@/store'
import { switchTab } from '@/utils'
import { loginIM } from '@/utils/im'
import { genUserSig } from '@/service/app'
import { getUserInfo } from '@/service/member'
const { getRole, setRole } = useRoleStore()
const currentUserRole = ref<RoleEmu>(getRole())

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

// 返回上一页
const goBack = () => {
  switchTab('/mine/mine')
}

// 显示切换确认
/**
 * Toggles the user's role between 'seeking' and 'employer' and redirects to the index page.
 * @param {any} role - The target role to switch to (currently unused in implementation)
 */
const showSwitchConfirm = async (targetRole) => {
  let role = targetRole.key
  let res = await getUserInfo({})
  let imUserId = `im_${role}_${res.data.id}`
  let resUserSig = await genUserSig({ params: { userId: imUserId } })
  await loginIM(imUserId, resUserSig.data)
  currentUserRole.value = targetRole.key
  setRole(role)
  uni.setTabBarItem({
    index: 0,
    text: role === RoleEmu.employer ? '薏人' : '求职',
  })
  switchTab('/index/index')
}
</script>
