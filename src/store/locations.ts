import { defineStore } from 'pinia'

export const useLocationStore = defineStore(
  'locations',
  () => {
    let locations = ref([])
    let setLocation = (data) => {
      console.log('设置地区', data)
      locations = data
    }
    const clearLocation = () => {
      locations.value = []
    }
    const getLocationLabel = (value: string) => {
      const location = locations.value.find((cat) => cat.value === value)
      return location ? location.label : value
    }
    const getLocation = () => {
      return locations.value
    }
    const removeLocation = (value: string) => {
      const index = locations.value.findIndex((loc) => loc.value === value)
      if (index > -1) {
        locations.value.splice(index, 1)
      }
    }
    return { locations, clearLocation, setLocation, getLocationLabel, removeLocation, getLocation }
  },
  {
    persist: true,
  },
)
