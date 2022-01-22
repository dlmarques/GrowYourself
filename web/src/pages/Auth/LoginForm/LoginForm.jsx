import React, { useState, useEffect } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import "./LoginForm.scss";
import { AiOutlineLock } from "react-icons/ai";
import { GiMuscleUp } from "react-icons/gi";

export default function LoginForm({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginError, setLoginError] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    localStorage.authToken ? setIsLoggedIn(true) : setIsLoading(false);
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();

    let response = await fetch("/api/user/login", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).catch((err) => {
      alert(err);
    });

    if (response.headers.get("authToken")) {
      localStorage.authToken = response.headers.get("authToken");
      setIsLoggedIn(true);
    } else {
      setLoginError("User/Password combination doesn't exist.");
      setEmail("");
      setPassword("");
    }
  };

  if (isLoading) {
    return (
      <>
        Loading...
        {isLoggedIn ? <Redirect to="/" /> : null}
      </>
    );
  }

  return (
    <>
      {isLoggedIn ? <Redirect to="/" /> : null}
      <section class="main">
        <div class="login-container">
          <p className="titlelogin">Welcome back</p>
          <div class="separator"></div>
          <p class="welcome-message">
            Please, provide login credential to proceed
          </p>
          <form class="login-form" onSubmit={submitForm}>
            <div class="form-control">
              <input
                type="text"
                placeholder="Email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <GiMuscleUp />
            </div>
            <div class="form-control">
              <input
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <AiOutlineLock />
            </div>
            <button class="submit">Login</button>
          </form>
          <Link to="/register">Create an account!</Link>
        </div>
      </section>
    </>
  );
}
