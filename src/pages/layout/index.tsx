import { Spin } from 'antd';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { selectIsGlobalLoading } from '../../store/slice/authen/slice';

const Layout = () => {
  const isLoading = useSelector(selectIsGlobalLoading);

  useEffect(() => {
    const handleRefreshToken = async () => {
      //   const data = await refresh({
      //     refresh: JSON.stringify(localStorage.getItem('refreshToken')),
      //   });
      //   console.log(data);
      // };
      // console.log(JSON.stringify(localStorage.getItem('refreshToken')));
      // const user = JSON.parse(localStorage.getItem('user'));
      // const data = await getIdTokenResult()
      // console.log(user);
    };
    handleRefreshToken();
  }, []);

  return (
    <Spin spinning={isLoading} tip="Loading" size="small">
      <div style={{ height: '100%' }}>
        <Outlet />
      </div>
    </Spin>
  );
};

export default Layout;
