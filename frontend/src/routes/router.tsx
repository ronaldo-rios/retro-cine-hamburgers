import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from '../pages/Login';
import Orders from "../pages/Orders";
import Register from '../pages/Register';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { 
        path: "/", 
        element: <Home /> 
      },
      { 
        path: "/orders", 
        element: <Orders /> 
      },
    ]
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