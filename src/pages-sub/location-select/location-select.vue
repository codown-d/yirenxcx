<route lang="json5" type="page">
{
  layout: 'common',
  style: {
    navigationBarTitleText: '地区选择',
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <view class="pt-2">
    <search class-name="mx-4"></search>
    <view class="flex mt-2" style="height: calc(100vh - 460rpx)">
      <wd-sidebar v-model="province">
        <wd-sidebar-item
          v-for="item in locations"
          :key="item.value"
          :value="item.value"
          :label="item.label"
        />
      </wd-sidebar>
      <scroll-view class="flex-1" scroll-y scroll-with-animation :throttle="false">
        <view class="flex justify-between items-center flex-wrap gap-2 px-4 pb-4">
          <wd-button
            v-for="ite in citiesList"
            :key="ite.value"
            type="info"
            size="medium"
            :round="false"
            :custom-class="`${cities === ite.value ? '!bg-[#E9F7F4] !text-primary' : ''}`"
            @click="cities = ite.value"
          >
            {{ ite.label }}
          </wd-button>
        </view>
      </scroll-view>
      <scroll-view class="flex-1" scroll-y scroll-with-animation :throttle="false">
        <view class="flex justify-between items-center flex-wrap gap-2 px-4 pb-4">
          <wd-button
            v-for="ite in areasList"
            :key="ite.value"
            type="info"
            size="medium"
            :round="false"
            :custom-class="`${areas === ite.value ? '!bg-[#E9F7F4] !text-primary' : ''}`"
            @click="areas = ite.value"
          >
            {{ ite.label }}
          </wd-button>
        </view>
      </scroll-view>
    </view>

    <!-- 底部按钮 -->
    <view class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 !pb-safe">
      <view class="pb-2 gap-1 flex-wrap flex">
        <tag
          v-for="item in selectedItems"
          :label="item.label"
          :value="item.value"
          :key="item.value"
          @on-close="handleSelect"
        ></tag>
      </view>
      <view class="flex gap-3">
        <wd-button type="info" custom-class="w-[33%]" :round="false" @click="resetSelection">
          取消
        </wd-button>
        <wd-button type="primary" custom-class="flex-1" :round="false" @click="confirmSelection">
          确定
        </wd-button>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { toast } from '@/utils/toast'
import { locations } from '@/constant'
import { getLeafNodes, navigateBack } from '@/utils'
import { useCategoriesStore } from '@/store/categories'
const { setCategory } = useCategoriesStore()
// 响应式数据
const province = ref()
const cities = ref()
const areas = ref()
const categoriesRef = ref(locations)
const selectedCategories = ref<string[]>([])
const searchKeyword = ref('')
const citiesList = computed(() => {
  return locations.find((item) => item.value === province.value)?.children || []
})
const areasList = computed(() => {
  return citiesList.value.find((item) => item.value === cities.value)?.children || []
})

const selectedItems = computed(() => {
  let result = getLeafNodes(categoriesRef.value).filter((item) =>
    selectedCategories.value.includes(item.value),
  )
  return result
})

const handleSelect = (value) => {
  if (selectedCategories.value.includes(value)) {
    selectedCategories.value = selectedCategories.value.filter((item) => item !== value)
  } else {
    selectedCategories.value.push(value)
  }
}

// 重置选择
const resetSelection = () => {
  searchKeyword.value = ''
  toast.success('已重置选择')
}

const confirmSelection = () => {
  setCategory(selectedItems.value)
  navigateBack()
}
</script>
