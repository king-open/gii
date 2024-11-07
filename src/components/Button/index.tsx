import React from 'react';
import styled, { css } from 'styled-components';
import { LoadingOutlined } from '@ant-design/icons';

export type ButtonType = 'primary' | 'default' | 'dashed' | 'text' | 'link';
export type ButtonSize = 'large' | 'middle' | 'small';

export interface ButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  danger?: boolean;
  ghost?: boolean;
  icon?: React.ReactNode;
  href?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

const getButtonColors = (props: StyledButtonProps) => {
  const { type, danger, ghost, disabled } = props;
  
  if (disabled) {
    return css`
      color: rgba(0, 0, 0, 0.25);
      background: #f5f5f5;
      border-color: #d9d9d9;
      text-shadow: none;
      box-shadow: none;
    `;
  }

  if (type === 'primary') {
    if (ghost) {
      return css`
        color: #1890ff;
        background: transparent;
        border-color: #1890ff;
        &:hover {
          color: #40a9ff;
          border-color: #40a9ff;
        }
      `;
    }
    return css`
      color: #fff;
      background: ${danger ? '#ff4d4f' : '#1890ff'};
      border-color: ${danger ? '#ff4d4f' : '#1890ff'};
      &:hover {
        background: ${danger ? '#ff7875' : '#40a9ff'};
        border-color: ${danger ? '#ff7875' : '#40a9ff'};
      }
    `;
  }

  if (type === 'dashed') {
    return css`
      color: ${danger ? '#ff4d4f' : 'rgba(0, 0, 0, 0.85)'};
      background: transparent;
      border-color: #d9d9d9;
      border-style: dashed;
      &:hover {
        color: #40a9ff;
        border-color: #40a9ff;
      }
    `;
  }

  if (type === 'text') {
    return css`
      color: ${danger ? '#ff4d4f' : 'rgba(0, 0, 0, 0.85)'};
      background: transparent;
      border-color: transparent;
      &:hover {
        background: rgba(0, 0, 0, 0.018);
      }
    `;
  }

  if (type === 'link') {
    return css`
      color: ${danger ? '#ff4d4f' : '#1890ff'};
      background: transparent;
      border-color: transparent;
      &:hover {
        color: ${danger ? '#ff7875' : '#40a9ff'};
      }
    `;
  }

  // default
  return css`
    color: ${danger ? '#ff4d4f' : 'rgba(0, 0, 0, 0.85)'};
    background: #fff;
    border-color: #d9d9d9;
    &:hover {
      color: #40a9ff;
      border-color: #40a9ff;
    }
  `;
};

interface StyledButtonProps extends ButtonProps {
  $loading?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  border: 1px solid transparent;
  cursor: ${props => (props.disabled || props.$loading) ? 'not-allowed' : 'pointer'};
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
  touch-action: manipulation;
  padding: 4px 15px;
  font-size: 14px;
  border-radius: 2px;
  outline: none;

  ${props => getButtonColors(props)}

  ${props => props.size === 'large' && css`
    height: 40px;
    padding: 6.4px 15px;
    font-size: 16px;
  `}

  ${props => props.size === 'small' && css`
    height: 24px;
    padding: 0 7px;
    font-size: 14px;
  `}

  .icon {
    margin-right: ${props => props.children ? '8px' : '0'};
  }

  .loading {
    margin-right: ${props => props.children ? '8px' : '0'};
    animation: loadingCircle 1s infinite linear;
  }

  @keyframes loadingCircle {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Button: React.FC<ButtonProps> = ({
  type = 'default',
  size = 'middle',
  disabled = false,
  loading = false,
  danger = false,
  ghost = false,
  icon,
  href,
  className,
  children,
  onClick,
  ...rest
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (loading || disabled) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  const iconNode = loading ? <LoadingOutlined className="loading" /> : icon ? <span className="icon">{icon}</span> : null;

  if (type === 'link' && href) {
    return (
      <StyledButton
        as="a"
        href={href}
        type={type}
        size={size}
        disabled={disabled}
        $loading={loading}
        danger={danger}
        ghost={ghost}
        className={className}
        onClick={handleClick}
        {...rest}
      >
        {iconNode}
        {children}
      </StyledButton>
    );
  }

  return (
    <StyledButton
      type={type}
      size={size}
      disabled={disabled}
      $loading={loading}
      danger={danger}
      ghost={ghost}
      className={className}
      onClick={handleClick}
      {...rest}
    >
      {iconNode}
      {children}
    </StyledButton>
  );
};

export default Button;
