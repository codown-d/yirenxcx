<template>
  <view class="mx-4 mt-2">
    <!-- 基本信息 -->
    <text class="text-base font-semibold text-gray-900 block mb-4">基本信息</text>
    <wd-form
      ref="form"
      :model="userForm"
      errorType="toast"
      custom-class="rounded-2 overflow-hidden"
    >
      <!-- 头像 -->
      <wd-cell title="头像" custom-class="pt-2">
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
      <yr-picker v-model="userForm.xueLi" :columns="XUELI" title="学历水平"></yr-picker>
      <!-- 性别 -->
      <yr-picker v-model="userForm.sex" :columns="SEX" title="性别"></yr-picker>
      <!-- 年龄 -->
      <yr-picker v-model="userForm.age" :columns="AGE" title="年龄"></yr-picker>
      <!-- 年龄 -->
      <yr-picker
        class="pb-2"
        v-model="userForm.gongZuoJingYan"
        :columns="experienceColumns"
        title="工作经验"
      ></yr-picker>
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
import { SEX, AGE, XUELI, experienceColumns } from '@/constant'
import { navigateBack } from '@/utils'
import { merge } from 'lodash'

const userForm = ref<AppMemberUserUpdateReqVO>({})
const form = ref()
const loading = ref(false)

const loadUserInfo = async () => {
  const res = await getUserInfo({})
  console.log(res.data)
  userForm.value = res.data
}

// 保存个人资料
const saveProfile = async () => {
  await form.value.validate()
  try {
    loading.value = true
    console.log(userForm.value)
    const res = await updateUser({
      body: merge({}, userForm.value),
    })
    if (res.code === 0) {
      toast.success('保存成功')
      setTimeout(() => {
        // navigateBack()
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
