<route lang="json5">
{
  layout: 'mine',
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '薏人直聘',
  },
  isTab: true,
}
</route>
<template>
  <wd-navbar :bordered="false" fixed safeAreaInsetTop custom-class="!bg-[#F5F6FA]">
    <template #capsule>
      <wd-button
        hairline
        size="small"
        type="info"
        @click="changeRole"
        custom-class="flex items-center !bg-[#fff] "
        icon="translate-bold"
      >
        切换为{{ roleLabel }}
      </wd-button>
    </template>
  </wd-navbar>
  <view class="pt-4 pb-4">
    <jobseeker v-if="roleType === RoleEmu.seeker"></jobseeker>
    <employer v-else></employer>
    <view class="px-4">
      <wd-button @click="logoutFn" type="info" :round="false" custom-class="mt-4" block>
        退出登录
      </wd-button>
    </view>
  </view>
  <!-- <yr-tab-bar :tabIndex="4" @tabPageShow="onTabItemTap"></yr-tab-bar> -->
</template>

<script lang="ts" setup>
import { RoleEmu, useRoleStore, useUserStore } from '@/store'
import { navigateToSub } from '@/utils'
import jobseeker from './components/jobseeker.vue'
import employer from './components/employer.vue'
const { logout } = useUserStore()

const { role, getRole } = useRoleStore()
let roleType = ref(role)
const changeRole = () => {
  navigateToSub('/role-switch/role-switch')
}
const logoutFn = () => {
  logout()
  navigateToSub('/login/login')
}
const roleLabel = computed(() => {
  return getRole() === RoleEmu.seeker ? '招聘方' : '求职者'
})
console.log(123456)
onShow(() => {
  roleType.value = getRole()
  console.log('onShow', roleType.value)
})
</script>
