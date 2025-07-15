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
    url: `/pages-sub/job-detail/job-detail?id=${job.id}`,
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
    href: `https://example.com/job/${job.id}`,
  })
}
</script>
```

### Props 属性

| 属性名    | 类型        | 默认值 | 说明         |
| --------- | ----------- | ------ | ------------ |
| jobData   | JobPosition | -      | 职位数据对象 |
| favorited | boolean     | false  | 是否已收藏   |

### Events 事件

| 事件名   | 参数                                     | 说明               |
| -------- | ---------------------------------------- | ------------------ |
| click    | (job: JobPosition)                       | 点击卡片时触发     |
| favorite | (job: JobPosition, isFavorited: boolean) | 收藏状态改变时触发 |
| share    | (job: JobPosition)                       | 点击分享时触发     |

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
    url: `/pages-sub/seeker-detail/seeker-detail?id=${seeker.id}`,
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
      phoneNumber: seeker.phone.replace(/\*/g, ''),
    })
  }
}
</script>
```

### Props 属性

| 属性名     | 类型      | 默认值 | 说明           |
| ---------- | --------- | ------ | -------------- |
| seekerData | JobSeeker | -      | 求职者数据对象 |
| favorited  | boolean   | false  | 是否已收藏     |

### Events 事件

| 事件名   | 参数                                      | 说明               |
| -------- | ----------------------------------------- | ------------------ |
| click    | (seeker: JobSeeker)                       | 点击卡片时触发     |
| favorite | (seeker: JobSeeker, isFavorited: boolean) | 收藏状态改变时触发 |
| contact  | (seeker: JobSeeker)                       | 点击联系时触发     |

## 3. 数据类型定义

### JobPosition (招聘职位)

```typescript
interface JobPosition {
  id: string
  title: string // 职位标题
  company: string // 公司名称
  salary: string // 薪资范围
  location: string // 工作地点
  tags: string[] // 职位标签
  isUrgent?: boolean // 是否紧急招聘
  publishTime: string // 发布时间
  description?: string // 职位描述
  requirements?: string[] // 职位要求
  benefits?: string[] // 福利待遇
}
```

### JobSeeker (求职者)

```typescript
interface JobSeeker {
  id: string
  name: string // 姓名
  avatar: string // 头像
  age: number // 年龄
  profession: string // 专业
  experience: string // 工作经验
  tags: string[] // 技能标签
  isVerified?: boolean // 是否认证
  isVip?: boolean // 是否VIP
  publishTime: string // 发布时间
  description?: string // 个人描述
  skills?: string[] // 技能列表
  education?: string // 教育背景
  phone?: string // 联系电话
  location?: string // 所在地区
  expectedSalary?: string // 期望薪资
  workType?: string // 工作类型
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
  --primary-color: #007aff;
  --success-color: #34c759;
  --warning-color: #ff9500;
  --error-color: #ff3b30;
}
```

## 7. 求职者详情页面 (seeker-detail)

### 功能特点

- 👤 **完整个人信息**: 头像、基本信息、联系方式
- ✅ **认证和VIP标识**: 清晰的身份认证显示
- 💼 **求职意向**: 期望薪资、工作类型、到岗时间
- 🎯 **专业技能**: 技能标签展示
- 📝 **自我介绍**: 详细的个人描述
- 🖼️ **个人展示**: 作品集图片展示
- 🏆 **代表作品**: 参演作品列表
- 🎓 **教育背景**: 学历和专业信息
- 📞 **联系功能**: 电话、短信联系
- ❤️ **收藏和评分**: 用户交互功能

### 页面结构

```vue
<!-- 导航栏 -->
<wd-navbar title="求职者详情" left-arrow>
  <template #right>
    <!-- 分享、更多、举报按钮 -->
  </template>
</wd-navbar>

<!-- 个人基本信息卡片 -->
<view class="bg-white rounded-3 p-4 mb-4">
  <!-- 头像、姓名、认证标识 -->
  <!-- 联系方式、教育背景 -->
  <!-- 求职意向、专业技能 -->
</view>

<!-- 自我介绍卡片 -->
<view class="bg-white rounded-3 p-4 mb-4">
  <!-- 详细的个人描述 -->
</view>

<!-- 个人展示卡片 -->
<view class="bg-white rounded-3 p-4 mb-4">
  <!-- 作品集图片网格 -->
</view>

<!-- 代表作品卡片 -->
<view class="bg-white rounded-3 p-4 mb-4">
  <!-- 参演作品列表 -->
</view>

<!-- 教育背景卡片 -->
<view class="bg-white rounded-3 p-4 mb-4">
  <!-- 学校、专业、时间 -->
</view>

<!-- 底部操作栏 -->
<view class="fixed bottom-0">
  <!-- 收藏、评分、联系按钮 -->
</view>
```

### 使用方法

#### 1. 从求职者卡片跳转

```vue
<job-seeker-card :seeker-data="seekerData" @click="handleSeekerClick" />

<script setup>
const handleSeekerClick = (seeker) => {
  uni.navigateTo({
    url: `/pages-sub/seeker-detail/seeker-detail?id=${seeker.id}`,
  })
}
</script>
```

#### 2. 直接导航

```javascript
// 跳转到求职者详情页
uni.navigateTo({
  url: '/pages-sub/seeker-detail/seeker-detail?id=1',
})
```

### 数据结构扩展

```typescript
interface JobSeeker {
  // 基础信息
  id: string
  name: string
  avatar: string
  age: number
  profession: string
  experience: string

  // 状态标识
  isVerified?: boolean
  isVip?: boolean

  // 联系信息
  phone?: string
  location?: string

  // 求职信息
  expectedSalary?: string
  workType?: string
  availability?: string

  // 详细信息
  description?: string
  skills?: string[]
  tags: string[]

  // 教育背景
  school?: string
  major?: string
  graduationTime?: string
  education?: string

  // 作品展示
  portfolio?: string[]
  works?: WorkItem[]

  publishTime: string
}

interface WorkItem {
  id: string
  title: string
  role?: string
  description?: string
  year?: string
}
```

### 主要功能

#### 1. 图片预览

```javascript
const previewImage = (current: string, urls: string[]) => {
  uni.previewImage({
    current,
    urls
  })
}
```

#### 2. 联系功能

```javascript
const handleContact = () => {
  if (seekerInfo.value.phone) {
    uni.showActionSheet({
      itemList: ['拨打电话', '发送短信'],
      success: (res) => {
        if (res.tapIndex === 0) {
          uni.makePhoneCall({
            phoneNumber: seekerInfo.value.phone!.replace(/\*/g, '1')
          })
        }
      }
    })
  }
}
```

#### 3. 收藏功能

```javascript
const handleFavorite = () => {
  isFavorited.value = !isFavorited.value
  toast.success(isFavorited.value ? '已收藏' : '已取消收藏')
}
```

### 样式特点

- **卡片布局**: 使用白色圆角卡片分组显示信息
- **响应式网格**: 个人展示使用2列网格布局
- **固定底栏**: 操作按钮固定在页面底部
- **安全区域**: 适配iPhone等设备的安全区域
- **交互反馈**: 按钮点击效果和状态变化

### 扩展功能

1. **在线聊天**: 集成即时通讯功能
2. **视频通话**: 支持视频面试
3. **简历下载**: 导出PDF简历
4. **推荐算法**: 智能推荐相似求职者
5. **评价系统**: 雇主评价和反馈

这两个组件为意仁直聘应用提供了完整的卡片展示功能，支持丰富的交互和良好的用户体验。
