import React from 'react';
import classNames from 'classnames';

export interface SpaceProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  /**
   * 对齐方式
   */
  align?: 'start' | 'end' | 'center' | 'baseline';
  /**
   * 间距方向
   */
  direction?: 'vertical' | 'horizontal';
  /**
   * 间距大小
   */
  size?: 'small' | 'middle' | 'large' | number | [number, number];
  /**
   * 设置分隔符
   */
  split?: React.ReactNode;
  /**
   * 是否自动换行
   */
  wrap?: boolean;
}

const spaceSize = {
  small: 8,
  middle: 16,
  large: 24,
};

const Space: React.FC<SpaceProps> = ({
  className,
  style,
  children,
  direction = 'horizontal',
  size = 'small',
  align,
  split,
  wrap = false,
}) => {
  const childrenArray = React.Children.toArray(children).filter(child => child);
  
  if (childrenArray.length === 0) {
    return null;
  }

  const mergedAlign = align || (direction === 'horizontal' ? 'center' : undefined);
  const [horizontalSize, verticalSize] = React.useMemo(() => {
    if (Array.isArray(size)) {
      return size;
    }
    return [size, size];
  }, [size]);

  const marginDirection = direction === 'vertical' ? 'marginBottom' : 'marginRight';
  const sizeValue = typeof horizontalSize === 'string' ? spaceSize[horizontalSize] : horizontalSize;
  const verticalSizeValue = typeof verticalSize === 'string' ? spaceSize[verticalSize] : verticalSize;

  const containerClassName = classNames(
    'flex',
    {
      'flex-col': direction === 'vertical',
      'items-start': mergedAlign === 'start',
      'items-end': mergedAlign === 'end',
      'items-center': mergedAlign === 'center',
      'items-baseline': mergedAlign === 'baseline',
      'flex-wrap': wrap,
    },
    className
  );

  const items = childrenArray.map((child, i) => {
    const itemClassName = classNames({
      [`mb-${verticalSizeValue}`]: wrap && i < childrenArray.length - 1,
    });

    // 处理分隔符
    if (split && i < childrenArray.length - 1) {
      return (
        <React.Fragment key={i}>
          <div className={itemClassName}>{child}</div>
          <div 
            style={{ 
              [marginDirection]: sizeValue / 2,
              marginLeft: sizeValue / 2 
            }}
            className="flex-none"
          >
            {split}
          </div>
        </React.Fragment>
      );
    }

    return (
      <div
        key={i}
        className={itemClassName}
        style={{
          [marginDirection]: i < childrenArray.length - 1 ? sizeValue : 0,
        }}
      >
        {child}
      </div>
    );
  });

  return (
    <div className={containerClassName} style={style}>
      {items}
    </div>
  );
};

export default Space;
