import { listAllSimple } from '@/service/customize'
import { Column } from '@/types'
import { groupBy } from 'lodash-es'

export function useDictData() {
  let dictData = ref<Record<string, Column[]>>({})
  const getDictData = async () => {
    let res = await listAllSimple({})
    dictData.value = groupBy(res.data, 'dictType')
  }
  onMounted(() => {
    getDictData()
  })
  return { dictData }
}
