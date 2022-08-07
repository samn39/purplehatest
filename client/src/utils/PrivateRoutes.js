import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuthenticated = async () => {
    try {
      const res = await fetch("http://localhost:3001/verify", {
        method: "POST",
        headers: { jwt_token: localStorage.token },
      });

      const parseRes = await res.json();

      // console.log(parseRes);

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  if (props.name == "two") {
    if (isAuthenticated === true) {
      return <Outlet context={[isAuthenticated, setIsAuthenticated]} />;
    }
  }

  if (props.name == "one") {
    return !isAuthenticated ? (
      <Outlet context={[isAuthenticated, setIsAuthenticated]} />
    ) : (
      <Navigate to="/adminpage" />
    );
  }
};

export default PrivateRoutes;
