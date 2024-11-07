import { Outlet } from 'dumi';
import { Layout } from 'dumi-theme-default';
import React from 'react';

const CustomLayout: React.FC = () => {
  return (
    <Layout footer="Copyright © 2024 安东尼">
      <Outlet />
    </Layout>
  );
};

export default CustomLayout;
