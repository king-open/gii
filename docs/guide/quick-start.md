---
title: 快速开始
order: 1
nav:
  title: 指南
  order: 1
---

# 快速开始

## 安装

使用 npm 或 yarn 安装

```bash
# npm
npm install gii

# yarn
yarn add gii

# pnpm
pnpm add gii
```

## 使用

```jsx | pure
import { Button } from 'gii';

function App() {
  return <Button type="primary">Hello GII!</Button>;
}

export default App;
```

## 按需加载

Gii 默认支持基于 ES modules 的 tree shaking，直接引入组件即可。

```jsx | pure
import { Button } from 'gii'; // 只会打包 Button 组件的代码和样式
```

## TypeScript

Gii 使用 TypeScript 编写，提供完整的类型定义。

```tsx | pure
import type { ButtonProps } from 'gii';

const props: ButtonProps = {
  type: 'primary',
  size: 'large',
};
```

## 浏览器兼容性

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari |
| --- | --- | --- | --- |
| Edge ≥ 79 | Firefox ≥ 78 | Chrome ≥ 64 | Safari ≥ 12 |

## 本地开发

克隆项目并安装依赖：

```bash
$ git clone https://github.com/your-username/gii.git
$ cd gii
$ npm install
```

启动开发服务：

```bash
$ npm start
```

## 反馈与共建

如果在使用过程中发现任何问题，或者有好的建议，欢迎在 GitHub Issues 中反馈：

- [反馈问题](https://github.com/your-username/gii/issues)
- [提交 PR](https://github.com/your-username/gii/pulls)

## 更新日志

访问 [GitHub Releases](https://github.com/your-username/gii/releases) 查看详细的更新日志。 
