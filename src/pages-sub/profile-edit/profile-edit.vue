<route lang="json5" type="page">
{
  layout: 'common',
  style: {
    navigationBarTitleText: '个人资料',
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <view class="mx-4 mt-2 mb-16">
    <!-- 基本信息 -->
    <text class="text-base font-semibold text-gray-900 block mb-4">基本信息</text>
    <wd-form ref="form" :model="userForm" errorType="toast">
      <!-- 头像 -->
      <view class="flex justify-between items-center px-4">
        <view>头像</view>
        <wd-upload
          :file-list="userForm.avatarC"
          custom-class="rounded-full"
          :limit="1"
          image-mode="aspectFill"
          :action="uploadUrl"
          @change="handleChange"
        ></wd-upload>
      </view>

      <!-- 姓名 -->
      <wd-cell title="姓名" vertical>
        <wd-input
          v-model="userForm.nickname"
          placeholder="请输入姓名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
      </wd-cell>

      <!-- 专业特长 -->
      <wd-cell title="专业特长" vertical>
        <wd-input v-model="userForm.teChang" placeholder="请输入专业特长" />
      </wd-cell>

      <!-- 手机号 -->
      <wd-cell title="手机号" vertical>
        <wd-input
          v-model="userForm.mobile"
          placeholder="请输入手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
        />
      </wd-cell>

      <!-- 邮箱地址 -->
      <wd-cell title="邮箱地址" vertical>
        <wd-input v-model="userForm.email" placeholder="请输入邮箱地址" />
      </wd-cell>
      <!-- 毕业院校 -->
      <wd-cell title="毕业院校" vertical>
        <wd-input
          v-model="userForm.biYeYuanXiao"
          placeholder="请输入毕业院校"
          :rules="[{ required: true, message: '请填写毕业院校' }]"
        />
      </wd-cell>
      <!-- 所在地区 -->
      <fg-location-picker title="工作地点" :modelValue="userForm.locationC"></fg-location-picker>

      <!-- 年龄 -->
      <wd-cell title="年龄">
        <wd-input
          v-model="userForm.age"
          placeholder="请输入年龄"
          type="number"
          no-border
          :rules="[{ required: true, message: '请填写年龄' }]"
        />
      </wd-cell>

      <!-- 性别 -->
      <wd-cell title="性别">
        <wd-picker v-model="userForm.sex" :columns="SEX" />
      </wd-cell>
    </wd-form>
  </view>
  <view class="fixed z-9 bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 !pb-safe">
    <!-- 保存按钮 -->
    <wd-button :disabled="loading" block :round="false" :loading="loading" @click="saveProfile">
      {{ loading ? '保存中...' : '保存' }}
    </wd-button>
  </view>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { toast } from '@/utils/toast'
import { getUserInfo, MemberUserDO, updateUser, updateUserInfo } from '@/service/app'
import { SEX } from '@/constant'
import { getEnvBaseUploadUrl, navigateBack } from '@/utils'
import { merge } from 'lodash'

const userForm = ref<any>({
  avatar: undefined,
  avatarC: [],
  nickname: '',
  mobile: '',
  email: '',
  location: '',
  locationC: [],
  sex: undefined,
  biYeYuanXiao: '',
  age: undefined,
  teChang: '',
})
const form = ref()
const uploadUrl = computed(() => {
  return `${getEnvBaseUploadUrl()}/app-api/infra/file/upload`
})
const handleChange = async ({ fileList = [] }) => {
  let file = fileList[0]
  if (file.percent === 100) {
    userForm.value.avatar = JSON.parse(file.response).data
  }
}
// 加载状态
const loading = ref(false)

// 加载用户信息
const loadUserInfo = async () => {
  const res = await getUserInfo({})
  if (res.code === 0 && res.data) {
    userForm.value = merge(res.data, {
      locationC: [],
      avatarC: [
        {
          url: res.data.avatar,
        },
      ],
    })
  }
}

// 保存个人资料
const saveProfile = async () => {
  await form.value.validate()
  console.log(userForm.value, 1234566)
  try {
    loading.value = true
    const res = await updateUser({ body: merge({}, userForm.value, {}) })
    if (res.code === 0) {
      toast.success('个人资料保存成功')
      setTimeout(() => {
        navigateBack()
      }, 500)
    }
  } finally {
    loading.value = false
  }
}
// 页面加载时获取用户信息
onMounted(() => {
  loadUserInfo()
})
</script>
