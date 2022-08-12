import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const File = ({ image, imagename }) => {
  <>
    <label className="label-con" for="first-file-input">
      <i className='icon'><AiOutlinePlus/> </i>
    </label>
    <input
      id="first-file-input"
      type="file"
      onChange={image}
    />
    <div className="img-name">
      <p> { imagename } </p>
    </div>
  </>;
};

// files
const SecondFile = ({ image, imagename }) => {
  <>
    <label className="label-con" for="second-file-input">
      <i className='icon'><AiOutlinePlus/> </i>
    </label>
    <input
      id="second-file-input"
      type="file"
      onChange={image}
    />
    <div className="img-name">
      <p> { imagename } </p>
    </div>
  </>;
};

const ThirdFile = ({ image, imagename }) => {
    <>
      <label className="label-con" for="third-file-input">
        <i className='icon'><AiOutlinePlus/> </i>
      </label>
      <input
        id="third-file-input"
        type="file"
        onChange={image}
      />
      <div className="img-name">
        <p> { imagename } </p>
      </div>
    </>;
};

const FourthFile = ({ image, imagename }) => {
  <>
    <label className="label-con" for="fourth-file-input">
      <i className='icon'><AiOutlinePlus/> </i>
    </label>
    <input
      id="fourth-file-input"
      type="file"
      onChange={image}
    />
    <div className="img-name">
      <p> { imagename } </p>
    </div>
  </>;
};

// mainfile
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

export {
  MainFile, File, SecondFile, ThirdFile, FourthFile,
};
