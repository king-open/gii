import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'dumi';
import { useTheme } from '../../context/ThemeContext';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';

const NavWrapper = styled.nav<{ isDarkMode: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.isDarkMode ? '#1f1f1f' : '#ffffff'};
  color: ${props => props.isDarkMode ? '#ffffff' : '#000000'};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.3s;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 24px;
`;

const NavLink = styled.a<{ active?: boolean }>`
  color: inherit;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  background: ${props => props.active ? 'rgba(0, 0, 0, 0.1)' : 'transparent'};
  
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TopNav: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <NavWrapper isDarkMode={isDarkMode}>
      <Logo>GII</Logo>
      <NavLinks>
        <Link to="/">
          <NavLink as="span" active={location.pathname === '/'}>
            首页
          </NavLink>
        </Link>
        <Link to="/components">
          <NavLink as="span" active={location.pathname.startsWith('/components')}>
            组件
          </NavLink>
        </Link>
        <ThemeToggle onClick={toggleTheme}>
          {isDarkMode ? <MoonOutlined /> : <SunOutlined />}
        </ThemeToggle>
      </NavLinks>
    </NavWrapper>
  );
};

export default TopNav; 
