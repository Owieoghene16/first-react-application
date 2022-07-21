import React from 'react';

const Username = ({click}) => {
  return (
    <>  
      <div className='third-header'>
        <input type='text' 
          onChange={(e) => {
            click(e.target.value)
          }}
        />
      </div>
    </>
  )
};

const Email = ({click}) => {
  return (
    <>  
      <div className='fifth-header'>
        <input type='text' 
          onChange={(e) => {
            click(e.target.value)
          }}
        />
      </div>
    </>
  )
};

const Password = ({click, toggle}) => {
  return (
    <>  
      <div className='fifth-header'>
        <input type='password' 
          ref={toggle}
          onChange={(e) => {
            click(e.target.value)
          }}
        />
      </div>
    </>
  )
};

const Reenterpassword = ({click, toggle}) => {
  return (
    <>  
      <div className='fifth-header'>
        <input type='password' 
        ref={toggle}
          onChange={(e) => {
            click(e.target.value)
          }}
        />
      </div>
    </>
  )
};

export { Username, Email, Password, Reenterpassword };
