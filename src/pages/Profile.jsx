import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Sidebar from '../Layouts/main/sidebar';
import Navbar from '../Layouts/main/nav';
import '../Assets/profile.scss';

const Profile = () => {

  const [open, setOpen] = useState(false);
  const storage = JSON.parse(sessionStorage.getItem('user'));

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
        {
          storage ?
        <div className='main-profile'>
        <div className='column'>
          <div className='first-row'>
            <div className='first-head'>
              <h5>My account</h5>
            </div>
            <div className='second-head'>
              <p1>User Information</p1>
            </div>
            <div class='column-con'>
              <div className='content'>
                <div className='top'>
                  <p>Username</p>
                </div>
                <div className='bottom'>
                  <input type='text'/>
                </div>
              </div>
              <div className='second-content'>
                <div className='top'>
                  <p>Email</p>
                </div>
                <div className='bottom'>
                  <input type='text'/>
                </div>
              </div>
            </div>
            <div class='column-con'>
              <div className='content'>
                <div className='top'>
                  <p>Password</p>
                </div>
                <div className='bottom'>
                  <input type='password'/>
                </div>
              </div>
              <div className='second-content'>
                <div className='top'>
                  <p>Reenter password</p>
                </div>
                <div className='bottom'>
                  <input type='password'/>
                </div>
              </div>
            </div>
            <div className='third-head'>
              <p1>About me</p1>
            </div>
            <div className='fourth-head'>
              <p>Description</p>
            </div>
            <div className='fifth-header'>
              <textarea>Owie — the name taken by Melbourne-raised, 
                Brooklyn-based Nick Murphy - writes, performs, and
                records all of his own music.
              </textarea>
            </div>
            <div className='sixth-header'>
              <button>Update</button>
            </div>
          </div>
          <div className='second-row'>
              <div className='first-item'>
                <div className='connect'>
                  <Link to='#'><span>Connect</span></Link>
                </div>
                <img src='https://demos.creative-tim.com/argon-dashboard/assets/img/team-3.jpg' alt=''></img>
                <div className='connect'>
                  <Link to='#'><span>Inbox</span></Link>
                </div>
              </div>
              <div className="second-item">
                <div className='second-item-row'>
                  <h5>12</h5>
                  <p2>Books</p2>
                </div>
                <div className='second-item-row'>
                  <h5>05</h5>
                  <p2>Borrowed</p2>
                </div>
                <div className='second-item-row'>
                  <h5>02</h5>
                  <p2>Returned</p2>
                </div>
              </div>
              <div className='third-item'>
                <p>Okpugie Kindness</p>
              </div>
              <div className='fourth-item'>
                <p1>Lagos</p1>
                <p2>Nigeria</p2>
              </div>
              <div className='fifth-item'>
                <span>Owie — the name taken by Melbourne-raised,
                  Brooklyn-based Nick Murphy - writes, performs,
                  and records all of his own music.
                </span>
              </div>
            </div>
          </div>
          </div> : 
          <div className='home-content'>
            <div className='invalid'>
              <div className='heads'>
                <h>Login Expired</h>
              </div>
              <div className='again'>                 
                <Link to='/signin'>Login Again</Link>
              </div>
            </div>
          </div>
        }
      </section>
      <Outlet />
    </>
  )
};

export default Profile;
