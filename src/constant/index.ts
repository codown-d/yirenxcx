/**
 * 常量统一导出文件
 */

// 登录相关常量
export * from './login'

// 图片资源常量
export * from './images'
export * from './themeVars'

// 招聘相关常量
export * from './recruitment'

// 应用基础配置
export const APP_CONFIG = {
  name: '意仁直聘',
  version: '1.0.0',
  description: '求职者的招聘平台',
  author: 'YiRen Team',
}

// API 相关常量
export const API_CONFIG = {
  baseURL:
    process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://api.yiren.com',
  timeout: 10000,
  retryTimes: 3,
}

// 存储键名常量
export const STORAGE_KEYS = {
  TOKEN: 'token',
  USER_INFO: 'userInfo',
  USER_ROLE: 'userRole',
  LOGIN_PHONE: 'loginPhone',
  PRIVACY_AGREED: 'privacyAgreed',
}

// 页面路径常量
export const PAGE_PATHS = {
  LOGIN: '/pages-sub/login/index',
  HOME: '/pages/index/index',
  MINE: '/pages/mine/index',
  ABOUT: '/pages/about/about',
}

// 状态码常量
export const STATUS_CODES = {
  SUCCESS: 200,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
}

// 正则表达式常量
export const REGEX_PATTERNS = {
  PHONE: /^1[3-9]\d{9}$/,
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PASSWORD: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{6,20}$/,
  ID_CARD: /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
}
