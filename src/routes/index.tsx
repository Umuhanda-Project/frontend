import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import { Contact } from "../pages";

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>
    },{
        path: "/contact",
        element: <Contact/>
    }
])

const RouteProvider = () => <RouterProvider router={router}/>

export default RouteProvider