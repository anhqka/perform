import { Spin } from "antd";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import { selectIsGlobalLoading } from "../../store/slice/authen/slice";

const Layout = () => {
  const isLoading = useSelector(selectIsGlobalLoading);

  return (
    <Spin spinning={isLoading} tip="Loading" size="small">
      <div style={{height: "100%"}}>
        <Outlet />
      </div>
    </Spin>
  );
};

export default Layout;
