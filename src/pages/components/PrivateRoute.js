import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { token } = useSelector((state) => state.auth);
  if (token) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} />;
};

export default PrivateRoute;
