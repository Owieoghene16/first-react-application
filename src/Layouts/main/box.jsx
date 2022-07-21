import React from 'react';
import { Outlet } from 'react-router-dom';
import { AiOutlineStar } from 'react-icons/ai';
import { GrAdd } from 'react-icons/gr';
import Myimage from '../images/index';

const Box = () => {
  return (
    <>
      <div className='pro'>
        <Myimage />
        <div className='des'>
          <span>Adidas</span>
          <h5>Owie Airline</h5>
          <div className='star'>
            <i> <AiOutlineStar /> </i>
            <i> <AiOutlineStar /> </i>
            <i> <AiOutlineStar /> </i>
            <i> <AiOutlineStar /> </i>
            <i> <AiOutlineStar /> </i>
          </div>
          <h4>$22</h4>
        </div>
        <button> <i className='cart'> <GrAdd/> </i> </button>
      </div>
      <Outlet />
    </>
  );
};

export default Box;
