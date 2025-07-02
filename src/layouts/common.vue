<template>
  <wd-config-provider :themeVars="theme">
    <scroll-view :scroll-y="true" class="h-[100%]" @scroll="handleScroll">
      <view class="container" :style="`background-color:${style.backgroundColor}`">
        <wd-navbar
          :bordered="false"
          :title="title"
          customClass="bg-transparent!"
          :left-arrow="!isTab"
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
      </view>
    </scroll-view>
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
