import React from 'react';  
import './profile.css';
import { Outlet, Link } from "react-router-dom";
import { FaHome, FaComment, FaBook } from "react-icons/fa";
import { RiUserFill } from "react-icons/ri";
import { BiTask, BiLogOut } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";

const Profile = () => {
  return ( 
		<>
		  <div className="sidebar">
			  <div className="logo-details">
          <i><FaBook /></i>
			  	<span className="logo_name">Bookstack</span>
			  </div>
			  <ul className="nav-links">
					<li>
						<Link to="/home">
              <i><FaHome /></i>
							<span className="links_name">Home</span>
						</Link>
					</li>
					<li>
						<Link to="/profile" className="active">
              <i><RiUserFill /></i>
							<span className="links_name">Profile</span>
						</Link>
					</li>
					<li>
						<Link to="/">
              <i><BiTask /></i>
							<span className="links_name">Books</span>
						</Link>
					</li>
					<li>
						<Link to="blogs">
              <i><FaComment /></i>
							<span className="links_name">Friends</span>
						</Link>
					</li>
					<li>
				  	<Link to="blogs">
              <i><AiFillSetting /></i>
							<span className="links_name">Setting</span>
						</Link>
					</li>
					<li className="log_out">
						<Link to="contact">
              <i><BiLogOut /></i>
							<span className="links_name">Log out</span>
						</Link>
					</li>
				</ul>
		  </div>
			
		  <section className="home-section">
		  	<nav>
			    <div className="sidebar-button">
            <i> <HiMenu /> </i>
				    <span className="dashboard">Profile</span>
				  </div>
				  <div className="search-box">
				  	<input type="text" placeholder="Search..."></input>
            <i className="bx-search"> <BsSearch /> </i>
			  	</div>
			  	<div className="profile-details">
			  		<img src="https://demos.creative-tim.com/argon-dashboard/assets/img/team-1.jpg" alt=""></img>
				  	<span className="admin_name">Your Name</span>
			  	</div>
		  	</nav>
			
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
				  			<input type="text"></input>
				  			<input type="text"></input>
				  		</div>
				  		<div className="third-header">
				  			<p>First Name</p>
				  			<p2>Last Name</p2>
				  		</div>
			  			<div className="fourth-header">
				  			<input type="text"></input>
			  				<input type="text"></input>
				  		</div>
				  		<div className="fifth-header">
				  			<p>Contact Information:</p>
				  		</div>
				  		<div className="third-header">
				  			<p>Address</p>
				  		</div>
				  		<div className="sixth-header">
				  			<input type="text"></input>
				  		</div>
					  	<div className="seventh-header">
						  	<p>City</p>
						  	<p2>Country</p2>
					   	</div>
					  	<div className="fourth-header">
						  	<input type="text"></input>
						  	<input type="text"></input>
					  	</div>
					  	<div className="fifth-header">
					  		<p>About Me</p>
					  	</div>
					  	<div className="third-header">
					  		<p>Description</p>
					  	</div>
					  	<div className="sixth-header">
						  	<textarea className="text-area" type="text">Owie — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy - writes, performs and records all of his own music.</textarea>
						  </div>
					  	<div className="update">
						  	<Link to="/" className="but1">Update</Link>
						  </div>
						  <footer>
						  	<p>Bookstack &copy; 2021</p>
					  	</footer>
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
