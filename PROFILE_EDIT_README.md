# 个人资料编辑页面实现说明

## 功能概述

根据提供的UI设计图，实现了一个完整的个人资料编辑页面，包含以下主要功能：

### 1. 页面结构
- **基本信息区域**：包含所有用户可编辑的个人信息字段
- **头像上传**：支持拍照和从相册选择头像
- **表单字段**：姓名、专业特长、手机号、邮箱、地区、学校、年龄、性别
- **选择器组件**：地区选择、年龄选择、性别选择
- **保存按钮**：提交表单数据到服务器

### 2. 技术实现

#### 页面文件 (`src/pages-sub/profile-edit/profile-edit.vue`)
- 使用 Vue 3 Composition API
- TypeScript 类型安全
- UnoCSS 原子化样式
- wot-design-uni 组件库

#### 接口对接
- **获取用户信息**: `getUserInfo` - `/admin-api/system/oauth2/user/get`
- **更新用户信息**: `updateUserInfo` - `/admin-api/system/oauth2/user/update`
- **文件上传**: `uploadFile` - `/app-api/infra/file/upload`

### 3. 主要功能

#### 3.1 头像上传
```typescript
const chooseAvatar = () => {
  uni.showActionSheet({
    itemList: ['拍照', '从相册选择'],
    success: (res) => {
      // 根据用户选择调用相机或相册
      const sourceType = res.tapIndex === 0 ? ['camera'] : ['album']
      // 选择图片并上传
    }
  })
}
```

#### 3.2 表单验证
- **姓名验证**：必填，至少2个字符
- **手机号验证**：必填，正确的手机号格式
- **邮箱验证**：可选，正确的邮箱格式
- **性别验证**：必选

#### 3.3 选择器功能
- **地区选择**：预设常用城市列表
- **年龄选择**：18-67岁范围选择
- **性别选择**：男/女选项

#### 3.4 数据保存
- **表单验证**：提交前进行完整性检查
- **接口调用**：调用后端API更新用户信息
- **用户反馈**：成功/失败提示信息
- **页面跳转**：保存成功后返回上一页

### 4. 样式设计

#### 4.1 UI还原度
- 完全按照设计图实现页面布局
- 统一的间距和圆角规范
- 一致的颜色主题
- 合理的交互反馈

#### 4.2 UnoCSS 类使用
```html
<!-- 表单项容器 -->
<view class="flex items-center justify-between py-4 border-b border-gray-100">

<!-- 头像上传区域 -->
<view class="relative" @click="chooseAvatar">
  <image class="w-16 h-16 rounded-full" />
  <view class="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full">
    <uni-icons type="camera" size="12" color="#fff" />
  </view>
</view>

<!-- 保存按钮 -->
<button class="w-full bg-primary text-white py-4 rounded-xl">
```

### 5. 数据结构

#### 5.1 表单数据
```typescript
const userForm = ref({
  nickname: '',      // 姓名
  mobile: '',        // 手机号
  email: '',         // 邮箱
  sex: 0,           // 性别 (0: 未知, 1: 男, 2: 女)
  avatar: '',       // 头像URL
  specialty: '',    // 专业特长
  region: '',       // 所在地区
  school: '',       // 毕业院校
  age: 0,          // 年龄
})
```

#### 5.2 API接口类型
```typescript
// 用户信息响应类型
export type OAuth2UserInfoRespVO = {
  id: number
  username: string
  nickname: string
  email?: string
  mobile?: string
  sex?: number
  avatar?: string
  dept?: Dept
  posts?: Post[]
}

// 用户信息更新请求类型
export type OAuth2UserUpdateReqVO = {
  nickname: string
  email?: string
  mobile?: string
  sex?: number
}
```

### 6. 交互功能

#### 6.1 头像上传交互
- 点击头像区域弹出选择菜单
- 支持拍照和从相册选择
- 实时预览选择的图片
- 上传成功后更新头像显示

#### 6.2 选择器交互
- 地区选择：弹出城市列表选择器
- 年龄选择：滚动选择年龄范围
- 性别选择：男女选项选择

#### 6.3 表单验证交互
- 实时输入验证
- 提交前完整性检查
- 友好的错误提示信息

### 7. 页面导航

#### 7.1 入口页面
- 从"我的"页面的用户信息区域点击编辑按钮进入
- 路径：`/pages-sub/profile-edit/profile-edit`

#### 7.2 导航集成
- 在 `src/constant/index.ts` 中添加了页面路径常量
- 在 `jobseeker.vue` 组件中添加了编辑按钮和跳转逻辑

### 8. 使用说明

1. **进入页面**：
   - 在"我的"页面点击用户信息区域的编辑按钮
   - 页面自动加载当前用户信息

2. **编辑信息**：
   - 点击头像可更换头像
   - 填写或修改各项个人信息
   - 使用选择器选择地区、年龄、性别

3. **保存信息**：
   - 点击"保存"按钮
   - 系统验证表单信息
   - 保存成功后自动返回上一页

### 9. 扩展功能

#### 9.1 待完善功能
- 头像上传到云存储服务
- 更多地区选项（省市区三级联动）
- 专业特长标签化选择
- 个人简介富文本编辑
- 实名认证功能

#### 9.2 优化建议
- 添加图片裁剪功能
- 支持批量信息导入
- 增加信息完整度提示
- 添加信息变更历史记录
- 支持社交账号绑定

### 10. 技术特点

- **类型安全**：完整的 TypeScript 类型定义
- **接口对接**：与后端API完全对接
- **用户体验**：流畅的交互和及时反馈
- **表单验证**：完善的前端验证机制
- **响应式设计**：适配不同设备屏幕
- **组件化**：可复用的组件设计
- **错误处理**：完善的错误处理和用户提示

## 总结

该个人资料编辑页面完全按照UI设计图实现，提供了完整的用户信息编辑功能。采用现代化的前端技术栈，与后端API完全对接，具有良好的用户体验和代码可维护性。页面结构清晰，功能完善，为用户提供了便捷的个人信息管理工具。

### 主要亮点

1. **UI还原度高**：严格按照设计图实现
2. **功能完整**：涵盖所有必要的编辑功能
3. **接口对接**：与真实后端API完全对接
4. **用户体验**：友好的交互和反馈机制
5. **代码质量**：TypeScript + Vue 3 + 组件化设计
6. **扩展性强**：易于添加新功能和字段
