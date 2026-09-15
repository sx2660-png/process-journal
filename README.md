# 创作过程档案 · Process Journal

一个记录课程创作/设计过程与每周反思的个人网站——按时间线组织，图文并茂，方便回顾、反思、保存灵感和对外分享。用 [Astro](https://astro.build) 搭建，纯静态，可免费部署到 GitHub Pages。

## 快速开始

```bash
npm install     # 第一次先装依赖
npm run dev      # 启动本地预览，打开 http://localhost:4321
```

改动会自动热更新。写完想看最终效果：

```bash
npm run build    # 生成静态站点到 dist/
npm run preview  # 本地预览构建结果
```

## 怎么写一篇新记录

两种模板，按需选一个复制：

- 创作过程记录：复制 `src/content/entries/_TEMPLATE.md`
- 阅读/主题反思（Takeaway / Connection / Burning Question）：复制 `src/content/entries/_TEMPLATE-reflection.md`

步骤：

1. 复制模板，改个文件名，比如 `week-03-prototype.md`
   （文件名会变成网址，尽量用英文、数字、短横线）。
2. 改开头的 frontmatter（`---` 之间的部分）：

   | 字段 | 说明 |
   | --- | --- |
   | `title` | 标题 |
   | `date` | 日期，格式 `2026-09-15`，用来排时间线 |
   | `week` | 第几周（可选） |
   | `summary` | 一句话摘要，显示在首页卡片上 |
   | `tags` | 标签，如 `[Reflection]` 或 `[草图, 原型]` |
   | `cover` | 封面图路径（可选），如 `./images/cover.jpg` |
   | `draft` | `true` 时不显示（草稿）；写好改成 `false` |

3. 在 `---` 下面用 Markdown 正文写内容。
4. 保存即可，`npm run dev` 会实时刷新。

## 放图片

把图片拖进 `src/content/entries/images/`（自己新建这个文件夹），
在正文里这样引用：

```markdown
![图片说明](./images/我的草图.jpg)
```

做封面就在 frontmatter 里写 `cover: ./images/我的草图.jpg`。

## 部署到 GitHub Pages

1. 把这个文件夹推到一个 GitHub 仓库。
2. 打开 `astro.config.mjs`，把 `site` 改成 `https://<你的用户名>.github.io`；
   如果仓库不是 `<用户名>.github.io` 而是普通仓库，再把 `base` 改成 `/<仓库名>`。
3. 在 GitHub 仓库 **Settings → Pages → Source** 选 **GitHub Actions**。
4. 每次 push 到 `main` 分支，`.github/workflows/deploy.yml` 会自动构建并发布。

## 目录结构

```
src/
├── content/entries/          ← 你的记录都写在这里（每篇一个 .md）
│   ├── _TEMPLATE.md           ← 创作过程模板（下划线开头，不会被发布）
│   ├── _TEMPLATE-reflection.md ← 阅读反思模板
│   └── week-01-...md
├── pages/                    ← 页面：首页时间线、关于页、文章路由
├── layouts/                  ← 页面骨架
├── components/               ← 卡片、标签等小组件
└── styles/global.css         ← 配色和排版，想换风格改这里
```
