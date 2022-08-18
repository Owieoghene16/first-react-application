import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Sidebar from '../Layouts/main/Sidebar.jsx';
import Navbar from '../Layouts/main/Nav.jsx';
import useBoolean from '../utils/useTogglSidebar';
import '../Assets/profile.scss';

const Profile = () => {
  const {
    toggle,
    storage,
    handleToggle,
  } = useBoolean(false);

  return (
    <>
      <Sidebar
        togglebar={toggle}
      />
      <section className='home-section'>
        <Navbar
          click={handleToggle}
        />
        {
          storage
            ? <div className='main-profile'>
              <div className='column'>
                <div className='first-row'>
                  <div className='first-head'>
                    <h5>My account</h5>
                  </div>
                <div className='second-head'>
                  <p>User Information</p>
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
                      <p>Confirm password</p>
                    </div>
                    <div className='bottom'>
                      <input type='password'/>
                    </div>
                  </div>
                </div>
                <div className='third-head'>
                  <p>About me</p>
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
                  <p>Books</p>
                </div>
                <div className='second-item-row'>
                  <h5>05</h5>
                  <p>Borrowed</p>
                </div>
                <div className='second-item-row'>
                  <h5>02</h5>
                  <p>Returned</p>
                </div>
              </div>
              <div className='third-item'>
                <p>Okpugie Kindness</p>
              </div>
              <div className='fourth-item'>
                <p>Lagos</p>
                <p>Nigeria</p>
              </div>
              <div className='fifth-item'>
                <span>Owie — the name taken by Melbourne-raised,
                  Brooklyn-based Nick Murphy - writes, performs,
                  and records all of his own music.
                </span>
              </div>
            </div>
          </div>
          </div>
            : <div className='home-content'>
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
  );
};

export default Profile;
