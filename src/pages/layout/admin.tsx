import { Outlet } from "react-router";

const AdminLayout = () => {
    return (
        <div>
            dashboard
            <Outlet />
        </div>
    )
}

export default AdminLayout;