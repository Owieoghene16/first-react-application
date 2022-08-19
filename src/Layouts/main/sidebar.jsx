/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FaHome, FaComment, FaBook } from 'react-icons/fa';
import { RiUserFill } from 'react-icons/ri';
import { BiTask, BiLogOut } from 'react-icons/bi';
import { AiFillSetting } from 'react-icons/ai';

const Sidebar = ({ togglebar }) => (
  <>
	  <div className={ togglebar ? 'sidebar active' : 'sidebar' }>
      <div className='logo-details'>
        <i><FaBook /></i>
        <span className='logo_name'>Bookstack</span>
      </div>
      <nav>
        <ul className='nav-links'>
          <li>
            <Link to='/home' className='active'>
              <i><FaHome /></i>
              <span className='links_name'>Home</span>
            </Link>
          </li>
          <li>
            <Link to='/profile'>
              <i><RiUserFill /></i>
              <span className='links_name'>Profile</span>
            </Link>
          </li>
          <li>
            <Link to='/book'>
              <i><BiTask /></i>
              <span className='links_name'>Books</span>
            </Link>
          </li>
          <li>
            <Link to='/demo'>
              <i><FaComment /></i>
              <span className='links_name'>Friends</span>
            </Link>
          </li>
          <li>
            <Link to='#'>
              <i><AiFillSetting /></i>
              <span className='links_name'>Settings</span>
            </Link>
          </li>
          <li className='log_out'>
            <Link to='#'>
              <i><BiLogOut /></i>
              <span className='links_name'>Logout</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    <Outlet />
	</>
);

export default Sidebar;
