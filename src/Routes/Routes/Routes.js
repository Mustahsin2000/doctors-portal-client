import {createBrowserRouter} from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Appoinment from "../../Pages/Appoinment/Appoinment/Appoinment";
import AllUsers from "../../Pages/DashBoard/DashBoard/AllUsers/AllUsers";
import DashBoard from "../../Pages/DashBoard/DashBoard/DashBoard";
import MyAppoinment from "../../Pages/DashBoard/MyAppoinment/MyAppoinment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/appoinment',
                element:<Appoinment></Appoinment>
            }
        ]
    },

    {
       path:'/dashboard',
       element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
       children:[
        {
            path:'/dashboard',
            element:<MyAppoinment></MyAppoinment>
        },
        {
            path:'/dashboard/allusers',
            element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        }
       ]
    }

])

export default router;