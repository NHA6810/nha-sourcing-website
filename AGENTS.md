# AGENTS.md — NHA Sourcing Service (Shanghai) Co., Ltd.

## 项目概览

NHA Sourcing Service (Shanghai) Co., Ltd. 的官方 B2B 采购代理网站。面向全球买家（进口商、品牌方、电商卖家、批发商），提供产品采购、质量控制、工厂审核、物流运输、OEM/ODM 等一站式亚洲采购服务。

### 版本技术栈

- **Framework**: Next.js 16 (App Router)
- **Core**: React 19
- **Language**: TypeScript 5
- **UI 组件**: shadcn/ui (基于 Radix UI)
- **Styling**: Tailwind CSS 4

### 品牌色

- 主色（深海蓝）: `#0A2540` (nha-navy)
- 辅色（商务蓝）: `#1E40AF` (nha-blue)
- 强调色（中国红）: `#DC2626` (nha-red)
- 金色点缀: `#D97706` (nha-gold)

## 目录结构

```
src/
├── app/
│   ├── layout.tsx              # 根布局，包含 Header/Footer/FloatingCTA
│   ├── globals.css             # 全局样式 + Tailwind 主题
│   ├── page.tsx                # 首页
│   ├── about/page.tsx          # 关于我们
│   ├── how-it-works/page.tsx   # 采购流程
│   ├── services/               # 服务页面
│   │   ├── page.tsx            # 服务总览
│   │   ├── product-sourcing/   # 产品采购
│   │   ├── quality-control/    # 质量控制
│   │   ├── factory-audit/      # 工厂审核
│   │   ├── logistics/          # 物流运输
│   │   └── oem-odm/            # OEM/ODM
│   ├── industries/page.tsx     # 行业覆盖
│   ├── case-studies/page.tsx   # 成功案例
│   ├── blog/page.tsx           # 博客/资源
│   ├── contact/page.tsx        # 联系我们（含表单）
│   ├── privacy-policy/page.tsx # 隐私政策
│   ├── terms-of-service/page.tsx # 服务条款
│   └── sitemap/page.tsx        # 网站地图
├── components/
│   ├── ui/                     # shadcn/ui 组件库
│   ├── layout/                 # 布局组件
│   │   ├── header.tsx          # 顶部导航（含响应式）
│   │   ├── footer.tsx          # 底部信息
│   │   ├── floating-cta.tsx    # 浮动 CTA（WhatsApp/电话/回顶）
│   │   └── page-hero.tsx       # 内页通用 Hero
│   └── sections/
│       └── home-sections.tsx   # 首页所有区块组件
├── hooks/                      # 自定义 Hooks
└── lib/
    └── utils.ts                # 通用工具函数 (cn)
```

## 核心页面说明

### 首页 (/)
- `HeroSection`: 主视觉 + 核心价值主张 + 双 CTA
- `StatsBar`: 关键数据展示（工厂数、年数、集装箱数、成本节省、服务国家数）
- `ServicesOverview`: 6 大服务卡片概览
- `WhyChooseUs`: 为什么选择 NHA（6 项理由 + 客户引言）
- `HowItWorksPreview`: 5 步流程预览
- `IndustriesPreview`: 行业覆盖网格
- `TestimonialsSection`: 客户评价（3 条）
- `CTASection`: 底部行动号召

### 服务页 (/services)
- 6 个详细服务卡片（带功能列表）
- 4 种物流方式对比
- 3 档定价方案（佣金制/项目制/小时咨询）

### 联系页 (/contact)
- 左侧：联系方式（邮箱/WhatsApp/电话/地址/营业时间）
- 右侧：询价表单（12 个字段，含选择器）
- 成功提交后的感谢页面

## 开发规范

### 编码规范
- TypeScript strict 模式
- 优先复用 shadcn/ui 组件（Button, Card, Badge, Input, Select 等）
- 图标统一使用 lucide-react
- 禁止隐式 `any`，所有函数参数标注类型

### 组件约定
- 新组件放在 `src/components/` 对应目录
- 跨页面复用的布局组件放 `components/layout/`
- 单页专属区块组件放 `components/sections/`

### 样式约定
- 优先使用 Tailwind 工具类
- 品牌色通过 CSS 变量定义在 `globals.css` 的 `@theme` 中
- 色值使用：`text-nha-navy`、`bg-nha-blue`、`text-nha-red`、`text-nha-gold`
- 动画使用 `tw-animate-css` 或自定义 `@keyframes`
- 卡片悬浮效果统一使用 `card-hover` class

### 响应式
- 移动端优先，断点：sm(640)/md(768)/lg(1024)/xl(1280)
- 导航：桌面端水平菜单，移动端汉堡抽屉
- 卡片网格：移动端单列 → md 双列 → lg 三列

## 常用命令

```bash
pnpm install          # 安装依赖
pnpm run dev          # 启动开发服务器
pnpm run build        # 生产构建
pnpm ts-check         # TypeScript 类型检查
pnpm lint             # ESLint 检查
```

## SEO 注意事项

- 每个页面都有独立的 `metadata` export
- 关键词覆盖：sourcing agent China, Shanghai sourcing company, quality control China 等
- 页面结构清晰，H1 唯一，语义化标签
- 所有图片（如有）需设置 alt 属性

## 未来可扩展方向

- 接入真实表单提交后端 (API Route)
- CMS 集成（内容管理）
- 多语言支持（中/英/西语等）
- 案例研究详情页
- 博客文章详情页 + MDX
- Google Analytics / 转化追踪
