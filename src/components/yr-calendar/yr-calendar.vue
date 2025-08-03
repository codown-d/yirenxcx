<template>
  <wd-cell :title="title" :custom-class="className">
    <wd-calendar v-model="selectVal" :disabled="disabled" @confirm="handleConfirm" />
  </wd-cell>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs'

export interface Column {
  label: string
  value: string | number
}
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  modelValue: {
    type: [String, Number],
    default: () => '',
  },
  placeholder: {
    type: String,
    default: '请选择',
  },
  className: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

let selectVal = ref(dayjs().valueOf())

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
