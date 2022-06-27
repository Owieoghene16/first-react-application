import React from 'react';
import { HiMenu } from 'react-icons/hi';

const Button = () => {
    return (
    <>  
      <div>
        <button>View</button>
      </div>
    </>
  )
};

const Toggle = () => {
  return (
    <>
      <button id='dropdown' onclick='toggleVisibility() '>
        <i><HiMenu /></i>
      </button>
    </>
  );
};

export { Toggle, Button };