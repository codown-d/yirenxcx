<template>
  <wd-config-provider :themeVars="theme">
    <view class="text-[#252525] relative">
      <scroll-view :scroll-y="true" class="h-100vh relative" @scroll="handleScroll">
        <view class="relative">
          <view class="absolute top-0 h-full w-full z--1"></view>
          <wd-navbar
            :bordered="false"
            :left-arrow="!isTab"
            :left-text="title"
            :custom-class="`${style.leftTextClass}`"
            fixed
            @click-left="handleClickLeft"
            safeAreaInsetTop
            :custom-style="`background-color: rgba(255,255,255, ${opacity})!important`"
          ></wd-navbar>
          <view
            class="bg-transparent"
            :style="{
              paddingTop: safeAreaInsets?.top + 44 + 'px',
            }"
          >
            <slot></slot>
            <yr-margin-footer />
          </view>
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
import PLATFORM from '@/utils/platform'

const theme: ConfigProviderThemeVars = { ...themeVars }

const { safeAreaInsets } = getSystemInfoSync()
const { title, getCurrentPage } = useNavigation()
const { isTab = false, style } = getCurrentPage()
let { isH5 } = PLATFORM
const handleClickLeft = () => {
  navigateBack()
}
const opacity = ref(0)
const headerStyle = computed(() => {
  return
})
const handleScroll = (e: any) => {
  if (e.detail.scrollTop > 100) {
    opacity.value = 1
  } else {
    opacity.value = e.detail.scrollTop / 100
  }
}
</script>
