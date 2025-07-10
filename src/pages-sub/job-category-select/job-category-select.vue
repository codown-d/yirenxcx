<route lang="json5" type="page">
{
  layout: 'common',
  style: {
    navigationBarTitleText: '职业类别',
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <view class="pt-2">
    <search class-name="mx-4"></search>
    <view class="flex mt-2" style="height: calc(100vh - 460rpx)">
      <wd-sidebar v-model="active" @change="handleChange">
        <wd-sidebar-item
          v-for="item in categoriesRef"
          :key="item.value"
          :value="item.value"
          :label="item.label"
        />
      </wd-sidebar>
      <scroll-view
        class="flex-1"
        scroll-y
        scroll-with-animation
        :scroll-top="scrollTop"
        :throttle="false"
      >
        <view v-for="(item, index) in categoryList" :key="index" class="category">
          <wd-cell-group :title="item.title">
            <view class="flex justify-between items-center flex-wrap gap-2 px-4 pb-4">
              <wd-button
                v-for="ite in item.items"
                :key="ite.value"
                type="info"
                size="medium"
                :round="false"
                :custom-class="`${selectedCategories.includes(ite.value) ? '!bg-[#E9F7F4] !text-primary' : ''}`"
                @click="handleSelect(ite.value)"
              >
                {{ ite.label }}
              </wd-button>
            </view>
          </wd-cell-group>
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
import { categories } from '@/constant'
import { getLeafNodes, navigateBack } from '@/utils'
import { useCategoriesStore } from '@/store/categories'
const { setCategory } = useCategoriesStore()
// 响应式数据
const active = ref('tq')
const scrollTop = ref<number>(0)
const categoriesRef = ref(categories)
const selectedCategories = ref<string[]>([])
const searchKeyword = ref('')
const categoryList = computed(() => {
  return categoriesRef.value.find((item) => item.value === active.value)?.items || []
})
const selectedItems = computed(() => {
  let result = getLeafNodes(categoriesRef.value).filter((item) =>
    selectedCategories.value.includes(item.value),
  )
  return result
})

const handleChange = (item) => {
  active.value = item.value
  scrollTop.value = -1
  nextTick(() => {
    scrollTop.value = 0
  })
}

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
