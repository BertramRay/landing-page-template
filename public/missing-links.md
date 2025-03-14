# Aha Platform 已实现链接

本文档收集了 Aha Platform 网站上所有已实现的实际链接，包括按钮和可点击元素。

## 导航栏 (Navbar)

### 顶部导航链接
- Logo 链接: `<a href="/">` - 链接到首页
- "Features" 链接: `<a href="https://ads.ahaglobal.io/competitor">` - 链接到功能页面
- "How it Works" 链接: `<a href="https://ads.ahaglobal.io/how-it-works">` - 链接到工作流程页面
- "Pricing" 链接: `<a href="https://ads.ahaglobal.io/cost">` - 链接到价格页面
- "Testimonials" 链接: `<a href="#testimonials">` - 链接到页面内锚点

### 顶部按钮
- "Sign In" 按钮 - 链接到登录页面 https://platform.ads.ahaglobal.io/login
- "Get Started" 按钮 - 链接到注册页面 https://platform.ads.ahaglobal.io/login

## 英雄区域 (Hero)

### 按钮
- "Get Started Free" 按钮 - 链接到注册流程页面 https://platform.ads.ahaglobal.io/login
- "See How It Works" 按钮 - 链接到功能展示页面 https://ads.ahaglobal.io/

## 号召性用语区域 (CTA)

### 表单
- "Get Started Free" 按钮 (在邮件输入框旁) - 表单提交后重定向到 https://platform.ads.ahaglobal.io/login

## 页脚 (Footer)

### 社交媒体链接
- Twitter 图标链接: `<a href="https://x.com/Aha_global?aha_source=webflow">`
- LinkedIn 图标链接: `<a href="https://www.linkedin.com/company/ahaglobal-inc/?aha_source=webflow">`
- Discord 图标链接: `<a href="https://discord.com/invite/J8XwWPF9Q3?aha_source=webflow">`
- Instagram 图标链接: `<a href="https://www.linkedin.com/company/ahaglobal-inc/?aha_source=webflow">`
- YouTube 图标链接: `<a href="https://www.youtube.com/@Aha_globalofficial?aha_source=webflow">`
- TikTok 图标链接: `<a href="https://www.tiktok.com/@aha_globalofficial?aha_source=webflow">`

### "Platform" 栏目
- "Features" 链接: `<a href="https://ads.ahaglobal.io/competitor">`
- "How It Works" 链接: `<a href="https://ads.ahaglobal.io/how-it-works">`
- "Pricing" 链接: `<a href="https://ads.ahaglobal.io/cost">`
- "FAQ" 链接: `<a href="https://help.ads.ahaglobal.io/">`

### "Resources" 栏目
- "For Brands" 链接: `<a href="https://ads.ahaglobal.io/">`
- "For Influencers" 链接: `<a href="https://creator.ahaglobal.io/">`
- "Case Studies" 链接: `<a href="https://ads.ahaglobal.io/case-studies">`
- "Blog" 链接: `<a href="https://ads.ahaglobal.io/">`

### "Company" 栏目
- "About Us" 链接: `<a href="https://ads.ahaglobal.io/about-us">`
- "Careers" 链接: `<a href="https://ads.ahaglobal.io/about-us">`
- "Contact" 链接: `<a href="https://help.ads.ahaglobal.io/">`
- "Privacy Policy" 链接: `<a href="https://ads.ahaglobal.io/privacy-policy">`
- "Terms of Service" 链接: `<a href="https://ads.ahaglobal.io/terms-of-service">`

## 实现备注

1. **社交媒体图标更新**：
   - 移除了 Facebook 图标链接
   - 添加了 Discord 图标链接（使用 MessageSquare 图标代替）
   - 添加了 TikTok 图标链接（使用自定义 SVG）

2. **按钮链接实现方式**：
   - 导航栏的按钮使用 onClick 处理函数重定向
   - Hero 区域的按钮使用 `<a>` 标签包裹
   - CTA 表单使用 onSubmit 处理函数重定向

3. **跨组件一致性**：
   - 所有 "Get Started" 类按钮都链接到相同的注册/登录页面
   - 确保了移动端和桌面端导航有相同的链接目标
   - 主要功能页面（Features、How it Works、Pricing）在导航和页脚中保持了链接一致性

4. **下一步工作**：
   - 考虑将页面内锚点（如 #testimonials）也更新为实际页面链接
   - 实现更精细的表单验证和处理逻辑
   - 为每个社交媒体图标添加恰当的悬停效果和无障碍特性 