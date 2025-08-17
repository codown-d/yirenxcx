<route lang="json5" type="page">
{
  layout: 'login',
  style: {
    navigationBarTitleText: '消息',
    navigationStyle: 'custom',
  },
  isTab: true,
}
</route>

<template>
  <view class="px-4 py-2">
    <view
      v-for="(item, index) in conversationList"
      :key="item.id"
      class="bg-white rounded-lg p-4 mb-3 shadow-sm"
      @click="openChat(item)"
    >
      <view class="flex items-center">
        <view class="relative mr-3">
          <image
            :src="item.userProfile.avatar"
            mode="aspectFill"
            class="w-12 h-12 rounded-full bg-gray-50"
          />
          <view
            v-if="item.unreadCount != 0"
            class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full min-w-5 h-5 flex items-center justify-center px-1"
          >
            {{ item.unreadCount > 99 ? '99+' : item.unreadCount }}
          </view>
        </view>

        <!-- 消息内容 -->
        <view class="flex-1 min-w-0">
          <view class="flex items-center justify-between">
            <view class="flex gap-2">
              <text class="text-base font-medium text-gray-900 truncate">
                {{ item.userProfile.nick || '' }}
              </text>
              <!-- 招聘方标识 -->
              <wd-tag
                v-if="isEmployer"
                type="primary"
                mark
                custom-class="!flex items-center !justify-between "
                style="--wot-fs-aid: 14px"
              >
                招聘方
              </wd-tag>
            </view>
            <yr-time-now :time="item.lastMessage.lastTime * 1000"></yr-time-now>
          </view>
          <view class="flex items-center justify-between mb-1">
            <text class="text-sm text-gray-500 truncate">
              {{ item.lastMessage.payload.text }}
            </text>
          </view>
        </view>
      </view>
    </view>

    <!-- 空状态 -->
    <wd-status-tip image="content" tip="暂无内容" v-if="conversationList.length === 0" />
  </view>
  <yr-tab-bar :tabIndex="1"></yr-tab-bar>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { navigateToSub } from '@/utils'
import { getConversationList, setMessageRead } from '@/utils/im'
import { RoleEmu, useRoleStore } from '@/store'
import { merge } from 'lodash-es'
import { getUserByIds } from '@/service/member'
let { getRole } = useRoleStore()

const conversationList = ref([])

// 页面加载

const isEmployer = computed(() => {
  return getRole() === RoleEmu.seeker
})
const getChatList = async () => {
  try {
    let res = await getConversationList()
    let ids = res.map((item) => {
      return item.conversationID.split('_').pop()
    })
    let infoRes = await getUserByIds({
      params: {
        userIds: ids.join(','),
      },
    })
    let infoListMap = infoRes.data.reduce((p, n) => {
      p[`im_seeker_${n.id}`] = n
      p[`im_employer_${n.id}`] = n
      return p
    }, {})

    console.log(ids, infoRes, infoListMap)
    setTimeout(() => {
      conversationList.value = res.map((item) => {
        let node = infoListMap[item.userProfile.userID]
        if (item.conversationID.indexOf('employer') != -1) {
          return merge(item, {
            userProfile: {
              nick: node?.companyName,
              avatar: node?.logo,
            },
          })
        } else {
          return merge(item, {
            userProfile: {
              nick: node?.name,
              avatar: node?.avatar,
            },
          })
        }
      })
      console.log(conversationList.value)
    }, 500)
  } catch (error) {
    console.error(error)
  }
}
const openChat = async (item: any) => {
  setMessageRead(item.conversationID)
  navigateToSub(`/chat/chat?toUserID=${item.userProfile.userID}`)
}
onShow(() => {
  getChatList()
})
</script>
