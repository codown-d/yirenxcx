type CategoryNode = {
  name: string
  categories: {
    name: string
    children: string[]
  }[]
}

type PostColumnsMap = Record<string, { label: string; value: string }[]>

export function generatePostColumns(data: CategoryNode[]): PostColumnsMap {
  const postColumns: PostColumnsMap = {}
  const level0Key = '0'

  // 一级分类
  postColumns[level0Key] = data.map((item, i0) => ({
    label: item.name,
    value: `${level0Key}/${i0}`,
  }))

  data.forEach((item0, i0) => {
    const level1Key = `${level0Key}/${i0}`

    // 二级分类
    postColumns[level1Key] = item0.categories.map((item1, i1) => ({
      label: item1.name,
      value: `${level1Key}/${i1}`,
    }))

    item0.categories.forEach((item1, i1) => {
      const level2Key = `${level1Key}/${i1}`

      // 三级分类
      postColumns[level2Key] = item1.children.map((child, i2) => ({
        label: child,
        value: `${level2Key}/${i2}`,
      }))
    })
  })

  return postColumns
}
