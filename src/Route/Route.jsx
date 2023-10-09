import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import PrivetRoute from "./PrivetRoute";
import SpatialEvent from "../Pages/PrivetPage/SpatialEvent/SpatialEvent";
import Vanue from "../Pages/PrivetPage/Vanue/Vanue";

const Route = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                loader: () => fetch('/service.json'),
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/details/:id',
                loader: () => fetch('/service.json'),
                element: <PrivetRoute><ServiceDetails></ServiceDetails></PrivetRoute>
            },
            {
                path:'/spatialevent',
                element:<PrivetRoute><SpatialEvent></SpatialEvent></PrivetRoute>
            },
            {
                path:'/vanue',
                element:<PrivetRoute><Vanue></Vanue></PrivetRoute>
            }
        ]
    }
])


export default Route;