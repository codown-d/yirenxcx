<route lang="json5">
{
  layout: 'mine',
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '意仁直聘',
  },
  isTab: true,
}
</route>
<template>
  <view class="h-full" style="background: rgba(245, 246, 250, 1)">
    <wd-navbar
      :bordered="false"
      fixed
      safeAreaInsetTop
      :custom-style="`background-color:rgb(245, 246, 250)`"
    >
      <template #capsule>
        <wd-button
          plain
          hairline
          size="small"
          @click="changeRole"
          custom-class="flex items-center "
          icon="translate-bold"
        >
          切换为{{ roleLabel }}
        </wd-button>
      </template>
    </wd-navbar>
    <view class="bg-[#F5F6FA] h-2"></view>
    <jobseeker v-if="roleType === RoleEmu.seeking"></jobseeker>
    <employer v-else></employer>
    <view class="pb-safe"></view>

    <custom-tab-bar :tab-index="4"></custom-tab-bar>
    <!-- 底部安全区域 -->
  </view>
</template>

<script lang="ts" setup>
import { RoleEmu, useRoleStore } from '@/store'
import { navigateToSub } from '@/utils'
import jobseeker from './components/jobseeker.vue'
import employer from './components/employer.vue'

const { role, getRole } = useRoleStore()
let roleType = ref(role)
const changeRole = () => {
  navigateToSub('/role-switch/role-switch')
}
const roleLabel = computed(() => {
  return getRole() === RoleEmu.seeking ? '招聘方' : '求职者'
})
onShow(() => {
  roleType.value = getRole()
})
</script>
