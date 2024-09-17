import React from "react";
import Roots from "../layouts/Roots";
import Home from "../pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register/Register";
import Destination from "../pages/Destination/Destination";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/destination",
        element: (
          <PrivateRoute>
            <Destination></Destination>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
