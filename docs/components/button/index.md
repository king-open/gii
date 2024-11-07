---
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
---

# Button 按钮

按钮用于开始一个即时操作。

## 代码演示

### 按钮类型

```tsx
import React from 'react';
import { Button } from 'gii';

export default () => (
  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </div>
);
```

### 按钮变体

按钮支持 Solid、Outlined、Dashed 和 Filled 四种变体样式。

```tsx
import React from 'react';
import { Button } from 'gii';

export default () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <div style={{ display: 'flex', gap: '8px' }}>
      <Button type="primary">Solid</Button>
      <Button>Outlined</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="primary" ghost>Filled</Button>
    </div>
    <div style={{ display: 'flex', gap: '8px' }}>
      <Button type="text">Text</Button>
      <Button type="link">Link</Button>
    </div>
    <div style={{ display: 'flex', gap: '8px' }}>
      <Button type="primary" danger>Solid</Button>
      <Button danger>Outlined</Button>
      <Button type="dashed" danger>Dashed</Button>
      <Button type="primary" ghost danger>Filled</Button>
    </div>
    <div style={{ display: 'flex', gap: '8px' }}>
      <Button type="text" danger>Text</Button>
      <Button type="link" danger>Link</Button>
    </div>
  </div>
);
```

### 按钮尺寸

按钮有大、中、小三种尺寸。

```tsx
import React from 'react';
import { Button } from 'gii';
import { SearchOutlined } from '@ant-design/icons';

export default () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Button size="large" type="primary">Large</Button>
      <Button type="primary">Default</Button>
      <Button size="small" type="primary">Small</Button>
    </div>
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Button size="large" type="primary" icon={<SearchOutlined />} />
      <Button type="primary" icon={<SearchOutlined />} />
      <Button size="small" type="primary" icon={<SearchOutlined />} />
    </div>
  </div>
);
```

### 加载中状态

添加 loading 属性即可让按钮处于加载状态。

```tsx
import React, { useState } from 'react';
import { Button } from 'gii';
import { PoweroffOutlined } from '@ant-design/icons';

export default () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Button type="primary" loading>Loading</Button>
      <Button type="primary" loading={loading} onClick={handleClick}>
        Click me!
      </Button>
      <Button type="primary" icon={<PoweroffOutlined />} loading />
    </div>
  );
};
```

### 危险按钮

危险按钮用于警示用户需要谨慎操作。

```tsx
import React from 'react';
import { Button } from 'gii';

export default () => (
  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
    <Button type="primary" danger>Primary</Button>
    <Button danger>Default</Button>
    <Button type="dashed" danger>Dashed</Button>
    <Button type="text" danger>Text</Button>
    <Button type="link" danger>Link</Button>
  </div>
);
```

### 幽灵按钮

幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。

```tsx
import React from 'react';
import { Button } from 'gii';

export default () => (
  <div style={{ background: '#1890ff', padding: 16, display: 'flex', gap: '8px' }}>
    <Button type="primary" ghost>Primary</Button>
    <Button ghost>Default</Button>
    <Button type="dashed" ghost>Dashed</Button>
  </div>
);
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 按钮类型 | `primary` \| `default` \| `dashed` \| `text` \| `link` | `default` |
| size | 按钮大小 | `large` \| `middle` \| `small` | `middle` |
| danger | 设置危险按钮 | boolean | false |
| ghost | 幽灵属性，使按钮背景透明 | boolean | false |
| disabled | 按钮失效状态 | boolean | false |
| loading | 设置按钮载入状态 | boolean | false |
| icon | 设置按钮的图标组件 | ReactNode | - |
| href | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | string | - |
| onClick | 点击按钮时的回调 | (event) => void | - |
