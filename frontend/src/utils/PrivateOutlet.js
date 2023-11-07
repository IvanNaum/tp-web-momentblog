import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext.js";

function PrivateOutlet() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateOutlet;
