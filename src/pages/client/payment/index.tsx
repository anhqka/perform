import { UserOutlined } from '@ant-design/icons';
import { Col, Layout, Menu, MenuProps, Row } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

type MenuItem = Required<MenuProps>['items'][number];

const Payment = () => {
  const [current, setCurrent] = useState('1');
  const dispatch = useDispatch();

  const onClick = (e: any) => {
    setCurrent(e.key);
  };

  function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

  const items: MenuItem[] = [
    getItem('User', 'sub1', <UserOutlined />, [getItem('Đăng xuất', 'logout')]),
  ];

  useEffect(() => {
    switch (current) {
      case 'logout':
        console.log('in');

        break;
      default:
        break;
    }
  }, [current, dispatch]);

  return (
    <Layout style={{ height: '100vh' }}>
      <Row>
        <Col xs={1} sm={2}></Col>
        <Col>
          <Content>
            <Row>
              <Menu
                onClick={onClick}
                style={{ width: 256 }}
                defaultOpenKeys={['sub1']}
                selectedKeys={[current]}
                mode="inline"
                items={items}
              />

              <Col span={16}></Col>
            </Row>
            <Col xs={1} sm={2}></Col>
          </Content>
        </Col>
      </Row>
    </Layout>
  );
};

export default Payment;
