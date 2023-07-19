import { Menu, Layout } from 'antd';
import { useNavigate } from 'react-router-dom';
import { adminNavRouter } from '../../../configs/router';
const { Sider } = Layout;

const AdminNavBar = () => {
  const navigate = useNavigate();

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        // console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        // console.log(collapsed, type);
      }}
    >
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['4']}
        items={adminNavRouter}
        onClick={(e) => navigate(e.key)}
      />
    </Sider>
  );
};

export default AdminNavBar;
