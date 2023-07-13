import  { React } from 'react'
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ isAllowed, children, redirectTo = "/login" }) => {
  if (!isAllowed) {
    console.log('not allowed')
    return <Navigate to={redirectTo} />;
  }
  console.log('allowed')
  return children ? children : <Outlet />;
};
