import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import Sidebar from '../Layouts/main/sidebar';
import Navbar from '../Layouts/main/nav';
import { Information, EditName } from '../Components/inputs/Profile.jsx';
import { UpdateUserInformation } from '../Components/buttons/Profile.jsx';
import '../Assets/profile.scss';

const Profile = () => {

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
          <div className="home-content">
            <div className="showcase">
              <h1>Hello Dear</h1>
              <p>This is your profile page. You can see the progress you've made with<br></br> your work and manage your projects or assigned tasks</p>
              <Link to="blogs" className="but2"><span></span>Edit Profile</Link>
            </div>
            <div className="column">
              <div className="row1">
                <div className="first-header">
                  <h>My Account</h>
                  <div className="set">
                    <a href="./homepage.html"><span>Settings</span></a>
                  </div>
                </div>
                <div className="second-header">
                  <p>User Information:</p>
                </div>
                <div className="third-header">
                  <p>Username</p>
                  <p2>Email</p2>
                </div>
                <div className="fourth-header">
                  <EditName />
                </div>
                <div className="third-header">
                  <p>First Name</p>
                  <p2>Last Name</p2>
                </div>
                <div className="fourth-header">
                  <EditName />
                </div>
                <div className="fifth-header">
                  <p>About Me</p>
                </div>
                <div className="third-header">
                  <p>Description</p>
                </div>
                <div className="sixth-header">
                  <Information />
                </div>
                <div className="update">
                  <UpdateUserInformation />
                </div>
                <footer />
              </div>
              <div className="row2">
                <div className="first-item">
                  <div className="connect">
                    <Link to="/contact"><span>Connect</span></Link>
                  </div>
                  <img className="rounded-circle" src="https://demos.creative-tim.com/argon-dashboard/assets/img/team-3.jpg" alt=""></img>
                  <div className="connect">
                    <Link to=""><span>Inbox</span></Link>
                  </div>
                </div>
                <div className="second-item">
                  <p>22</p>
                  <p>10</p>
                  <p>18</p>
                </div>
                <div className="second-item">
                  <p>Friends</p>
                  <p>Video</p>
                  <p>Comment</p>
                </div>
                <div className="third-item">
                   <p>Okpugie Kindness</p>
                  <p1>Lagos Nigeria</p1>
                </div>
                <div className="third-item">
                  <p>Studying Computer Science</p>
                  <p1>University of Technology</p1>
                </div>
                <div className="third-item">
                  <p className="center5">Owie — the name taken by Melbourne-raised, <br></br>Brooklyn-based Nick Murphy —<br></br> writes, performs and records all of his own music.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      <Outlet />
    </>
  )
};

export default Profile;
