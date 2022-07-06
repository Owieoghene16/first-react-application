import React, { useState }from 'react';  
import { Outlet } from 'react-router-dom';
import Myimage from '../Layouts/images/index';
import Sidebar from '../Layouts/main/sidebar';
import Navbar from '../Layouts/main/nav';
import '../Assets/singlebook.scss';

const SingleBook = () => {

  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <> 
      <Sidebar 
        togglebar={open}
      />
      <section className='home-section'>
        <Navbar 
          click={handleToggle}
        />
        <div className='home-con'>
          <div className='single'>
            <div className='single-pro-image'>
              <Myimage />
              <div className='small-img-group'>
                <div className='small-img-col'>
                  <Myimage />
                </div>
                <div className='small-img-col'>
                  <Myimage />
                </div>
                <div className='small-img-col'>
                  <Myimage />
                </div>
                <div className='small-img-col'>
                  <Myimage />
                </div>
              </div>
            </div>
            <div className='single-pro-details'>
              <h6>Owie Airline</h6>
              <h4>Return Of Ivar</h4>
              <h2>$22.50</h2>
              <div className='pdf-content'>
                <img src='https://cdn-icons-png.flaticon.com/512/2921/2921451.png' alt='' />
              </div>
              <input type='number' value='1' />
              <button class='normal'>Borrow Book</button>
              <h3>Book Details</h3>
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                has been the industry's standard dummy text ever since the 1500s, when an unknown printers
                took a galley of type and scrambled it to make a type specimen book. It has survived note 
                only five centuries, but also the leap into electronic typesetting, remaining essentially 
                Maker including versions of Lorem Ipsum
              </span>
            </div>
          </div>
        </div>
      </section>
      <Outlet />
    </>
  )
};

export default SingleBook;
