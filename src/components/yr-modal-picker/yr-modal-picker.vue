<template>
  <view v-if="!!slots.default"><slot></slot></view>
  <wd-form-item :prop="prop" :title="modalTitle" v-else>
    <view class="flex items-center h-[34px]" @click="addItem">
      <view class="flex text-[14px] text-[#bfbfbf] pr-2">{{ placeholder }}</view>
      <wd-icon name="arrow-right" size="16px" custom-class="text-[#bfbfbf]"></wd-icon>
    </view>
  </wd-form-item>
  <view class="flex flex-wrap gap-2" v-if="list.length > 0">
    <view
      v-for="(item, index) in list"
      :key="index"
      :class="className"
      class="flex items-center bg-[#E9F7F4] text-[#248069] text-sm px-2 py-1 rounded-1 border border-green-200"
    >
      <text class="mr-1">{{ item }}</text>
      <wd-icon name="close" size="14px" @click="removeSkill(index)" />
    </view>
  </view>
  <wd-message-box />
</template>

<script lang="ts" setup>
import { useMessage } from 'wot-design-uni'
const props = defineProps({
  modelValue: String,
  prop: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: '请输入',
  },
  modalPlaceholder: {
    type: String,
    default: '请输入',
  },
  modalTitle: {
    type: String,
    default: '请输入',
  },
  className: {
    type: String,
    default: '',
  },
})
let list = ref([])
let tagValue = ref(undefined)
const slots = useSlots()
const emit = defineEmits(['update:modelValue', 'change'])
const removeSkill = (index) => {
  list.value.splice(index, 1)
  emit('update:modelValue', list.value.join(','))
  triggerValidate()
}
const triggerValidate = () => {
  nextTick(() => {
    console.log(getCurrentInstance())
    let parent = getCurrentInstance()?.proxy.$parent
    while (parent && !parent.validateField) {
      parent = parent.$parent
    }
    parent?.validateField(props.prop)
  })
}
const message = useMessage()
const addItem = async () => {
  const res = await message.prompt({
    title: `请输入${props.modalTitle}`,
    inputValue: tagValue.value,
    inputPlaceholder: props.modalPlaceholder,
    inputPattern: /^(?!\s*$).+/,
  })
  if (res.value) {
    list.value.push(res.value)
    emit('update:modelValue', list.value.join(','))
    emit('change', list.value.join(','))
    triggerValidate()
  }
}
defineExpose({
  addItem,
})

watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      list.value = val.split(',').filter((item) => !!item.trim())
    }
  },
)
</script>
