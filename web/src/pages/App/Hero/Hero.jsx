import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import hero from "./welcome.png";
import "./Hero.scss";

const Hero = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    localStorage.authToken ? setLoggedIn(true) : setIsLoading(false);
  }, []);

  return (
    <>
      <div className="container">
        <div className="left">
          <div className="titles">
            <div className="title">Welcome to GrowYourself</div>
            <div className="subtitle">Join this new project</div>
          </div>
          <div className="buttons">
            {loggedIn ? (
              <Link to="/plans">
                <button id="join">PLANS</button>
              </Link>
            ) : (
              <Link to="/register">
                <button id="join">JOIN US</button>
              </Link>
            )}
            <Link to="/about">
              <button id="about">ABOUT</button>
            </Link>
          </div>
        </div>
        <div className="img" id="image">
          <img src={hero} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
