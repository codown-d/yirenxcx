import { TreeNode } from '@/utils'

const getSubCategories = (type) =>
  Array.from({ length: 10 }, (_, index) => ({
    label: '标题文字',
    desc: '这是描述这是描述',
    value: `${type}_${index}`,
  }))

export const categories: TreeNode[] = [
  {
    label: '台前',
    value: 'tq',
    items: [
      { title: '演员', items: getSubCategories('tq_role') },
      { title: '主持/互动', items: getSubCategories('tq_zc') },
      { title: '主持/互动1', items: getSubCategories('tq_zc1') },
    ],
  },
  {
    label: '幕后',
    value: 'mh',
    items: [
      { title: '演员', items: getSubCategories('mh_role') },
      { title: '主持/互动', items: getSubCategories('mh_zc') },
    ],
  },
  {
    label: '运营',
    value: 'yy',
    items: [
      { title: '演员', items: getSubCategories('yy_role') },
      { title: '主持/互动', items: getSubCategories('yy_zc') },
    ],
  },
]
