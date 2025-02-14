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
import ExamQuestions from "../pages/dashboard/client/ExamQuestions";
import ExamAnswers from "../pages/dashboard/client/components/ExamAnswers";
import Igazeti from "../pages/dashboard/client/Igazeti";
import PdfRender from "../PdfRender"

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
    path: "/pdf",
    element:<PdfRender/>

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
        path: "igazeti",
        element: <Igazeti/>

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
        children: [
          {
            path: "",
            element: <Exam />,
          },
          {
            path: "questions",
            element: <ExamQuestions />,
          },
          {
            path: "answers",
            element: <ExamAnswers />,
          },
        ],
      },
    ],
  },
]);

const RouteProvider = () => <RouterProvider router={router} />;

export default RouteProvider;
