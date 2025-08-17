<route lang="json5">
{
  layout: 'default',
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '发布信息',
  },
  isTab: true,
}
</route>

<template>
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

  <yr-tab-bar :tabIndex="2"></yr-tab-bar>
</template>

<script setup lang="ts">
import { toast } from '@/utils/toast'
import EmployerPublish from './components/employer-publish.vue'
import SeekerPublish from './components/seeker-publish.vue'
import { RoleEmu, useRoleStore } from '@/store'
import { createJob, createJobSeeker } from '@/service/app'
import { switchTab } from '@/utils'

const { role, getRole } = useRoleStore()
let roleType = ref(role)
const loading = ref(false)
const formRef = ref()
const saveDraft = () => {
  switchTab('/index/index')
}

const publishInfo = async () => {
  loading.value = true
  try {
    let value = await formRef.value?.getFormData()
    if (!value) return
    if (roleType.value === RoleEmu.employer) {
      await createJob({
        body: value,
      })
    } else {
      await createJobSeeker({ body: value })
    }
    switchTab('/index/index')
    toast.success('发布成功')
  } finally {
    loading.value = false
  }
}

onShow(() => {
  roleType.value = getRole()
})
</script>
