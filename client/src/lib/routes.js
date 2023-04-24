
 

import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/index.js";
import Dashboard from "../pages/dashboard.js"

export const ROOT = "/";
export const DASHBOARD = "/dashboard";

export const router = createBrowserRouter([
    {path: ROOT, element: <Home/>},
    {path: DASHBOARD, element: <Dashboard/>},
])