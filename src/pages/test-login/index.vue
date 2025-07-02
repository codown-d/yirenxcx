<template>
  <view class="min-h-screen p-10 bg-gray-100">
    <view class="text-center mb-15">
      <text class="text-12 font-bold text-gray-800">登录功能测试</text>
    </view>

    <view>
      <wd-button
        type="primary"
        size="large"
        block
        @click="goToLogin"
        class="h-24 rounded-12 text-8 mb-15"
      >
        跳转到登录页面
      </wd-button>

      <view class="bg-white rounded-4 p-8 shadow-sm">
        <text class="text-8 font-semibold text-gray-800 block mb-6">登录页面功能说明：</text>
        <view class="space-y-2">
          <text class="block text-7 text-gray-600 leading-8">• 微信授权登录</text>
          <text class="block text-7 text-gray-600 leading-8">• 手机号密码登录</text>
          <text class="block text-7 text-gray-600 leading-8">• 手机号验证码登录</text>
          <text class="block text-7 text-gray-600 leading-8">• 身份选择（求职者/雇主）</text>
          <text class="block text-7 text-gray-600 leading-8">• 隐私协议确认</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
const goToLogin = () => {
  uni.navigateTo({
    url: '/pages-sub/login/index',
  })
}
</script>
