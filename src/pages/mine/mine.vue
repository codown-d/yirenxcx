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
    <Seeker v-if="roleType === RoleEmu.seeker" :userInfo="userInfo" />
    <Employer v-if="roleType === RoleEmu.employer" :userInfo="userInfo" />
    <view class="px-4" v-if="token">
      <wd-button @click="logoutFn" type="info" :round="false" custom-class="mt-4" block>
        退出登录
      </wd-button>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { getUserInfo } from '@/service/member'
import { RoleEmu, useRoleStore, useUserStore } from '@/store'
import Employer from './components/employer.vue'
import Seeker from './components/seeker.vue'
import { navigateToSub, switchTab } from '@/utils'
const { logout } = useUserStore()
import { onShow } from '@dcloudio/uni-app'

const { getRole } = useRoleStore()
let roleType = ref('')
const changeRole = () => {
  navigateToSub('/role-switch/role-switch')
}
const logoutFn = () => {
  logout()
  switchTab('/index/index')
}
const roleLabel = computed(() => {
  return getRole() === RoleEmu.seeker ? '招聘方' : '求职者'
})
let token = ref(uni.getStorageSync('token'))
const userInfo = ref<any>()
const loadUserData = async () => {
  let res = await getUserInfo({})
  userInfo.value = res.data
}
onShow(() => {
  userInfo.value = { gerenAttestation: -1, qiyeAttestation: -1 }
  loadUserData()
  roleType.value = getRole()
  token.value = uni.getStorageSync('token')
})
</script>
