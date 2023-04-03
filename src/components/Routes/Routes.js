import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Login from "../Login/Login";





export const router=createBrowserRouter([
    {
        path:'/',
        element:<Dashboard/>,
    },
    {
        path:'/login',
        element:<Login/>
    },
    
])