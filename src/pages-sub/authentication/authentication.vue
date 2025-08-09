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
        custom-class="rounded-2 overflow-hidden"
      >
        <!-- 营业执照号 -->
        <wd-cell title="营业执照号" vertical>
          <wd-input
            v-model="certForm.licenseNo"
            placeholder="请输入营业执照号"
            :rules="[{ required: true, message: '请填写营业执照号' }]"
          />
        </wd-cell>

        <!-- 企业名称 -->
        <wd-cell title="企业名称" vertical>
          <wd-input
            v-model="certForm.entName"
            placeholder="请输入企业名称"
            :rules="[{ required: true, message: '请填写企业名称' }]"
          />
        </wd-cell>

        <!-- 法人姓名 -->
        <wd-cell title="法人姓名" vertical>
          <wd-input
            v-model="certForm.legalPersonName"
            placeholder="请输入法人姓名"
            :rules="[{ required: true, message: '请填写法人姓名' }]"
          />
        </wd-cell>

        <!-- 法人身份证号 -->
        <wd-cell title="法人身份证号" vertical>
          <wd-input
            v-model="certForm.legalPersonCertNo"
            placeholder="请输入法人身份证号"
            :rules="[{ required: true, message: '请填写法人身份证号' }]"
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
import { navigateBack } from '@/utils'
import { renzheng } from '@/service/app'
// 假设 API 名称

// 表单数据
const certForm = ref({
  licenseNo: '',
  entName: '',
  legalPersonName: '',
  legalPersonCertNo: '',
})

const form = ref()
const loading = ref(false)

// 提交企业认证
const saveCertification = async () => {
  await form.value.validate()
  try {
    loading.value = true
    const res = await renzheng({
      body: certForm.value,
    })
    if (res.code === 0) {
      toast.success('提交成功')
      setTimeout(() => {
        navigateBack()
      }, 500)
    }
  } finally {
    loading.value = false
  }
}
</script>
