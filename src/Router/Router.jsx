import { createBrowserRouter } from "react-router"; 
import HomeLayout from "../Layout/HomeLayout/HomeLayout";
import Home from "../Pages/Home/Home";
import CategoryNews from "../Pages/CategoryNews/CategoryNews";
import AuthLayout from "../Layout/AuthLayout/AuthLayout";
import Login from "../Layout/AuthLayout/Login";
import Register from "../Layout/AuthLayout/Register";
import NewsDetails from "../Layout/News/NewsDetails";
import PrivateRoute from "./PrivateRoute";
import Loading from "../Pages/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true, 
        element: <Home />
      },
      {
        path: "categoryNews/:id",
        loader: () => fetch('/news.json'),
        hydrateFallbackElement: <Loading />,
        element: <CategoryNews />
      }
    ]
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />
      },
      {
        path: "/auth/register",
        element: <Register />
      }
    ]
  },
  {
    path: "/news/:id",
    loader: () => fetch('/news.json'),
    hydrateFallbackElement: <Loading />,
    element: (
      <PrivateRoute>
        <NewsDetails />
      </PrivateRoute>
    )
  }
]);
