import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import { Contact } from "../pages";
import Signin from "../pages/auth";

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>
    },{
        path: "/contact",
        element: <Contact/>
    },{
        path: "/signin",
        element:<Signin/>
    }
])

const RouteProvider = () => <RouterProvider router={router}/>

export default RouteProvider