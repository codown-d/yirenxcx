<template>
  <wd-tabbar fixed :model-value="tabbar" bordered safeAreaInsetBottom placeholder @change="change">
    <wd-tabbar-item
      v-for="tab in tabList"
      :key="tab.pagePath"
      :title="tab.text"
      custom-class="pt-[12rpx] !text-[24rpx]"
    >
      <template #icon>
        <wd-img
          height="40rpx"
          width="40rpx"
          :custom-class="tab.value === 2 ? '!w-[80rpx] !h-[80rpx]' : 'mb-1'"
          :src="tabbar === tab.value ? tab.selectedIconPath : tab.iconPath"
        ></wd-img>
      </template>
    </wd-tabbar-item>
  </wd-tabbar>
</template>

<script lang="ts" setup>
import { RoleEmu, useRoleStore } from '@/store'
import { navigateToSub, switchTab } from '@/utils'

let { role } = useRoleStore()
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
    text: '薏仁',
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
  if (value === 2) {
    return role === RoleEmu.seeking
      ? navigateToSub('/publish-job-seeking/publish-job-seeking')
      : navigateToSub('/publish-recruitment/publish-recruitment')
  }
  let node = tabList.value[value].pagePath
  switchTab(node)
}
</script>
