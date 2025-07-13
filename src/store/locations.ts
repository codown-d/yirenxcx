import { ItemProps } from '@/pages-sub/job-filter/job-filter.vue'
import { defineStore } from 'pinia'

let VITE_WX_TXMAP = import.meta.env.VITE_WX_TXMAP
export const useLocationStore = defineStore(
  'locations',
  () => {
    let locations = ref<ItemProps[]>([])
    let curLocation = ref({ province: '', city: '', district: '', adcode: '' })

    const getCurLocation = () => {
      uni.getLocation({
        type: 'wgs84', // wgs84返回 GPS 坐标，gcj02 返回可用于 uniapp <map> 组件的坐标
        success: function (res) {
          uni.request({
            url: `https://apis.map.qq.com/ws/geocoder/v1/?location=${res.latitude},${res.longitude}&key=${VITE_WX_TXMAP}&get_poi=1`, // 替换YOUR_KEY为你的API密钥
            success: (res) => {
              if (res.data.status === 0) {
                curLocation.value = {
                  province: res.data.result.ad_info.province,
                  city: res.data.result.ad_info.city,
                  district: res.data.result.ad_info.district,
                  adcode: res.data.result.ad_info.adcode,
                }
              }
            },
            fail: (err) => {
              console.error('请求失败', err)
            },
          })
        },
        fail: function (err) {
          console.error('获取位置失败', err)
        },
      })
    }
    let setLocation = (data: ItemProps[]) => {
      locations.value = data
    }

    const clearLocation = () => {
      locations.value = []
    }
    const getLocation = () => {
      return locations.value
    }
    const removeLocation = (value: string) => {
      const index = locations.value.findIndex((cat) => cat.value === value)
      if (index > -1) {
        locations.value.splice(index, 1)
      }
    }
    getCurLocation()
    return {
      locations,
      clearLocation,
      setLocation,
      getLocation,
      removeLocation,
      curLocation,
    }
  },
  {
    persist: true,
  },
)
