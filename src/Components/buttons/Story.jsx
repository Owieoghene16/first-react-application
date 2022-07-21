import React from 'react';

const CreateBookButton = ({click}) => {
  return (
    <>
      <div>
        <button onClick={click} >Create Book</button>
      </div>
    </>
  )
};

export default CreateBookButton;
