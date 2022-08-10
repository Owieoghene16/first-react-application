import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Api } from '../app';
import { Outlet, Link } from 'react-router-dom';
import { FaBook } from 'react-icons/fa';
import { FiEye } from 'react-icons/fi';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { Username, Email, Password, Reenterpassword } from '../Components/inputs/Register';
import '../Assets/signup.scss';

const	Register = () => {

  const redirect = useNavigate();
  const myPasswordinput = useRef();
  const myReenterpasswordinput = useRef();
  const [ state, setState ] = useState({});
  const [ passwordIcon, setpasswordIcon] = useState(false);
  const [error, setError] = useState('');

  // password form visibility 
  const toggleVisibility = () => { 
    if (myPasswordinput.current.type === 'password') {  
      myPasswordinput.current.type = 'text';   
      myReenterpasswordinput.current.type = 'text';  
      setpasswordIcon(true)
    } else {  
      myPasswordinput.current.type = 'password';   
      myReenterpasswordinput.current.type = 'password';  
      setpasswordIcon(false)
    }  
  }

  // onChange function
  const formValue = (e) => {
    setState({...state, [e.target.name] : e.target.value});
  }

  /* Register fucntion */
  const signUp = async (e) => {
    e.preventDefault();
    try {
      const res = await Api.post('/signup', {
        userName: state.username,
        email: state.email,
        password: state.password,
        reEnterPassword: state.passwordAgain
      });
      sessionStorage.setItem('user', JSON.stringify(res.data));
      setError('');
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
              click={formValue}
            />
            <div className='fourth-header'>
              <div className='left'>
                <h6>Email</h6>
              </div>
            </div>
            <Email
              click={formValue}
            />
            <div className='fourth-header'>
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
            <div className='fourth-header'>
              <div className='left'>
                <h6>Reenter password</h6>
              </div>
            </div>
            <Reenterpassword 
              click={formValue}
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

export default Register;
