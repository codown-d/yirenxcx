<template>
  <view :class="`flex item-center ${className}`">
    <image class="w-[18px] h-[16px] mr-1" :src="imgUrl" mode="scaleToFill" v-if="url" />
    <text class="text-3 text-[#8C8C8C] middle">{{ title }}</text>
  </view>
</template>
<script lang="ts" setup>
let baseUrl = import.meta.env.VITE_SERVER_BASEURL
let props = defineProps({
  className: {
    type: String,
    default: '',
  },
  title: {
    type: String as PropType<string | number>,
    required: true,
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
