<template>
  <wd-picker
    :columns="columns"
    v-model="value"
    @confirm="handleConfirm"
    :placeholder="placeholder"
  />
</template>

<script lang="ts" setup>
const props = defineProps({
  salaryMax: {
    type: Number,
    required: 8000,
  },
  salaryMin: {
    type: Number,
    required: 3000,
  },

  placeholder: {
    type: String,
    default: '请选择',
  },
})

const salaryValue = ref('3000-8000')

const columns = ref([
  { label: '面议', value: '0-0' },
  { label: '3k以下', value: '0-3000' },
  { label: '3k-8k', value: '3000-8000' },
  { label: '8k-15k', value: '8000-15000' },
  { label: '15k-30k', value: '15000-30000' },
  { label: '30k以上', value: '30000-0' },
])
const emit = defineEmits(['changeValue'])

watchEffect(() => {
  salaryValue.value = `${props.salaryMin}-${props.salaryMax}`
})
const handleConfirm = ({ value, selectedItems }) => {
  salaryValue.value = value
  emit('changeValue', value.split('-'))
}
</script>
