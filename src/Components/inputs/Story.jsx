import React from 'react';

const TextInput = ({getTitle}) => {
  return (
    <> 
      <form>
        <input
          type='text' 
          onChange={(e) => {
            getTitle(e.target.value)
          }}
        />
      </form>
    </>
  )
};

const Textarea = ({getDescription}) => {
  return (
    <> 
      <div>
        <textarea
          onChange={(e) => {
            getDescription(e.target.value)
          }}
        ></textarea>
      </div>
    </>
  )
};

const NumberInput = ({getPrice}) => {
  return (
    <> 
      <form>
        <input
          type="number" 
          onChange={(e) => {
            getPrice(e.target.value)
          }}
        />
      </form>
    </>
  )
};

const FileInput = ({getPdf}) => {
  return (
    <>
      <div>
        <input 
          id='files'
          type='file' 
          multiple 
          onChange={(e) => {
            getPdf(e.target.files[0])
          }}
        />
      </div>
    </>
  )
};

export { FileInput, NumberInput, TextInput, Textarea };
