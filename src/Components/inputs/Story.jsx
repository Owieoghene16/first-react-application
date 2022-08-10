import React from 'react';

const Title = ({getTitle}) => {
  return (
    <> 
      <form>
        <input
          name='title'
          type='text' 
          onChange={getTitle}
        />
      </form>
    </>
  )
};

const Description = ({getDescription}) => {
  return (
    <> 
      <div>
        <textarea
          name='description'
          onChange={getDescription}
        ></textarea>
      </div>
    </>
  )
};

const Price = ({getPrice}) => {
  return (
    <> 
      <form>
        <input
          type="number" 
          name='price'
          onChange={getPrice}
        />
      </form>
    </>
  )
};

const Pdf = ({getPdf}) => {
  return (
    <>
      <div>
        <input 
          id='files'
          type='file' 
          multiple 
          onChange={getPdf}
        />
      </div>
    </>
  )
};

export { Pdf, Title, Description, Price };
