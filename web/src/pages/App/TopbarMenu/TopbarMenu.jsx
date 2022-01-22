import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./TopbarMenu.scss";
import "animate.css";
import LoginForm from "../../Auth/LoginForm/LoginForm";
import RegisterForm from "../../Auth/RegisterForm/RegisterForm";

const TopbarMenu = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    localStorage.authToken ? setLoggedIn(true) : setIsLoading(false);
  }, []);

  return (
    <>
      <div className="animate__animated animate__fadeInLeft">
        {loggedIn ? (
          <Link to="#" id="Links">
            {" "}
            <span>Profile</span>
          </Link>
        ) : null}
        {loggedIn ? (
          <Link to="/logout" id="Links">
            {" "}
            <span>Log out</span>
          </Link>
        ) : (
          <Link to="/login">Log in</Link>
        )}
        {loggedIn ? null : <Link to="/register">Register</Link>}
      </div>
    </>
  );
};

export default TopbarMenu;
