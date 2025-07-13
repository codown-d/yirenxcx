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
    <view class="flex mt-2 gap-1" style="height: calc(100vh - 460rpx)">
      <wd-sidebar v-model="locationRef.province" @change="changeProvince">
        <wd-sidebar-item
          v-for="item in locations"
          :key="item.value"
          :value="item.value"
          :label="item.label"
          custom-class="!py-2"
        />
      </wd-sidebar>
      <scroll-view
        class="flex-1"
        style="border-right: 2rpx solid #eee"
        scroll-y
        :scroll-into-view="toCityView"
        scroll-with-animation
        :throttle="false"
      >
        <view class="flex justify-between items-center flex-wrap">
          <view
            v-for="ite in citiesList"
            :id="'city_' + ite.value"
            :key="ite.value"
            :class="`flex  items-center w-full h-[32px] !py-2 px-3 ${locationRef.city === ite.value ? ' !text-primary' : ''}`"
            @click="changeValue('city', ite.value)"
          >
            {{ ite.label }}
          </view>
        </view>
      </scroll-view>
      <scroll-view
        class="flex-1"
        scroll-y
        scroll-with-animation
        :throttle="false"
        :scroll-into-view="toDistrictView"
      >
        <view class="flex justify-between items-center flex-wrap">
          <view
            v-for="ite in areasList"
            :id="'district_' + ite.value"
            :key="ite.value"
            :class="`flex items-center w-full h-[32px] !py-2 px-3 ${locationRef.district === ite.value ? ' !text-primary' : ''}`"
            @click="changeValue('district', ite.value)"
          >
            {{ ite.label }}
          </view>
        </view>
      </scroll-view>
    </view>

    <!-- 底部按钮 -->
    <view class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 !pb-safe">
      <view class="flex gap-3">
        <wd-button type="info" custom-class="w-[33%]" :round="false" @click="resetSelection">
          取消
        </wd-button>
        <wd-button
          type="primary"
          custom-class="flex-1"
          :round="false"
          @click="confirmSelection"
          :disabled="!locationRef.district"
        >
          确定
        </wd-button>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { locations, findLocationByValue } from '@/constant'
import { useLocationStore } from '@/store'
import { navigateBack } from '@/utils'
const { curLocation, setLocation } = useLocationStore()
// 响应式数据
const locationRef = ref({
  province: locations[0].value,
  city: '',
  district: '',
})

const categoriesRef = ref(locations)
const citiesList = ref(locations[0].children || [])
const areasList = ref([])
const toCityView = ref('')
const toDistrictView = ref('')
const changeProvince = (val) => {
  changeValue('province', val)
}
const changeValue = (type, val) => {
  if (type === 'province') {
    locationRef.value.province = val
    locationRef.value.city = ''
    locationRef.value.district = ''
    citiesList.value =
      categoriesRef.value.find((item) => item.value === locationRef.value.province)?.children || []
    areasList.value = []
  } else if (type === 'city') {
    locationRef.value.city = val
    locationRef.value.district = ''
    areasList.value =
      citiesList.value.find((item) => item.value === locationRef.value.city)?.children || []
  } else {
    locationRef.value.district = val
  }
}
watch(
  () => locationRef.value,
  (val) => {
    let { province, city, district } = val
    citiesList.value = categoriesRef.value.find((item) => item.value === province)?.children || []
    areasList.value = citiesList.value.find((item) => item.value === city)?.children || []
    toCityView.value = 'city_' + val.city
    toDistrictView.value = 'district_' + val.district
  },
  { deep: true },
)

// 重置选择
const resetSelection = () => {
  navigateBack()
}

const confirmSelection = () => {
  let { province, city, district } = locationRef.value
  let provinceStr = categoriesRef.value.find((item) => item.value === province)?.label
  let cityStr = citiesList.value.find((item) => item.value === city)?.label
  let districtStr = areasList.value.find((item) => item.value === district)?.label
  setLocation([
    {
      label: `${provinceStr}-${cityStr}-${districtStr}`,
      value: `${province}/${city}/${district}`,
    },
  ])

  navigateBack()
}
onLoad(() => {
  let res = findLocationByValue(curLocation.adcode)
  if (res) {
    locationRef.value = {
      province: res.province.value,
      city: res.city.value,
      district: res.district.value,
    }
  }
})
</script>
