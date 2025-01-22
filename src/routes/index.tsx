import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>
    }
])

const RouteProvider = () => <RouterProvider router={router}/>

export default RouteProvider