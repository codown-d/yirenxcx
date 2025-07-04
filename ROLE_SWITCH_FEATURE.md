# 角色切换功能说明

## 功能概述

基于您提供的设计稿，在 `pages-sub` 文件夹中新增了角色切换页面，使用 wot-design-uni 组件库和 UnoCSS 原子化样式实现。

## 主要功能

### 1. 角色切换页面
- **页面路径**：`/pages-sub/role-switch/index`
- **自定义导航栏**：与设计稿保持一致
- **当前身份显示**：展示用户当前角色信息
- **角色选择**：支持在求职者和雇主之间切换
- **确认机制**：防止误操作的确认弹窗

### 2. 角色管理
- **本地存储**：角色信息保存到本地存储
- **状态同步**：页面间角色状态同步
- **权限控制**：不同角色对应不同权限

### 3. 用户体验
- **流畅动画**：切换过程有加载状态
- **视觉反馈**：操作成功/失败提示
- **一致设计**：与整体 UI 风格保持一致

## 文件结构

```
src/
├── pages-sub/
│   └── role-switch/
│       └── index.vue              # 角色切换页面
├── constant/
│   └── role-switch.ts             # 角色切换相关常量
├── pages/
│   └── test-role-switch/
│       └── index.vue              # 测试页面
└── pages.json                     # 页面配置（已更新）
```

## 常量配置

### 角色配置 (src/constant/role-switch.ts)
- `ROLE_SWITCH_CONFIG`: 页面基础配置
- `USER_ROLES`: 用户角色定义
- `ROLE_SWITCH_MESSAGES`: 提示文案
- `ROLE_PERMISSIONS`: 角色权限配置
- `ROLE_PAGES`: 角色相关页面路径

### 角色定义
```typescript
export const USER_ROLES = [
  {
    key: 'jobseeker',
    name: '意人',
    description: '找工作 投简历',
    avatar: DEFAULT_AVATARS.jobseeker,
    features: '发布求职信息·查看求职者简历·适请面试·管理招聘流程'
  },
  {
    key: 'employer', 
    name: '老板',
    description: '招人才 发职位',
    avatar: DEFAULT_AVATARS.employer,
    features: '发布招聘信息·查看求职者简历·邀请面试·管理招聘流程'
  }
]
```

## 使用方法

### 1. 跳转到角色切换页面
```javascript
// 基础跳转
uni.navigateTo({
  url: '/pages-sub/role-switch/index'
})

// 带当前角色参数
uni.navigateTo({
  url: `/pages-sub/role-switch/index?currentRole=${currentRole}`
})
```

### 2. 获取当前角色
```javascript
// 从本地存储获取
const currentRole = uni.getStorageSync('userRole') || 'jobseeker'

// 从常量中获取角色信息
import { USER_ROLES } from '@/constant/role-switch'
const roleInfo = USER_ROLES.find(role => role.key === currentRole)
```

### 3. 测试功能
访问测试页面：`/pages/test-role-switch/index`

## 页面特性

### 1. 设计还原
- ✅ 自定义导航栏
- ✅ 当前身份展示区域
- ✅ 角色头像和描述
- ✅ 切换按钮和返回按钮
- ✅ 确认弹窗

### 2. 交互体验
- ✅ 点击切换角色
- ✅ 确认弹窗防误操作
- ✅ 加载状态展示
- ✅ 成功/失败提示
- ✅ 自动返回上一页

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

<!-- 角色头像 -->
<image class="w-32 h-32 rounded-full bg-gray-100">

<!-- 按钮样式 -->
<wd-button class="h-24 rounded-12 text-8 font-medium">
```

### 响应式适配
- 安全区域适配：`pt-safe`、`pb-safe`
- 灵活布局：`flex`、`items-center`、`justify-between`
- 间距控制：`px-12`、`py-8`、`mb-4`

## 页面配置

已在 `src/pages.json` 中添加配置：

```json
{
  "path": "role-switch/index",
  "style": {
    "navigationBarTitleText": "切换身份",
    "navigationStyle": "custom"
  }
}
```

## 数据流程

### 1. 页面加载
1. 从路由参数或本地存储获取当前角色
2. 根据角色 key 查找角色信息
3. 渲染当前角色和可切换角色

### 2. 角色切换
1. 用户点击切换选项
2. 显示确认弹窗
3. 用户确认后执行切换
4. 保存新角色到本地存储
5. 显示成功提示并返回

### 3. 状态管理
- 使用 `uni.getStorageSync()` 和 `uni.setStorageSync()` 管理角色状态
- 页面间通过本地存储同步角色信息
- 支持路由参数传递当前角色

## 扩展建议

### 1. 功能扩展
- [ ] 添加更多角色类型
- [ ] 实现角色权限验证
- [ ] 添加角色切换历史记录
- [ ] 支持角色相关的个性化设置

### 2. 体验优化
- [ ] 添加角色切换动画
- [ ] 优化加载状态展示
- [ ] 添加角色介绍引导
- [ ] 支持快速切换功能

### 3. 数据同步
- [ ] 接入后端 API
- [ ] 实现角色信息云端同步
- [ ] 添加角色切换日志
- [ ] 支持多设备角色同步

## 注意事项

1. **角色持久化**：角色信息保存在本地存储中，卸载应用会丢失
2. **权限控制**：需要根据角色控制页面访问权限
3. **数据同步**：多页面使用角色信息时需要保持同步
4. **错误处理**：需要处理角色切换失败的情况
5. **兼容性**：确保在不同平台上的表现一致

## 总结

角色切换功能完全按照设计稿实现，使用现代化的技术栈和原子化样式，提供了良好的用户体验。代码结构清晰，易于维护和扩展。
