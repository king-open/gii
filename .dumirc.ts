import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'gii',
    nav: [
      { title: '快速开始', link: '/quick-start' },
      { title: '组件', link: '/components' },
    ],
    footer: 'Copyright © 2024 安东尼'
  },
  alias: {
    'gii': '/src',
  },
});
