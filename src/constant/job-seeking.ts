/**
 * 求职相关常量数据
 */

// 求职者信息类型
export interface JobSeeker {
  id: string
  name: string
  avatar: string
  age: number
  profession: string
  experience: string
  tags: string[]
  isVerified?: boolean
  isVip?: boolean
  publishTime: string
  description?: string
  skills?: string[]
  education?: string
  phone?: string
  location?: string
  expectedSalary?: string
  workType?: string
  availability?: string
  school?: string
  major?: string
  graduationTime?: string
  portfolio?: string[]
  works?: WorkItem[]
}

// 作品项目类型
export interface WorkItem {
  id: string
  title: string
  role?: string
  description?: string
  year?: string
}

// 求职筛选标签类型
export interface JobSeekerFilterTag {
  id: string
  label: string
  type: 'profession' | 'experience' | 'location' | 'salary' | 'workType'
}

// 求职筛选标签数据
export const JOB_SEEKER_FILTER_TAGS: JobSeekerFilterTag[] = [
  { id: 'all', label: '全部', type: 'profession' },
  { id: 'performer', label: '表演', type: 'profession' },
  { id: 'teacher', label: '教师', type: 'profession' },
  { id: 'dance', label: '舞蹈', type: 'profession' },
  { id: 'music', label: '音乐', type: 'profession' },
  { id: 'art', label: '美术', type: 'profession' },
]

