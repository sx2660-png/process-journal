import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 每篇周记 = src/content/entries/ 下的一个 .md 文件。
// 下面定义了每篇文章头部（frontmatter）可以填的字段。
const entries = defineCollection({
  // '!**/_*' 让下划线开头的文件（如 _TEMPLATE.md）被当作草稿模板忽略、不发布
  loader: glob({ pattern: ['**/*.md', '!**/_*'], base: './src/content/entries' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // 记录日期，用来排时间线
      date: z.coerce.date(),
      // 第几周（可选），首页会用它分组
      week: z.number().optional(),
      // 一句话摘要，显示在时间线卡片上
      summary: z.string().optional(),
      // 阶段 / 类型标签：Reflection / 头脑风暴 / 草图 / 原型 ...
      tags: z.array(z.string()).default([]),
      // 封面图：把图片放进这篇文章旁边或 src/assets，然后写相对路径
      cover: image().optional(),
      // 设为 true 可暂时隐藏（草稿）
      draft: z.boolean().default(false),
    }),
});

export const collections = { entries };
