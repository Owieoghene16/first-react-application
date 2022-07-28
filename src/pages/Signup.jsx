/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Api } from '../app';
import { Outlet, Link } from 'react-router-dom';
import { FaBook } from 'react-icons/fa';
import { FiEye } from 'react-icons/fi';
import { Username, Email, Password, Reenterpassword } from '../Components/inputs/Register';
import { useDispatch } from 'react-redux';
import '../Assets/signup.scss';


const token = {};

const	Register = () => {

  /*Display state */
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  /*Form state */
  const [userNameReg, setuserName] = useState('');
  const [emailReg, setEmail] = useState('');
  const [passwordReg, setPassword] = useState('');
  const [passwordagainReg, setPasswordagain] = useState('');
   
  const redirect = useNavigate();
  const dispatch = useDispatch();

  /* Register fucntion */
  const signUp = async (e) => {
    e.preventDefault();
    try {
      const res = await Api.post('/signup', {
        userName: userNameReg,
        email: emailReg,
        password: passwordReg,
        reEnterPassword: passwordagainReg
      });
      token.id = res.data.token;
      sessionStorage.setItem('jwtToken', JSON.stringify(res.data.token));
      setResult(res.data.message);
      setError('')
      redirect('/home');
    } catch (err) {
      setError(err.response.data.message);
    }
  }

  /* password input visibility */
  const myReenterpasswordinput = useRef();
  const myPasswordinput = useRef();
  const [ passwordHide, setpassowrdHide] = useState('Show');
  // const [ icon, seticon ] = useState(false);
  const toggleVisibility = () => { 
    if (myPasswordinput.current.type === 'password') {  
      myPasswordinput.current.type = 'text';   
      myReenterpasswordinput.current.type = 'text';  
      setpassowrdHide('Hide')
      // seticon(!icon)
    } else {  
      myPasswordinput.current.type = 'password';   
      myReenterpasswordinput.current.type = 'password';  
      setpassowrdHide('Show')
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
      <div className='main-content'>
        <div className='second-content'>
          <div className='first-header'>
            <h2>Sign up</h2>
          </div>
          <div className='error'>
            <p1> {error} </p1>
          </div>
          <div className='second-header'>
            <div className='left'>
              <h6>Username</h6>
            </div>
            <div className='right'>
              <p1>Already have an account?</p1>
              <Link to='/signin'>
                Log in
              </Link>
            </div>
          </div>
          <Username 
            click={setuserName}
          />
          <div className='fourth-header'>
            <div className='left'>
              <h6>Email</h6>
            </div>
          </div>
          <Email
            click={setEmail}
          />
          <div className='fourth-header'>
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
          <div className='fourth-header'>
            <div className='left'>
              <h6>Reenter password</h6>
            </div>
          </div>
          <Reenterpassword 
            click={setPasswordagain}
            toggle={myReenterpasswordinput}
          />
          <div className='sixth-header'>
            <button onClick={signUp}>Sign Up</button>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  )
};

export { Register , token};
