import React, { useState, useEffect } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import "./RegisterForm.scss";
import { AiOutlineLock } from "react-icons/ai";
import { GiMuscleUp } from "react-icons/gi";
import { MdOutlineAlternateEmail } from "react-icons/md";

const RegisterForm = ({ history }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [registerError, setRegisterError] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    localStorage.authToken ? setIsLoggedIn(true) : setIsLoading(false);
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();

    let response = await fetch("/api/user/register", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    }).catch((err) => {
      console.log(err);
    });
    response = await response.text();
    if (response === "Success") {
      alert("Registration Successful");
      history.push("/login");
    } else {
      setRegisterError(response);
      console.log(response);
      setUsername("");
      setEmail("");
      setPassword("");
    }
  };

  if (isLoading) {
    return (
      <>
        Loading...
        {isLoggedIn ? <Redirect to="/login" /> : null}
      </>
    );
  }

  return (
    <>
      {isLoggedIn ? <Redirect to="login" /> : null}
      <section class="main">
        <div class="register-container">
          <p className="titleregister">Welcome</p>
          <div class="separator"></div>
          <p class="welcome-message">
            Here you can register for our service, the journey starts here!
          </p>
          <form class="register-form" onSubmit={submitForm}>
            <div class="form-control">
              <input
                type="text"
                placeholder="Username"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <GiMuscleUp />
            </div>
            <div class="form-control">
              <input
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <MdOutlineAlternateEmail />
            </div>
            <div class="form-control">
              <input
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <AiOutlineLock />
            </div>
            <button class="submit">Sign Up</button>
          </form>
          <Link to="/login">Already have an account?</Link>
        </div>
      </section>
    </>
  );
};

export default withRouter(RegisterForm);
