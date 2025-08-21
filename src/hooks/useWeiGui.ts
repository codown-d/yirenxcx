import { getWeiGui } from '@/service/app'
import { RoleEmu, useRoleStore } from '@/store'

export function useWeiGui() {
  const { getRole } = useRoleStore()
  const getData = () => {
    return []
  }
  return { getData }
}
