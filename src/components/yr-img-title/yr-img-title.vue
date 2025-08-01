<template>
  <view :class="`flex items-center ${className}`">
    <view class="w-[18px] h-[16px] relative mr-1">
      <image class="w-[18px] h-[16px] absolute top-0" :src="imgUrl" mode="scaleToFill" v-if="url" />
    </view>
    <text class="text-[14px] text-[#8C8C8C] h-[20px] leading-[24px]" v-if="title">
      {{ title || '-' }}
    </text>
    <template v-else>
      <slot></slot>
    </template>
  </view>
</template>
<script lang="ts" setup>
import { template } from 'lodash'

let baseUrl = import.meta.env.VITE_SERVER_BASEURL
let props = defineProps({
  className: {
    type: String,
    default: '',
  },
  title: {
    type: String as PropType<string | number>,
    default: '',
  },
  url: {
    type: String,
    default: '',
  },
})

const imgUrl = computed(() => {
  return `/static/images/${props.url}`
})
</script>
