import { createBrowserRouter } from "react-router-dom";
import routesGenerator from "../utils/routesGenerator";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MainLayout from "../components/layout/MainLayout";
import { homePaths } from "./home.routes";
import Dashboard from "@/components/layout/dashboardLayout/Dashboard";
import { dashboardPaths } from "./dashboard.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: routesGenerator(homePaths),
  },
  {
    path: "/admin",
    element: <Dashboard />,
    children: routesGenerator(dashboardPaths),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
