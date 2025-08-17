<route lang="json5">
{
  layout: 'mine',
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '薏仁直聘',
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
  <view class="pt-4">
    <jobseeker v-if="roleType === RoleEmu.seeker"></jobseeker>
    <employer v-else></employer>
  </view>
  <yr-tab-bar :tabIndex="4"></yr-tab-bar>
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
  return getRole() === RoleEmu.seeker ? '招聘方' : '求职者'
})
onShow(() => {
  roleType.value = getRole()
})
</script>
