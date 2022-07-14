import React from 'react';

const TextInput = () => {
  return (
    <> 
      <form>
        <input type='text' />
      </form>
    </>
  )
};

const Textarea = () => {
  return (
    <> 
      <div>
        <textarea></textarea>
      </div>
    </>
  )
};

const NumberInput = () => {
  return (
    <> 
      <form>
        <input type="number" />
      </form>
    </>
  )
};

const FileInput = () => {
  return (
    <>
      <div>
        <input id='files' type='file' multiple />
      </div>
    </>
  )
};

export { FileInput, NumberInput, TextInput, Textarea };
