import { defineStore } from 'pinia'

export enum RoleEmu {
  seeker = 'seeker', // 求职者
  employer = 'employer', // 雇主
}
export const useRoleStore = defineStore(
  'role',
  () => {
    let role = ref<RoleEmu>(RoleEmu.seeker)

    let setRole = (type: RoleEmu) => {
      role.value = type
    }
    const getRole = () => {
      return role.value
    }
    return {
      role,
      getRole,
      setRole,
    }
  },
  {
    persist: true,
  },
)
