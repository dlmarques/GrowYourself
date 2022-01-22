import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./MenuMobile.scss";

const MenuMobile = ({ setSidebarOpen }) => {
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
          <Link to="/login" onClick={() => setSidebarOpen(false)}>
            Log in
          </Link>
          <Link to="/register" onClick={() => setSidebarOpen(false)}>
            Register
          </Link>
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
