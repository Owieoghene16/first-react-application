import React from 'react';
import { Outlet } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import Myimage from '../images/Index.jsx';
import Searchbar from '../../Components/inputs/Search.jsx';

const Navbar = ({ click }) => (
  <>
    <nav>
      <div className='sidebar-button'>
        <i onClick={ click }> <HiMenu /> </i>
        <span className='dashboard'>Book</span>
      </div>
      <div className='search-box'>
        <Searchbar />
      </div>
      <div className='profile-details'>
        <Myimage />
      </div>
    </nav>
    <Outlet />
  </>
);

export default Navbar;
