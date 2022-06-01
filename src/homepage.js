import React from 'react';  
import './homepage.css';
import { Outlet, Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { MdArrowDropDown } from "react-icons/md";

const Homepage = () => {
  return (
  <>
    <section className="home-section">
        <div className="home-content">
          <div className="welcome">
            <h>Welcome home, Owieoghene!</h>
            <Link to="/story">
              <span>New Project</span>
            </Link>
          </div>
          <div className="border">
          </div>
          <div className="picks">
            <div className="title">
              <h>Top Picks For You</h>
            </div>
            <div className="content">
              <div className="content-box">
                <div className="image">
                  <img src="https://demos.creative-tim.com/argon-dashboard/assets/img/team-3.jpg" alt=""></img>
                </div>
                <div id='myBtn' className="view">
                  <span>View</span>
                </div>
              </div>
              <div className="content-box">
                <div className="image">
                  <img src="https://demos.creative-tim.com/argon-dashboard/assets/img/team-2.jpg" alt=""></img>
                </div>
                <div id='myBtn' className="view">
                  <span>View</span>
                </div>
              </div>
              <div className="content-box">
                <div className="image">
                  <img src="https://demos.creative-tim.com/argon-dashboard/assets/img/team-4.jpg" alt=""></img>
                </div>
                <div id='myBtn' className="view">
                  <span>View</span>
                </div>
              </div>
              <div className="content-box">
                <div className="image">
                  <img src="https://demos.creative-tim.com/argon-dashboard/assets/img/team-3.jpg" alt=""></img>
                </div>
                <div id='myBtn' className="view">
                  <span>View</span>
                </div>
              </div>
              <div className="content-box">
                <div className="image">
                  <img src="https://demos.creative-tim.com/argon-dashboard/assets/img/team-1.jpg" alt=""></img>
                </div>
                <div id='myBtn' className="view">
                  <span>View</span>
                </div>
              </div>
              <div id="hidden" className="hidden">
                <div className="content-box2">
                 <div className="image">
                   <img src="https://demos.creative-tim.com/argon-dashboard/assets/img/team-1.jpg" alt=""></img>
                 </div>
                 <div className="view">
                   <button>View</button>
                 </div>
                </div>
                <div className="content-box2">
                 <div className="image">
                   <img src="https://demos.creative-tim.com/argon-dashboard/assets/img/team-1.jpg" alt=""></img>
                 </div>
                 <div className="view">
                   <button>View</button>
                 </div>
                </div>
                <div className="content-box2">
                 <div className="image">
                   <img src="https://demos.creative-tim.com/argon-dashboard/assets/img/team-1.jpg" alt=""></img>
                 </div>
                 <div className="view">
                   <button>View</button>
                 </div>
                </div>
                <div className="content-box2">
                 <div className="image">
                   <img src="https://demos.creative-tim.com/argon-dashboard/assets/img/team-1.jpg" alt=""></img>
                 </div>
                 <div className="view">
                   <button>View</button>
                 </div>
                </div>
                <div className="content-box2">
                 <div className="image">
                   <img src="https://demos.creative-tim.com/argon-dashboard/assets/img/team-1.jpg" alt=""></img>
                 </div>
                 <div className="view">
                   <button>View</button>
                 </div>
                </div>
                <div className="content-box2">
                  <div className="image">
                    <img src="https://demos.creative-tim.com/argon-dashboard/assets/img/team-1.jpg" alt=""></img>
                  </div>
                  <div className="view">
                    <button>View</button>
                </div>
                </div>
                <div className="content-box2">
                  <div className="image">
                    <img src="https://demos.creative-tim.com/argon-dashboard/assets/img/team-1.jpg" alt=""></img>
                  </div>
                  <div className="view">
                    <button>View</button>
                </div>
                </div>
                <div className="content-box2">
                  <div className="image">
                    <img src="https://demos.creative-tim.com/argon-dashboard/assets/img/team-1.jpg" alt=""></img>
                  </div>
                  <div className="view">
                    <button>View</button>
                </div>
                </div>
                <div className="content-box2">
                  <div className="image">
                    <img src="https://demos.creative-tim.com/argon-dashboard/assets/img/team-1.jpg" alt=""></img>
                  </div>
                  <div className="view">
                    <button>View</button>
                </div>
                </div>
                <div className="content-box2">
                  <div className="image">
                    <img src="https://demos.creative-tim.com/argon-dashboard/assets/img/team-1.jpg" alt=""></img>
                  </div>
                  <div className="view">
                    <button>View</button>
                  </div>
                </div>
              </div>
              <div className="dropdown2">
                <button id="dropdown" onclick="toggleVisibility() ">
                  <i><MdArrowDropDown /></i>
                </button>
              </div>
              </div>
              <div className="border">
              </div>
              <div className="picks">
                <div className="title">
                  <h>Adult picks</h>
                </div>
              <div className="content">
                <div className="content-box">
                  <div className="image">
                    <img src="https://demos.creative-tim.com/argon-dashboard/assets/img/team-4.jpg" alt=""></img>
                  </div>
                  <div id='myBtn' className="view">
                    <span>View</span>
                  </div>
                </div>
              <div className="content-box">
                <div className="image">
                  <img src="https://demos.creative-tim.com/argon-dashboard/assets/img/team-3.jpg" alt=""></img>
                </div>
                <div id='myBtn' className="view">
                  <span>View</span>
                </div>
              </div>
              <div className="content-box">
                <div className="image">
                  <img src="https://demos.creative-tim.com/argon-dashboard/assets/img/team-2.jpg" alt=""></img>
                </div>
                <div id='myBtn' className="view">
                  <span>View</span>
                </div>
              </div>
              <div className="content-box">
                <div className="image">
                  <img src="https://demos.creative-tim.com/argon-dashboard/assets/img/team-1.jpg" alt=""></img>
                </div>
                <div id='myBtn' className="view">
                  <span>View</span>
                </div>
              </div>
              <div className="content-box">
                <div className="image">
                  <img src="https://demos.creative-tim.com/argon-dashboard/assets/img/team-2.jpg" alt=""></img>
                </div>
                <div id='myBtn' className="view">
                  <span>View</span>
                </div>
                <div className="hidden">
                  <div className="content-box2">
                  </div>
                  <div className="content-box2">
                  </div>
                  <div className="content-box2">
                  </div>
                  <div className="content-box2">
                  </div>
                  <div className="content-box2">
                  </div>
                  <div className="content-box2">
                  </div>
                </div>
              </div>
          <div className="dropdown2">
            <button id="dropdown" onclick="toggleVisibility() ">
              <i><MdArrowDropDown /></i>
            </button>
          </div>
          </div>
        </div>
        <div className="border">
        </div>
        <div className="picks">
          <div className="title">
            <h>Trending</h>
          </div>
          <div className="my-trends">
            <div className="trends-box">
              <img src="https://demos.creative-tim.com/argon-dashboard/assets/img/team-4.jpg" alt=""></img>
            </div>
            <div className="trends-sms">
              <h5>Fast And Furious</h5>
              <Link to="/">By Bjorn Ironside</Link><br></br>
              <i> <HiMenu /> </i>
              <i> <HiMenu /> </i>
              <i> <HiMenu /> </i>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh </p>
              <button>Borrow Book</button>
            </div>
          </div>
        </div>
        <div className="border">
        </div>
        <div className="picks">
          <div className="title">
            <h>Children picks</h>
          </div>
          <div className="content">
            <div className="content-box">
              <div className="image">
                <img src="https://demos.creative-tim.com/argon-dashboard/assets/img/team-4.jpg" alt=""></img>
              </div>
              <div id='myBtn' className="view">
                <span>View</span>
              </div>
            </div>
            <div className="content-box">
              <div className="image">
                <img src="https://demos.creative-tim.com/argon-dashboard/assets/img/team-3.jpg" alt=""></img>
              </div>
              <div id='myBtn' className="view">
                <span>View</span>
              </div>
            </div>
            <div className="content-box">
              <div className="image">
                <img src="https://demos.creative-tim.com/argon-dashboard/assets/img/team-2.jpg" alt=""></img>
              </div>
              <div id='myBtn' className="view">
                <span>View</span>
              </div>
            </div>
            <div className="content-box">
              <div className="image">
                <img src="https://demos.creative-tim.com/argon-dashboard/assets/img/team-1.jpg" alt=""></img>
              </div>
              <div id='myBtn' className="view">
                <span>View</span>
              </div>
            </div>
            <div className="content-box">
              <div className="image">
                <img src="https://demos.creative-tim.com/argon-dashboard/assets/img/team-2.jpg" alt=""></img>
              </div>
              <div id='myBtn' className="view">
                <span>View</span>
              </div>
              <div className="hidden">
                <div className="content-box2">
                </div>
                <div className="content-box2">
                </div>
                <div className="content-box2">
                </div>
                <div className="content-box2">
                </div>
                <div className="content-box2">
                </div>
                <div className="content-box2">
                </div>
              </div>
            </div>
          <div className="dropdown2">
            <button id="dropdown" onclick="toggleVisibility() ">
              <i className='fa fa-chevron-down'></i>
            </button>
          </div>
            </div>
          </div>
          </div>
          </div>
        </section>
      <Outlet />
    </>
  )
};

export default Homepage;
