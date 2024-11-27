import { createBrowserRouter } from "react-router-dom";

import Home from "../Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import Brands from "../Brand/Brands";
import AboutDev from "../AboutDev/AboutDev";
import MyProfile from "../MyProfile/MyProfile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import MainLayout from "../MainLayout/MainLayout";

const router = createBrowserRouter([

    {
        path: "/",
        element: <MainLayout></MainLayout> ,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader:()=> fetch("/brands.json"),
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/brands",
                element: <Brands></Brands>,
                loader:()=> fetch("/brands.json"),
            },
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>,
            },
            {
                path: "/myProfile",
                element: <MyProfile></MyProfile>,
            },
            {
                path: "/aboutDev",
                element: <AboutDev></AboutDev>
            },
            {
                path: "*",
                element: <h2>Error</h2>,
            },



        ]
    }
])

export default router