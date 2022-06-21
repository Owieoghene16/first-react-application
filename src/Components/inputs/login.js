import React, { useState } from 'react';
import axios from 'axios';

const	Login = () => {
  
  const [emailReg, setEmail] = useState('');
  const [passwordReg, setPassword] = useState('');

  const signIn = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/signin', {
        email: emailReg,
        password: passwordReg,
      });
      alert(emailReg, passwordReg);
      alert(res);
    } catch (err) {
      alert(err);
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
