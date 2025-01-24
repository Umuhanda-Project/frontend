import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import { Contact } from "../pages";
import { ResetPassword, Signin, Signup } from "../pages/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },{
    path:"/reset",
    element:<ResetPassword/>
  }
]);

const RouteProvider = () => <RouterProvider router={router} />;

export default RouteProvider;
