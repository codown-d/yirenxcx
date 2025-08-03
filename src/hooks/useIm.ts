import { genUserSig } from '@/service/app'
import { useRoleStore } from '@/store'
import { loginIM } from '@/utils/im'

export function useIm() {
  const { getRole } = useRoleStore()
  const imLogin = async (userId) => {
    let imUserId = `im_${getRole()}_${userId}`
    let resUserSig = await genUserSig({ params: { userId: imUserId } })
    await loginIM(imUserId, resUserSig.data)
  }
  return { imLogin }
}
