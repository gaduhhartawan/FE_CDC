import React from "react";
import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = Cookies.get("token");

  if (token) {
    return <Navigate to="/" replace />;
  } else {
    return <Outlet />;
  }
};

export default ProtectedRoute;
