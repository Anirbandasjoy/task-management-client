import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import Profile from "../pages/Dashboard/Profile/Profile";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import Settings from "../pages/Dashboard/Settings/Settings";
import NewTask from "../pages/Dashboard/NewTask/NewTask";
import TodoList from "../pages/Dashboard/TodoList/TodoList";
import Login from "../pages/auth/Login";
import Registation from "../pages/auth/Registation";
import PribetRoutes from "./PribetRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PribetRoutes>
        <Dashboard />
      </PribetRoutes>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "new-task",
        element: <NewTask />,
      },
      {
        path: "todo-list",
        element: <TodoList />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Registation />,
  },
]);