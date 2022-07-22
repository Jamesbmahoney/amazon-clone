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
        <h1>Sign In</h1>

        <form>
          <h5>E-Mail</h5>
          <input type="text" />
       
          <h5>Password</h5>
          <input type="password" />

          <button className="login__signInButton">Sign In</button>
        </form>

        <p>
          By signing-in you agree to AMAZON CLONE's Conditions of Use & Sale, Please
          see our Privacy Notice, our Cookies Notice and our Internet Based Ads
          Notice.
        </p>        

      <button className="login__registerButton">Create your Amazon account</button>        
      </div>
    </div>
  );
}

export default Login;
