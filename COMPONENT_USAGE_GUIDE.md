# 组件使用指南

## 概述

本项目新增了两个核心卡片组件，用于展示招聘职位和求职者信息：

1. **job-card** - 招聘职位卡片组件
2. **job-seeker-card** - 求职者卡片组件

## 1. 招聘职位卡片组件 (job-card)

### 功能特点
- 📋 **职位信息展示**: 职位标题、公司、薪资、地点等
- 🏷️ **标签系统**: 支持多个职位标签展示
- 🚨 **紧急招聘**: 支持急聘标签显示
- ❤️ **收藏功能**: 支持收藏/取消收藏
- 📤 **分享功能**: 支持职位分享
- 🎯 **交互反馈**: 点击效果和状态管理

### 使用方法

```vue
<template>
  <job-card
    :job-data="jobData"
    :favorited="false"
    @click="handleJobClick"
    @favorite="handleJobFavorite"
    @share="handleJobShare"
  />
</template>

<script setup>
import JobCard from '@/components/job-card/job-card.vue'
import { JOB_POSITIONS } from '@/constant/recruitment'

const jobData = JOB_POSITIONS[0]

const handleJobClick = (job) => {
  console.log('点击职位:', job)
  // 跳转到职位详情页
  uni.navigateTo({
    url: `/pages-sub/job-detail/job-detail?id=${job.id}`
  })
}

const handleJobFavorite = (job, isFavorited) => {
  console.log('收藏状态:', isFavorited, job)
  // 处理收藏逻辑
}

const handleJobShare = (job) => {
  console.log('分享职位:', job)
  // 处理分享逻辑
  uni.share({
    provider: 'weixin',
    type: 0,
    title: job.title,
    summary: `${job.company} - ${job.salary}`,
    href: `https://example.com/job/${job.id}`
  })
}
</script>
```

### Props 属性

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| jobData | JobPosition | - | 职位数据对象 |
| favorited | boolean | false | 是否已收藏 |

### Events 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| click | (job: JobPosition) | 点击卡片时触发 |
| favorite | (job: JobPosition, isFavorited: boolean) | 收藏状态改变时触发 |
| share | (job: JobPosition) | 点击分享时触发 |

## 2. 求职者卡片组件 (job-seeker-card)

### 功能特点
- 👤 **个人信息展示**: 头像、姓名、年龄、专业、经验等
- ✅ **认证标识**: 支持实名认证标识显示
- 💎 **VIP标识**: 支持VIP用户标识
- 🏷️ **技能标签**: 展示求职者技能和特长
- 📞 **联系功能**: 快速联系求职者
- ❤️ **收藏功能**: 支持收藏/取消收藏
- 💰 **期望薪资**: 显示期望薪资范围

### 使用方法

```vue
<template>
  <job-seeker-card
    :seeker-data="seekerData"
    :favorited="false"
    @click="handleSeekerClick"
    @favorite="handleSeekerFavorite"
    @contact="handleSeekerContact"
  />
</template>

<script setup>
import JobSeekerCard from '@/components/job-seeker-card/job-seeker-card.vue'
import { JOB_SEEKERS } from '@/constant/job-seeking'

const seekerData = JOB_SEEKERS[0]

const handleSeekerClick = (seeker) => {
  console.log('点击求职者:', seeker)
  // 跳转到求职者详情页
  uni.navigateTo({
    url: `/pages-sub/seeker-detail/seeker-detail?id=${seeker.id}`
  })
}

const handleSeekerFavorite = (seeker, isFavorited) => {
  console.log('收藏状态:', isFavorited, seeker)
  // 处理收藏逻辑
}

const handleSeekerContact = (seeker) => {
  console.log('联系求职者:', seeker)
  // 处理联系逻辑
  if (seeker.phone) {
    uni.makePhoneCall({
      phoneNumber: seeker.phone.replace(/\*/g, '')
    })
  }
}
</script>
```

### Props 属性

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| seekerData | JobSeeker | - | 求职者数据对象 |
| favorited | boolean | false | 是否已收藏 |

### Events 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| click | (seeker: JobSeeker) | 点击卡片时触发 |
| favorite | (seeker: JobSeeker, isFavorited: boolean) | 收藏状态改变时触发 |
| contact | (seeker: JobSeeker) | 点击联系时触发 |

## 3. 数据类型定义

### JobPosition (招聘职位)

```typescript
interface JobPosition {
  id: string
  title: string          // 职位标题
  company: string        // 公司名称
  salary: string         // 薪资范围
  location: string       // 工作地点
  tags: string[]         // 职位标签
  isUrgent?: boolean     // 是否紧急招聘
  publishTime: string    // 发布时间
  description?: string   // 职位描述
  requirements?: string[] // 职位要求
  benefits?: string[]    // 福利待遇
}
```

### JobSeeker (求职者)

```typescript
interface JobSeeker {
  id: string
  name: string           // 姓名
  avatar: string         // 头像
  age: number           // 年龄
  profession: string    // 专业
  experience: string    // 工作经验
  tags: string[]        // 技能标签
  isVerified?: boolean  // 是否认证
  isVip?: boolean       // 是否VIP
  publishTime: string   // 发布时间
  description?: string  // 个人描述
  skills?: string[]     // 技能列表
  education?: string    // 教育背景
  phone?: string        // 联系电话
  location?: string     // 所在地区
  expectedSalary?: string // 期望薪资
  workType?: string     // 工作类型
  availability?: string // 到岗时间
}
```

## 4. 样式说明

两个组件都使用了UnoCSS样式系统，主要特点：

- **响应式设计**: 适配不同屏幕尺寸
- **交互反馈**: 点击、悬停等状态效果
- **一致性**: 统一的设计语言和视觉风格
- **可定制**: 支持主题色彩和样式调整

### 主要样式类

- `bg-white` - 白色背景
- `rounded-3` - 圆角边框
- `shadow-sm` - 轻微阴影
- `text-primary` - 主题色文字
- `active:bg-gray-50` - 点击时背景色
- `transition-colors` - 颜色过渡动画

## 5. 最佳实践

### 性能优化
1. **图片懒加载**: 头像图片使用懒加载
2. **事件防抖**: 避免频繁点击
3. **数据缓存**: 合理缓存卡片数据

### 用户体验
1. **加载状态**: 显示加载中状态
2. **错误处理**: 优雅处理错误情况
3. **无障碍**: 支持无障碍访问

### 代码规范
1. **类型安全**: 使用TypeScript类型定义
2. **组件复用**: 抽取公共逻辑
3. **事件命名**: 使用语义化事件名称

## 6. 扩展功能

### 可扩展的功能点
- **筛选排序**: 支持多维度筛选和排序
- **批量操作**: 支持批量收藏、分享等
- **个性化**: 根据用户偏好定制显示
- **统计分析**: 点击、收藏等行为统计

### 自定义主题
```css
/* 自定义主题色 */
:root {
  --primary-color: #007AFF;
  --success-color: #34C759;
  --warning-color: #FF9500;
  --error-color: #FF3B30;
}
```

这两个组件为意仁直聘应用提供了完整的卡片展示功能，支持丰富的交互和良好的用户体验。
