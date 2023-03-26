import React from "react";
import Home from "./pages";
import { useRoutes } from "react-router-dom";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
  ]);
}
