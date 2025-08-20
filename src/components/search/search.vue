<template>
  <view
    :class="`flex items-center bg-white rounded-2 px-2 py-1 gap-2 border border-primary/50 border-opacity-50 border-solid ${className}`"
  >
    <wd-icon name="search" size="22px"></wd-icon>
    <wd-input
      custom-class="flex-1 text-sm text-gray-800 bg-transparent outline-none !bg-transparent bg-opacity-0"
      :placeholder="placeholder"
      v-model="searchKeyword"
      no-border
      @confirm="onConfirm"
      @input="onInput"
      @clear="onClear"
    />
    <wd-button :round="false" size="small" custom-class="!rounded-1" @click="onConfirm">
      {{ btnText }}
    </wd-button>
  </view>
</template>

<script lang="ts" setup>
defineProps({
  btnText: {
    type: String,
    default: '搜索',
  },
  placeholder: {
    type: String,
    default: '请输入',
  },
  className: {
    type: String,
    default: '',
  },
})

let searchKeyword = ref('')

const emit = defineEmits<{
  (e: 'confirm', value: string): void
  (e: 'input', value: string): void
}>()
const onConfirm = () => {
  emit('confirm', searchKeyword.value)
}
const onInput = (e) => {
  searchKeyword.value = e.value
  emit('input', searchKeyword.value)
}
const onClear = () => {
  searchKeyword.value = ''
  emit('input', searchKeyword.value)
}
</script>
