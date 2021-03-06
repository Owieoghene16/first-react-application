import React from 'react';
import { ResetPasswordButton } from '../buttons/Index.jsx';

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

export default ResetInput;
