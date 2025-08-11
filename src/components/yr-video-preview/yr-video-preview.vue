<template>
  <video class="w-[100%] h-[100px]" :src="item" v-for="item in imgList" :key="item"></video>
</template>
<script lang="ts" setup>
let props = defineProps({
  modelValue: String,
})
console.log(props)
let imgList = ref([])
watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      imgList.value = val?.split(',')?.filter((item) => !!item.trim())
    }
  },
)
</script>
