/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable import/no-cycle */
import React, { useRef } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FaBook } from 'react-icons/fa';
import { FiEye } from 'react-icons/fi';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { Email, Password } from '../Components/inputs/Register.jsx';
import useSignIn from '../utils/useSignIn.jsx';
import '../Assets/signin.scss';

const	Login = () => {
  // Password visiblity
  const Passwordfield = useRef();

  // Creating users
  const [
    error,
    passwordicon,
    switchField,
    formInput,
    logIn,
  ] = useSignIn();

  return (
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
            <h2>Sign in</h2>
          </div>
          <div className='error'>
            <p> {error} </p>
          </div>
          <div className='second-head'>
            <div className='left'>
              <h6>Email</h6>
            </div>
            <div className='right'>
              <p>Don't have an account?</p>
              <Link to='/'>
                Sign up
              </Link>
            </div>
          </div>
          <Email
            click={formInput}
          />
          <div className='fourth-head'>
            <div className='left'>
              <h6>Password</h6>
            </div>
            <div className='right'>
              {
                passwordicon
                  ? <p> <i onClick={() => switchField(Passwordfield)}>
                    <AiOutlineEyeInvisible /></i> Hide</p>
                  : <p> <i onClick={() => switchField(Passwordfield)} ><FiEye /></i> Show</p>
              }
            </div>
          </div>
          <Password
            click={formInput}
            toggle={Passwordfield}
          />
          <div className='sixth-head'>
            <button onClick={() => logIn()}>Sign In</button>
          </div>
          <div className='forgotten'>
            <Link to='/reset'>
              Forgotten Password?
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Login;
