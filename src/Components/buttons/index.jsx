import React from 'react';

const Button = ({ click, value }) => (
  <>
    <button onClick={click} >{value}</button>
  </>
);

export default Button;
