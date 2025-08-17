<template>
  <wd-config-provider :themeVars="theme">
    <slot></slot>
    <FgTabbar />
    <wd-toast />
    <wd-message-box />
  </wd-config-provider>
</template>

<script lang="ts" setup>
import { themeVars } from '@/constant'
import type { ConfigProviderThemeVars } from 'wot-design-uni'
import FgTabbar from '@/tabbar/index.vue'

const theme: ConfigProviderThemeVars = { ...themeVars }
</script>
