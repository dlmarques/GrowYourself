import React, { useState, useEffect } from "react";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import "./App.scss";
import PrivateRoute from "../../../routes/PrivateRoute";
import TopbarMenu from "../TopbarMenu/TopbarMenu";
import Plans from "../Plans/Plans";
import Calc from "../Calc/Calc";
import Hero from "../Hero/Hero";
import About from "../About/About";
import MenuMobile from "../MenuMobile/MenuMobile";

const App = () => {
  let { path } = useRouteMatch();
  const [topbarOpen, setTopbarOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    localStorage.authToken ? setLoggedIn(true) : setIsLoading(false);
  }, []);

  return (
    <>
      {sidebarOpen ? <MenuMobile setSidebarOpen={setSidebarOpen} /> : null}

      <div className="topbar">
        <Link to="/" id="Logo">
          <span>GrowYourself</span>
        </Link>
        <div className="topbar-menu">
          {topbarOpen ? (
            <AiOutlineCloseCircle onClick={() => setTopbarOpen(false)} />
          ) : (
            <BiUserCircle onClick={() => setTopbarOpen(true)} />
          )}

          {topbarOpen ? <TopbarMenu setTopbarOpen={setTopbarOpen} /> : null}
        </div>

        <div className="links">
          {loggedIn ? (
            <Link to="/calc" id="Links">
              {" "}
              <span>Calculators</span>
            </Link>
          ) : (
            <Link to="/about" id="Links">
              {" "}
              <span>About</span>
            </Link>
          )}
          {loggedIn ? (
            <Link to="/plans" id="Links">
              {" "}
              <span>Plans</span>
            </Link>
          ) : (
            <Link to="/faqs" id="Links">
              {" "}
              <span>FAQS</span>
            </Link>
          )}
          <Link to="/contact" id="Links">
            {" "}
            <span>Contacts</span>
          </Link>
        </div>

        <div className="right">
          <AiOutlineMenu id="menuMobile" onClick={() => setSidebarOpen(true)} />
        </div>
      </div>
      <div className="main">
        <div className="content">
          <Switch>
            <Route exact path={path}>
              <Hero />
            </Route>
            <PrivateRoute path={`${path}calc`}>
              <Calc />
            </PrivateRoute>
            <PrivateRoute path={`${path}plans`}>
              <Plans />
            </PrivateRoute>
            <Route path={`${path}about`}>
              <About />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
};

export default App;
