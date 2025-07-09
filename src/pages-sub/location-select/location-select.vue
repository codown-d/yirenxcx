<route lang="json5" type="page">
{
  style: {
    navigationBarTitleText: '地区选择',
    navigationStyle: 'default',
  },
}
</route>

<template>
  <view class="min-h-screen bg-gray-50">
    <!-- 搜索框 -->
    <view class="bg-white p-4 border-b border-gray-100">
      <view class="flex gap-3">
        <wd-input v-model="searchKeyword" placeholder="搜索地区" class="flex-1" @input="onSearch" />
        <button
          class="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium active:bg-primary-600 transition-colors"
          @click="searchLocation"
        >
          搜索
        </button>
      </view>
    </view>

    <!-- 地区列表 -->
    <view class="bg-white mb-6">
      <view class="p-4">
        <view class="grid grid-cols-3 gap-3">
          <button
            v-for="location in filteredLocations"
            :key="location.id"
            :class="[
              'py-2 px-3 rounded-lg text-sm border transition-colors text-left',
              selectedLocationIds.includes(location.id)
                ? 'bg-primary-50 border-primary text-primary'
                : 'bg-white border-gray-200 text-gray-700',
            ]"
            @click="toggleLocation(location)"
          >
            <view class="text-xs text-gray-500">{{ location.province }}</view>
            <view class="text-sm font-medium">{{ location.city }}</view>
            <view v-if="location.district" class="text-xs text-gray-600">
              {{ location.district }}
            </view>
          </button>
        </view>
      </view>
    </view>

    <!-- 已选择的地区 -->
    <view v-if="selectedLocations.length > 0" class="bg-white mb-6">
      <view class="px-4 py-3 border-b border-gray-100">
        <text class="text-base font-medium text-gray-900">已选择</text>
      </view>
      <view class="p-4">
        <view class="flex flex-wrap gap-2">
          <wd-tag
            v-for="location in selectedLocations"
            :key="location.id"
            type="primary"
            size="small"
            closable
            @close="removeLocation(location)"
          >
            {{ location.fullName }}
          </wd-tag>
        </view>
      </view>
    </view>

    <!-- 底部按钮 -->
    <view class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
      <view class="flex gap-3">
        <button
          class="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg text-base font-medium active:bg-gray-200 transition-colors"
          @click="resetSelection"
        >
          重置
        </button>
        <button
          class="flex-1 bg-primary text-white py-3 rounded-lg text-base font-medium active:bg-primary-600 transition-colors"
          @click="confirmSelection"
        >
          确定
        </button>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { toast } from '@/utils/toast'
import { getLocationList, searchLocations, type LocationItem } from '@/service/index/filter'

// 响应式数据
const searchKeyword = ref('')
const selectedLocationIds = ref<string[]>(['cd-wh', 'sh'])
const selectedLocations = ref<LocationItem[]>([])

// 地区数据
const locationData = ref<LocationItem[]>([
  { id: 'sc-cd', province: '四川省', city: '成都市', fullName: '四川省-成都市' },
  { id: 'cd-wh', province: '成都市', city: '武侯区', fullName: '成都-武侯区' },
  { id: 'zj-nc', province: '浙江省', city: '南充市', fullName: '浙江省-南充市' },
  { id: 'nc-jn', province: '南充市', city: '金牛区', fullName: '南充市-金牛区' },
  { id: 'zj-nc2', province: '浙江省', city: '南充市', fullName: '浙江省-南充市' },
  { id: 'nc-jn2', province: '南充市', city: '金牛区', fullName: '南充市-金牛区' },
  { id: 'zj-nc3', province: '浙江省', city: '南充市', fullName: '浙江省-南充市' },
  { id: 'nc-jn3', province: '南充市', city: '金牛区', fullName: '南充市-金牛区' },
  { id: 'zj-nc4', province: '浙江省', city: '南充市', fullName: '浙江省-南充市' },
  { id: 'nc-jn4', province: '南充市', city: '金牛区', fullName: '南充市-金牛区' },
  { id: 'zj-nc5', province: '浙江省', city: '南充市', fullName: '浙江省-南充市' },
  { id: 'nc-jn5', province: '南充市', city: '金牛区', fullName: '南充市-金牛区' },
  { id: 'zj-nc6', province: '浙江省', city: '南充市', fullName: '浙江省-南充市' },
  { id: 'zj', province: '浙江省', city: '浙江省', fullName: '浙江省' },
  { id: 'zj2', province: '浙江省', city: '', fullName: '浙江省' },
  { id: 'sh', province: '上海', city: '', fullName: '上海' },
])

// 过滤后的地区列表
const filteredLocations = computed(() => {
  if (!searchKeyword.value) {
    return locationData.value
  }
  return locationData.value.filter(
    (location) =>
      location.fullName.includes(searchKeyword.value) ||
      location.province.includes(searchKeyword.value) ||
      location.city.includes(searchKeyword.value),
  )
})

// 页面加载
onMounted(() => {
  updateSelectedLocations()
})

// 更新已选择的地区
const updateSelectedLocations = () => {
  selectedLocations.value = locationData.value.filter((location) =>
    selectedLocationIds.value.includes(location.id),
  )
}

// 搜索地区
const searchLocation = () => {
  if (!searchKeyword.value.trim()) {
    toast.info('请输入搜索关键词')
    return
  }
  // 搜索逻辑已在computed中实现
}

// 输入搜索
const onSearch = () => {
  // 实时搜索，computed会自动更新
}

// 切换地区选择
const toggleLocation = (location: LocationItem) => {
  const index = selectedLocationIds.value.indexOf(location.id)
  if (index > -1) {
    selectedLocationIds.value.splice(index, 1)
  } else {
    selectedLocationIds.value.push(location.id)
  }
  updateSelectedLocations()
}

// 移除地区
const removeLocation = (location: LocationItem) => {
  const index = selectedLocationIds.value.indexOf(location.id)
  if (index > -1) {
    selectedLocationIds.value.splice(index, 1)
    updateSelectedLocations()
  }
}

// 重置选择
const resetSelection = () => {
  selectedLocationIds.value = []
  selectedLocations.value = []
  searchKeyword.value = ''
  toast.success('已重置选择')
}

// 确定选择
const confirmSelection = () => {
  const selectedNames = selectedLocations.value.map((location) => location.fullName)

  console.log('选择的地区:', selectedNames)
  toast.success(`已选择 ${selectedLocations.value.length} 个地区`)

  // 返回上一页并传递选择的地区数据
  uni.navigateBack()
}
</script>
