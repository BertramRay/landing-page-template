# Landing Page Template

![GitHub stars](https://img.shields.io/github/stars/BertramRay/landing-page-template?style=social)
![GitHub forks](https://img.shields.io/github/forks/BertramRay/landing-page-template?style=social)
![GitHub issues](https://img.shields.io/github/issues/BertramRay/landing-page-template?style=social)

一个现代化、响应式的登陆页面模板，为您的下一个项目提供完美起点。使用最新的前端技术构建，设计精美且易于自定义。

[在线演示](https://ahaplatform.up.railway.app/) | [查看源码](https://github.com/BertramRay/landing-page-template)

![预览图片](https://raw.githubusercontent.com/BertramRay/landing-page-template/refs/heads/main/public/og-image.png)

## 📹 视频演示

<p align="center">
  <video src="https://raw.githubusercontent.com/BertramRay/landing-page-template/main/public/landing_page_demo.mp4" width="100%" controls autoplay muted loop></video>
</p>

> 注意：如果视频无法播放，您可以[点击此处](https://raw.githubusercontent.com/BertramRay/landing-page-template/main/public/landing_page_demo.mp4)直接下载视频。

## ✨ 特点

- 💯 响应式设计 - 在所有设备上完美展示
- 🎨 现代UI设计 - 基于shadcn-ui组件
- 🚀 高性能 - 使用Vite快速构建和热重载
- 🔧 类型安全 - 使用TypeScript提供完整的类型检查
- 📱 移动友好 - 针对移动设备优化的布局
- 🎭 可自定义 - 轻松修改以适应您的品牌
- 📦 开箱即用 - 预设多个部分和组件

## 🛠️ 技术栈

该项目使用以下技术构建：

- [Vite](https://vitejs.dev/) - 极速前端构建工具
- [React](https://reactjs.org/) - 用户界面库
- [TypeScript](https://www.typescriptlang.org/) - 带类型的JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - 实用优先的CSS框架
- [shadcn/ui](https://ui.shadcn.com/) - 可重用UI组件集合

## 🚀 开始使用

### 前提条件

- 已安装 Node.js（推荐使用v18+）
- 包管理器 (npm, yarn, 或 pnpm)

### 安装

```bash
# 克隆仓库
git clone https://github.com/BertramRay/landing-page-template.git

# 进入项目目录
cd landing-page-template

# 安装依赖
npm install
# 或者
yarn
# 或者
pnpm install
```

### 开发

```bash
# 启动开发服务器
npm run dev
# 或者
yarn dev
# 或者
pnpm dev
```

浏览器会自动打开 `http://localhost:5173`。

### 构建

```bash
# 构建生产版本
npm run build
# 或者
yarn build
# 或者
pnpm build
```

## 🔧 自定义

该模板设计为易于自定义：

1. 修改 `src/components` 中的组件
2. 更新 `src/App.tsx` 中的页面结构
3. 在 `tailwind.config.ts` 中调整颜色和主题

## 📝 项目结构

```
landing-page-template/
├── public/             # 静态资产和图标
├── src/                # 源代码
│   ├── components/     # 可重用UI组件
│   ├── lib/            # 实用工具和帮助函数
│   ├── styles/         # 全局样式
│   ├── App.tsx         # 主应用组件
│   └── main.tsx        # 应用入口点
├── index.html          # HTML模板
└── ...配置文件
```

## 📄 许可证

本项目采用 [MIT 许可证](LICENSE)。您可以自由使用、修改和分发此代码。

## 🤝 贡献

欢迎贡献！请随时提交问题或拉取请求。

1. Fork该项目
2. 创建您的功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开一个Pull Request

## 🙏 致谢

- [shadcn/ui](https://ui.shadcn.com/) 提供精美组件
- [Tailwind CSS](https://tailwindcss.com/) 提供强大的样式系统
- 所有为该项目做出贡献的开发者
