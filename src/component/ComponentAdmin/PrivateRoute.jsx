import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ element, ...rest }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/page" />
  );
};

export default PrivateRoute;
