import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { RegisterInput } from '../Components/inputs/index';
import Header from '../Layouts/header/index';
import '../Assets/register.css';

const	Signup = () => {
  return (
		<>
      <div>
        <Header />
      </div>
      <div className='container'>
        <div className='main-content'>
          <div className='first-header'>
            <h>Account registration</h>
          </div>
          <div className='second-header'>
            <p>Register with your email:</p>
          </div>
          <div>
				   	<RegisterInput />
          </div>
          <div className='sixth-header'>
            <p2>Already Registered?</p2>
            <Link to='/signin' className='log2'>Log In</Link>
          </div>
        </div>
      </div>
      <Outlet />
		</>
	)
};


export default Signup;
