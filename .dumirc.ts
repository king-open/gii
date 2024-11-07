import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  base: '/gii/',
  publicPath: '/gii/',
  themeConfig: {
    name: 'gii',
    logo: '/images/logo.svg',
    darkMode: {
      logo: '/images/logo-dark.svg',
    },
    nav: [
      { title: '快速开始', link: '/quick-start' },
      { title: '组件', link: '/components' },
    ],
    footer: 'Copyright ©  安东尼'
  },
  alias: {
    'gii': '/src',
  },
  favicons: ['/images/logo.svg'],
});
