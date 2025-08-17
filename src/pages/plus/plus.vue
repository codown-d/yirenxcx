<route lang="json5">
{
  layout: 'mine',
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '论坛',
  },
}
</route>

<template>
  <wd-navbar :bordered="false" fixed safeAreaInsetTop custom-class="!bg-[#F5F6FA]">
    <wd-button
      hairline
      size="small"
      type="info"
      custom-class="flex items-center !bg-[#fff] "
      icon="translate-bold"
    >
      切换为
    </wd-button>
  </wd-navbar>
  <EmployerPublish v-if="roleType === RoleEmu.employer" ref="formRef" />
  <SeekerPublish v-else ref="formRef" />
  <view class="flex gap-4 p-4">
    <wd-button type="info" custom-class="w-[33%]" :round="false" @click="saveDraft">取消</wd-button>
    <wd-button
      type="primary"
      custom-class="flex-1"
      :round="false"
      :disabled="loading"
      @click="publishInfo"
    >
      {{ loading ? '发布中...' : '发布' }}
    </wd-button>
  </view>
</template>

<script setup lang="ts">
import { toast } from '@/utils/toast'
import EmployerPublish from './components/employer-publish.vue'
import SeekerPublish from './components/seeker-publish.vue'
import { RoleEmu, useRoleStore } from '@/store'
import { createJob, createJobSeeker } from '@/service/app'

const { role, getRole } = useRoleStore()
let roleType = ref(role)
const loading = ref(false)
const formRef = ref()
const saveDraft = () => {}

const publishInfo = async () => {
  loading.value = true
  let value = await formRef.value?.getFormData()
  if (roleType.value === RoleEmu.employer) {
    await createJob({
      body: value,
    })
  } else {
    await createJobSeeker({ body: value })
  }
  toast.success('发布成功')
  loading.value = false
}

onShow(() => {
  roleType.value = getRole()
})
</script>
