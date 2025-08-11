<template>
  <view class="grid grid-cols-2 gap-2 gap-y-3 w-full">
    <wd-img
      custom-class="`w-[100%] h-[100px] ${imgClass}`"
      :src="item"
      v-for="item in imgList"
      :key="item"
      :enable-preview="true"
    />
  </view>
</template>
<script lang="ts" setup>
let props = defineProps({
  modelValue: String,
  imgClass: String,
})
let imgList = ref(props.modelValue?.split(','))
watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      imgList.value = val.split(',')?.filter((item) => !!item.trim())
    }
  },
)
</script>
