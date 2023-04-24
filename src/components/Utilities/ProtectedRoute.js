import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = ({ auth, children }) => {
  const location = useLocation();
  if (auth === false) {
    console.log(auth);
    console.log(children);
    return <Navigate to="/login" replace />;
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
