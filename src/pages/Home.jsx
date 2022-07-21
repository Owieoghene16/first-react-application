import React, { useState } from 'react';  
import { Outlet, Link } from 'react-router-dom';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import Box from '../Layouts/main/box';
import Sidebar from '../Layouts/main/sidebar';
import Navbar from '../Layouts/main/nav';
import '../Assets/homepage.scss';

const Homepage = () => {

  /*Navbar toggle */
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
        <div className='home-content'>
          <div className='welcome'>
            <div className='heads'>
              <h>Welcome home, Owieoghene!</h>
            </div>
            <div className='second-heads'>
              <Link to='/story' className='link-project'>
                <span>New Project</span>
              </Link>
            </div>
          </div>
          <div className='border'>
          </div>
          <div className='picks'>
            <div className='title'>
              <h2>Your books</h2>
            </div>
            <div className='content'>
              <Box />
              <Box />
              <Box />
              <Box />
              </div>
            </div>
            <div className='border'>
            </div>
            <div class='history'>
              <div class='first-header'>
                <h>History</h>
              </div>
              <div class='second-header'>
                <h>Borrowed History</h>
              </div>
              <div className='content'>
                <Box />
                <Box />
                <Box />
                <Box />
              </div>
              <div className='border'>
              </div>
              <div class='second-header'>
                <h>Returned History</h>
              </div>
              <div className='content'>
                <Box />
                <Box />
                <Box />
              </div>
            </div>
            <div className='button-container'>
              <div class='next'>
                <button><i><GrFormPrevious /></i></button>
              </div>
              <div class='next'>
                <button><i><GrFormNext /></i></button>
              </div>
          </div>
          </div>
        </section>
      <Outlet />
    </>
  )
};

export default Homepage;
