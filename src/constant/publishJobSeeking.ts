import { generatePostColumns } from '@/utils/generatePostColumns'

export const ALL_CATEGORIES_DISPLAY = [
  {
    name: '台前',
    categories: [
      {
        name: '演员',
        children: ['舞蹈类', '表演类', '武术类', '杂技类', '音乐类', '模特类'],
      },
      {
        name: '主持/互动',
        children: ['驻场主持人', '角色扮演互动员', '古装NPC'],
      },
    ],
  },
  {
    name: '幕后',
    categories: [
      {
        name: '艺术创作',
        children: [
          '导演',
          '分幕编剧',
          '舞蹈编排师',
          '服装设计师',
          '道具造型师',
          '舞美设计师',
          '特效设计师',
        ],
      },
      {
        name: '技术制作',
        children: [
          '灯光控制师',
          '音响工程师',
          '舞台机械操作员',
          '焰火控制员',
          '水景特效师',
          '多媒体投影师',
          '道具制作师',
          '武器维护员',
          '动物演员驯导师',
        ],
      },
      {
        name: '支持保障',
        children: ['舞台监督', '演出场记', '替补演员'],
      },
    ],
  },
  {
    name: '运营',
    categories: [
      {
        name: '游客服务',
        children: ['票务', '接待', '客户服务'],
      },
      {
        name: '安全管理',
        children: ['紧急救护员', '设备安全检查员'],
      },
      {
        name: '市场营销',
        children: ['宣传策划', '新媒体运营', '票务渠道营销'],
      },
      {
        name: '综合支持',
        children: ['产品开发', '广告招商', '数据运营', '人力资源', '后勤', '工程维修'],
      },
    ],
  },
]
export const postColumns = generatePostColumns(ALL_CATEGORIES_DISPLAY)
// 选择器数据
export const salaryColumns = [
  { label: '3-5K', value: '3000-5000' },
  { label: '5-8K', value: '5000-8000' },
  { label: '8-10K', value: '8000-10000' },
  { label: '10K以上', value: '10000-999999999' },
  { label: '面议', value: '' },
]

export const salaryColumns2 = [
  { label: '3-5K', value: '3-5' },
  { label: '5-8K', value: '5-8' },
  { label: '8-10K', value: '8-10' },
  { label: '10K以上', value: '10-9999' },
  { label: '面议', value: '' },
]

export const jobTypeColumns = [
  { label: '全职', value: '全职' },
  { label: '兼职', value: '兼职' },
  { label: '实习', value: '实习' },
  { label: '临时', value: '临时' },
]

export const availableTimeColumns = [
  { label: '随时到岗', value: '随时到岗' },
  { label: '一周内到岗', value: '一周内到岗' },
  { label: '一个月内到岗', value: '一个月内到岗' },
  { label: '三个月内到岗', value: '三个月内到岗' },
]

export const experienceColumns = [
  { label: '应届生', value: '应届生' },
  { label: '1年以下', value: '1年以下' },
  { label: '1-3年', value: '1-3年' },
  { label: '3-5年', value: '3-5年' },
  { label: '5年以上', value: '5年以上' },
]

export const educationColumns = [
  { label: '高中', value: '高中' },
  { label: '大专', value: '大专' },
  { label: '本科', value: '本科' },
  { label: '硕士', value: '硕士' },
  { label: '博士', value: '博士' },
]
export const salaryOptions = [
  { label: '不限', value: '不限' },
  { label: '全职', value: '全职' },
  { label: '兼职', value: '兼职' },
  { label: '临时', value: '临时' },
  { label: '合同制', value: '合同制' },
]
export const benefitsOptions = [
  { label: '五险一金', value: '五险一金' },
  { label: '工作补贴', value: '工作补贴' },
  { label: '提供宿舍', value: '提供宿舍' },
  { label: '培训机会', value: '培训机会' },
  { label: '国内出差', value: '国内出差' },
  { label: '国际出差', value: '国际出差' },
  { label: '项目奖金', value: '项目奖金' },
  { label: '灵活工作', value: '灵活工作' },
]

// 专业技能选项
export const skillActions = [
  { label: '古典舞', value: '古典舞' },
  { label: '民族舞', value: '民族舞' },
  { label: '芭蕾舞', value: '芭蕾舞' },
  { label: '现代舞', value: '现代舞' },
  { label: '街舞', value: '街舞' },
  { label: '拉丁舞', value: '拉丁舞' },
  { label: '爵士舞', value: '爵士舞' },
  { label: '声乐', value: '声乐' },
  { label: '器乐', value: '器乐' },
  { label: '表演', value: '表演' },
]

// 个人优势选项
export const advantageActions = [
  { label: '形象气质佳', value: '形象气质佳' },
  { label: '舞台经验丰富', value: '舞台经验丰富' },
  { label: '专业技能过硬', value: '专业技能过硬' },
  { label: '学习能力强', value: '学习能力强' },
  { label: '团队协作能力强', value: '团队协作能力强' },
  { label: '抗压能力强', value: '抗压能力强' },
]
