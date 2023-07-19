import React from 'react';
import { Layout, theme } from 'antd';
import AdminNavBar from '../admin/partials/navBar';
import { Outlet } from 'react-router-dom';

const { Header, Content } = Layout;

const AdminLayout: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AdminNavBar />
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
