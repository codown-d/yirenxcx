/**
 * 简历相关常量数据
 */

// 用户简历信息接口
export interface UserResumeInfo {
  id: string
  name: string
  age: number
  education: string
  phone: string
  email: string
  avatar: string
  introduction: string
  skills: string[]
  works: WorkItem[]
  showcase: ShowcaseItem[]
  jobIntention: JobIntention
  completeness: number
  status: 'draft' | 'published' | 'hidden'
  createdAt: string
  updatedAt: string
}

// 作品项目接口
export interface WorkItem {
  id?: string
  title: string
  description: string
  type: 'performance' | 'competition' | 'training' | 'other'
  date?: string
  images?: string[]
  videos?: string[]
}

// 展示项目接口
export interface ShowcaseItem {
  id?: string
  title: string
  count: string
  description: string
  photos: ShowcasePhoto[]
  category: 'personal' | 'stage' | 'training' | 'award'
}

export enum ShowcasePhotoEmu {
  Image = 'Image',
  Video = 'Video',
  Add = 'Add',
}
// 展示照片接口
export interface ShowcasePhoto {
  type: ShowcasePhotoEmu
  url: string
  thumbnail?: string
  description?: string
}

// 求职薏向接口
export interface JobIntention {
  position: string
  salary: string
  location: string
  workType: 'full-time' | 'part-time' | 'internship' | 'freelance'
  startDate?: string
}

// 技能分类
export const SKILL_CATEGORIES = [
  {
    id: 'dance',
    label: '舞蹈类型',
    skills: ['古典舞', '民族舞', '芭蕾', '现代舞', '爵士舞', '拉丁舞'],
  },
  { id: 'music', label: '音乐技能', skills: ['声乐', '钢琴', '古筝', '二胡', '小提琴', '吉他'] },
  {
    id: 'performance',
    label: '表演技能',
    skills: ['话剧', '音乐剧', '相声', '小品', '主持', '配音'],
  },
  { id: 'language', label: '语言能力', skills: ['普通话', '英语', '日语', '韩语', '法语', '德语'] },
  {
    id: 'other',
    label: '其他技能',
    skills: ['编舞', '教学', '化妆', '服装设计', '摄影', '视频剪辑'],
  },
]

// 教育背景选项
export const EDUCATION_OPTIONS = [
  '高中及以下',
  '中专/技校',
  '大专',
  '本科',
  '硕士',
  '博士',
  '艺术院校',
  '音乐学院',
  '舞蹈学院',
  '戏剧学院',
]

// 工作经验选项
export const EXPERIENCE_OPTIONS = ['无经验', '1年以下', '1-3年', '3-5年', '5-10年', '10年以上']

// 薪资范围选项
export const SALARY_RANGES = [
  '3000以下',
  '3000-5000',
  '5000-8000',
  '8000-12000',
  '12000-20000',
  '20000-30000',
  '30000以上',
  '面议',
]

// 工作类型选项
export const WORK_TYPES = [
  { value: 'full-time', label: '全职' },
  { value: 'part-time', label: '兼职' },
  { value: 'internship', label: '实习' },
  { value: 'freelance', label: '自由职业' },
]

// 城市选项（主要艺术类工作城市）
export const CITY_OPTIONS = [
  '北京市',
  '上海市',
  '广州市',
  '深圳市',
  '杭州市',
  '南京市',
  '成都市',
  '西安市',
  '武汉市',
  '重庆市',
  '天津市',
  '苏州市',
  '长沙市',
  '青岛市',
  '大连市',
]

// 默认简历数据
export const DEFAULT_RESUME_DATA: UserResumeInfo = {
  id: '',
  name: '',
  age: 20,
  education: '本科',
  phone: '',
  email: '',
  avatar: '/static/images/default-avatar.png',
  introduction: '',
  skills: [],
  works: [],
  showcase: [
    {
      title: '个人展示项目',
      count: '0个',
      description: '展示个人作品和表演片段',
      photos: [{ type: 'add', url: '' }],
      category: 'personal',
    },
  ],
  jobIntention: {
    position: '',
    salary: '面议',
    location: '北京市',
    workType: 'full-time',
  },
  completeness: 0,
  status: 'draft',
  createdAt: '',
  updatedAt: '',
}

// 简历模板类型
export const RESUME_TEMPLATES = [
  {
    id: 'classic',
    name: '经典模板',
    description: '简洁大方，适合各类职位',
    preview: '/static/images/template-classic.jpg',
  },
  {
    id: 'creative',
    name: '创薏模板',
    description: '设计感强，适合艺术类职位',
    preview: '/static/images/template-creative.jpg',
  },
  {
    id: 'professional',
    name: '专业模板',
    description: '正式严谨，适合管理类职位',
    preview: '/static/images/template-professional.jpg',
  },
]

// 简历状态选项
export const RESUME_STATUS_OPTIONS = [
  { value: 'draft', label: '草稿', color: '#999' },
  { value: 'published', label: '已发布', color: '#52c41a' },
  { value: 'hidden', label: '已隐藏', color: '#faad14' },
]
export const categoryActions = [
  { label: '作品展示', value: '作品展示' },
  { label: '技巧分享', value: '技巧分享' },
  { label: '招聘信息', value: '招聘信息' },
  { label: '生活日常', value: '生活日常' },
  { label: '经验交流', value: '经验交流' },
]

export const visibilityActions = [
  { label: '公开所有人可见', value: '公开所有人可见' },
  { label: '仅关注我的人可见', value: '仅关注我的人可见' },
  { label: '仅自己可见', value: '仅自己可见' },
]
// 可选数据
export const availableTopics = ref([
  '舞蹈技巧',
  '招聘信息',
  '武术交流',
  '音乐分享',
  '表演心得',
  '服装搭配',
  '化妆技巧',
  '健身训练',
  '生活日常',
  '工作感悟',
])

export const availableMoods = ref([
  '开心',
  '兴奋',
  '平静',
  '感动',
  '思考',
  '期待',
  '满足',
  '放松',
  '充实',
  '感恩',
])
