import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const MainFile = ({ getImage, message }) => (
  <>
    <label className="label-con" for="file-input">
      <i className='icon'><AiOutlinePlus/></i>
    </label>
    <input
      id="file-input"
      type="file"
      onChange={getImage}
    />
    <div className="img-name">
      <p> { message } </p>
    </div>
  </>
);

export default MainFile;
