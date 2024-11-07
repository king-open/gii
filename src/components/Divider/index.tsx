import React from 'react';
import styled from 'styled-components';

export interface DividerProps {
  type?: 'horizontal' | 'vertical';
  orientation?: 'left' | 'right' | 'center';
  orientationMargin?: string | number;
  className?: string;
  children?: React.ReactNode;
  dashed?: boolean;
  plain?: boolean;
}

const StyledDivider = styled.div<{
  $type: 'horizontal' | 'vertical';
  $orientation: 'left' | 'right' | 'center';
  $orientationMargin?: string | number;
  $hasChildren: boolean;
  $dashed: boolean;
  $plain: boolean;
}>`
  box-sizing: border-box;
  margin: 24px 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5714285714285714;
  list-style: none;
  font-feature-settings: 'tnum';
  border: none;
  border-top: ${props => props.$dashed ? '1px dashed rgba(5, 5, 5, 0.06)' : '1px solid rgba(5, 5, 5, 0.06)'};

  ${props => props.$type === 'vertical' && `
    position: relative;
    top: -0.06em;
    display: inline-block;
    height: 0.9em;
    margin: 0 8px;
    vertical-align: middle;
    border-top: 0;
    border-left: ${props.$dashed ? '1px dashed rgba(5, 5, 5, 0.06)' : '1px solid rgba(5, 5, 5, 0.06)'};
  `}

  ${props => props.$hasChildren && `
    display: flex;
    align-items: center;
    border-top-color: rgba(5, 5, 5, 0.06);
    
    &::before,
    &::after {
      content: '';
      flex: 1;
      border-top: ${props.$dashed ? '1px dashed rgba(5, 5, 5, 0.06)' : '1px solid rgba(5, 5, 5, 0.06)'};
    }

    ${props.$orientation === 'left' && `
      &::before {
        width: ${props.$orientationMargin || '0'};
        min-width: ${props.$orientationMargin || '0'};
      }
    `}

    ${props.$orientation === 'right' && `
      &::after {
        width: ${props.$orientationMargin || '0'};
        min-width: ${props.$orientationMargin || '0'};
      }
    `}
  `}
`;

const DividerInner = styled.span<{ $plain: boolean }>`
  display: inline-block;
  padding: 0 1em;
  font-weight: ${props => props.$plain ? 'normal' : 500};
  font-size: ${props => props.$plain ? '14px' : '16px'};
  white-space: nowrap;
`;

const Divider: React.FC<DividerProps> = ({
  type = 'horizontal',
  orientation = 'center',
  orientationMargin,
  className,
  children,
  dashed = false,
  plain = false,
}) => {
  return (
    <StyledDivider
      className={className}
      $type={type}
      $orientation={orientation}
      $orientationMargin={orientationMargin}
      $hasChildren={!!children}
      $dashed={dashed}
      $plain={plain}
    >
      {children && <DividerInner $plain={plain}>{children}</DividerInner>}
    </StyledDivider>
  );
};

export default Divider;
