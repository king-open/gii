import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  base: '/gii/',
  publicPath: '/gii/',
  themeConfig: {
    name: 'gii',
    logo: '/gii/images/logo.svg',
    nav: [
      { title: '快速开始', link: '/gii/quick-start' },
      { title: '组件', link: '/gii/components' },
    ],
    footer: 'Copyright © 2024 安东尼',
    socialLinks: {
      github: 'https://github.com/king-open/gii'
    }
  },
  alias: {
    'gii': '/src',
  },
  favicons: ['/gii/images/logo.svg'],
  resolve: {
    docDirs: ['docs'],
  },
});
