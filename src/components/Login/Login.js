import React from "react";
import "../Login/Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://logolook.net/wp-content/uploads/2021/06/Amazon-Logo.png"
          alt=""
        />
      </Link>
      <div className="login__container">

      </div>
    </div>
  );
}

export default Login;
