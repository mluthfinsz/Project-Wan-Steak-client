import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, authenticated }) => {
  return authenticated ? children : <Navigate to="/page" />;
};

export default PrivateRoute;
