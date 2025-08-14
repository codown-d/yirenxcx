# 薏仁直聘登录功能说明

## 功能概述

基于 wot-design-uni 组件库和 UnoCSS 原子化样式重新设计的登录功能，位于 `src/pages-sub/login/index.vue`，提供了现代化的用户登录体验。

## 主要功能

### 1. 多种登录方式

- **微信授权登录**：一键快速登录
- **手机号密码登录**：传统账密登录方式
- **手机号验证码登录**：更安全的短信验证登录

### 2. 身份选择

登录成功后用户可以选择身份：

- **薏人（求职者）**：找工作、投简历
- **老板（雇主）**：招人才、发职位

### 3. 用户体验优化

- 渐变背景设计
- 流畅的动画效果
- 响应式布局适配
- 表单验证提示
- 短信倒计时功能

## 文件结构

```
src/
├── pages-sub/
│   └── login/
│       └── index.vue          # 登录页面主文件
├── constant/
│   ├── login.ts              # 登录相关常量配置
│   ├── images.ts             # 图片资源常量
│   └── index.ts              # 常量统一导出
└── pages/
    └── test-login/
        └── index.vue         # 登录功能测试页面
```

## 常量配置

### 登录配置 (src/constant/login.ts)

- `LOGIN_CONFIG`: 登录页面基础配置
- `LOGIN_TABS`: 登录方式选项卡
- `FORM_CONFIG`: 表单相关配置
- `ROLE_CONFIG`: 身份选择配置
- `PRIVACY_CONFIG`: 隐私协议配置

### 图片资源 (src/constant/images.ts)

- `DEFAULT_AVATARS`: 默认头像配置
- `APP_LOGO`: 应用 Logo
- `BACKGROUND_IMAGES`: 背景图片
- `ICONS`: 图标资源

## 使用方法

### 1. 跳转到登录页面

```javascript
uni.navigateTo({
  url: '/pages-sub/login/index',
})
```

### 2. 测试登录功能

访问测试页面：`/pages/test-login/index`

### 3. 自定义配置

修改 `src/constant/login.ts` 中的配置项来自定义登录页面内容。

## 技术特点

1. **组件化设计**：使用 wot-design-uni 组件库
2. **原子化样式**：使用 UnoCSS 进行样式开发，无需编写传统 CSS
3. **TypeScript 支持**：完整的类型定义
4. **常量管理**：统一的配置管理
5. **响应式设计**：适配不同屏幕尺寸
6. **模块化开发**：清晰的文件结构

## UnoCSS 样式说明

项目使用 UnoCSS 原子化 CSS 框架，主要优势：

- **原子化类名**：如 `text-center`、`bg-white`、`rounded-4` 等
- **响应式设计**：支持断点前缀，如 `md:text-lg`
- **主题定制**：在 `uno.config.ts` 中配置主题色和字体大小
- **按需生成**：只生成使用到的样式，减小包体积
- **开发效率**：无需编写传统 CSS，直接在模板中使用类名

### 常用类名示例

```html
<!-- 布局 -->
<view class="flex items-center justify-between">
  <view class="grid grid-cols-2 gap-4">
    <!-- 间距 -->
    <view class="p-4 m-2 px-6 py-3">
      <!-- 颜色 -->
      <view class="bg-white text-gray-800 border-gray-200">
        <!-- 圆角和阴影 -->
        <view class="rounded-4 shadow-sm">
          <!-- 字体 -->
          <text class="text-8 font-bold leading-relaxed"></text>
        </view>
      </view>
    </view>
  </view>
</view>
```

## 页面配置

已在 `src/pages.json` 中配置了子包：

```json
{
  "subPackages": [
    {
      "root": "pages-sub",
      "pages": [
        {
          "path": "login/index",
          "style": {
            "navigationBarTitleText": "登录",
            "navigationStyle": "custom"
          }
        }
      ]
    }
  ]
}
```

## 注薏事项

1. 登录页面使用自定义导航栏，需要处理状态栏高度
2. 微信授权登录需要在微信小程序环境中测试
3. 短信验证码功能需要接入真实的短信服务
4. 身份选择后的跳转逻辑需要根据实际业务调整

## 后续扩展

- 接入真实的登录 API
- 添加第三方登录（QQ、支付宝等）
- 完善错误处理和重试机制
- 添加登录状态持久化
- 优化加载和错误状态展示
