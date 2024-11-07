import React from 'react';
import styled from 'styled-components';
import { LoadingOutlined } from '@ant-design/icons';

export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  loading?: boolean;
  size?: 'default' | 'small';
  checkedChildren?: React.ReactNode;
  unCheckedChildren?: React.ReactNode;
  onChange?: (checked: boolean) => void;
  className?: string;
}

const SwitchWrapper = styled.button<{
  $checked: boolean;
  $disabled?: boolean;
  $size?: 'default' | 'small';
  $loading?: boolean;
}>`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  min-width: ${props => props.$size === 'small' ? '28px' : '44px'};
  height: ${props => props.$size === 'small' ? '16px' : '22px'};
  line-height: ${props => props.$size === 'small' ? '16px' : '22px'};
  padding: 0;
  vertical-align: middle;
  background: ${props => props.$checked ? '#1890ff' : 'rgba(0, 0, 0, 0.25)'};
  border: 0;
  border-radius: 100px;
  cursor: ${props => (props.$disabled || props.$loading) ? 'not-allowed' : 'pointer'};
  transition: all 0.2s;
  opacity: ${props => props.$disabled ? 0.4 : 1};

  &:focus {
    outline: none;
  }

  &:hover:not(:disabled) {
    background: ${props => props.$checked ? '#40a9ff' : 'rgba(0, 0, 0, 0.45)'};
  }
`;

const SwitchHandle = styled.span<{
  $checked: boolean;
  $size?: 'default' | 'small';
}>`
  position: absolute;
  top: ${props => props.$size === 'small' ? '2px' : '2px'};
  left: ${props => {
    if (props.$size === 'small') {
      return props.$checked ? '12px' : '2px';
    }
    return props.$checked ? '22px' : '2px';
  }};
  width: ${props => props.$size === 'small' ? '12px' : '18px'};
  height: ${props => props.$size === 'small' ? '12px' : '18px'};
  background: white;
  border-radius: 50%;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SwitchChildren = styled.span<{
  $checked: boolean;
  $size?: 'default' | 'small';
}>`
  display: block;
  margin: 0 7px 0 ${props => props.$checked ? '7px' : '25px'};
  color: #fff;
  font-size: ${props => props.$size === 'small' ? '12px' : '14px'};
  transition: margin 0.2s;
`;

const Switch: React.FC<SwitchProps> = ({
  checked,
  defaultChecked = false,
  disabled = false,
  loading = false,
  size = 'default',
  checkedChildren,
  unCheckedChildren,
  onChange,
  className,
}) => {
  const [innerChecked, setInnerChecked] = React.useState(defaultChecked);
  const mergedChecked = checked ?? innerChecked;

  const handleClick = () => {
    if (disabled || loading) return;
    
    if (checked === undefined) {
      setInnerChecked(!innerChecked);
    }
    onChange?.(!mergedChecked);
  };

  return (
    <SwitchWrapper
      type="button"
      role="switch"
      aria-checked={mergedChecked}
      $checked={mergedChecked}
      $disabled={disabled}
      $size={size}
      $loading={loading}
      onClick={handleClick}
      className={className}
    >
      <SwitchHandle 
        $checked={mergedChecked} 
        $size={size}
      >
        {loading && <LoadingOutlined style={{ fontSize: size === 'small' ? '8px' : '12px' }} />}
      </SwitchHandle>
      {(checkedChildren || unCheckedChildren) && (
        <SwitchChildren $checked={mergedChecked} $size={size}>
          {mergedChecked ? checkedChildren : unCheckedChildren}
        </SwitchChildren>
      )}
    </SwitchWrapper>
  );
};

export default Switch; 
