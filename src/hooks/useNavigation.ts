import { pages, subPackages } from '@/pages.json'
export const useNavigation = () => {
  const newSubPackages = subPackages.flatMap((item) =>
    item.pages.map((page) => ({
      ...page,
      path: `${item.root}/${page.path}`,
    })),
  )
  const currentPage = getCurrentPages()
  const cur = currentPage.at(-1)
  const getCurrentPage = (): any => {
    const node = [...pages, ...newSubPackages].filter((item) => item.path === cur.route)
    return node?.[0]
  }
  return {
    title: getCurrentPage().style.navigationBarTitleText,
    getCurrentPage,
  }
}
