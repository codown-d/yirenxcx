import { defineStore } from 'pinia'

export enum RoleEmu {
  seeking = 'seeking', // 求职者
  employer = 'employer', // 雇主
}
export const useRoleStore = defineStore(
  'role',
  () => {
    let role = ref<RoleEmu>(RoleEmu.seeking)

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
