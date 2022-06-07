import React from 'react';
import { LoginButton, RegisterButton, ResetPasswordButton } from '../buttons';

const	Register = () => {
  return (
		<>
      <div className='third-header'>
        <label>Username:</label><br></br>
        <input type='text'/>
      </div>
      <div className='third-header'>
        <label>Email:</label><br></br>
        <input type='text'/>
      </div>
      <div className='third-header'>
        <label>Password:</label><br></br>
        <input type='text'/>
      </div>
      <div className='third-header'>
        <label>Re-enter password:</label><br></br>
        <input type='text'/>
      </div>
      <div className='fourth-header'>
        <input type='checkbox' name='remember' />
        <p>Remember me</p>
      </div>
      <div>
        <RegisterButton />
      </div>
		</>
	)
};

const	Login = () => {
  return (
		<>
      <div className='third-header'>
        <label>Email:</label><br></br>
        <input type='text' />
      </div>
      <div className='third-header'>
        <label>Password:</label><br></br>
        <input type='text' />
      </div>
      <div className='fourth-header'>
        <input type='checkbox' name='remember'/>
        <p>Remember me</p>
      </div>
      <div>
        <LoginButton />
      </div>
		</>
	)
};

const ResetInput = () => {
  return (
    <> 
      <div className='third-header'>
        <label>Email:</label><br></br>
        <input type='text'/>
      </div>
      <div>
        <ResetPasswordButton />
      </div>
    </>
  )
};

export { Login, Register, ResetInput };
