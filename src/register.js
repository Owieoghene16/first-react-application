import React from 'react';
import './register.css';
import { Outlet, Link } from "react-router-dom";

const	Register = () => {
  return (
		<>
      <div className="container">
        <div className="main-content">
          <div className="first-header">
            <h>Account registration</h>
          </div>
          <div className="second-header">
            <p>Register with your email:</p>
          </div>
          <div className="third-header">
            <label>Username:</label><br></br>
            <input type="text"/>
          </div>
          <div className="third-header">
            <label>Email:</label><br></br>
            <input type="text"/>
          </div>
          <div className="third-header">
            <label>Password:</label><br></br>
            <input type="text"/>
          </div>
          <div className="third-header">
            <label>Re-enter password:</label><br></br>
            <input type="text"/>
          </div>
          <div className="fourth-header">
            <input type="checkbox" name="remember"/>
					  Remember me
          </div>
          <div className="fifth-header">
            <input type="submit" value="Create Account"/>
          </div>
          <div className="sixth-header">
            <p2>Already Registered?</p2>
            <Link to="/login" className="log2">Log In</Link>
          </div>
        </div>
      </div>
      <Outlet />
		</>
	)
};

export default Register;
