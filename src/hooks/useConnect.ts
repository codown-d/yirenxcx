import {
  AppYrzpGuanLianCreateReqVO,
  createGuanLian,
  getGuanZhuJobSeeker,
  getGuanZhuJobSeekerParams,
  getJob,
  update,
  updateParams,
  getJobSeekerByUserId,
} from '@/service/app'
import { getUserByIds } from '@/service/member'
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
      let userIds = res.data.map((e) => e.guanZhuJobSeekerId).join(',')
      if (userIds) {
        let userInfos = await getJobSeekerByUserId({
          params: { userIds },
        })
        return userInfos.data
      }
      return []
    } else {
      let res = await getGuanZhuJobSeeker({
        params: {
          field: 'guanZhuJobId',
        },
      })
      let ids = res.data.map((e) => e.guanZhuJobId).join(',')
      if (ids) {
        let jobInfos = await getJob({
          params: { ids },
        })
        return jobInfos.data
      }
      return []
    }
  }
  const getShouCang = async () => {
    if (getRole() === RoleEmu.employer) {
      let res = await getGuanZhuJobSeeker({
        params: {
          field: 'shouCangJobSeekerId',
        },
      })
      let userIds = res.data.map((e) => e.shouCangJobSeekerId).join(',')
      console.log(userIds)
      if (userIds) {
        let seekers = await getUserByIds({
          params: {
            userIds: userIds,
          },
        })
        return seekers.data
      }
      return []
    } else {
      let res = await getGuanZhuJobSeeker({
        params: {
          field: 'shouCangJobId',
        },
      })
      let userIds = res.data.map((e) => e.shouCangJobId).join(',')
      if (userIds) {
        let employers = await getUserByIds({
          params: {
            userIds: userIds,
          },
        })
        return employers.data
      }
      return []
    }
  }
  const getTieZiIds = async () => {
    let res = await getGuanZhuJobSeeker({
      params: {
        field: 'tieZiId',
      },
    })
    return res.data.map((item) => item.tieZiId)
  }
  return {
    changeConnect,
    getGuanZhu,
    getGuanZhuJobSeekerFn,
    getShouCang,
    getTieZiIds,
  }
}
