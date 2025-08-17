/**
 * 角色切换页面相关常量配置
 */
import { RoleEmu } from '@/store'

// 角色切换页面配置
export const ROLE_SWITCH_CONFIG = {
  title: '切换身份',
  currentRolePrefix: '您当前身份是',
  switchToOther: '切换到其他身份',
  confirmSwitchText: '确认切换',
  cancelText: '取消',
  returnText: '返回',
  note: '选择身份后，您将看到对应身份的功能和内容，您可以随时在个人中心切换身份。',
}

// 用户角色配置
export const USER_ROLES = [
  {
    key: RoleEmu.seeker,
    name: '薏人',
    description: '找工作 投简历',
    avatar: '/static/images/yiren.png',
    features: '发布求职信息·查看求职者简历·适请面试·管理招聘流程',
  },
  {
    key: RoleEmu.employer,
    name: '老板',
    description: '招人才 发职位',
    avatar: '/static/images/zp.png',
    features: '发布招聘信息·查看求职者简历·邀请面试·管理招聘流程',
  },
]
