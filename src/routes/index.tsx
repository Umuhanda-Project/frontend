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
import {
  Home,
  Lessons,
  Settings,
  Exam,
  Lesson,
} from "../pages/dashboard/client";

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
    path: "/client",
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "lessons",
        children: [
          {
            path: "",
            element: <Lessons />,
          },
          {
            path: "lesson/:id",
            element: <Lesson />,
          },
        ],
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "exam",
        element: <Exam />,
      },
    ],
  },
]);

const RouteProvider = () => <RouterProvider router={router} />;

export default RouteProvider;
