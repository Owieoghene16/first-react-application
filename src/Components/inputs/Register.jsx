import React from 'react';

const Username = ({ click }) => (
  <>
    <div className='third-header'>
      <input type='text'
        name='username'
        onChange={click}
      />
    </div>
  </>
);

const Email = ({ click }) => (
  <>
    <div className='fifth-header'>
      <input type='text'
        name='email'
        onChange={click}
      />
    </div>
  </>
);

const Password = ({ click, toggle }) => (
  <>
    <div className='fifth-header'>
      <input type='password'
        name='password'
        ref={toggle}
        onChange={click}
      />
    </div>
  </>
);

const Reenterpassword = ({ click, toggle }) => (
  <>
    <div className='fifth-header'>
      <input type='password'
        name='passwordAgain'
        ref={toggle}
        onChange={click}
      />
    </div>
  </>
);

export {
  Username, Email, Password, Reenterpassword,
};
