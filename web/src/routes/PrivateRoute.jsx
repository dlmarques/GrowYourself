import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Hero from "../pages/App/Hero/Hero";

function PrivateRoute({ children, ...rest }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    verifyLoggedIn();
  }, []);

  const verifyLoggedIn = async () => {
    let response = await fetch("/api/user/isLoggedIn", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authToken: localStorage.authToken,
      },
    }).catch((err) => {
      alert(err);
    });
    response = await response.text();

    if (response === "true") {
      setIsLoggedIn(true);
    } else {
      localStorage.clear();
      setIsLoggedIn(false);
    }
    setLoading(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return <Route {...rest} render={() => (isLoggedIn ? children : <Hero />)} />;
}

export default PrivateRoute;
