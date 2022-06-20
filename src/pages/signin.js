import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Login }from '../Components/inputs/index';
import Header from '../Layouts/header/index';
import '../Assets/register.css';

const Signin = () => {
  return (
    <>
        <div>
          <Header />
        </div>
        <div className='container'>
          <div className='main-content'>
            <div className='first-header'>
              <h>Account Login</h>
            </div>
            <div className='second-header'>
              <p>Login with your email:</p>
            </div>
            <div>
              <Login />
            </div>
            <div className='sixth-header'>
              <p2>Forgotten Password?</p2>
              <Link to='/reset' className='log2'>Click here</Link>
            </div>
          </div>
        </div>
      <Outlet />
    </>
  )
};

export default Signin;
