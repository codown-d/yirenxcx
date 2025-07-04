/**
 * 我的收藏页面相关常量配置
 */

// 我的收藏页面配置
export const MY_COLLECTIONS_CONFIG = {
  title: '我的收藏',
  recordsText: '条记录',
  emptyTitle: '暂无收藏的职位',
  emptyDesc: '去发现更多心仪职位吧',
  jobListButtonText: '去找工作',
  loadMoreText: '加载更多',
  loadingText: '加载中...',
  allLoadedText: '已显示全部收藏',
  applyButtonText: '申请',
  unCollectText: '取消收藏',
  unCollectConfirm: '确定要取消收藏吗？',
}

// 模拟收藏数据
export const MOCK_COLLECTION_DATA = [
  {
    id: '1',
    jobTitle: '儿童剧表演演员',
    companyName: 'XX舞蹈机构',
    location: '广州',
    salary: '6000-8000/月',
    tags: ['急招'],
    collectionTime: '2023.04.29',
    jobType: '全职',
    experience: '1-3年',
    education: '大专',
    description: '负责儿童剧表演，要求有舞台表演经验',
    benefits: ['五险一金', '双休', '年终奖'],
    companySize: '50-200人',
    companyType: '民营企业',
  },
  {
    id: '2',
    jobTitle: '北京现代舞团',
    companyName: 'XX舞蹈机构',
    location: '广州',
    salary: '8000-12000/月',
    tags: ['企业'],
    collectionTime: '2023.04.29',
    jobType: '全职',
    experience: '3-5年',
    education: '本科',
    description: '现代舞演员，要求有专业舞蹈功底',
    benefits: ['五险一金', '双休', '包住'],
    companySize: '200-500人',
    companyType: '国有企业',
  },
  {
    id: '3',
    jobTitle: '音乐剧演员',
    companyName: '梦想音乐剧团',
    location: '上海',
    salary: '10000-15000/月',
    tags: ['急招', '五险一金'],
    collectionTime: '2023.04.28',
    jobType: '全职',
    experience: '2-4年',
    education: '本科',
    description: '音乐剧主要演员，要求声乐和表演功底扎实',
    benefits: ['五险一金', '双休', '年终奖', '带薪年假'],
    companySize: '100-300人',
    companyType: '民营企业',
  },
  {
    id: '4',
    jobTitle: '芭蕾舞演员',
    companyName: '国家芭蕾舞团',
    location: '北京',
    salary: '12000-18000/月',
    tags: ['企业', '双休'],
    collectionTime: '2023.04.27',
    jobType: '全职',
    experience: '3-8年',
    education: '本科',
    description: '古典芭蕾和现代芭蕾演员，要求专业院校毕业',
    benefits: ['五险一金', '双休', '年终奖', '职业培训'],
    companySize: '500+人',
    companyType: '事业单位',
  },
  {
    id: '5',
    jobTitle: '戏曲演员',
    companyName: '京剧院',
    location: '北京',
    salary: '8000-14000/月',
    tags: ['包住', '年终奖'],
    collectionTime: '2023.04.26',
    jobType: '全职',
    experience: '2-6年',
    education: '中专',
    description: '京剧表演，要求有扎实的戏曲功底',
    benefits: ['五险一金', '包住', '年终奖'],
    companySize: '200-400人',
    companyType: '事业单位',
  },
  {
    id: '6',
    jobTitle: '话剧演员',
    companyName: '人民艺术剧院',
    location: '北京',
    salary: '9000-16000/月',
    tags: ['企业', '五险一金'],
    collectionTime: '2023.04.25',
    jobType: '全职',
    experience: '1-5年',
    education: '本科',
    description: '话剧表演，要求台词功底扎实，形象气质佳',
    benefits: ['五险一金', '双休', '年终奖', '职业培训'],
    companySize: '300-500人',
    companyType: '事业单位',
  },
  {
    id: '7',
    jobTitle: '街舞老师',
    companyName: '潮流舞蹈工作室',
    location: '深圳',
    salary: '7000-12000/月',
    tags: ['急招', '双休'],
    collectionTime: '2023.04.24',
    jobType: '全职',
    experience: '1-3年',
    education: '高中',
    description: '街舞教学，要求有丰富的教学经验',
    benefits: ['五险一金', '双休', '包住'],
    companySize: '20-50人',
    companyType: '民营企业',
  },
  {
    id: '8',
    jobTitle: '声乐老师',
    companyName: '音乐培训中心',
    location: '杭州',
    salary: '8000-15000/月',
    tags: ['年终奖', '包住'],
    collectionTime: '2023.04.23',
    jobType: '全职',
    experience: '2-5年',
    education: '本科',
    description: '声乐教学，要求音乐学院毕业，有教学经验',
    benefits: ['五险一金', '年终奖', '包住', '职业培训'],
    companySize: '50-100人',
    companyType: '民营企业',
  },
]

