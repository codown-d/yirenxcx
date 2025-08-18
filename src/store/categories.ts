import { TreeNode } from '@/utils'
import { defineStore } from 'pinia'

export const useCategoriesStore = defineStore(
  'categories',
  () => {
    const categories = ref([])
    let setCategory = (data) => {
      categories.value = data
    }
    const clearCategory = () => {
      categories.value = []
    }
    const getCategoryLabel = (value: string) => {
      const category = categories.value.find((cat) => cat.value === value)
      return category ? category.label : value
    }

    const getCategory = () => {
      return categories.value
    }
    const removeCategory = (value: string) => {
      const index = categories.value.findIndex((cat) => cat.value === value)
      if (index > -1) {
        categories.value.splice(index, 1)
      }
    }
    return { categories, clearCategory, setCategory, getCategoryLabel, removeCategory, getCategory }
  },
  {
    persist: true,
  },
)
