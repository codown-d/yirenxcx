<route lang="json5">
{
  layout: 'common',
  style: {
    navigationBarTitleText: ' ',
    navigationStyle: 'custom',
  },
  
}
</route>

<template>
  <view class="bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
    <wx-login
      v-if="showType === 'wechat'"
      @onChange="onChange"
      :agreePrivacy="agreePrivacy"
    ></wx-login>
    <!-- 登录表单（手机号登录时显示） -->

    <pwd-login v-if="showType === 'pwd'" :agreePrivacy="agreePrivacy"></pwd-login>

    <!-- 隐私协议 -->
    <view class="px-12 mt-4 bg-white/95 backdrop-blur-sm border-t border-gray-100">
      <wd-checkbox v-model="agreePrivacy" shape="square" class="flex items-start justify-center">
        <view class="text-3 leading-relaxed text-gray-600">
          {{ PRIVACY_CONFIG.agreeText }}
          <text class="text-[#248069] font-bold" @click.stop="viewAgreement('user')">
            《用户协议》
          </text>

          {{ PRIVACY_CONFIG.andText }}
          <text class="text-[#248069] font-bold" @click.stop="viewAgreement('privacy')">
            {{ PRIVACY_CONFIG.privacyPolicy }}
          </text>
        </view>
      </wd-checkbox>
    </view>
  </view>
  <privacy-user
    :title="privacyInfo.title"
    :desc="privacyInfo.desc"
    :subDesc="privacyInfo.subDesc"
    :protocol="privacyInfo.protocol"
    :showPopup="showPopup"
    @agree="onAgree"
    @disagree="onDisagree"
  ></privacy-user>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PRIVACY_CONFIG } from '@/constant/login'
import WxLogin from './components/wx-login.vue'
import PwdLogin from './components/pwd-login.vue'

// 页面状态
const showType = ref('wechat')
const agreePrivacy = ref(false)
let privacyInfo = ref({
  title: '用户隐私保护提示',
  desc: '感谢您使用本应用，您使用本应用的服务之前请仔细阅读并同意',
  subDesc:
    '。当您点击同意并开始时用产品服务时，即表示你已理解并同息该条款内容，该条款将对您产生法律约束力。如您拒绝，将无法使用相应服务。',
  protocol: '《用户隐私保护指引》',
})
let showPopup = ref(false)

let onChange = (type) => {
  showType.value = type
}

// 查看协议
const viewAgreement = (type: 'user' | 'privacy') => {
  if (type === 'user') {
    privacyInfo.value.title = '用户协议'
  } else {
    privacyInfo.value.title = '隐私政策'
  }
  showPopup.value = true
}
let onAgree = () => {
  agreePrivacy.value = true
  showPopup.value = false
}
let onDisagree = () => {
  agreePrivacy.value = false
  showPopup.value = false
}
</script>
