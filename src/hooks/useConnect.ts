import {
  AppYrzpGuanLianCreateReqVO,
  createGuanLian,
  getGuanZhuJobSeeker,
  getGuanZhuJobSeekerParams,
  update,
  updateParams,
} from '@/service/app'

export function useConnect() {
  const createGuanLianFn = async (data: AppYrzpGuanLianCreateReqVO, callbalck) => {
    let res = await createGuanLian({ body: data })
    callbalck?.(res)
  }
  const getGuanZhuJobSeekerFn = async (data: getGuanZhuJobSeekerParams, callbalck) => {
    let res = await getGuanZhuJobSeeker({ params: data })
    callbalck?.(res)
  }
  const updateFn = async (data: updateParams, callbalck) => {
    let res = await update({ params: data })
    callbalck?.(res)
  }
  return { createGuanLianFn, getGuanZhuJobSeekerFn, updateFn }
}
