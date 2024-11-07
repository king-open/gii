import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  base: '/gii/',
  publicPath: '/gii/',
  themeConfig: {
    name: 'gii',
    logo: '/gii/images/logo.svg',
    darkMode: {
      logo: '/gii/images/logo-dark.svg',
    },
    nav: [
      { title: '快速开始', link: '/gii/quick-start' },
      { title: '组件', link: '/gii/components' },
    ],
    footer: 'Copyright ©  安东尼'
  },
  alias: {
    'gii': '/src',
  },
  favicons: ['/gii/images/logo.svg'],
});
