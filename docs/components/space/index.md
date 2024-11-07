# Space 间距

设置组件之间的间距。

## 何时使用

避免组件紧贴在一起，拉开统一的空间。

- 适合行内元素的水平间距
- 可以设置各种水平对齐方式
- 支持子元素按照垂直或水平方向排列

## 与 Flex 组件的区别

- **Space**: 为内联元素提供间距，会为每个子元素添加包裹元素用于内联对齐。适用于行、列中多个子元素的等距排列。
- **Flex**: 为块级元素提供间距，不会添加额外的包裹元素。适用于垂直或水平方向上的子元素布局，并提供更多的灵活性和控制能力。

## 代码演示

### 基本用法
```tsx
import Space from '../../../src/components/Space';
import Button from '../../../src/components/Button';

const App: React.FC = () => (
  <Space>
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="link">Link</Button>
  </Space>
);

export default App;
```

### 垂直间距
```tsx
import Space from '../../../src/components/Space';
import Button from '../../../src/components/Button';

const App: React.FC = () => (
  <Space direction="vertical">
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="link">Link</Button>
  </Space>
);

export default App;
```

### 间距大小
```tsx
import Space from '../../../src/components/Space';
import Button from '../../../src/components/Button';

const App: React.FC = () => (
  <>
    <Space size={8}>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
    </Space>
    <br />
    <Space size={16}>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
    </Space>
    <br />
    <Space size={24}>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
    </Space>
  </>
);

export default App;
```

### 对齐方式
```tsx
import Space from '../../../src/components/Space';
import Button from '../../../src/components/Button';

const App: React.FC = () => (
  <>
    <Space align="start">
      <Button type="primary">Primary</Button>
      <div style={{ padding: '32px', background: 'rgba(150, 150, 150, 0.2)' }}>Block</div>
    </Space>
    <br />
    <Space align="center">
      <Button type="primary">Primary</Button>
      <div style={{ padding: '32px', background: 'rgba(150, 150, 150, 0.2)' }}>Block</div>
    </Space>
    <br />
    <Space align="end">
      <Button type="primary">Primary</Button>
      <div style={{ padding: '32px', background: 'rgba(150, 150, 150, 0.2)' }}>Block</div>
    </Space>
    <br />
    <Space align="baseline">
      <Button type="primary">Primary</Button>
      <div style={{ padding: '32px', background: 'rgba(150, 150, 150, 0.2)' }}>Block</div>
    </Space>
  </>
);

export default App;
```

### 自动换行
```tsx
import Space from '../../../src/components/Space';
import Button from '../../../src/components/Button';

const App: React.FC = () => (
  <Space size={[8, 16]} wrap style={{ maxWidth: '100%' }}>
    {['Primary', 'Default', 'Dashed', 'Link', 'Text', 'Search', 'Loading', 'Download', 'Submit', 'Edit'].map((text, index) => (
      <Button 
        key={index}
        type={index === 0 ? 'primary' : undefined}
        style={{
          borderRadius: '6px',
          transition: 'all 0.2s ease',
        }}
      >
        {text}
      </Button>
    ))}
  </Space>
);

export default App;
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| align | 对齐方式 | `start` \| `end` \| `center` \| `baseline` | - |
| direction | 间距方向 | `vertical` \| `horizontal` | `horizontal` |
| size | 间距大小 | `small` \| `middle` \| `large` \| number \| [number, number] | `small` |
| wrap | 是否自动换行 | boolean | false |
| className | 自定义类名 | string | - |
| style | 自定义样式 | CSSProperties | - |
