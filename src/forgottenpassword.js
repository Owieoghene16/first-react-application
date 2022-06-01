import React from 'react';
import './register.css';
import { Outlet, Link } from "react-router-dom";

const Forgottenpassword = () => {
  return (
		<>
      <div className="container">
        <div className="main-content">
          <div className="first-header">
            <h>Forgotten Pasword</h>
          </div>
          <div className="second-header">
            <p>Input your registered email:</p>
          </div>
          <div className="third-header">
            <label>Email:</label><br></br>
            <input type="text"/>
          </div>
          <div className="fifth-header">
            <input type="submit" value="Continue"/>
          </div>
          <div className="sixth-header">
            <p2>Dont have an account?</p2>
            <Link to="/" className="log2">Register</Link>
          </div>
        </div>
      </div>
      <Outlet />
		</>
	)
};

export default Forgottenpassword;
