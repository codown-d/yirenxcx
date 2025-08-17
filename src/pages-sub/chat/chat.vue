<route lang="json5" type="page">
{
  layout: 'blank',
  style: {
    navigationBarTitleText: '消息',
    navigationStyle: 'custom',
  },
}
</route>
<template>
  <view class="h-100vh">
    <wd-navbar :bordered="false" safeAreaInsetTop fixed>
      <template #left>
        <view class="flex gap-2 items-center">
          <wd-icon name="arrow-left" size="22px" @click="handleClickLeft"></wd-icon>
          <view>{{ chatInfo.name }}</view>
        </view>
      </template>
    </wd-navbar>
    <scroll-view
      class="h-100vh bg-[#F5F6FA]"
      scroll-y
      :scroll-into-view="scrollToId"
      scroll-with-animation
    >
      <view
        class="relative"
        :style="{
          paddingTop: safeAreaInsets?.top + 44 + 50 + 'px',
        }"
      >
        <view
          :style="{
            paddingTop: safeAreaInsets?.top + 44 + 'px',
          }"
          class="fixed h-[50px] z-10 bg-[#fff] top-0 w-full flex items-center justify-center"
        >
          <Tool :type="toolType" :chat-object-id="chatObject?.id" v-if="chatObject"></Tool>
        </view>
        <MessageItem v-for="item in messageList" :key="item.ID" :message="item" />
        <view id="bottom-anchor" class="h-30"></view>
      </view>
    </scroll-view>
  </view>
  <yr-page-footer>
    <InputBox @send="sendMessage" class="flex-1 w-full" @send-file="sendFileFn" />
  </yr-page-footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MessageItem from './components/MessageItem.vue'
import InputBox from './components/InputBox.vue'
import { getSystemInfoSync, navigateBack } from '@/utils'
import { RoleEmu, useRoleStore } from '@/store'
import { getMessageList, sendImageMessage, sendTextMessage, setMsgCallback } from '@/utils/im'
import Tool from './components/tool.vue'
import { find } from 'lodash-es'
import { getJobPage } from '@/service/app'
import { getUserByIds } from '@/service/member'
const { safeAreaInsets } = getSystemInfoSync()

const messageList = ref([])
const toUserID = ref() // 对方 ID，可通过路由传参获取
const scrollToId = ref('bottom-anchor')
const chatObject = ref()

let { getRole } = useRoleStore()

const handleClickLeft = () => {
  navigateBack()
}
const toolType = computed(() => {
  return toUserID.value?.indexOf(RoleEmu.employer) != -1 ? 'employer' : 'seeker'
})
const scrollToBottom = () => {
  scrollToId.value = ''
  setTimeout(() => {
    scrollToId.value = 'bottom-anchor'
  }, 30)
}
const chatInfo = computed(() => {
  return getRole() === RoleEmu.seeker
    ? { name: chatObject.value?.companyName || '招聘方', avatar: chatObject.value?.logo }
    : { name: chatObject.value?.name, avatar: chatObject.value?.avatar }
})
const sendMessage = async (text) => {
  let userInfo = uni.getStorageSync('userInfo')
  let res = await getJobPage({
    params: {
      str: text,
      userId: userInfo.id,
      userType: getRole(),
    },
  })
  let resText = await sendTextMessage(toUserID.value, res.data)
  addMsg([resText.data.message])
}
let getMessageListFn = async (toUserID, count = 100) => {
  if (!toUserID) return
  let res = await getMessageList({
    toUserID: toUserID,
    count: count,
  })
  console.log(res.data.messageList, 'res.data.messageList')
  addMsg(res.data.messageList)
}
const addMsg = async (list) => {
  const mappedMessages = list.map((item) => {
    console.log(item)
    return {
      ...item,
      avatar:
        item.from.indexOf('employer') != -1
          ? infoMap.value[item.from]?.logo
          : infoMap.value[item.from]?.avatar,
      name:
        item.from.indexOf('employer') != -1
          ? infoMap.value[item.from]?.companyName
          : infoMap.value[item.from]?.name,
    }
  })
  messageList.value.push(...mappedMessages)
  scrollToBottom()
}
const sendFileFn = async () => {
  let res = await sendImageMessage(toUserID.value)
  addMsg([res.data.message])
}
let infoMap = ref({})
onLoad(async (option) => {
  if (option.toUserID) {
    toUserID.value = option.toUserID
    let [im, role, id = ''] = option.toUserID.split('_')
    let chatUserInfo = await getUserByIds({ params: { userIds: id } })
    chatObject.value = find(chatUserInfo.data, (v) => v.id == Number(id))

    infoMap.value[option.toUserID] = chatObject.value
    let userInfo = uni.getStorageSync('userInfo')
    infoMap.value[`im_${RoleEmu.seeker}_${userInfo.id}`] = userInfo
    infoMap.value[`im_${RoleEmu.employer}_${userInfo.id}`] = userInfo

    console.log(infoMap, 'infoMap')
    setMsgCallback(addMsg)
    getMessageListFn(toUserID.value)
  }
})
</script>
