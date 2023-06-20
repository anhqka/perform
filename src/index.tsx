import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

import Layout from "./pages/layout";
import Category from "./pages/admin/category";
import AdminLayout from "./pages/layout/admin";
import ClientLayout from "./pages/layout/client";
import HomePage from "./pages/client/homePage";
import SignIn from "./pages/admin/authen/signIn";
import DashBoard from "./pages/admin/dashboard";
import { PrivateRoute } from "./PrivateRoute";

const route = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute component={AdminLayout} />,
    children: [
      {
        path: "/",
        element: <ClientLayout />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
          {
            path: "sign-in",
            element: <SignIn />,
          },
        ],
      },
      {
        path: "/admin",
        element: <PrivateRoute component={AdminLayout} />,
        children: [
          {
            path: "",
            element: <DashBoard />,
          },
          {
            path: "category",
            element: <Category />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <RouterProvider router={route} />
  </Provider>
);
