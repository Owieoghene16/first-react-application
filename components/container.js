import React from 'react';  
import '../src/homepage.css';
import { Outlet } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";

const Container = () => {
  return (
    <> 
      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            <i> <HiMenu /> </i>
            <span className="dashboard">Home</span>
          </div>
          <div className="search-box">
            <input type="text" placeholder="Search..."></input>
            <i className="bx-search"> <BsSearch /> </i>
          </div>
          <div className="profile-details">
            <img src="https://i.ibb.co/P4mjwQR/pic.jpg" alt=""></img>
            <span className="admin_name">User Name</span>
          </div>
        </nav>
			</section>
		<Outlet />
		</> 
	)
};

export default Container;
