import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Layout from "./Layout/Layout";
import About from "./Components/About";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";

import ErrorHandle from "./ErrorHandle/ErrorHandle";
import Profile from "./Components/Profile";
import AuthProvider from "./Components/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute";
import Detail from "./Components/Home/Detail";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorHandle></ErrorHandle>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/details',
        element: <Detail></Detail>
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
