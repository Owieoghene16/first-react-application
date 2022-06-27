import React, { useState } from 'react';
import { Api } from '../../app';

const	Login = () => {
  const [emailReg, setEmail] = useState('');
  const [passwordReg, setPassword] = useState('');

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const res = await Api.post('/signin', {
        email: emailReg,
        password: passwordReg,
      });
      console.log(res)
    } catch (err) {
      console.log(err);
    }
  }

  return (
		<>
      <form>
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
        <div className='fourth-header'>
          <input type='checkbox'/>
          <p>Remember me</p>
        </div>
        <div className='fifth-header'> 
          <button onClick={ signIn }>Login</button>
        </div>
      </form>
		</>
	)
};

export default Login;
