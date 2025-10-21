# 组件文档站（中文）

一个基于 Next.js + MDX 的组件文档站项目，用于以文档驱动的方式开发、演示与维护 UI 组件。项目支持可交互的 TSX 示例、按设计稿像素级还原的 CSS Modules 样式、以及通过 MDX 编写的详细说明文档。

- 预览开发地址：`http://localhost:3000/` 或 `http://localhost:3001/`
- 技术栈：`Next.js 15`、`React 19`、`MDX`、`CSS Modules`

## 快速开始

- 安装依赖：
  - 使用 pnpm：`pnpm install`
  - 或使用 npm：`npm install`
- 启动开发：
  - `npm run dev`（默认端口 3000）
  - 或指定端口：`npm run dev -- -p 3001`
- 构建生产：`npm run build`
- 启动生产：`npm run start`

## 目录结构

```
├── app/                     # 应用入口（Next.js App Router）
│   ├── globals.css          # 全局样式（基础）
│   └── layout.tsx           # 页面布局入口
├── components/              # 文档基础组件（MDX 渲染、主题等）
│   ├── component-docs.tsx   # 文档页面容器
│   ├── mdx-content.tsx      # MDX 渲染器
│   └── ui/                  # 现有 UI 组件（Button、Dialog 等）
├── content/                 # 组件演示 & 文档内容源
│   ├── demos/               # TSX 演示组件（可交互）
│   └── docs/                # 文档页面逻辑（TSX 数据源）
├── css/                     # CSS Modules（像素级还原样式）
│   ├── button-library.module.css
│   └── drawer-blueprint.module.css
├── docs/                    # MDX 文档（对外展示）
│   ├── Layout/              # 布局相关文档
│   └── Navigation/          # 导航相关文档
├── public/icons/            # SVG 图标（来源：Figma 导出）
├── lib/                     # MDX 自动注册、工具方法
├── hooks/                   # 通用 Hooks（如 use-toast）
├── styles/                  # 全局样式（legacy）
├── IMPLEMENTATION_GUIDE.md  # MDX 文档系统实现指南
└── package.json             # 项目脚本与依赖
```

## 工作流（MDX 驱动）

1. 在 `content/demos/{分类}/` 添加一个可交互的 TSX 演示组件，如：
   - 路径示例：`content/demos/Layout/ButtonLibrary.tsx`
2. 在 `css/` 下创建对应的 CSS Modules 文件：
   - 路径示例：`css/button-library.module.css`
3. 将 Figma 导出的 SVG 图标放到 `public/icons/`：
   - 如：`public/icons/icon-play.svg`
4. 在 `docs/{分类}/` 编写 MDX 文档：
   - 路径示例：`docs/Layout/ButtonLibrary.mdx`
   - 在文档中引用演示组件：`<Demo><ButtonLibrary /></Demo>`

## 样式规范（CSS Modules）

- 优先使用 CSS 变量组织主题与尺寸，如：`--color-primary-95`、`--radius-25`。
- 避免在 CSS Modules 中使用 `:root` 或 `:global(:root)` 纯选择器（会触发解析错误）。
- 推荐做法：将变量放在一个局部类（例如 `.vars`）里，并在组件根节点挂载该类：
  - CSS：
    ```css
    .vars { --button-height: 36px; }
    ```
  - TSX：
    ```tsx
    <div className={`${styles.vars} ${styles.button}`}>...</div>
    ```
- 根据 Figma 设计稿像素级还原：颜色、字号、字重、圆角、间距、状态（hover/active/disabled）、焦点可见性、过渡动画等。

## 图标规范（SVG）

- 图标必须使用 Figma 原始导出的 SVG 文件，放置于 `public/icons/`。
- 在 TSX 中加载方式示例：
  ```tsx
  import Image from 'next/image'
  <Image src="/icons/icon-play.svg" alt="播放" width={24} height={24} />
  ```
- 注意为图标按钮提供 `aria-label`。

## 文档编写规范（MDX）

- 文档位于 `docs/{分类}/`，示例：`docs/Navigation/Drawer.mdx`。
- 推荐结构：标题、预览、特性、使用方法、API、设计规范、无障碍特性、兼容性、相关组件。
- 在文档中使用 `<Demo>` 包裹演示组件，保证预览区域一致。
- 组件路径引用建议使用相对路径，避免路径别名在某些解析场景下失效：
  - 例如：`import styles from '../../../css/button-library.module.css'`

## 开发与调试

- 常用脚本：
  - `npm run dev`：启动开发服务器（默认 3000）
  - `npm run dev -- -p 3001`：指定端口（如 3001）
  - `npm run build`：构建生产包
  - `npm run start`：启动生产服务器
- 如果看到 Fast Refresh 触发完整重载，这是正常提示；建议确认编译无错误再继续。
- 对于样式解析错误（如 `Selector ":root" is not pure`），请使用上面的 CSS Modules 规范修复。

## 常见问题（FAQ）

- 模块找不到（Module not found）：
  - 确认导入路径是否为相对路径；`@/` 别名在某些上下文（如 MDX 自动收集）可能失效。
- 图标不显示：
  - 确认 SVG 文件在 `public/icons/`，并正确设置 `width/height`。
- 交互不生效：
  - 确认 TSX 中状态管理（`useState`）和事件处理（`onClick`）是否正确。

## 许可与鸣谢

- 本项目示例基于社区设计资源（Figma）与开源组件生态，感谢原作者与贡献者。
- 使用与分发请遵循各依赖库的许可证要求。

---

如需新增组件或文档结构调整，我可以为你继续补充示例、完善样式与说明。