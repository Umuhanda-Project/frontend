import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import { Contact } from "../pages";
import {
  PasswordConfirmation,
  ResetPassword,
  Signin,
  Signup,
  VerificationCode,
} from "../pages/auth";
import Home from "../pages/dashboard/client/Home";
import Lessons from "../pages/dashboard/client/Lessons";

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
  },
  {
    path: "/reset",
    element: <ResetPassword />,
  },
  {
    path: "/verificationcode",
    element: <VerificationCode />,
  },
  {
    path: "/passwordconfirmation",
    element: <PasswordConfirmation />,
  },
  {
    path:"/client",
    children:[
        {
            path:"",
            element:<Home/>
        },
        {
            path:"lessons",
            element:<Lessons/>
        }
    ]
  }
]);

const RouteProvider = () => <RouterProvider router={router} />;

export default RouteProvider;
