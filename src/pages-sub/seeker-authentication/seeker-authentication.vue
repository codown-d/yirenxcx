<route lang="json5" type="page">
{
  layout: 'blank',
  style: {
    navigationBarTitleText: '个人认证',
  },
}
</route>

<template>
  <view class="bg-[#F5F6FA] h-screen">
    <!-- 实名认证 -->
    <text class="mx-4 text-base font-semibold text-gray-900 block mb-3">个人实名认证</text>
    <wd-card>
      <wd-form ref="form" :model="certForm" errorType="toast" :rules="rules">
        <wd-cell title="姓名" vertical>
          <wd-input v-model="certForm.name" placeholder="请输入姓名" prop="name" />
        </wd-cell>
        <wd-cell title="身份证号" vertical>
          <wd-input v-model="certForm.idNum" placeholder="请输入身份证号" prop="idNum" />
        </wd-cell>
      </wd-form>
    </wd-card>
  </view>

  <!-- 底部保存按钮 -->
  <yr-page-footer>
    <wd-button
      :disabled="loading"
      block
      custom-class="w-full"
      :round="false"
      :loading="loading"
      @click="goAuth"
    >
      {{ loading ? '提交中...' : '提交认证' }}
    </wd-button>
  </yr-page-footer>
</template>
<script setup>
import { showToast, switchTab } from '@/utils'
import { getRequest } from '@/service/app'
import { startEid } from '../../pages/mp_ecard_sdk/main'
import { toast } from '@/utils/toast'
const certForm = ref({
  name: '',
  idNum: '',
})
let loading = ref(false)
const rules = {
  name: [{ required: true, message: '请输入姓名' }],
  idNum: [{ required: true, message: '请输入身份证号' }],
}
const form = ref()
const goAuth = async () => {
  let resForm = await form.value.validate()
  if (!resForm.valid) {
    return
  }
  const res = await getRequest({
    body: certForm.value,
  })
  let { EidToken } = JSON.parse(res.data)
  if (!EidToken) return showToast('获取认证信息失败')
  startEid({
    data: { token: EidToken },
    verifyDoneCallback: async (res) => {
      const { token, verifyDone } = res
      if (verifyDone === true && token) {
        toast.success('认证成功')
        let res = await getUserInfo({})
        await updateUser({
          body: merge(res.data, { gerenAttestation: 1 }),
        })
        setTimeout(() => {
          switchTab('/index/index')
        }, 500)
      }
    },
  })
}
onShow(() => {
  // setTimeout(() => {
  //   uni.setNavigationBarColor({
  //     frontColor: '#ffffff', // 文字颜色，仅支持 #ffffff 和 #000000
  //     backgroundColor: '#ff0000', // 背景色
  //   })
  // }, 2000)
})
</script>
