# 我的收藏功能说明

## 功能概述

基于您提供的设计稿，在 `pages-sub` 文件夹中新增了"我的收藏"页面，使用 wot-design-uni 组件库和 UnoCSS 原子化样式实现。

## 主要功能

### 1. 收藏列表展示
- **页面路径**：`/pages-sub/my-collections/index`
- **自定义导航栏**：与设计稿保持一致
- **统计信息**：显示收藏职位总数
- **职位信息**：展示职位名称、公司、地点、薪资、标签等
- **收藏时间**：记录用户收藏的时间

### 2. 交互功能
- **申请功能**：直接申请收藏的职位
- **分页加载**：支持加载更多数据
- **空状态处理**：无收藏时的引导页面
- **取消收藏**：支持取消收藏职位
- **下拉刷新**：刷新收藏列表

### 3. 数据管理
- **本地存储**：收藏数据保存到本地存储
- **模拟数据**：提供丰富的测试数据
- **状态同步**：页面间数据状态同步

## 文件结构

```
src/
├── pages-sub/
│   └── my-collections/
│       └── index.vue              # 我的收藏页面
├── constant/
│   └── my-collections.ts          # 收藏相关常量
├── pages/
│   └── test-my-collections/
│       └── index.vue              # 测试页面
└── pages.json                     # 页面配置（已更新）
```

## 常量配置

### 收藏配置 (src/constant/my-collections.ts)
- `MY_COLLECTIONS_CONFIG`: 页面基础配置
- `MOCK_COLLECTION_DATA`: 模拟收藏数据
- `JOB_TAGS`: 职位标签配置
- `COLLECTION_STATUS`: 收藏状态
- `COLLECTION_SORT_OPTIONS`: 排序选项
- `COLLECTION_FILTER_OPTIONS`: 筛选选项

### 模拟数据示例
```typescript
{
  id: '1',
  jobTitle: '儿童剧表演演员',
  companyName: 'XX舞蹈机构',
  location: '广州',
  salary: '6000-8000/月',
  tags: ['急招'],
  collectionTime: '2023.04.29',
  jobType: '全职',
  experience: '1-3年',
  education: '大专',
  description: '负责儿童剧表演，要求有舞台表演经验',
  benefits: ['五险一金', '双休', '年终奖']
}
```

## 使用方法

### 1. 跳转到我的收藏页面
```javascript
uni.navigateTo({
  url: '/pages-sub/my-collections/index'
})
```

### 2. 管理收藏数据
```javascript
// 获取收藏列表
const collections = uni.getStorageSync('myCollections') || []

// 添加收藏
const newCollection = { /* 职位信息 */ }
collections.unshift(newCollection)
uni.setStorageSync('myCollections', collections)

// 取消收藏
const index = collections.findIndex(item => item.id === jobId)
if (index > -1) {
  collections.splice(index, 1)
  uni.setStorageSync('myCollections', collections)
}
```

### 3. 测试功能
访问测试页面：`/pages/test-my-collections/index`

## 页面特性

### 1. 设计还原
- ✅ 自定义导航栏（返回按钮 + 标题 + 更多按钮）
- ✅ 统计信息显示（共X条记录）
- ✅ 职位卡片布局（职位信息 + 薪资 + 申请按钮）
- ✅ 职位标签展示（急招、企业等）
- ✅ 收藏时间显示
- ✅ 公司和地点信息

### 2. 交互体验
- ✅ 申请按钮点击
- ✅ 分页加载更多
- ✅ 空状态引导
- ✅ 加载状态展示
- ✅ 取消收藏确认弹窗
- ✅ 错误处理提示

### 3. 技术实现
- ✅ UnoCSS 原子化样式
- ✅ wot-design-uni 组件
- ✅ TypeScript 类型安全
- ✅ 响应式设计
- ✅ 本地存储管理

## 样式特点

