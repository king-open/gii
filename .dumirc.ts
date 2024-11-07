import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'gii',
    nav: [
      { title: '首页', link: '/' },
      { title: '组件', link: '/components' },
    ],
  },
  alias: {
    gii: '/src',
  },
});
