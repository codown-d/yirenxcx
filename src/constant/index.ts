/**
 * 常量统一导出文件
 */

// 登录相关常量
export * from './login'

// 图片资源常量
export * from './images'

// 角色切换相关常量
export * from './role-switch'

// 我的关注相关常量
export * from './my-follows'

// 我的收藏相关常量
export * from './my-collections'
export * from './themeVars'

// 招聘相关常量
export * from './recruitment'

// 简历相关常量
export * from './resume'
export * from './categories'
export * from './jobSeeking'
export * from './locations'

// 正则表达式常量
export const REGEX_PATTERNS = {
  PHONE: /^1[3-9]\d{9}$/,
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PASSWORD: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{6,20}$/,
  ID_CARD: /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
}
