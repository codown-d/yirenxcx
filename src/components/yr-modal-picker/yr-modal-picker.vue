<template>
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
  modelValue: {
    type: String,
    default: () => '',
  },
  placeholder: {
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
console.log(props)
let list = ref([])
let tagValue = ref(undefined)

const emit = defineEmits(['update:modelValue'])
const removeSkill = (index) => {
  list.value.splice(index, 1)
  emit('update:modelValue', list.value.join(','))
}
const message = useMessage()
const addItem = async () => {
  let res = await message.prompt({
    title: props.modalTitle,
    inputValue: tagValue.value,
    inputPlaceholder: props.placeholder,
    inputPattern: /^(?!\s*$).+/,
  })
  list.value.push(res.value)
  emit('update:modelValue', list.value.join(','))
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
