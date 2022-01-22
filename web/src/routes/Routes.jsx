import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "../pages/App/App/App";
import LoginForm from "../pages/Auth/LoginForm/LoginForm";
import RegisterForm from "../pages/Auth/RegisterForm/RegisterForm";
import Logout from "../utils/logout";
import PrivateRoute from "./PrivateRoute";

function Routes() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/register">
            <RegisterForm />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default Routes;
