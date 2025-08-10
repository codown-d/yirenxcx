/**
 * 招聘相关常量数据
 */

// 招聘职位类型
export interface JobPosition {
  id: string
  title: string
  company: string
  salary: string
  location: string
  tags: string[]
  isUrgent?: boolean
  publishTime: string
  description?: string
  requirements?: string[]
  benefits?: string[]
  experience?: string
  education?: string
  workTime?: string
  positionSituation: string
}

// 筛选标签类型
export interface FilterTag {
  id: string
  label: string
  type: 'stage' | 'industry' | 'location' | 'salary'
  url: string
  urlh: string
}

// 筛选标签数据
export const FILTER_TAGS: FilterTag[] = [
  {
    id: 'all',
    label: '前台',
    type: 'stage',
    url: '/static/images/taiqian.svg',
    urlh: '/static/images/taiqianh.svg',
  },
  {
    id: 'intern',
    label: '幕后',
    type: 'stage',
    url: '/static/images/mohou.svg',
    urlh: '/static/images/mohouh.svg',
  },
  {
    id: 'fresh',
    label: '运营',
    type: 'stage',
    url: '/static/images/yunying.svg',
    urlh: '/static/images/yunyingh.svg',
  },
]

// 招聘职位数据
export const JOB_POSITIONS: JobPosition[] = [
  {
    id: '1',
    title: '儿童剧表演演员',
    company: 'XX儿童剧团',
    salary: '6000-8000/月',
    location: '广州',
    tags: ['表演专业', '两年内到岗', '双休', '儿童剧', '轻松愉快'],
    isUrgent: true,
    publishTime: '3天前',
    description: '招聘儿童表演演员，要求喜欢孩子，表演生动',
    requirements: ['表演专业毕业或有相关经验', '喜欢与儿童互动', '形象气质佳', '有责任心和耐心'],
    benefits: ['双休', '五险一金', '年终奖', '培训机会'],
    experience: '1-3年',
    education: '大专',
    workTime: '周一至周五',
    positionSituation: '立即到岗',
  },
  {
    id: '2',
    title: '儿童剧表演演员',
    company: 'XX儿童剧团',
    salary: '6000-8000/月',
    location: '广州',
    tags: ['表演专业', '两年内到岗', '双休', '儿童剧', '轻松愉快'],
    isUrgent: true,
    publishTime: '3天前',
    description: '招聘儿童表演演员，要求喜欢孩子，表演生动',
    requirements: ['表演专业毕业或有相关经验', '喜欢与儿童互动', '形象气质佳', '有责任心和耐心'],
    benefits: ['双休', '五险一金', '年终奖', '培训机会'],
    experience: '1-3年',
    education: '大专',
    workTime: '周一至周五',
    positionSituation: '立即到岗',
  },
  {
    id: '3',
    title: '儿童剧表演演员',
    company: 'XX儿童剧团',
    salary: '6000-8000/月',
    location: '广州',
    tags: ['表演专业', '两年内到岗', '双休', '儿童剧', '轻松愉快'],
    publishTime: '3天前',
    description: '招聘儿童表演演员，要求喜欢孩子，表演生动',
    requirements: ['表演专业毕业或有相关经验', '喜欢与儿童互动', '形象气质佳', '有责任心和耐心'],
    benefits: ['双休', '五险一金', '年终奖', '培训机会'],
    experience: '1-3年',
    education: '大专',
    workTime: '周一至周五',
    positionSituation: '立即到岗',
  },
  {
    id: '4',
    title: '幼儿园老师',
    company: '阳光幼儿园',
    salary: '5000-7000/月',
    location: '深圳',
    tags: ['学前教育', '有经验优先', '双休', '爱心', '耐心'],
    publishTime: '1天前',
    description: '招聘有爱心的幼儿园老师，负责3-6岁儿童教育',
    requirements: ['学前教育专业', '有教师资格证', '热爱儿童教育事业', '普通话标准'],
    benefits: ['双休', '五险一金', '带薪年假', '节日福利'],
    experience: '1-3年',
    education: '大专',
    workTime: '周一至周五',
    positionSituation: '立即到岗',
  },
  {
    id: '5',
    title: '舞蹈老师',
    company: '艺术培训中心',
    salary: '8000-12000/月',
    location: '上海',
    tags: ['舞蹈专业', '教学经验', '周末双休', '才艺展示'],
    publishTime: '2天前',
    description: '招聘专业舞蹈老师，教授少儿舞蹈课程',
    requirements: ['舞蹈专业毕业', '有少儿舞蹈教学经验', '形象气质佳', '沟通能力强'],
    benefits: ['高薪', '双休', '提成奖励', '培训机会'],
    experience: '1-3年',
    education: '大专',
    workTime: '周一至周五',
    positionSituation: '立即到岗',
  },
]

// 搜索热门关键词
export const HOT_SEARCH_KEYWORDS = [
  '表演',
  '儿童剧',
  '幼师',
  '舞蹈老师',
  '音乐老师',
  '美术老师',
  '英语老师',
  '体育老师',
]
