<template>
  <view class="py-[10px]">
    <wd-cell :title="title" :custom-class="className">
      <icon-text
        @on-click="getLoginLogPage"
        @on-close="handleClose(selectedItems[0])"
        :text="selectedLocation"
      ></icon-text>
    </wd-cell>
  </view>
  <view class="py-2 flex flex-wrap gap-2" v-if="selectedItems.length && mode === 'multiple'">
    <tag
      v-for="item in selectedItems"
      :label="item.label"
      :value="item.value"
      :key="item.value"
      @on-remove="handleClose(item)"
    ></tag>
  </view>
</template>
<script lang="ts" setup>
import { navigateToSub } from '@/utils'
import { Column } from '../select-picker/select-picker.vue'
import { useLocationStore } from '@/store'
const { getLocation } = useLocationStore()

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  modelValue: {
    type: Array,
    default: () => [],
  },
  mode: {
    type: String,
    default: '',
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

let selectedItems = ref<Column[]>([])

const emit = defineEmits(['update:modelValue'])

const selectedLocation = computed(() => {
  return selectedItems.value.map((i) => i.label).join(' / ')
})
const handleClose = (item) => {
  selectedItems.value = selectedItems.value.filter((i) => i.value !== item.value)
  emit(
    'update:modelValue',
    selectedItems.value.map((i) => i.value),
  )
}
const getLoginLogPage = () => {
  navigateToSub('/location-select/location-select')
}
watch(
  () => props.modelValue,
  (val) => {
    setSelectedItems()
  },
)
const setSelectedItems = () => {
  selectedItems.value = getLocation()
}
onShow(() => {
  setSelectedItems()
})
</script>
