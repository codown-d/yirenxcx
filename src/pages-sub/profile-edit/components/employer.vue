<template>
  <view class="mt-2">
    <!-- 基本信息 -->
    <text class="text-base font-semibold text-gray-900 block mx-4 mb-2">基本信息</text>
    <wd-form ref="form" :model="userForm" errorType="toast" :rules="rules">
      <wd-card>
        <!-- 头像 -->
        <wd-cell title="公司LOGO">
          <yr-upload :limit="1" v-model="userForm.logo"></yr-upload>
        </wd-cell>

        <!-- 姓名 -->
        <wd-cell title="公司名称" vertical>
          <wd-input v-model="userForm.companyName" placeholder="请输入" prop="companyName" />
        </wd-cell>
        <wd-cell title="联系人姓名" vertical>
          <wd-input v-model="userForm.name" placeholder="请输入" prop="name" />
        </wd-cell>
        <wd-cell title="联系人职位" vertical v-if="false">
          <wd-input v-model="userForm.teChang" placeholder="请输入" prop="teChang" />
        </wd-cell>
        <wd-cell title="成立年份" vertical>
          <wd-input v-model="userForm.chengLiTime" placeholder="请输入" prop="chengLiTime" />
        </wd-cell>
        <!-- 手机号 -->
        <wd-cell title="联系电话" vertical>
          <wd-input v-model="userForm.mobile" placeholder="请输入" prop="mobile" />
        </wd-cell>
        <wd-cell title="邮箱地址" vertical>
          <wd-input v-model="userForm.email" placeholder="请输入" prop="email" />
        </wd-cell>
        <wd-cell title="公司性质">
          <yr-picker v-model="userForm.gongsixingzhi" :columns="dictData.COMPANY_TYPES" />
        </wd-cell>
        <wd-cell title="公司规模">
          <yr-picker
            v-model="userForm.personNumber"
            prop="personNumber"
            :columns="dictData.COMPANY_SIZES"
          />
        </wd-cell>
        <wd-cell title="所属行业">
          <yr-picker v-model="userForm.involved" prop="involved" :columns="dictData.involved" />
        </wd-cell>
        <wd-cell title="所在地区">
          <yr-location-picker
            v-model="userForm.locationCode"
            class="pb-2"
            @confirmLabel="(val) => (userForm.location = val)"
            prop="locationCode"
          />
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
import { getUserInfo, MemberUserDO, updateUser } from '@/service/member'
import { useDictData } from '@/hooks'
let { dictData } = useDictData()

const userForm = ref<MemberUserDO>({ locationCode: '', involved: '', personNumber: '' })
const form = ref()
const loading = ref(false)

const rules = {
  logo: [{ required: true, message: '请填写头像' }],
  companyName: [{ required: true, message: '请填写公司名称' }],
  name: [{ required: true, message: '请填写联系人姓名' }],
  // teChang: [{ required: true, message: '请填写联系人职位' }],
  chengLiTime: [{ required: true, message: '请填写成立年份' }],
  mobile: [{ required: true, message: '请填写联系电话' }],
  email: [{ required: true, message: '请填写邮箱' }],
  personNumber: [{ required: true, message: '请选择公司规模' }],
  gongsixingzhi: [{ required: true, message: '请选择公司性质' }],
  involved: [{ required: true, message: '请选择所属行业' }],
  locationCode: [{ required: true, message: '请选择所在地区' }],
}
const loadUserInfo = async () => {
  const res = await getUserInfo({})
  userForm.value = res.data
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
