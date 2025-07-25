import {
  AppDictDataRespVO,
  CommonResultListAppDictDataRespVO,
  getDictDataListByType,
} from '@/service/index'
import { defineStore } from 'pinia'

export interface DictItem {
  label: string
  value: string
}
export const useDictDataStore = defineStore(
  'dictData',
  () => {
    let dictData = ref<AppDictDataRespVO[]>()
    const getDictData = async () => {
      const res: CommonResultListAppDictDataRespVO = await getDictDataListByType({})
      if (res.code === 0 && res.data) {
        dictData.value = res.data
      }
    }

    const getDict = async (dictTypeList: string[]) => {
      return dictTypeList.map(async (dictType) => {
        return dictData.value.filter((item) => item.dictType === dictType)
      })
    }
    getDictData()
    return {
      dictData,
      getDict,
    }
  },
  {
    persist: true,
  },
)
