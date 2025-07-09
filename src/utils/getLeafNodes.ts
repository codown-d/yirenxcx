interface TreeNodeBase {
  label?: string
  value?: string
  title?: string // 中间层可能是 title
  items?: TreeNode[] // 可选 children
}

export type TreeNode = TreeNodeBase
export function getLeafNodes(data: TreeNode[]) {
  const leafNodes: any[] = []

  function traverse(nodes: any[]) {
    for (const node of nodes) {
      if (Array.isArray(node.items) && node.items.length > 0) {
        traverse(node.items) // 继续深入
      } else {
        leafNodes.push(node) // 最末层
      }
    }
  }

  traverse(data)
  return leafNodes
}
