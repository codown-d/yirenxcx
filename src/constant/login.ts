/**
 * 登录页面相关常量配置
 */
import { DEFAULT_AVATARS } from './images'

// 登录页面基础配置
export const LOGIN_CONFIG = {
  title: '欢迎登录意仁直聘！',
  appName: '意仁直聘',
  logo: '/static/logo.png',
  welcomeText: '欢迎登录薏仁直聘',
  subtitle: '求职者的招聘平台',
  wechatAuthText: '微信授权登录',
  phoneLoginText: '手机号登录',
  loginButtonText: '登录',
}

// 登录方式选项卡
export const LOGIN_TABS = [
  {
    key: 'password' as const,
    label: '密码登录',
  },
  {
    key: 'sms' as const,
    label: '验证码登录',
  },
]

// 表单相关配置
export const FORM_CONFIG = {
  phonePlaceholder: '请输入手机号',
  passwordPlaceholder: '请输入密码',
  smsCodePlaceholder: '请输入验证码',
  sendSmsText: '获取验证码',
  forgotPasswordText: '忘记密码？',
  registerText: '立即注册',
}

// 注册页面配置
export const REGISTER_CONFIG = {
  title: '欢迎注册意仁直聘！',
  subtitle: '创建您的专属账户',
  passwordPlaceholder: '请设置登录密码',
  confirmPasswordPlaceholder: '请确认登录密码',
  realNamePlaceholder: '请输入真实姓名',
  inviteCodePlaceholder: '请输入邀请码（可选）',
  registerButtonText: '立即注册',
  backToLoginText: '立即登录',
}

// 忘记密码页面配置
export const FORGOT_PASSWORD_CONFIG = {
  title: '重置登录密码',
  subtitle: '通过手机验证码重置密码',
  newPasswordPlaceholder: '请输入新密码',
  confirmPasswordPlaceholder: '请确认新密码',
  resetButtonText: '重置密码',
  backToLoginText: '立即登录',
}

// 身份选择配置
export const ROLE_CONFIG = {
  title: '请选择您当前身份',
  note: '选择身份后，您将看到对应身份的功能和内容，您可以随时在个人中心切换身份。',
  confirmText: '确认',
  roles: [
    {
      key: 'jobseeker',
      name: '意人',
      description: '找工作 投简历',
      avatar: DEFAULT_AVATARS.jobseeker,
    },
    {
      key: 'employer',
      name: '老板',
      description: '招人才 发职位',
      avatar: DEFAULT_AVATARS.employer,
    },
  ],
}

// 隐私协议配置
export const PRIVACY_CONFIG = {
  agreeText: '登录即表示同意',
  userAgreement: '《用户协议》',
  andText: '和',
  privacyPolicy: '《隐私政策》',
}

// 登录表单类型定义
export interface LoginForm {
  phone: string
  password: string
  smsCode: string
}

// 注册表单类型定义
export interface RegisterForm {
  phone: string
  smsCode: string
  password: string
  confirmPassword: string
  realName: string
  inviteCode: string
}

// 忘记密码表单类型定义
export interface ForgotPasswordForm {
  phone: string
  smsCode: string
  newPassword: string
  confirmPassword: string
}

// 用户角色类型
export type UserRole = 'jobseeker' | 'employer'

// 登录方式类型
export type LoginType = 'wechat' | 'phone'

// 登录选项卡类型
export type LoginTab = 'password' | 'sms'
// 分类数据
export const tabCategory = ref([
  { id: '1', label: '热门', value: 'hot', postCount: 0, isDefault: true },
  { id: '2', label: '最新', value: 'latest', postCount: 0, isDefault: false },
  { id: '3', label: '关注', value: 'follow', postCount: 0, isDefault: false },
  { id: '4', label: '我的', value: 'mine', postCount: 0, isDefault: false },
])
// 热门话题数据
export const hotTopics = [
  { id: '1', name: '舞蹈技巧', description: '', count: 1233, isHot: true, isFollowed: false },
  { id: '2', name: '招聘信息', description: '', count: 1233, isHot: true, isFollowed: false },
  { id: '3', name: '招聘信息', description: '', count: 1233, isHot: true, isFollowed: false },
  { id: '4', name: '武术交流', description: '', count: 1233, isHot: true, isFollowed: false },
] // 帖子列表数据
