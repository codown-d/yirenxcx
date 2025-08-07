import {
  AppYrzpGuanLianCreateReqVO,
  createGuanLian,
  getGuanZhuJobSeeker,
  getGuanZhuJobSeekerParams,
  getJob,
  getJobSeekerByUserId,
  getUserByIds,
  update,
  updateParams,
} from '@/service/app'
import { RoleEmu, useRoleStore } from '@/store'

export function useConnect() {
  const { getRole } = useRoleStore()
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
  const getGuanZhu = async () => {
    if (getRole() === RoleEmu.employer) {
      let res = await getGuanZhuJobSeeker({
        params: {
          field: 'guanZhuJobSeekerId',
        },
      })
      let userInfos = await getJobSeekerByUserId({
        params: {
          userIds: res.data.map((e) => e.guanZhuJobSeekerId).join(','),
        },
      })
      return userInfos.data
    } else {
      let res = await getGuanZhuJobSeeker({
        params: {
          field: 'guanZhuJobId',
        },
      })
      let jobInfos = await getJob({
        params: {
          ids: res.data.map((e) => e.guanZhuJobId).join(','),
        },
      })
      return jobInfos.data
    }
  }
  const getShouCang = async () => {
    if (getRole() === RoleEmu.employer) {
      let res = await getGuanZhuJobSeeker({
        params: {
          field: 'shouCangJobSeekerId',
        },
      })
      console.log(res)
      let userInfos = await getJobSeekerByUserId({
        params: {
          userIds: res.data.map((e) => e.guanZhuId),
        },
      })
      return userInfos.data
    } else {
      let res = await getGuanZhuJobSeeker({
        params: {
          field: 'shouCangJobId',
        },
      })
      let jobInfos = await getJob({
        params: {
          ids: res.data.map((e) => e.guanZhuId),
        },
      })
      return jobInfos.data
    }
  }
  return {
    changeConnect,
    getGuanZhu,
    getGuanZhuJobSeekerFn,
    getShouCang,
  }
}
