<template>
  <view class="flex justify-center items-center gap-2 pt-2" @click="createLiJiTouDiFn">
    <image class="w-[24px] h-[26px] top-0" :src="toolProps.url" mode="scaleToFill" />
    <view>{{ toolProps.title }}</view>
  </view>
</template>

<script setup lang="ts">
import { createLiJiTouDi, updateUser } from '@/service/app'
import { RoleEmu, useUserStore } from '@/store'
import { toast } from '@/utils/toast'

let props = defineProps({
  type: {
    type: String,
    required: true,
  },
  chatObjectId: {
    type: [String, Number],
    required: true,
  },
})

const userStore = useUserStore()
let toolProps = computed(() => {
  return props.type === RoleEmu.seeker
    ? {
        url: '/static/images/yqms.svg',
        title: '邀面试',
      }
    : {
        url: '/static/images/jianli.svg',
        title: '发送简历',
      }
})
const createLiJiTouDiFn = async () => {
  let obj =
    props.type === RoleEmu.seeker
      ? {
          toSeekerId: props.chatObjectId,
        }
      : {
          toJobId: props.chatObjectId,
        }
  let res = await createLiJiTouDi({ body: obj })
  if (res.code === 0) {
    console.log(userStore.userInfo)
    if (props.type === RoleEmu.seeker) {
      await updateUser({ body: { mianShiAnPai: '+1', userId: userStore.userInfo.id } })
      await updateUser({ body: { mianShiYaoQing: '+1', userId: props.chatObjectId } })
    } else {
      await updateUser({ body: { touDiJianLi: '+1', userId: userStore.userInfo.id } })
      await updateUser({ body: { shouDaoJianLi: '+1', userId: props.chatObjectId } })
    }
    toast.success(props.type === RoleEmu.seeker ? '邀请已发出' : '简历已发送')
  }
}
</script>
