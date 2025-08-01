import {
  AppYrzpGuanLianCreateReqVO,
  createGuanLian,
  getGuanZhuJobSeeker,
  getGuanZhuJobSeekerParams,
  update,
  updateParams,
} from '@/service/app'

export function useConnect() {
  const createGuanLianFn = async (
    data: AppYrzpGuanLianCreateReqVO,
    callbalck?: (arg: any) => void,
  ) => {
    let res = await createGuanLian({ body: data })
    callbalck?.(res)
  }
  const getGuanZhuJobSeekerFn = async (
    data: getGuanZhuJobSeekerParams,
    callbalck?: (arg: any) => void,
  ) => {
    let res = await getGuanZhuJobSeeker({ params: data })
    callbalck?.(res)
    return res.data
  }
  const updateFn = async (data: updateParams, callbalck?: (arg: any) => void) => {
    let res = await update({ params: data })
    callbalck?.(res)
  }
  const changeConnect = (data, type, fn) => {
    if (!type) {
      createGuanLianFn(data, fn)
    } else {
      const [key, value] = Object.entries(data)[0]

      const result = {
        field: key,
        guanZhuId: Number(value),
      }
      updateFn(result, fn)
    }
  }
  return { changeConnect, getGuanZhuJobSeekerFn }
}
