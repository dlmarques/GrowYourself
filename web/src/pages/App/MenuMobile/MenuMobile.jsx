import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./MenuMobile.scss";

const MenuMobile = ({ setSidebarOpen }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    localStorage.authToken ? setLoggedIn(true) : setIsLoading(false);
  }, []);

  return (
    <>
      <div className="animate__animated animate__fadeInLeftBig">
        <span onClick={() => setSidebarOpen(false)}>
          <AiOutlineCloseCircle />
        </span>
        <div className="links-mobile">
          <Link to="/calc" onClick={() => setSidebarOpen(false)}>
            Calculators
          </Link>
          <Link to="/plans" onClick={() => setSidebarOpen(false)}>
            Plans
          </Link>
          <Link to="/about" onClick={() => setSidebarOpen(false)}>
            About
          </Link>
        </div>
        <div className="auth-menu">
          {loggedIn ? <Link to="/logout">Logout</Link> : null}
          {loggedIn ? null : (
            <Link to="/login" onClick={() => setSidebarOpen(false)}>
              Log in
            </Link>
          )}
          {loggedIn ? null : (
            <Link to="/register" onClick={() => setSidebarOpen(false)}>
              Register
            </Link>
          )}
        </div>
      </div>
      <div
        className="ghost-wrapper"
        onClick={() => setSidebarOpen(false)}
      ></div>
    </>
  );
};

export default MenuMobile;

