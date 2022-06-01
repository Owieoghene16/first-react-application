import React from 'react';
import './register.css';
import { Outlet, Link } from "react-router-dom";

const	Login = () => {
  return (
		<>
      <div className="container">
        <div className="main-content">
          <div className="first-header">
            <h>Account Login</h>
          </div>
          <div className="second-header">
            <p>Login with your email:</p>
          </div>
          <div className="third-header">
            <label>Email:</label><br></br>
            <input type="text"/>
          </div>
          <div className="third-header">
            <label>Password:</label><br></br>
            <input type="text"/>
          </div>
          <div className="fourth-header">
            <input type="checkbox" name="remember"/>
					  Remember me
          </div>
          <div className="fifth-header">
            <input type="submit" value="Login"/>
          </div>
          <div className="sixth-header">
            <p2>Dont have an account?</p2>
            <Link to="/" className="log2">Register</Link>
          </div>
          <div className="sixth-header">
            <p2>Forgotten Password?</p2>
            <Link to="/reset" className="log2">Click Here!</Link>
          </div>
        </div>
      </div>
      <Outlet />
		</>
	)
};

export default Login;
