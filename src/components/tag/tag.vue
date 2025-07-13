<template>
  <wd-tag :custom-class="`!px-2 !py-1 !rounded-1  ${className}`" :type="type">
    <view class="flex gap-1 items-center">
      <text class="text-[24rpx]">{{ label }}</text>
      <wd-icon
        v-if="closeable"
        name="close-normal"
        custom-class="text-4"
        @click.stop="handleSelect(value)"
      ></wd-icon>
    </view>
  </wd-tag>
</template>

<script lang="ts" setup>
import { TagType } from 'wot-design-uni/components/wd-tag/types'

defineProps({
  closeable: {
    type: Boolean,
    default: true,
  },
  type: {
    type: String as PropType<TagType>,
    default: 'primary',
  },
  label: {
    type: String,
    required: true,
  },
  value: {
    type: String,
  },
  className: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['onRemove'])

const handleSelect = (value) => {
  emit('onRemove', value)
}
</script>
