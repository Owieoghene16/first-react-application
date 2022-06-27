import React from 'react';  
import { HiMenu } from 'react-icons/hi';
import Searchbar from '../../Components/inputs/Search.jsx';

const Navbar = () => {
  return (
    <>
      <nav>
        <div className='sidebar-button'>
          <i> <HiMenu /> </i>
          <span className='dashboard'>Home</span>
        </div>
        <div className='search-box'>
          <Searchbar />
        </div>
        <div className='profile-details'>
          <img src='https://i.ibb.co/P4mjwQR/pic.jpg' alt=''></img>
          <span className='admin_name'>User Name</span>
        </div>
      </nav>
		</> 
	)
};

export default Navbar;
