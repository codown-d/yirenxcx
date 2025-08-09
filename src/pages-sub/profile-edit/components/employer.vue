<template>
  <view class="mx-4 mt-2">
    <!-- 基本信息 -->
    <text class="text-base font-semibold text-gray-900 block mb-2">基本信息</text>
    <wd-form ref="form" :model="userForm" errorType="toast" class="rounded-2 overflow-hidden">
      <!-- 头像 -->
      <wd-cell title="公司LOGO" custom-class="pt-2">
        <yr-upload :limit="1" v-model="userForm.logo"></yr-upload>
      </wd-cell>

      <!-- 姓名 -->
      <wd-cell title="公司名称" vertical>
        <wd-input
          v-model="userForm.companyName"
          placeholder="请输入姓名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
      </wd-cell>

      <!-- 专业特长 -->
      <wd-cell title="联系人姓名" vertical>
        <wd-input v-model="userForm.name" placeholder="请输入联系人姓名" />
      </wd-cell>
      <wd-cell title="联系人职位" vertical>
        <wd-input v-model="userForm.teChang" placeholder="请输入联系人职位" />
      </wd-cell>
      <wd-cell title="公司规模" vertical>
        <wd-input v-model="userForm.personNumber" placeholder="请输入公司规模" />
      </wd-cell>
      <wd-cell title="所属行业" vertical>
        <wd-input v-model="userForm.involved" placeholder="请输入所属行业" />
      </wd-cell>
      <wd-cell title="成立年份" vertical>
        <wd-input v-model="userForm.chengLiTime" placeholder="请输入时间" />
      </wd-cell>
      <!-- 手机号 -->
      <wd-cell title="联系电话" vertical>
        <wd-input
          v-model="userForm.mobile"
          placeholder="请输入手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
        />
      </wd-cell>
      <wd-cell title="邮箱地址" vertical>
        <wd-input v-model="userForm.email" placeholder="请输入邮箱地址" />
      </wd-cell>
      <yr-location-picker
        title="所在地区"
        v-model="userForm.locationCode"
        class="pb-2"
        @confirmLabel="(val) => (userForm.location = val)"
      ></yr-location-picker>
    </wd-form>
  </view>

  <yr-page-footer>
    <wd-button
      :disabled="loading"
      block
      custom-class="w-full "
      :round="false"
      :loading="loading"
      @click="saveProfile"
    >
      {{ loading ? '保存中...' : '保存' }}
    </wd-button>
  </yr-page-footer>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { toast } from '@/utils/toast'
import { AppMemberUserUpdateReqVO, getUserInfo, updateUser } from '@/service/app'
import { navigateBack } from '@/utils'

const userForm = ref<AppMemberUserUpdateReqVO>({})
const form = ref()
const loading = ref(false)

const loadUserInfo = async () => {
  const res = await getUserInfo({})
  userForm.value = res.data
}

// 保存个人资料
const saveProfile = async () => {
  await form.value.validate()
  try {
    loading.value = true
    const res = await updateUser({
      body: userForm.value,
    })
    if (res.code === 0) {
      toast.success('保存成功')
      setTimeout(() => {
        navigateBack()
      }, 500)
    }
  } finally {
    loading.value = false
  }
}
onMounted(() => {
  loadUserInfo()
})
</script>
