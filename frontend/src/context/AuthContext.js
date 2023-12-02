import { jwtDecode } from "jwt-decode";

import { createContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = () => {
  const navigate = useNavigate();

  const [authTokens, setAuthToken] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwtDecode(JSON.parse(localStorage.getItem("authTokens")).access)
      : null
  );

  let loginUser = async (event) => {
    event.preventDefault();

    let response = await fetch("/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: event.target.email_nickname.value,
        password: event.target.password.value,
      }),
    });

    let data = await response.json();

    if (response.status === 200) {
      setAuthToken(data);
      setUser(jwtDecode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      navigate("/");
    }
    // TODO alert form
  };

  let logoutUser = () => {
    setAuthToken(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    navigate("/");
  };

  let updateToken = async () => {
    let response = await fetch("/api/token/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh: authTokens.refresh,
      }),
    });

    let data = await response.json();

    if (response.status === 200) {
      setAuthToken(data);
      setUser(jwtDecode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
    } else {
      logoutUser();
    }
  };

  useEffect(() => {
    let upd_interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, 4 * 60 * 1000); // 4 mins

    return () => clearInterval(upd_interval);
  }, [authTokens]);

  let contextData = {
    user: user,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };

  return (
    <AuthContext.Provider value={contextData}>
      <Outlet />
    </AuthContext.Provider>
  );
};
