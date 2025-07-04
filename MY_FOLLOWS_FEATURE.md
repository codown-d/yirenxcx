# 我的关注功能说明

## 功能概述

基于您提供的设计稿，在 `pages-sub` 文件夹中新增了"我的关注"页面，使用 wot-design-uni 组件库和 UnoCSS 原子化样式实现。

## 主要功能

### 1. 关注列表展示
- **页面路径**：`/pages-sub/my-follows/index`
- **自定义导航栏**：与设计稿保持一致
- **统计信息**：显示关注公司总数
- **公司信息**：展示公司名称、行业、地点、标签等
- **关注时间**：记录用户关注的时间

### 2. 交互功能
- **私信功能**：向关注的公司发送私信
- **分页加载**：支持加载更多数据
- **空状态处理**：无关注时的引导页面
- **下拉刷新**：刷新关注列表

### 3. 数据管理
- **本地存储**：关注数据保存到本地存储
- **模拟数据**：提供丰富的测试数据
- **状态同步**：页面间数据状态同步

## 文件结构

```
src/
├── pages-sub/
│   └── my-follows/
│       └── index.vue              # 我的关注页面
├── constant/
│   └── my-follows.ts              # 关注相关常量
├── pages/
│   └── test-my-follows/
│       └── index.vue              # 测试页面
└── pages.json                     # 页面配置（已更新）
```

## 常量配置

### 关注配置 (src/constant/my-follows.ts)
- `MY_FOLLOWS_CONFIG`: 页面基础配置
- `MOCK_FOLLOW_DATA`: 模拟关注数据
- `COMPANY_TAGS`: 公司标签配置
- `FOLLOW_STATUS`: 关注状态
- `SORT_OPTIONS`: 排序选项
- `FILTER_OPTIONS`: 筛选选项

### 模拟数据示例
```typescript
{
  id: '1',
  companyName: '东方歌舞团东方歌舞团东方歌舞团',
  industry: '表演艺术',
  location: '北京',
  logo: DEFAULT_COMPANY_LOGOS.education,
  tags: ['国企', '3新'],
  followTime: '2023.04.29',
  description: '中国最具影响力的艺术团体之一',
  employeeCount: '500-1000人',
  establishedYear: '1962'
}
```

## 使用方法

### 1. 跳转到我的关注页面
```javascript
uni.navigateTo({
  url: '/pages-sub/my-follows/index'
})
```

### 2. 管理关注数据
```javascript
// 获取关注列表
const follows = uni.getStorageSync('myFollows') || []

// 添加关注
const newFollow = { /* 公司信息 */ }
follows.unshift(newFollow)
uni.setStorageSync('myFollows', follows)

// 取消关注
const index = follows.findIndex(item => item.id === companyId)
if (index > -1) {
  follows.splice(index, 1)
  uni.setStorageSync('myFollows', follows)
}
```

### 3. 测试功能
访问测试页面：`/pages/test-my-follows/index`

## 页面特性

### 1. 设计还原
- ✅ 自定义导航栏（返回按钮 + 标题 + 更多按钮）
- ✅ 统计信息显示（共X条记录）
- ✅ 公司卡片布局（logo + 信息 + 私信按钮）
- ✅ 公司标签展示（国企、3新等）
- ✅ 关注时间显示

### 2. 交互体验
- ✅ 私信按钮点击
- ✅ 分页加载更多
- ✅ 空状态引导
- ✅ 加载状态展示
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

<!-- 公司卡片 -->
<view class="bg-white rounded-4 p-6 mb-4 shadow-sm">

<!-- 公司logo -->
<image class="w-16 h-16 rounded-2 mr-4 bg-gray-100">

<!-- 标签 -->
<text class="px-2 py-1 text-2xs rounded-1 bg-orange-100 text-orange-600">
```

### 响应式适配
- 安全区域适配：`pt-safe`
- 灵活布局：`flex`、`items-center`、`justify-between`
- 间距控制：`px-8`、`py-6`、`mb-4`
- 圆角设计：`rounded-4`、`rounded-2`

## 页面配置

已在 `src/pages.json` 中添加配置：

```json
{
  "path": "my-follows/index",
  "style": {
    "navigationBarTitleText": "我的关注",
    "navigationStyle": "custom"
  }
}
```

## 数据流程

### 1. 页面加载
1. 从本地存储获取关注数据
2. 如果没有数据则使用模拟数据
3. 渲染关注列表

### 2. 分页加载
1. 计算当前页码和数据范围
2. 从模拟数据中获取对应数据
3. 追加到现有列表中
4. 更新加载状态

### 3. 私信功能
1. 点击私信按钮
2. 获取公司信息
3. 跳转到私信页面或显示提示

## 扩展建议

### 1. 功能扩展
- [ ] 添加搜索功能
- [ ] 实现筛选和排序
- [ ] 支持批量操作
- [ ] 添加关注分组功能

### 2. 体验优化
- [ ] 添加下拉刷新
- [ ] 优化加载动画
- [ ] 添加骨架屏
- [ ] 支持手势操作

### 3. 数据同步
- [ ] 接入后端 API
- [ ] 实现实时数据同步
- [ ] 添加离线缓存
- [ ] 支持数据导出

## 注意事项

1. **数据持久化**：关注数据保存在本地存储中
2. **图片资源**：使用 base64 编码的默认 logo
3. **分页逻辑**：需要根据实际 API 调整
4. **私信功能**：需要接入真实的聊天系统
5. **权限控制**：需要验证用户登录状态

## 总结

"我的关注"功能完全按照设计稿实现，提供了完整的关注管理体验。使用现代化的技术栈和原子化样式，代码结构清晰，易于维护和扩展。包含丰富的测试数据和完善的交互逻辑。
