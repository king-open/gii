---
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
---

# Switch 开关

开关选择器。

## 何时使用

- 需要表示开关状态/两种状态之间的切换时
- 和 checkbox 的区别是，切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合

## 代码演示

### 基本用法

最简单的用法。

```tsx
import React, { useState } from 'react';
import { Switch } from 'gii';

export default () => {
  const [checked, setChecked] = useState(false);
  return (
    <Switch 
      checked={checked} 
      onChange={setChecked}
    />
  );
};
```

### 禁用状态

Switch 失效状态。

```tsx
import React from 'react';
import { Switch } from 'gii';

export default () => (
  <div style={{ display: 'flex', gap: '16px' }}>
    <Switch disabled />
    <Switch disabled checked />
  </div>
);
```

### 带有文字

带有文字的开关。

```tsx
import React from 'react';
import { Switch } from 'gii';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

export default () => (
  <div style={{ display: 'flex', gap: '16px' }}>
    <Switch 
      checkedChildren="开" 
      unCheckedChildren="关" 
      defaultChecked 
    />
    <Switch
      checkedChildren="1"
      unCheckedChildren="0"
    />
    <Switch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      defaultChecked
    />
  </div>
);
```

### 两种大小

`size="small"` 表示小号开关。

```tsx
import React from 'react';
import { Switch } from 'gii';

export default () => (
  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
    <Switch defaultChecked />
    <Switch size="small" defaultChecked />
  </div>
);
```

### 加载中

标识开关操作仍在执行中。

```tsx
import React from 'react';
import { Switch } from 'gii';

export default () => (
  <div style={{ display: 'flex', gap: '16px' }}>
    <Switch loading defaultChecked />
    <Switch size="small" loading />
  </div>
);
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checked | 指定当前是否选中 | boolean | false |
| defaultChecked | 初始是否选中 | boolean | false |
| disabled | 是否禁用 | boolean | false |
| loading | 加载中的开关 | boolean | false |
| size | 开关大小 | `default` \| `small` | `default` |
| checkedChildren | 选中时的内容 | ReactNode | - |
| unCheckedChildren | 非选中时的内容 | ReactNode | - |
| onChange | 变化时的回调函数 | (checked: boolean) => void | - |
| className | 额外的 class | string | - |
