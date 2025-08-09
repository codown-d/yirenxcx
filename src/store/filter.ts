import { defineStore } from 'pinia'

export const useFilterStore = defineStore(
  'filter',
  () => {
    let filter = ref()

    let setFilter = (data) => {
      filter.value = data
    }
    const getFilter = () => {
      return filter.value
    }
    return {
      filter,
      getFilter,
      setFilter,
    }
  },
  {
    persist: true,
  },
)
