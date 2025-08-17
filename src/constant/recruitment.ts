// 筛选标签类型
export interface FilterTag {
  id: string
  label: string
  value: string
  url: string
  urlh: string
}

// 筛选标签数据
export const FILTER_TAGS: FilterTag[] = [
  {
    id: 'all',
    label: '前台',
    value: '前台',
    url: '/static/images/taiqian.svg',
    urlh: '/static/images/taiqianh.svg',
  },
  {
    id: 'intern',
    label: '幕后',
    value: '幕后',
    url: '/static/images/muhou.svg',
    urlh: '/static/images/muhouh.svg',
  },
  {
    id: 'fresh',
    label: '运营',
    value: '运营',
    url: '/static/images/yunying.svg',
    urlh: '/static/images/yunyingh.svg',
  },
]
