import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login-form-container">
      <img
        onClick={() => navigate("/")}
        className="login-website-logo"
        src="https://res.cloudinary.com/dyx9u0bif/image/upload/v1657426908/lg-devices-logo_rpfa68.png"
        alt="website logo"
      />
      <form className="form-container">
        {/* <img
            className="login-website-logo"
            src="https://res.cloudinary.com/dyx9u0bif/image/upload/v1656594712/Group_7399_wrvd0n.png"
            alt="website logo"
          /> */}
        <h1 className="login-text">Login</h1>
        <div className="input-container">
          <label className="input-label" htmlFor="username">
            USERNAME
          </label>
          <input
            className="input-field"
            type="text"
            id="username"
            placeholder="Username"
          />
        </div>
        <div className="input-container">
          <label className="input-label" htmlFor="password">
            PASSWORD
          </label>
          <input className="input-field" id="password" placeholder="Password" />
        </div>
        {/* {showSubmitError && <p className="login-err-msg">*{errorMsg}</p>} */}
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
