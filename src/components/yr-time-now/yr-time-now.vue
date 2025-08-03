<template>
  <view :class="`${className}`">
    {{ updateTime(time) }}
  </view>
</template>
<script lang="ts" setup>
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn' // 如果你想显示中文
dayjs.extend(relativeTime)
dayjs.locale('zh-cn') // 设置为中文（可选）

defineProps({
  className: {
    type: String,
    default: '',
  },
  time: {
    type: [Number, String],
    required: true,
  },
})
const updateTime = (time) => {
  return dayjs(Number(time)).fromNow() === '几秒前' ? '' : dayjs(Number(time)).fromNow()
}
</script>
