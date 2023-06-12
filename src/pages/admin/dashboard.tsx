import { Outlet } from "react-router";

const DashBoard = () => {
    return (
        <div>
            dashboard
            <Outlet />
        </div>
    )
}

export default DashBoard;