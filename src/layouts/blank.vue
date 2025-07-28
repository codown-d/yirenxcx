<template>
  <wd-config-provider :themeVars="theme">
    <slot></slot>
    <yr-margin-footer />
    <wd-toast />
    <wd-message-box />
  </wd-config-provider>
</template>

<script lang="ts" setup>
import { themeVars } from '@/constant'
import type { ConfigProviderThemeVars } from 'wot-design-uni'

const theme: ConfigProviderThemeVars = { ...themeVars }
</script>
