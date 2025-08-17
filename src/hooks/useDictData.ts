import { listAllSimple } from '@/service/customize'
import { groupBy } from 'lodash'

export function useDictData() {
  let dictData = ref<any>({})
  const getDictData = async () => {
    let res = await listAllSimple({})
    dictData.value = groupBy(res.data, 'dictType')
    console.log(dictData.value)
  }
  onMounted(() => {
    getDictData()
  })
  return { dictData }
}
