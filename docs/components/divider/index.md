---
nav:
  title: 组件
  path: /components
group:
  title: 布局
---

# Divider 分割线

区隔内容的分割线。

## 何时使用

- 对不同章节的文本段落进行分割
- 对行内文字/链接进行分割，例如表格的操作列

## 代码演示

### 水平分割线

默认为水平分割线，可在中间加入文字。

```tsx
import React from 'react';
import { Divider } from 'gii';

export default () => (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne meministi licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne meministi licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider dashed />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne meministi licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
  </>
);
```

### 带文字的分割线

分割线中带有文字，可以用 `orientation` 指定文字位置。

```tsx
import React from 'react';
import { Divider } from 'gii';

export default () => (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne meministi licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider>Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne meministi licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider orientation="left">Left Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne meministi licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider orientation="right">Right Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne meministi licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
  </>
);
```

### 文字位置偏移

使用 `orientationMargin` 指定分割文字与边框的距离。

```tsx
import React from 'react';
import { Divider } from 'gii';

export default () => (
  <>
    <Divider orientation="left" orientationMargin="0px">
      Left Text with 0px orientationMargin
    </Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne meministi licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider orientation="right" orientationMargin="50px">
      Right Text with 50px orientationMargin
    </Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne meministi licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
  </>
);
```

### 垂直分割线

使用 `type="vertical"` 设置为行内的垂直分割线。

```tsx
import React from 'react';
import { Divider } from 'gii';

export default () => (
  <>
    Text
    <Divider type="vertical" />
    <a href="#">Link</a>
    <Divider type="vertical" />
    <a href="#">Link</a>
  </>
);
```

### 普通文字样式

使用 `plain` 可以设置为更轻量的分割文字样式。

```tsx
import React from 'react';
import { Divider } from 'gii';

export default () => (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne meministi licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider plain>Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne meministi licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider plain orientation="left">Left Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne meministi licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider plain orientation="right">Right Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne meministi licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
  </>
);
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| children | 分割线内容 | ReactNode | - |
| className | 分割线样式类 | string | - |
| dashed | 是否虚线 | boolean | false |
| orientation | 分割线标题的位置 | `left` \| `right` \| `center` | `center` |
| orientationMargin | 标题和最近 left/right 边框之间的距离，去除了分割线，同时 `orientation` 必须为 `left` 或 `right` | string \| number | - |
| plain | 文字是否显示为普通正文样式 | boolean | false |
| type | 水平还是垂直类型 | `horizontal` \| `vertical` | `horizontal` |
