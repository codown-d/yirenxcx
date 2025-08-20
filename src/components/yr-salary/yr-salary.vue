<template>
  <view :class="`flex `">
    <view class="text-[16px] font-bold text-teal-600">{{ text }}</view>
  </view>
</template>
<script lang="ts" setup>
let props = defineProps({
  salaryMax: {
    type: Number,
    default: 0,
  },
  salaryMin: {
    type: Number,
    default: 0,
  },
  salary: {
    type: String,
    default: '',
  },
})
const text = computed(() => {
  if (props.salary) {
    return props.salary
  } else if (!props.salaryMax && props.salaryMin) {
    return `${props.salaryMin}元/月以上`
  } else if (!props.salaryMin && props.salaryMax) {
    return `${props.salaryMax}元/月以下`
  } else if (props.salaryMin && props.salaryMax) {
    return `${props.salaryMin} - ${props.salaryMax}元/月`
  } else {
    return '面议'
  }
})
</script>
