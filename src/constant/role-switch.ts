/**
 * 角色切换页面相关常量配置
 */
import { RoleEmu } from '@/store'
import { DEFAULT_AVATARS } from './images'

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
    key: RoleEmu.seeking,
    name: '意人',
    description: '找工作 投简历',
    avatar: DEFAULT_AVATARS.jobseeker,
    features: '发布求职信息·查看求职者简历·适请面试·管理招聘流程',
  },
  {
    key: RoleEmu.employer,
    name: '老板',
    description: '招人才 发职位',
    avatar: DEFAULT_AVATARS.employer,
    features: '发布招聘信息·查看求职者简历·邀请面试·管理招聘流程',
  },
]

// 角色切换相关的提示文案
export const ROLE_SWITCH_MESSAGES = {
  switchSuccess: '身份切换成功',
  switchFailed: '切换失败，请重试',
  switching: '切换中...',
  confirmSwitch: (roleName: string) =>
    `确认要切换身份为"${roleName}"吗？切换后您将看到对应身份的功能和内容。`,
  switchTitle: (roleName: string) => `切换为${roleName}`,
}

// 角色权限配置
export const ROLE_PERMISSIONS = {
  jobseeker: {
    canViewJobs: true,
    canApplyJobs: true,
    canPostResume: true,
    canPostJobs: false,
    canViewResumes: false,
    canManageRecruitment: false,
  },
  employer: {
    canViewJobs: false,
    canApplyJobs: false,
    canPostResume: false,
    canPostJobs: true,
    canViewResumes: true,
    canManageRecruitment: true,
  },
}

// 角色相关的页面路径
export const ROLE_PAGES = {
  jobseeker: {
    home: '/pages/jobseeker/index',
    profile: '/pages/jobseeker/profile',
    applications: '/pages/jobseeker/applications',
  },
  employer: {
    home: '/pages/employer/index',
    profile: '/pages/employer/profile',
    recruitment: '/pages/employer/recruitment',
  },
}

// 角色类型定义
export type UserRoleType = 'jobseeker' | 'employer'

// 角色信息接口
export interface RoleInfo {
  key: UserRoleType
  name: string
  description: string
  avatar: string
  features: string
}
