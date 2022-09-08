/* eslint-disable import/no-cycle */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FaBook } from 'react-icons/fa';
import Button from '../Components/buttons/Index.jsx';
import { Email } from '../Components/inputs/Register.jsx';
import useResetLink from '../utils/useResetLink';
import '../Assets/signin.scss';

const Reset = () => {
  const {
    result,
    loading,
    formInput,
    resetLink,
  } = useResetLink();

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
      {
        loading
          ? <div className='main-container'>
              <div className='second-container'>
                <div className='first-head'>
                  <h2>Forgotten Password</h2>
                </div>
                <div className='error'>
                  <p>{result}</p>
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
              <Email
                click={formInput}
              />
              <div className='sixth-head'>
                <Button
                  click={() => resetLink()}
                  value={'Continue'}
                />
              </div>
              <div className='forgotten'>
                <Link to='/'>
                  Don't have an account?
                </Link>
              </div>
            </div>
          </div>
          : <div className='home-content'>
              <div className='container'>
                  <p>{result}</p>
              </div>
            </div>
      }
      <Outlet />
    </>
  );
};

export default Reset;
