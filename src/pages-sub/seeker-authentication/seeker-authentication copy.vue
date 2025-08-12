<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '实名认证',
    navigationStyle: 'custom',
  },
}
</route>
<template>
  <view class="mx-4 mt-2">
    <!-- 实名认证 -->
    <text class="text-base font-semibold text-gray-900 block mb-4">个人实名认证</text>
    <ws-card>
      <wd-form
        ref="form"
        :model="certForm"
        errorType="toast"
        :rules="rules"
        custom-class="rounded-2 overflow-hidden py-4 bg-white "
      >
        <wd-cell title="姓名" vertical>
          <wd-input v-model="certForm.name" placeholder="请输入姓名" prop="name" />
        </wd-cell>
        <wd-cell title="身份证号" vertical>
          <wd-input v-model="certForm.idNum" placeholder="请输入身份证号" prop="idNum" />
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
import { getRequest, renzheng } from '@/service/app'
// 假设 API 名称

// 表单数据
const certForm = ref({
  name: '',
  idNum: '',
  legalPersonName: '',
  legalPersonCertNo: '',
})
const rules = {
  name: [{ required: true, message: '请输入姓名' }],
  idNum: [{ required: true, message: '请输入身份证号' }],
}
const form = ref()
const loading = ref(false)

// 提交企业认证
const saveCertification = async () => {}
</script>
