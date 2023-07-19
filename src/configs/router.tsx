import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

const adminNavRouter = [
  {
    key: '/admin',
    icon: <UserOutlined />,
    label: 'nav 1',
  },
  {
    key: '/admin/#',
    icon: <VideoCameraOutlined />,
    label: 'nav 2',
  },
  {
    key: '/admin/##',
    icon: <UploadOutlined />,
    label: 'nav 3',
  },
];

export { adminNavRouter };
