/**
 * 我的关注页面相关常量配置
 */
import { DEFAULT_COMPANY_LOGOS } from './images'

// 我的关注页面配置
export const MY_FOLLOWS_CONFIG = {
  title: '我的关注',
  recordsText: '条记录',
  emptyTitle: '暂无关注的公司',
  emptyDesc: '去发现更多优质企业吧',
  discoverButtonText: '去发现',
  loadMoreText: '加载更多',
  loadingText: '加载中...',
  allLoadedText: '已显示全部关注',
  messageButtonText: '私信',
  unfollowText: '取消关注',
  unfollowConfirm: '确定要取消关注吗？',
}

// 模拟关注数据
export const MOCK_FOLLOW_DATA = [
  {
    id: '1',
    companyName: '东方歌舞团',
    industry: '表演艺术',
    location: '北京',
    logo: DEFAULT_COMPANY_LOGOS.education,
    tags: ['国企', '3新'],
    followTime: '2023.04.29',
    description: '中国最具影响力的艺术团体之一',
    employeeCount: '500-1000人',
    establishedYear: '1962',
  },
  {
    id: '2',
    companyName: '腾讯科技有限公司',
    industry: '互联网',
    location: '深圳',
    logo: DEFAULT_COMPANY_LOGOS.tech,
    tags: ['大厂', '福利好'],
    followTime: '2023.04.28',
    description: '中国领先的互联网增值服务提供商',
    employeeCount: '10000+人',
    establishedYear: '1998',
  },
  {
    id: '3',
    companyName: '阿里巴巴集团',
    industry: '电子商务',
    location: '杭州',
    logo: DEFAULT_COMPANY_LOGOS.tech,
    tags: ['大厂', '发展快'],
    followTime: '2023.04.27',
    description: '全球领先的电子商务公司',
    employeeCount: '10000+人',
    establishedYear: '1999',
  },
  {
    id: '4',
    companyName: '字节跳动',
    industry: '互联网',
    location: '北京',
    logo: DEFAULT_COMPANY_LOGOS.tech,
    tags: ['独角兽', '年轻化'],
    followTime: '2023.04.26',
    description: '全球化的移动互联网公司',
    employeeCount: '10000+人',
    establishedYear: '2012',
  },
  {
    id: '5',
    companyName: '华为技术有限公司',
    industry: '通信设备',
    location: '深圳',
    logo: '/static/images/avatar.jpg',
    tags: ['世界500强', '技术强'],
    followTime: '2023.04.25',
    description: '全球领先的ICT基础设施和智能终端提供商',
    employeeCount: '10000+人',
    establishedYear: '1987',
  },
  {
    id: '6',
    companyName: '百度在线网络技术公司',
    industry: '人工智能',
    location: '北京',
    logo: '/static/images/avatar.jpg',
    tags: ['AI领先', '技术驱动'],
    followTime: '2023.04.24',
    description: '全球最大的中文搜索引擎',
    employeeCount: '5000-10000人',
    establishedYear: '2000',
  },
  {
    id: '7',
    companyName: '美团',
    industry: '生活服务',
    location: '北京',
    logo: '/static/images/avatar.jpg',
    tags: ['生活服务', '用户第一'],
    followTime: '2023.04.23',
    description: '中国领先的生活服务电子商务平台',
    employeeCount: '5000-10000人',
    establishedYear: '2010',
  },
  {
    id: '8',
    companyName: '滴滴出行',
    industry: '出行服务',
    location: '北京',
    logo: '/static/images/avatar.jpg',
    tags: ['出行领域', '创新'],
    followTime: '2023.04.22',
    description: '全球领先的移动出行平台',
    employeeCount: '1000-5000人',
    establishedYear: '2012',
  },
  {
    id: '9',
    companyName: '小米科技有限公司',
    industry: '智能硬件',
    location: '北京',
    logo: '/static/images/avatar.jpg',
    tags: ['硬件', '性价比'],
    followTime: '2023.04.21',
    description: '以手机、智能硬件和IoT平台为核心的互联网公司',
    employeeCount: '5000-10000人',
    establishedYear: '2010',
  },
  {
    id: '10',
    companyName: '京东集团',
    industry: '电子商务',
    location: '北京',
    logo: '/static/images/avatar.jpg',
    tags: ['电商', '物流强'],
    followTime: '2023.04.20',
    description: '中国领先的技术驱动的电商和零售基础设施服务商',
    employeeCount: '10000+人',
    establishedYear: '1998',
  },
  {
    id: '11',
    companyName: '京东集团',
    industry: '电子商务',
    location: '北京',
    logo: '/static/images/avatar.jpg',
    tags: ['电商', '物流强'],
    followTime: '2023.04.20',
    description: '中国领先的技术驱动的电商和零售基础设施服务商',
    employeeCount: '10000+人',
    establishedYear: '1998',
  },
]

// 公司标签配置
export const COMPANY_TAGS = {
  scale: ['创业公司', '成长型', '大厂', '世界500强'],
  type: ['国企', '外企', '民企', '独角兽'],
  feature: ['福利好', '发展快', '技术强', '年轻化', '3新'],
  industry: ['互联网', '金融', '教育', '医疗', '制造业'],
}

// 关注状态
export const FOLLOW_STATUS = {
  FOLLOWED: 'followed',
  UNFOLLOWED: 'unfollowed',
}

// 排序方式
export const SORT_OPTIONS = [
  { key: 'followTime', label: '关注时间' },
  { key: 'companyName', label: '公司名称' },
  { key: 'industry', label: '行业分类' },
]

// 筛选选项
export const FILTER_OPTIONS = {
  industry: [
    { key: 'all', label: '全部行业' },
    { key: 'internet', label: '互联网' },
    { key: 'finance', label: '金融' },
    { key: 'education', label: '教育' },
    { key: 'healthcare', label: '医疗' },
    { key: 'manufacturing', label: '制造业' },
  ],
  scale: [
    { key: 'all', label: '全部规模' },
    { key: 'startup', label: '创业公司' },
    { key: 'medium', label: '成长型' },
    { key: 'large', label: '大厂' },
    { key: 'fortune500', label: '世界500强' },
  ],
}

// 关注相关的操作
export const FOLLOW_ACTIONS = {
  FOLLOW: 'follow',
  UNFOLLOW: 'unfollow',
  MESSAGE: 'message',
  VIEW_DETAIL: 'view_detail',
}

// 关注数据接口
export interface FollowCompany {
  id: string
  companyName: string
  industry: string
  location: string
  logo: string
  tags: string[]
  followTime: string
  description: string
  employeeCount: string
  establishedYear: string
}
