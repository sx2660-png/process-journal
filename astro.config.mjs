// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // 部署到 GitHub Pages 时，把下面两行改成你自己的：
  //   site: 'https://<你的用户名>.github.io',
  //   base: '/<仓库名>',   // 如果部署在 <用户名>.github.io/<仓库名> 才需要
  site: 'https://example.github.io',
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
});