// 求职者数据
export const JOB_SEEKERS: JobSeeker[] = [
  {
    id: '1',
    name: '王智强',
    avatar: '/static/images/avatar1.png',
    age: 28,
    profession: '艺术创作类',
    experience: '5年',
    tags: ['获奖演员', '全职可用', '档期充足'],
    isVerified: true,
    isVip: false,
    publishTime: '3天前',
    description:
      '资深话剧演员，台词功底扎实，表演经验丰富。曾获得多个戏剧奖项。我是一名专业的话剧演员，毕业于北京舞蹈学院，有着扎实的表演功底和丰富的舞台经验。擅长各种类型的角色塑造，能够快速进入角色状态，具有良好的团队合作精神。希望能够在更大的舞台上展现自己的才华。',
    skills: ['话剧表演', '台词功底', '形体表演', '即兴表演'],
    education: '北京舞蹈学院-舞蹈表演专业',
    phone: '138****8888',
    location: '北京市朝阳区',
    expectedSalary: '8000-12000/月',
    workType: '全职',
    availability: '随时到岗',
    school: '北京舞蹈学院',
    major: '本科 • 舞蹈表演专业',
    graduationTime: '2015.09 - 2019.06',
    portfolio: [
      '/static/images/portfolio1.jpg',
      '/static/images/portfolio2.jpg',
      '/static/images/portfolio3.jpg',
    ],
    works: [
      { id: '1', title: '《雷雨》', role: '主要演员', year: '2023' },
      { id: '2', title: '《茶馆》', role: '配角', year: '2022' },
    ],
  },
  {
    id: '2',
    name: '李美丽',
    avatar: '/static/images/avatar2.png',
    age: 25,
    profession: '舞蹈表演',
    experience: '3年',
    tags: ['专业舞者', '形象佳', '可出差'],
    isVerified: true,
    isVip: true,
    publishTime: '1天前',
    description:
      '专业舞蹈演员，擅长现代舞、民族舞，形象气质佳，有丰富的舞台表演经验。毕业于中央音乐学院舞蹈系，具备扎实的舞蹈基本功和良好的艺术修养。曾参与多部大型舞剧的演出，具有丰富的舞台经验和良好的团队协作能力。',
    skills: ['现代舞', '民族舞', '芭蕾基础', '编舞'],
    education: '中央音乐学院-舞蹈表演专业',
    phone: '139****9999',
    location: '上海市徐汇区',
    expectedSalary: '6000-10000/月',
    workType: '全职/兼职',
    availability: '一周内到岗',
    school: '中央音乐学院',
    major: '本科 • 舞蹈表演专业',
    graduationTime: '2018.09 - 2022.06',
    portfolio: [
      '/static/images/dance1.jpg',
      '/static/images/dance2.jpg',
      '/static/images/dance3.jpg',
      '/static/images/dance4.jpg',
    ],
    works: [
      { id: '1', title: '《丝路花雨》', role: '主要舞者', year: '2023' },
      { id: '2', title: '《孔雀》', role: '独舞', year: '2022' },
    ],
  },
  {
    id: '3',
    name: '张小明',
    avatar: '/static/images/avatar3.png',
    age: 22,
    profession: '音乐表演',
    experience: '1年',
    tags: ['应届毕业', '钢琴十级', '声乐专业'],
    isVerified: false,
    isVip: false,
    publishTime: '5天前',
    description: '音乐学院应届毕业生，钢琴十级，声乐专业，有良好的音乐素养和表演能力。',
    skills: ['钢琴演奏', '声乐演唱', '音乐理论', '合唱指挥'],
    education: '上海音乐学院-音乐表演专业',
    phone: '137****7777',
    location: '上海',
    expectedSalary: '4000-6000/月',
    workType: '全职',
    availability: '随时到岗',
  },
  {
    id: '4',
    name: '陈艺术',
    avatar: '/static/images/avatar4.png',
    age: 30,
    profession: '美术教师',
    experience: '8年',
    tags: ['教学经验', '美术功底', '耐心负责'],
    isVerified: true,
    isVip: false,
    publishTime: '2天前',
    description: '资深美术教师，有丰富的少儿美术教学经验，擅长创薏美术和手工制作。',
    skills: ['素描', '水彩', '创薏美术', '手工制作'],
    education: '中央美术学院-美术教育专业',
    phone: '136****6666',
    location: '北京',
    expectedSalary: '7000-9000/月',
    workType: '全职',
    availability: '一个月内到岗',
  },
  {
    id: '5',
    name: '刘舞蹈',
    avatar: '/static/images/avatar5.png',
    age: 26,
    profession: '舞蹈教师',
    experience: '4年',
    tags: ['少儿舞蹈', '考级教师', '活泼开朗'],
    isVerified: true,
    isVip: true,
    publishTime: '6天前',
    description: '专业少儿舞蹈教师，持有舞蹈考级教师资格证，擅长与孩子沟通。',
    skills: ['少儿舞蹈', '舞蹈考级', '基本功训练', '舞蹈编排'],
    education: '北京舞蹈学院-舞蹈教育专业',
    phone: '135****5555',
    location: '广州',
    expectedSalary: '6000-8000/月',
    workType: '全职/兼职',
    availability: '两周内到岗',
  },
]

// 求职热门关键词
export const JOB_SEEKING_HOT_KEYWORDS = [
  '表演演员',
  '舞蹈老师',
  '音乐老师',
  '美术老师',
  '幼儿教师',
  '艺术培训',
  '儿童剧',
  '话剧演员',
]

// 专业类别
export const PROFESSION_CATEGORIES = [
  { id: 'performance', label: '表演类', icon: '🎭' },
  { id: 'dance', label: '舞蹈类', icon: '💃' },
  { id: 'music', label: '音乐类', icon: '🎵' },
  { id: 'art', label: '美术类', icon: '🎨' },
  { id: 'education', label: '教育类', icon: '📚' },
  { id: 'media', label: '传媒类', icon: '📺' },
]

// 工作类型
export const WORK_TYPES = [
  { id: 'fulltime', label: '全职' },
  { id: 'parttime', label: '兼职' },
  { id: 'freelance', label: '自由职业' },
  { id: 'internship', label: '实习' },
]

// 经验要求
export const EXPERIENCE_LEVELS = [
  { id: 'fresh', label: '应届毕业' },
  { id: '1-3', label: '1-3年' },
  { id: '3-5', label: '3-5年' },
  { id: '5-10', label: '5-10年' },
  { id: '10+', label: '10年以上' },
]
