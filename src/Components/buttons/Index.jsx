import React from 'react';

const	RegisterButton = () => {
  return (
		<>
      <div className="fifth-header">
        <button>Create Account</button>
      </div>
		</>
	)
};

const	LoginButton = () => {
  return (
		<>
      <div className="fifth-header">
        <button>Login</button>
      </div>
		</>
	)
};

const	ResetPasswordButton = () => {
  return (
		<>
      <div className="fifth-header">
        <button>Continue</button>
      </div>
		</>
	)
};

const	CreateBookButton = () => {
  return (
		<>
      <div className="create">
        <button>Create Book</button>
      </div>
		</>
	)
};

export { LoginButton, RegisterButton, CreateBookButton, ResetPasswordButton };
