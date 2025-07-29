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
  <view class="mx-4 mt-2">
    <!-- 基本信息 -->
    <text class="text-base font-semibold text-gray-900 block mb-4">基本信息</text>
    <wd-form ref="form" :model="userForm" errorType="toast">
      <!-- 头像 -->
      <wd-cell title="头像">
        <yr-upload :limit="1" v-model="userForm.avatar"></yr-upload>
      </wd-cell>

      <!-- 姓名 -->
      <wd-cell title="姓名" vertical>
        <wd-input
          v-model="userForm.name"
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
      <yr-location-picker title="所在地区" v-model="userForm.locationCode"></yr-location-picker>
      <!-- 性别 -->
      <yr-picker v-model="userForm.sex" :columns="SEX" title="学历水平" v-if="false"></yr-picker>
      <!-- 性别 -->
      <yr-picker v-model="userForm.sex" :columns="SEX" title="性别"></yr-picker>
      <!-- 年龄 -->
      <yr-picker v-model="userForm.age" :columns="AGE" title="年龄"></yr-picker>
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
import { getUserInfo, updateUser } from '@/service/app'
import { SEX, AGE } from '@/constant'
import { navigateBack } from '@/utils'
import { merge } from 'lodash'

const userForm = ref<any>({
  avatar: undefined,
  nickname: '',
  mobile: '',
  email: '',
  location: '',
  locationCode: '',
  sex: undefined,
  biYeYuanXiao: '',
  age: undefined,
  teChang: '',
})
const form = ref()

// 是否有请求正在进行
// 加载状态
const loading = ref(false)

// 加载用户信息
const loadUserInfo = async () => {
  const res = await getUserInfo({})
  if (res.code === 0 && res.data) {
    userForm.value = res.data
  }
}

// 保存个人资料
const saveProfile = async () => {
  await form.value.validate()
  try {
    loading.value = true
    const res = await updateUser({
      body: merge({}, userForm.value),
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
// 页面加载时获取用户信息
onMounted(() => {
  loadUserInfo()
})
</script>
