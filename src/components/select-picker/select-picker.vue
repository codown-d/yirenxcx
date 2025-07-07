<template>
  <wd-cell :title="title" :custom-class="className">
    <wd-select-picker
      v-model="selectVal"
      use-default-slot
      :columns="columns"
      @confirm="handleConfirm"
      custom-class="text-left"
    >
      <view class="text-right">
        <slot v-if="$slots.default"></slot>
        <wd-icon
          v-else
          name="arrow-right"
          custom-style="color: var(--wot-cell-arrow-color, rgba(0, 0, 0, 0.25));font-size: var(--wot-cell-icon-size, 16px);"
        ></wd-icon>
      </view>
    </wd-select-picker>
  </wd-cell>
  <view class="flex flex-wrap gap-2 mt-2 mb-1">
    <wd-tag
      custom-class="px-2 py-1 rounded-1"
      v-for="item in selectedItems"
      :key="item.value"
      type="primary"
    >
      <view class="flex gap-1 items-center">
        <text class="text-[28rpx]">{{ item.label }}</text>
        <wd-icon name="close-normal" custom-class="text-4" @click="handleClose(item)"></wd-icon>
      </view>
    </wd-tag>
  </view>
</template>

<script lang="ts" setup>
interface Column {
  label: string
  value: string
}
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  columns: {
    type: Array as PropType<Column[]>,
    default: () => [],
  },
  modelValue: {
    type: Array,
    default: () => [],
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

let selectVal = ref([])
let selectedItems = ref<Column[]>([])

const emit = defineEmits(['update:modelValue'])

const handleConfirm = ({ selectedItems: items, value }: any) => {
  selectVal.value = value
  selectedItems.value = items
  emit('update:modelValue', selectVal.value)
}

const handleClose = (item) => {
  console.log(item)
  selectedItems.value = selectedItems.value.filter((i) => i.value !== item.value)
  selectVal.value = selectedItems.value.map((i) => i.value)
  emit('update:modelValue', selectVal.value)
}
watch(
  () => props.modelValue,
  (val) => {
    selectVal.value = val
    console.log(val)
    selectedItems.value = props.columns.filter((item) => val.includes(item.value))
  },
)
</script>
