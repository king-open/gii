import React, { FC, ReactNode } from 'react';
import { ThemeProvider } from '../../../src/context/ThemeContext';
import TopNav from '../../../src/components/TopNav';
import styled from 'styled-components';

const Layout = styled.div<{ isDarkMode?: boolean }>`
  min-height: 100vh;
  padding-top: 64px;
`;

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
`;

interface LayoutProps {
  children: ReactNode;
}

const BasicLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <Layout>
        <TopNav />
        <MainContent>
          {children}
        </MainContent>
      </Layout>
    </ThemeProvider>
  );
};

export default BasicLayout; 
