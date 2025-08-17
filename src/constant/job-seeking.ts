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
