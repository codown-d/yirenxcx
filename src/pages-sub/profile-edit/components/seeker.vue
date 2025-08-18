<template>
  <view class="mt-2">
    <!-- 基本信息 -->
    <text class="text-base font-semibold text-gray-900 block mx-4 mb-4">基本信息</text>
    <wd-form ref="form" :model="userForm" :errorType="'toast'" :rules="rules">
      <wd-card>
        <!-- 头像 -->
        <wd-cell title="头像">
          <yr-upload :limit="1" v-model="userForm.avatar"></yr-upload>
        </wd-cell>

        <!-- 姓名 -->
        <wd-cell title="姓名" vertical>
          <wd-input v-model="userForm.name" placeholder="请输入姓名" prop="name" />
        </wd-cell>

        <!-- 手机号 -->
        <wd-cell title="手机号" vertical>
          <wd-input v-model="userForm.mobile" placeholder="请输入手机号" prop="mobile" />
        </wd-cell>

        <!-- 邮箱地址 -->
        <wd-cell title="邮箱地址" vertical>
          <wd-input v-model="userForm.email" placeholder="请输入邮箱地址" prop="email" />
        </wd-cell>
        <!-- 毕业院校 -->
        <wd-cell title="毕业院校" vertical>
          <wd-input
            v-model="userForm.biYeYuanXiao"
            placeholder="请输入毕业院校"
            prop="biYeYuanXiao"
          />
        </wd-cell>
        <wd-cell title="专业特长" vertical>
          <wd-input v-model="userForm.teChang" placeholder="请输入专业特长" prop="teChang" />
        </wd-cell>
        <wd-cell title="工作经验">
          <yr-picker
            v-model="userForm.gongZuoJingYan"
            :columns="dictData.EXPERIENCE_LEVELS"
            prop="gongZuoJingYan"
          />
        </wd-cell>
        <wd-cell title="所在地区">
          <yr-location-picker
            v-model="userForm.locationCode"
            @confirmLabel="(val) => (userForm.location = val)"
            prop="locationCode"
          />
        </wd-cell>
        <wd-cell title="学历水平">
          <yr-picker
            :required="false"
            v-model="userForm.xueLi"
            :columns="dictData.EDUCATION_LEVELS"
            prop="xueLi"
          />
        </wd-cell>
        <wd-cell title="性别">
          <yr-picker v-model="userForm.sexName" :columns="dictData.SEX" prop="sex"></yr-picker>
        </wd-cell>
        <wd-cell title="年龄">
          <yr-picker v-model="userForm.age" :columns="dictData.AGE" prop="age"></yr-picker>
        </wd-cell>
      </wd-card>
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
import { navigateBack } from '@/utils'
import { AppMemberUserUpdateReqVO, getUserInfo, updateUser } from '@/service/member'
import { useDictData } from '@/hooks'
let { dictData } = useDictData()

const userForm = ref<AppMemberUserUpdateReqVO>()
const form = ref()
const loading = ref(false)

const rules = {
  avatar: [{ required: true, message: '请选择头像' }],
  name: [{ required: true, message: '请填写姓名' }],
  teChang: [{ required: true, message: '请填写专业特长' }],
  mobile: [{ required: true, message: '请填写手机号' }],
  email: [
    {
      required: true,
      message: '请填写邮箱',
    },
  ],
  biYeYuanXiao: [{ required: true, message: '请输入毕业院校' }],
  gongZuoJingYan: [{ required: true, message: '请输入工作经验' }],
  locationCode: [{ required: true, message: '请选择所在地区' }],
  xueLi: [{ required: true, message: '请选择学历水平' }],
  sexName: [{ required: true, message: '请选择性别' }],
  age: [{ required: true, message: '请选择年龄' }],
}
const loadUserInfo = async () => {
  const res: any = await getUserInfo({})
  userForm.value = { ...res.data }
}

// 保存个人资料
const saveProfile = async () => {
  let res = await form.value.validate()
  if (!res.valid) {
    return
  }
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