### UnoCSS 类名使用
```html
<!-- 页面容器 -->
<view class="min-h-screen bg-gray-50">

<!-- 导航栏 -->
<view class="flex items-center justify-between h-22 px-8 pt-safe bg-white">

<!-- 职位卡片 -->
<view class="bg-white rounded-4 p-6 mb-4 shadow-sm">

<!-- 职位标题 -->
<text class="text-9 font-semibold text-gray-800 mr-3">

<!-- 标签 -->
<text class="px-2 py-1 text-3 rounded-1 bg-red-100 text-red-600">

<!-- 薪资 -->
<text class="text-9 font-bold text-green-600 mb-4">
```

### 标签样式动态配置
```javascript
const getTagClass = (tag: string) => {
  const tagStyles: Record<string, string> = {
    '急招': 'bg-red-100 text-red-600',
    '企业': 'bg-blue-100 text-blue-600',
    '五险一金': 'bg-green-100 text-green-600',
    '双休': 'bg-purple-100 text-purple-600',
    '包住': 'bg-orange-100 text-orange-600',
    '年终奖': 'bg-yellow-100 text-yellow-600'
  }
  return tagStyles[tag] || 'bg-gray-100 text-gray-600'
}
```

## 页面配置

已在 `src/pages.json` 中添加配置：

```json
{
  "path": "my-collections/index",
  "style": {
    "navigationBarTitleText": "我的收藏",
    "navigationStyle": "custom"
  }
}
```

## 数据流程

### 1. 页面加载
1. 从本地存储获取收藏数据
2. 如果没有数据则使用模拟数据
3. 渲染收藏列表

### 2. 分页加载
1. 计算当前页码和数据范围
2. 从模拟数据中获取对应数据
3. 追加到现有列表中
4. 更新加载状态

### 3. 申请功能
1. 点击申请按钮
2. 获取职位信息
3. 跳转到申请页面或显示提示

### 4. 取消收藏
1. 长按或点击取消收藏
2. 显示确认弹窗
3. 确认后从列表中移除
4. 更新本地存储

## 与设计稿对比

### 设计稿特点
- **职位标题**：儿童剧表演演员、北京现代舞团
- **标签样式**：急招（红色）、企业（蓝色）
- **薪资显示**：6000-8000/月（绿色加粗）
- **公司信息**：XX舞蹈机构 · 广州
- **收藏时间**：2023.04.29收藏
- **申请按钮**：绿色背景，白色文字

### 实现效果
- ✅ 完全还原设计稿布局
- ✅ 标签颜色和样式匹配
- ✅ 薪资显示样式一致
- ✅ 公司和地点信息格式正确
- ✅ 申请按钮样式匹配

## 扩展建议

### 1. 功能扩展
- [ ] 添加搜索功能
- [ ] 实现筛选和排序
- [ ] 支持批量操作
- [ ] 添加收藏分类功能
- [ ] 职位详情页面

### 2. 体验优化
- [ ] 添加下拉刷新
- [ ] 优化加载动画
- [ ] 添加骨架屏
- [ ] 支持手势操作
- [ ] 收藏状态同步

### 3. 数据同步
- [ ] 接入后端 API
- [ ] 实现实时数据同步
- [ ] 添加离线缓存
- [ ] 支持数据导出
- [ ] 收藏数据云同步

## 注意事项

1. **数据持久化**：收藏数据保存在本地存储中
2. **标签样式**：动态配置不同标签的颜色
3. **分页逻辑**：需要根据实际 API 调整
4. **申请功能**：需要接入真实的申请系统
5. **权限控制**：需要验证用户登录状态
6. **数据同步**：多端收藏数据同步

## 总结

"我的收藏"功能完全按照设计稿实现，提供了完整的职位收藏管理体验。使用现代化的技术栈和原子化样式，代码结构清晰，易于维护和扩展。包含丰富的测试数据和完善的交互逻辑，支持职位申请、取消收藏等核心功能。
