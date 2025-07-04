<template>
  <wd-config-provider :themeVars="theme">
    <view class="text-[#252525]">
      <scroll-view :scroll-y="true" class="h-100vh" @scroll="handleScroll">
        <wd-navbar
          :bordered="false"
          :left-arrow="!isTab"
          :left-text="title"
          :custom-class="` ${style.leftTextClass}`"
          fixed
          @click-left="handleClickLeft"
          safeAreaInsetTop
          :custom-style="`background-color: rgba(255,255,255, ${opacity})!important`"
        ></wd-navbar>
        <view
          :style="{
            paddingTop: safeAreaInsets?.top + 44 + 'px',
          }"
        >
          <slot></slot>
        </view>
      </scroll-view>
    </view>
    <wd-toast />
    <wd-message-box />
  </wd-config-provider>
</template>

<script lang="ts" setup>
import { themeVars } from '@/constant'
import type { ConfigProviderThemeVars } from 'wot-design-uni'
import { getSystemInfoSync } from '@/utils'
import { useNavigation } from '@/hooks'
import { navigateBack } from '@/utils'

const theme: ConfigProviderThemeVars = { ...themeVars }

const { safeAreaInsets } = getSystemInfoSync()
const { title, getCurrentPage } = useNavigation()
const { isTab = false, style } = getCurrentPage()
console.log(style, title)
const handleClickLeft = () => {
  navigateBack()
}
const opacity = ref(0)
const handleScroll = (e: any) => {
  if (e.detail.scrollTop > 100) {
    opacity.value = 1
  } else {
    opacity.value = e.detail.scrollTop / 100
  }
}
</script>
