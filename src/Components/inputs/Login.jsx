import React, { useState } from 'react';
import { Api } from '../../app';

const	Login = () => {

  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const [emailReg, setEmail] = useState('');
  const [passwordReg, setPassword] = useState('');

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const res = await Api.post('/signin', {
        email: emailReg,
        password: passwordReg,
      });
      setResult(res.data.message)
    } catch (err) {
     setError(err.response.data.message);
    }
  }

  return (
		<>
      <form>
        <div className='plain-header'>
          <p> {result} {error} </p><br></br>
        </div>
        <div className='third-header'>
          <label>Email:</label><br></br>
          <input 
            type='text'
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </div>
        <div className='third-header'>
          <label>Password:</label><br></br>
        <input 
          type='text'
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        </div>
        <div className='fifth-header'> 
          <button onClick={ signIn }>Login</button>
        </div>
      </form>
		</>
	)
};

export default Login;
