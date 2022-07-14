import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
// import Image from '../../Layouts/images/Image';

const File = () => {

  const [imagename, setImageName] = useState('');
  const getImage = (images) => {
    const newimg = images.replace(/^.*\\/, '');
    setImageName(newimg);
  } 

  return (
    <>
      <label className="label-con" for="first-file-input">
        <i className='icon'><AiOutlinePlus/> </i>
      </label>
      <input
        id="first-file-input" 
        type="file" 
        onChange={(e) => {
          getImage(e.target.value)
          console.log('fireeeeeeeeeee')
        }}
      />
      <div className="img-name">
        <p> { imagename } </p>
      </div>
    </>
  )
};

/* files*/
const SecondFile = () => {

  const [imagename, setImageName] = useState('');
  const getImage = (images) => {
    const newimg = images.replace(/^.*\\/, '');
    setImageName(newimg);
  } 

  return (
    <>
      <label className="label-con" for="second-file-input">
        <i className='icon'><AiOutlinePlus/> </i>
      </label>
      <input
        id="second-file-input" 
        type="file" 
        onChange={(e) => {
          getImage(e.target.value)
          console.log('fireeeeeeeeeee')
        }}
      />
      <div className="img-name">
        <p> { imagename } </p>
      </div>
    </>
  )
};

const ThirdFile = () => {

  const [imagename, setImageName] = useState('');
  const getImage = (images) => {
    const newimg = images.replace(/^.*\\/, '');
    setImageName(newimg);
  } 

  return (
    <>
      <label className="label-con" for="third-file-input">
        <i className='icon'><AiOutlinePlus/> </i>
      </label>
      <input
        id="third-file-input" 
        type="file" 
        onChange={(e) => {
          getImage(e.target.value)
          console.log('fireeeeeeeeeee')
        }}
      />
      <div className="img-name">
        <p> { imagename } </p>
      </div>
    </>
  )
};

const FourthFile = () => {

  const [imagename, setImageName] = useState('');
  const getImage = (images) => {
    const newimg = images.replace(/^.*\\/, '');
    setImageName(newimg);
  } 

  return (
    <>
      <label className="label-con" for="fourth-file-input">
        <i className='icon'><AiOutlinePlus/> </i>
      </label>
      <input
        id="fourth-file-input" 
        type="file" 
        onChange={(e) => {
          getImage(e.target.value)
          console.log('fireeeeeeeeeee')
        }}
      />
      <div className="img-name">
        <p> { imagename } </p>
      </div>
    </>
  )
};


/* */
const MainFile = ({ getMainFile, mainImg }) => {
  return (
    <>
      <label className="label-con" for="file-input">
        <i className='icon'><AiOutlinePlus/> </i>
      </label>
      <input
        id="file-input" 
        type="file" 
        onChange={(e) => {
          getMainFile(e.target.value)
        }}
      />
      <div className="img-name">
        <p> { mainImg } </p>
      </div>
    </>
  )
};

const OverFile = ({ getMainFile, mainImg }) => {
  return (
    <>
      <div className='overlay-con'>
        <img src='https://cdn-icons-png.flaticon.com/512/685/685668.png' alt=''></img>
        <div className='overlay'>
          <label className="label-con" for="file-input">
            <i className='icon'><AiOutlinePlus/> </i>
          </label>
          <input
            id="file-input" 
            type="file" 
            onChange={(e) => {
              getMainFile(e.target.value)
            }}
          />
          <div className="img-name">
            <p> { mainImg } </p>
          </div>
        </div>
      </div>
    </>
  )
};

export { MainFile, File, SecondFile, ThirdFile, FourthFile, OverFile };