// 职位标签配置
export const JOB_TAGS = {
  urgent: ['急招', '紧急'],
  type: ['企业', '机构', '工作室'],
  benefits: ['五险一金', '双休', '包住', '包吃', '年终奖', '带薪年假'],
  level: ['初级', '中级', '高级', '资深'],
}

// 收藏状态
export const COLLECTION_STATUS = {
  COLLECTED: 'collected',
  UNCOLLECTED: 'uncollected',
}

// 职位类型
export const JOB_TYPES = [
  { key: 'fulltime', label: '全职' },
  { key: 'parttime', label: '兼职' },
  { key: 'internship', label: '实习' },
  { key: 'freelance', label: '自由职业' },
]

// 经验要求
export const EXPERIENCE_LEVELS = [
  { key: 'fresh', label: '应届生' },
  { key: '1-3', label: '1-3年' },
  { key: '3-5', label: '3-5年' },
  { key: '5-10', label: '5-10年' },
  { key: '10+', label: '10年以上' },
]

// 学历要求
export const EDUCATION_LEVELS = [
  { key: 'junior', label: '初中' },
  { key: 'senior', label: '高中' },
  { key: 'technical', label: '中专' },
  { key: 'college', label: '大专' },
  { key: 'bachelor', label: '本科' },
  { key: 'master', label: '硕士' },
  { key: 'doctor', label: '博士' },
]

// 公司规模
export const COMPANY_SIZES = [
  { key: 'small', label: '20人以下' },
  { key: 'medium-small', label: '20-50人' },
  { key: 'medium', label: '50-200人' },
  { key: 'medium-large', label: '200-500人' },
  { key: 'large', label: '500+人' },
]

// 公司类型
export const COMPANY_TYPES = [
  { key: 'private', label: '民营企业' },
  { key: 'state', label: '国有企业' },
  { key: 'foreign', label: '外资企业' },
  { key: 'institution', label: '事业单位' },
  { key: 'government', label: '政府机关' },
]

// 排序方式
export const COLLECTION_SORT_OPTIONS = [
  { key: 'collectionTime', label: '收藏时间' },
  { key: 'salary', label: '薪资水平' },
  { key: 'jobTitle', label: '职位名称' },
]

// 筛选选项
export const COLLECTION_FILTER_OPTIONS = {
  jobType: JOB_TYPES,
  experience: EXPERIENCE_LEVELS,
  education: EDUCATION_LEVELS,
  companySize: COMPANY_SIZES,
  companyType: COMPANY_TYPES,
}

// 收藏相关的操作
export const COLLECTION_ACTIONS = {
  COLLECT: 'collect',
  UNCOLLECT: 'uncollect',
  APPLY: 'apply',
  VIEW_DETAIL: 'view_detail',
  SHARE: 'share',
}

// 收藏职位数据接口
export interface CollectionJob {
  id: string
  jobTitle: string
  companyName: string
  location: string
  salary: string
  tags: string[]
  collectionTime: string
  jobType: string
  experience: string
  education: string
  description: string
  benefits: string[]
  companySize: string
  companyType: string
}
