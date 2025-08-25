<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '企业认证',
    navigationStyle: 'custom',
  },
}
</route>
<template>
  <view class="mx-4 mt-2">
    <!-- 实名认证 -->
    <text class="text-base font-semibold text-gray-900 block mb-4">企业实名认证</text>
    <ws-card>
      <wd-form
        ref="form"
        :model="certForm"
        errorType="toast"
        :rules="rules"
        custom-class="rounded-2 overflow-hidden py-4 bg-white "
      >
        <!-- 营业执照号 -->
        <wd-cell title="营业执照号" vertical>
          <wd-input v-model="certForm.licenseNo" placeholder="请输入营业执照号" prop="licenseNo" />
        </wd-cell>

        <!-- 企业名称 -->
        <wd-cell title="企业名称" vertical>
          <wd-input v-model="certForm.entName" placeholder="请输入企业名称" prop="entName" />
        </wd-cell>

        <!-- 法人姓名 -->
        <wd-cell title="法人姓名" vertical>
          <wd-input
            v-model="certForm.legalPersonName"
            placeholder="请输入法人姓名"
            prop="legalPersonName"
          />
        </wd-cell>

        <!-- 法人身份证号 -->
        <wd-cell title="法人身份证号" vertical>
          <wd-input
            v-model="certForm.legalPersonCertNo"
            placeholder="请输入法人身份证号"
            prop="legalPersonCertNo"
          />
        </wd-cell>
      </wd-form>
    </ws-card>
  </view>

  <!-- 底部保存按钮 -->
  <yr-page-footer>
    <wd-button
      :disabled="loading"
      block
      custom-class="w-full"
      :round="false"
      :loading="loading"
      @click="saveCertification"
    >
      {{ loading ? '提交中...' : '提交认证' }}
    </wd-button>
  </yr-page-footer>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { toast } from '@/utils/toast'
import { navigateBack, switchTab } from '@/utils'
import { renzheng } from '@/service/app'
// 假设 API 名称

// 表单数据
const certForm = ref({
  licenseNo: '',
  entName: '',
  legalPersonName: '',
  legalPersonCertNo: '',
})
const rules = {
  licenseNo: [{ required: true, message: '请输入营业执照号' }],
  entName: [{ required: true, message: '请输入企业名称' }],
  legalPersonName: [{ required: true, message: '请输入法人姓名' }],
  legalPersonCertNo: [{ required: true, message: '请输入法人身份证号' }],
}
const form = ref()
const loading = ref(false)

// 提交企业认证
const saveCertification = async () => {
  let res = await form.value.validate()
  if (!res.valid) {
    return
  }
  try {
    loading.value = true
    const res = await renzheng({
      body: certForm.value,
    })
    if (res.code === 0) {
      toast.success('认证成功')
      setTimeout(() => {
        switchTab('/index/index')
      }, 500)
    }
  } finally {
    loading.value = false
  }
}
</script>
