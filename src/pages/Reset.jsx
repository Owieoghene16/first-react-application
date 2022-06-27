import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import ResetInput from '../Components/inputs/Index.jsx';
import Header from '../Layouts/header/Index.jsx';
import '../Assets/register.css';

const Reset = () => {
    return (
      <>
        <div>
          <Header />
        </div>
        <div className='container'>
          <div className='main-content'>
            <div className='first-header'>
              <h>Forgotten Pasword</h>
            </div>
            <div className='second-header'>
              <p>Input your registered email:</p>
            </div>
            <div>
              <ResetInput />
            </div>
            <div className='sixth-header'>
              <p2>Dont have an account?</p2>
              <Link to='/' className='log2'>Register</Link>
            </div>
          </div>
        </div>
      <Outlet />
    </>
  )
};

export default Reset;
