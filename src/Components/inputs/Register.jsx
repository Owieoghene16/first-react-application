import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Api } from '../../app';

const	RegisterInput = () => {
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const [userNameReg, setuserName] = useState('');
  const [emailReg, setEmail] = useState('');
  const [passwordReg, setPassword] = useState('');
  const [passwordagainReg, setPasswordagain] = useState('');
   
  const redirect = useNavigate();

  const signUp = async (e) => {
    e.preventDefault();
    try {
      const res = await Api.post('/signup', {
        userName: userNameReg,
        email: emailReg,
        password: passwordReg,
        reEnterPassword: passwordagainReg
      });
      setResult(res.data.message);
      setError('')
      redirect('/home');
    } catch (err) {
      setError(err.response.data.message);
    }
  }


  return (
		<>
      <form>
      <div className='plain-header'>
        <p> { result } { error } </p><br></br>
      </div>
      <div className='third-header'>
        <label>Username:</label><br></br>
        <input 
          required
          type='text'
          onChange={(e) => {
            setuserName(e.target.value)
          }}
        />
      </div>
      <div className='third-header'>
        <label>Email:</label><br></br>
        <input 
          required
          type='email'
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
      </div>
      <div className='third-header'>
        <label>Password:</label><br></br>
        <input 
          required
          type='text'
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
      </div>
      <div className='third-header'>
        <label>Re-enter password:</label><br></br>
        <input  
          required
          type='text'
          onChange={(e) => {
            setPasswordagain(e.target.value)
          }}
        />
        </div>
      <div className='fifth-header'>
        <button onClick={ signUp }>Create Account</button>
      </div>
      </form>
		</>
	)
};

export default RegisterInput;
