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
export * from './locations'
export * from './publishJobSeeking'

// 正则表达式常量
export const REGEX_PATTERNS = {
  PHONE: /^1[3-9]\d{9}$/,
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PASSWORD: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{6,20}$/,
  ID_CARD: /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
}

// 正则表达式常量
export const AGE = new Array(34).fill('').map((_, index) => {
  return {
    label: `${index + 16} 岁`,
    value: `${index + 16}`,
  }
})
export const SEX = [
  { label: '女', value: 1 },
  { label: '男', value: 2 },
  { label: '保密', value: 3 },
]
export const XUELI = [
  { label: '本科', value: '本科' },
  { label: '专科', value: '专科' },
  { label: '保密', value: '保密' },
]
