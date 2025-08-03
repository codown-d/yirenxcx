<template>
  <view class="flex justify-center items-center gap-2 pt-2" @click="createLiJiTouDiFn">
    <image class="w-[24px] h-[26px] top-0" :src="toolProps.url" mode="scaleToFill" />
    <view>{{ toolProps.title }}</view>
  </view>
</template>

<script setup lang="ts">
import { createLiJiTouDi } from '@/service/app'
import { RoleEmu } from '@/store'
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
    toast.success(props.type === RoleEmu.seeker ? '邀请已发出' : '简历已发送')
  }
}
</script>
