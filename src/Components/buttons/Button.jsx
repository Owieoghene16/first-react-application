import React from 'react';
import { HiMenu } from 'react-icons/hi';
import { Api } from '../../app';
import { token } from '../inputs/Register';


const Button = () => {

  const allUsers = async (e) => {
    e.preventDefault();
    try {
      const res = await Api.get('/find', {
        headers: {'authorization': token.id}
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>  
      <div>
        <button onClick={allUsers}>View</button>
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