import React from 'react';  
import { Outlet, Link } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import { MdArrowDropDown } from 'react-icons/md';
import Navbar from '../Layouts/header/Navbar';
import Sidebar from '../Layouts/sidebar/Index.jsx';
import Image from '../Layouts/images/Image.jsx';
import { Button, Toggle } from '../Components/buttons/Button.jsx';
import '../Assets/homepage.css';

const Homepage = () => {
  return (
    <>
        <div>
          <Sidebar />
        </div>
        <section className='home-section'>
          <div>
            <Navbar />
          </div>
          <div className='home-content'>
            <div className='welcome'>
              <h>Welcome home, Owieoghene!</h>
              <Link to='/story'>
                <span>New Project</span>
              </Link>
            </div>
            <div className='border'>
            </div>
            <div className='picks'>
              <div className='title'>
                <h>Top Picks For You</h>
              </div>
              <div className='content'>
                <div className='content-box'>
                  <div>
                    <Image />             
                  </div>
                  <div className='view'>
                    <Button />   
                  </div>
                </div>
                <div className='content-box'>
                  <div>
                    <Image />             
                  </div>
                  <div className='view'>
                    <Button />   
                  </div>
                </div>
                <div className='content-box'>
                  <div>
                    <Image />             
                  </div>
                  <div className='view'>
                    <Button />   
                  </div>
                </div>
                <div className='content-box'>
                  <div>
                    <Image />             
                  </div>
                  <div className='view'>
                    <Button />   
                  </div>
                </div>
                <div className='content-box'>
                  <div>
                    <Image />             
                  </div>
                  <div className='view'>
                    <Button />   
                  </div>
                </div>
                <div className='dropdown2'>
                  <button id='dropdown' onclick='toggleVisibility() '>
                    <i><MdArrowDropDown /></i>
                  </button>
                </div>
                </div>
                <div className='border'>
                </div>
                <div className='picks'>
                  <div className='title'>
                    <h>Adult picks</h>
                  </div>
                <div className='content'>
                <div className='content-box'>
                  <div>
                    <Image />             
                  </div>
                  <div className='view'>
                    <Button />   
                  </div>
                </div>
                <div className='content-box'>
                  <div>
                    <Image />             
                  </div>
                  <div className='view'>
                    <Button />   
                  </div>
                </div>
                <div className='content-box'>
                  <div>
                    <Image />             
                  </div>
                  <div className='view'>
                    <Button />   
                  </div>
                </div>
                <div className='content-box'>
                  <div>
                    <Image />             
                  </div>
                  <div className='view'>
                    <Button />   
                  </div>
                </div>
                <div className='content-box'>
                  <div>
                    <Image />             
                  </div>
                  <div className='view'>
                    <Button />   
                  </div>
                </div>
                <div className='dropdown2'>
                  <Toggle />
                </div>
              </div>
            </div>
            <div className='border'>
            </div>
            <div className='picks'>
              <div className='title'>
                <h>Trending</h>
              </div>
              <div className='my-trends'>
                <div className='trends-box'>
                  <img src='https://demos.creative-tim.com/argon-dashboard/assets/img/team-4.jpg' alt=''></img>
                </div>
                <div className='trends-sms'>
                  <h5>Fast And Furious</h5>
                  <Link to='/'>By Bjorn Ironside</Link><br></br>
                  <i> <HiMenu /> </i>
                  <i> <HiMenu /> </i>
                  <i> <HiMenu /> </i>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh 
                  </p>
                  <button>Borrow Book</button>
                </div>
              </div>
            </div>
            <div className='border'>
            </div>
            <div className='picks'>
              <div className='title'>
                <h>Children picks</h>
              </div>
              <div className='content'>
                <div className='content-box'>
                  <div>
                    <Image />             
                  </div>
                  <div className='view'>
                    <Button />   
                  </div>
                </div>
                <div className='content-box'>
                  <div>
                    <Image />             
                  </div>
                  <div className='view'>
                    <Button />   
                  </div>
                </div>
                <div className='content-box'>
                  <div>
                    <Image />             
                  </div>
                  <div className='view'>
                    <Button />   
                  </div>
                </div>
                <div className='content-box'>
                  <div>
                    <Image />             
                  </div>
                  <div className='view'>
                    <Button />   
                  </div>
                </div>
                <div className='content-box'>
                  <div>
                    <Image />             
                  </div>
                  <div className='view'>
                    <Button />   
                  </div>
                </div>
                <div className='border'>
                </div>
                <div className='dropdown2'>
                  <Toggle />
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>
      <Outlet />
    </>
  )
}

export default Homepage;
