<template>
  <view @click="goToPage" :class="className">
    <slot />
  </view>
</template>

<script lang="ts" setup>
import { navigateTo, navigateToSub, switchTab } from '@/utils'
let props = defineProps({
  to: {
    type: String,
    default: '',
  },
  toSub: {
    type: String,
    default: '',
  },
  toTab: {
    type: String,
    default: '',
  },
  className: {
    type: String,
    default: '',
  },
})
const goToPage = () => {
  if (props.to) {
    navigateTo(props.to)
  } else if (props.toSub) {
    navigateToSub(props.toSub)
  } else if (props.toTab) {
    switchTab(props.toTab)
  }
}
</script>
