<template>
  <wd-config-provider :themeVars="theme">
    <view class="text-[#252525] bg-[#F5F6FA]">
      <view
        class="h-100vh"
        :style="{
          paddingTop: safeAreaInsets?.top + 44 + 'px',
        }"
      >
        <scroll-view @scroll="handleScroll" scroll-y class="h-100vh">
          <slot></slot>
        </scroll-view>
      </view>
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

const theme: ConfigProviderThemeVars = { ...themeVars }

const { safeAreaInsets } = getSystemInfoSync()
const { title, getCurrentPage } = useNavigation()
const { isTab = false, style } = getCurrentPage()
console.log(style, title)
const opacity = ref(0)
const handleScroll = (e: any) => {
  if (e.detail.scrollTop > 100) {
    opacity.value = 1
  } else {
    opacity.value = e.detail.scrollTop / 100
  }
}
</script>
