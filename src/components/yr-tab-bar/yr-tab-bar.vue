<template>
  <wd-tabbar
    fixed
    :model-value="tabbar"
    bordered
    safeAreaInsetBottom
    placeholder
    @change="change"
    custom-class="!z-1000"
  >
    <wd-tabbar-item
      v-for="tab in tabList"
      :key="tab.pagePath"
      :title="tab.text"
      custom-class="!text-[28rpx]"
    >
      <template #icon>
        <image
          mode="widthFix"
          class="w-[32px]"
          :class="tab.value === 2 ? '!w-[80rpx] !h-[80rpx]' : ''"
          :src="tabbar === tab.value ? tab.selectedIconPath : tab.iconPath"
        ></image>
      </template>
    </wd-tabbar-item>
  </wd-tabbar>
</template>

<script lang="ts" setup>
import { RoleEmu, useRoleStore } from '@/store'
import { navigateTo, navigateToSub, switchTab } from '@/utils'
import { onShow } from '@dcloudio/uni-app'
let { role, getRole } = useRoleStore()
const props = defineProps({
  tabIndex: {
    type: Number,
    required: true,
  },
})
let tabbar = ref(props.tabIndex)
let tabList = ref([
  {
    iconPath: '/static/tabbar/index.png',
    selectedIconPath: '/static/tabbar/indexH.png',
    pagePath: '/index/index',
    value: 0,
    text: !uni.getStorageSync('token') ? '薏仁' : getRole() === RoleEmu.employer ? '薏人' : '招聘',
  },
  {
    iconPath: '/static/tabbar/msg.png',
    selectedIconPath: '/static/tabbar/msgH.png',
    pagePath: '/message/message',
    value: 1,
    text: '消息',
  },
  {
    iconPath: '/static/tabbar/add.png',
    selectedIconPath: '/static/tabbar/addH.png',
    pagePath: '/publish-job-seeking/publish-job-seeking',
    value: 2,
    text: '',
  },
  {
    iconPath: '/static/tabbar/luntan.png',
    selectedIconPath: '/static/tabbar/luntanH.png',
    pagePath: '/forum/forum',
    value: 3,
    text: '论坛',
  },
  {
    iconPath: '/static/tabbar/mine.png',
    selectedIconPath: '/static/tabbar/mineH.png',
    pagePath: '/mine/mine',
    value: 4,
    text: '我的',
  },
])

const change = ({ value }) => {
  console.log(value)
  if (value === 2) {
    if (!uni.getStorageSync('token')) {
      navigateToSub('/login/login')
      return
    }
    return getRole() === RoleEmu.seeking
      ? navigateToSub('/publish-job-seeking/publish-job-seeking')
      : navigateToSub('/publish-recruitment/publish-recruitment')
  }
  let node = tabList.value[value].pagePath
  setTimeout(() => {
    switchTab(node)
  }, 0)
}

onShow(() => {
  tabList.value[0].text = !uni.getStorageSync('token')
    ? '薏仁'
    : getRole() === RoleEmu.employer
      ? '薏人'
      : '求职'
})
</script>
