<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '个人认证',
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <view class="p-4 flex justify-center">
    <wd-button @click="goAuth">去实名认证</wd-button>
  </view>
</template>
<script setup>
// 模拟从后端获取 EidToken
const getEidToken = async () => {
  const res = await uni.request({
    url: 'https://yourserver.com/api/getEidToken', // 你后端返回 EidToken 的接口
    method: 'GET',
  })
  return res.data.EidToken
}

// 跳转腾讯云实名核验
const goAuth = async () => {
  try {
    const token = await getEidToken()

    // #ifdef MP-WEIXIN
    wx.navigateToMiniProgram({
      appId: 'wxa594b2ab78138935', // 腾讯云实名核验小程序
      path: `/pages/auth/index?token=${token}`,
      success() {
        console.log('已跳转到腾讯云实名核验界面')
      },
      fail(err) {
        console.error('跳转失败', err)
      },
    })
    // #endif

    // #ifndef MP-WEIXIN
    uni.showToast({ title: '当前平台不支持实名认证', icon: 'none' })
    // #endif
  } catch (err) {
    uni.showToast({ title: '获取认证信息失败', icon: 'none' })
  }
}
</script>
