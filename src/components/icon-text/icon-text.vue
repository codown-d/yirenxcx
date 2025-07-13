<template>
  <view :class="`flex item-center ${alginText} ${className}`">
    <view class="mr-[10px]">
      <template v-if="slots.default">
        <slot></slot>
      </template>
      <text v-else :class="`${!!props.text ? 'text-[#585858]' : 'text-[#bfbfbf]'} `">
        {{ props.text || '请选择' }}
      </text>
    </view>
    <view class="wd-icon wd-icon-error-fill" v-if="showClose" @click="onClose"></view>
    <view class="wd-icon wd-icon-arrow-right" v-else @click="onClick"></view>
  </view>
</template>
<script lang="ts" setup>
let props = defineProps({
  className: {
    type: String,
    default: '',
  },
  algin: {
    type: String,
    default: 'right',
  },
  classText: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
})
let slots = useSlots()

let showClose = computed(() => {
  return !!props.text || !!slots.default
})
let alginText = computed(() => {
  return props.algin === 'right' ? 'justify-end' : 'justify-start'
})
const emit = defineEmits(['onClose', 'onClick'])

const onClick = (value) => {
  emit('onClick', value)
}
const onClose = (value) => {
  emit('onClose', value)
}
</script>
<style lang="scss" scoped>
.wd-icon {
  display: inline-block;
  font-family: 'wd-icons' !important;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: var(--wot-cell-icon-size, 16px);
  line-height: var(--wot-cell-line-height, 24px);
}
.wd-icon-arrow-right {
  color: var(--wot-cell-arrow-color, rgba(0, 0, 0, 0.25));
  &::before {
    content: '\e655';
  }
}
.wd-icon-error-fill {
  color: var(--wot-cell-clear-color, #585858);
  &::before {
    content: '\e646';
  }
}
</style>
