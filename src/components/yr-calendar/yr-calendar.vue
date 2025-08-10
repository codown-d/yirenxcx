<template>
  <wd-calendar v-model="selectVal" :disabled="disabled" @confirm="handleConfirm" />
</template>

<script lang="ts" setup>
import dayjs from 'dayjs'

export interface Column {
  label: string
  value: string | number
}
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: () => '',
  },
  placeholder: {
    type: String,
    default: '请选择',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

let selectVal = ref()

const emit = defineEmits(['update:modelValue'])

const handleConfirm = (data: any) => {
  selectVal.value = data.value
  emit('update:modelValue', dayjs(data.value).format('YYYY-MM-DD'))
}

watch(
  () => props.modelValue,
  (val) => {
    if (dayjs(val).isValid()) {
      selectVal.value = dayjs(props.modelValue).valueOf()
    } else {
      selectVal.value = dayjs().valueOf()
    }
  },
)
</script>
