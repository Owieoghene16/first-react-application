import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Api } from '../app';
import { Outlet, Link } from 'react-router-dom';
import { FaBook } from 'react-icons/fa';
import { FiEye } from 'react-icons/fi';
import { Email, Password } from '../Components/inputs/Register';
import '../Assets/signin.scss';


const token = {};

const	Login = () => {

  /*Display state */
  const [error, setError] = useState('');

  /*Form state */
  const [emailReg, setEmail] = useState('');
  const [passwordReg, setPassword] = useState('');
   
  const redirect = useNavigate();

  /* Register fucntion */
  const signIn = async (e) => {
    e.preventDefault();
    try {
      const res = await Api.post('/signin', {
        email: emailReg,
        password: passwordReg,
      });
      token.id = res.data.token;
      sessionStorage.setItem('jwtToken', JSON.stringify(res.data.token));
      setError('')
      redirect('/home');
    } catch (err) {
      setError(err.response.data.message);
    }
  }

  /* password input visibility */
  const myPasswordinput = useRef();
  const [ passwordHide, setpasswordHide] = useState('Show');
  const toggleVisibility = () => { 
    if (myPasswordinput.current.type === 'password') {  
      myPasswordinput.current.type = 'text';   
      setpasswordHide('Hide')
    } else {  
      myPasswordinput.current.type = 'password';   
      setpasswordHide('Show')
    }  
  }

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
            <p1> {error} </p1>
          </div>
          <div className='second-head'>
            <div className='left'>
              <h6>Email</h6>
            </div>
            <div className='right'>
              <p1>Don't have an account?</p1>
              <Link to='/'>
                Sign in
              </Link>
            </div>
          </div>
          <Email 
            click={setEmail}
          />
          <div className='fourth-head'>
            <div className='left'>
              <h6>Password</h6>
            </div>
            <div className='right'>
              <p> <i onClick={toggleVisibility} > <FiEye /></i> { passwordHide } </p>
            </div>
          </div>
          <Password 
            click={setPassword}
            toggle={myPasswordinput}
          />
          <div className='sixth-head'>
            <button onClick={signIn}>Sign In</button>
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
  )
};

export { Login, token};
