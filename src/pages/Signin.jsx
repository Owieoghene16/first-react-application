import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Api } from '../app';
import { Outlet, Link } from 'react-router-dom';
import { FaBook } from 'react-icons/fa';
import { FiEye } from 'react-icons/fi';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { Email, Password } from '../Components/inputs/Register';
import '../Assets/signin.scss';

const	Login = () => {

  const myPasswordinput = useRef();
  const [error, setError] = useState('');
  const [formState, setformState] = useState({});
  const [ passwordIcon, setpasswordIcon] = useState(false);
  const redirect = useNavigate();

  //onchange function 
  const formValue = (e) => {
    setformState({...formState, [e.target.name] : e.target.value});
  }
   
  // password visibility function
  const toggleVisibility = () => { 
    if (myPasswordinput.current.type === 'password') {  
      myPasswordinput.current.type = 'text';   
      setpasswordIcon(true);
    } else {  
      myPasswordinput.current.type = 'password';   
      setpasswordIcon(false);
    }  
  }

  // Login fucntion 
  const signIn = async (e) => {
    e.preventDefault();
    try {
      const res = await Api.post('/signin', {
        email: formState.email,
        password: formState.password,
      });
      sessionStorage.setItem('user', JSON.stringify(res.data));
      setError('')
      redirect('/home');
    } catch (err) {
      setError(err.response.data.message);
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
                Sign up
              </Link>
            </div>
          </div>
          <Email 
            click={formValue}
          />
          <div className='fourth-head'>
            <div className='left'>
              <h6>Password</h6>
            </div>
            <div className='right'>
                {
                  passwordIcon ?
                <p> <i onClick={toggleVisibility} ><AiOutlineEyeInvisible /></i> Hide</p> :
                <p> <i onClick={toggleVisibility} ><FiEye /></i> Show</p>
                }
            </div>
          </div>
          <Password 
            click={formValue}
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

export default Login;
