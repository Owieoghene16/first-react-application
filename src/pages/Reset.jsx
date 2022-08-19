/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FaBook } from 'react-icons/fa';
import { Email } from '../Components/inputs/Register.jsx';
import '../Assets/signin.scss';

const Reset = () => (
		<>
      <div className='navigate'>
        <nav>
          <div className='first-icon'>
            <Link to='/'>
					 	  <i><FaBook /></i>
            </Link>
          </div>
        </nav>
			</div>
      <div className='main-container'>
        <div className='second-container'>
          <div className='first-head'>
            <h2>Forgotten Password</h2>
          </div>
          <div className='second-head'>
            <div className='left'>
              <h6>Email</h6>
            </div>
            <div className='right'>
              <p>Already have an account?</p>
              <Link to='/signin'>
                Sign in
              </Link>
            </div>
          </div>
          <Email />
          <div className='sixth-head'>
            <button>Continue</button>
          </div>
          <div className='forgotten'>
            <Link to='/'>
              Dont have an account?
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
);

export default Reset;
