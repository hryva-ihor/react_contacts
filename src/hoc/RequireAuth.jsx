import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../hook/useAuth";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  // const auth = false;
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};

export { RequireAuth };
