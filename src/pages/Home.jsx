import React, { useState } from 'react';  
import { Outlet, Link } from 'react-router-dom';
import { AiOutlineStar } from 'react-icons/ai';
import { GrAdd } from 'react-icons/gr';
import Myimage from '../Layouts/images/index';
import Sidebar from '../Layouts/main/sidebar';
import Navbar from '../Layouts/main/nav';
import '../Assets/homepage.scss';

const Homepage = () => {

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
        <div className='home-content'>
          <div className='welcome'>
            <div className='heads'>
              <h>Welcome home, Owieoghene!</h>
            </div>
            <div className='second-heads'>
              <Link to='/story' className='link-project'>
                <span>New Project</span>
              </Link>
            </div>
          </div>
          <div className='border'>
          </div>
          <div className='picks'>
            <div className='title'>
              <h2>Your books</h2>
            </div>
            <div className='content'>
              <div className='pro'>
                <Myimage />
                <div className='des'>
                  <span>Adidaasas</span>
                  <h5>Owie Airline</h5>
                  <div className='star'>
                    <i> <AiOutlineStar /> </i>
                    <i> <AiOutlineStar /> </i>
                    <i> <AiOutlineStar /> </i>
                    <i> <AiOutlineStar /> </i>
                    <i> <AiOutlineStar /> </i>
                  </div>
                  <h4>$22</h4>
                </div>
                <button> <i className='cart'> <GrAdd/> </i> </button>
              </div>
              <div className='pro'>
                <Myimage />
                <div className='des'>
                  <span>Adidas</span>
                  <h5>Owie Airline</h5>
                  <div className='star'>
                    <i> <AiOutlineStar /> </i>
                    <i> <AiOutlineStar /> </i>
                    <i> <AiOutlineStar /> </i>
                    <i> <AiOutlineStar /> </i>
                    <i> <AiOutlineStar /> </i>
                  </div>
                  <h4>$22</h4>
                </div>
                <button> <i className='cart'> <GrAdd/> </i> </button>
              </div>
              <div className='pro'>
                <Myimage />
                <div className='des'>
                  <span>Adidas</span>
                  <h5>Owie Airline</h5>
                  <div className='star'>
                    <i> <AiOutlineStar /> </i>
                    <i> <AiOutlineStar /> </i>
                    <i> <AiOutlineStar /> </i>
                    <i> <AiOutlineStar /> </i>
                    <i> <AiOutlineStar /> </i>
                  </div>
                  <h4>$22</h4>
                </div>
                <button> <i className='cart'> <GrAdd/> </i> </button>
              </div>
              <div className='pro'>
                <Myimage />
                <div className='des'>
                  <span>Adidas</span>
                  <h5>Owie Airline</h5>
                  <div className='star'>
                    <i> <AiOutlineStar /> </i>
                    <i> <AiOutlineStar /> </i>
                    <i> <AiOutlineStar /> </i>
                    <i> <AiOutlineStar /> </i>
                    <i> <AiOutlineStar /> </i>
                  </div>
                  <h4>$22</h4>
                </div>
                <button> <i className='cart'> <GrAdd/> </i> </button>
              </div>
              <div className='pro'>
                <Myimage />
                <div className='des'>
                  <span>Adidas</span>
                  <h5>Owie Airline</h5>
                  <div className='star'>
                    <i> <AiOutlineStar /> </i>
                    <i> <AiOutlineStar /> </i>
                    <i> <AiOutlineStar /> </i>
                    <i> <AiOutlineStar /> </i>
                    <i> <AiOutlineStar /> </i>
                  </div>
                  <h4>$22</h4>
                </div>
                <button> <i className='cart'> <GrAdd/> </i> </button>
              </div>
              <div className='pro'>
                <Myimage />
                <div className='des'>
                  <span>Adidas</span>
                  <h5>Owie Airline</h5>
                  <div className='star'>
                    <i> <AiOutlineStar /> </i>
                    <i> <AiOutlineStar /> </i>
                    <i> <AiOutlineStar /> </i>
                    <i> <AiOutlineStar /> </i>
                    <i> <AiOutlineStar /> </i>
                  </div>
                  <h4>$22</h4>
                </div>
                <button> <i className='cart'> <GrAdd/> </i> </button>
              </div>
              <div className='pro'>
                <Myimage />
                <div className='des'>
                  <span>Adidas</span>
                  <h5>Owie Airline</h5>
                  <div className='star'>
                    <i> <AiOutlineStar /> </i>
                    <i> <AiOutlineStar /> </i>
                    <i> <AiOutlineStar /> </i>
                    <i> <AiOutlineStar /> </i>
                    <i> <AiOutlineStar /> </i>
                  </div>
                  <h4>$22</h4>
                </div>
                <button> <i className='cart'> <GrAdd/> </i> </button>
              </div>
            </div>
            </div>
            <div className='border'>
            </div>
            <div class='history'>
              <div class='first-header'>
                <h>History</h>
              </div>
              <div class='second-header'>
                <h>Borrowed History</h>
              </div>
              <div className='content'>
                <div className='pro'>
                  <Myimage />
                  <div className='des'>
                    <span>Adidas</span>
                    <h5>Owie Airline</h5>
                    <div className='star'>
                      <i> <AiOutlineStar /> </i>
                      <i> <AiOutlineStar /> </i>
                      <i> <AiOutlineStar /> </i>
                      <i> <AiOutlineStar /> </i>
                      <i> <AiOutlineStar /> </i>
                    </div>
                    <h4>$22</h4>
                  </div>
                  <button> <i className='cart'> <GrAdd/> </i> </button>
                </div>
                <div className='pro'>
                    <Myimage />
                  <div className='des'>
                    <span>Adidas</span>
                    <h5>Owie Airline</h5>
                    <div className='star'>
                      <i> <AiOutlineStar /> </i>
                      <i> <AiOutlineStar /> </i>
                      <i> <AiOutlineStar /> </i>
                      <i> <AiOutlineStar /> </i>
                      <i> <AiOutlineStar /> </i>
                    </div>
                    <h4>$22</h4>
                  </div>
                  <button> <i className='cart'> <GrAdd/> </i> </button>
                </div>
                <div className='pro'>
                    <Myimage />
                  <div className='des'>
                    <span>Adidas</span>
                    <h5>Owie Airline</h5>
                    <div className='star'>
                      <i> <AiOutlineStar /> </i>
                      <i> <AiOutlineStar /> </i>
                      <i> <AiOutlineStar /> </i>
                      <i> <AiOutlineStar /> </i>
                      <i> <AiOutlineStar /> </i>
                    </div>
                    <h4>$22</h4>
                  </div>
                  <button> <i className='cart'> <GrAdd/> </i> </button>
                </div>
                <div className='pro'>
                    <Myimage />
                  <div className='des'>
                    <span>Adidas</span>
                    <h5>Owie Airline</h5>
                    <div className='star'>
                      <i> <AiOutlineStar /> </i>
                      <i> <AiOutlineStar /> </i>
                      <i> <AiOutlineStar /> </i>
                      <i> <AiOutlineStar /> </i>
                      <i> <AiOutlineStar /> </i>
                    </div>
                    <h4>$22</h4>
                  </div>
                  <button> <i className='cart'> <GrAdd/> </i> </button>
                </div>
              </div>
            <div className='border'>
            </div>
              <div class='second-header'>
                <h>Returned History</h>
              </div>
              <div className='content'>
                <div className='pro'>
                    <Myimage />
                  <div className='des'>
                    <span>Adidas</span>
                    <h5>Owie Airline</h5>
                    <div className='star'>
                      <i> <AiOutlineStar /> </i>
                      <i> <AiOutlineStar /> </i>
                      <i> <AiOutlineStar /> </i>
                      <i> <AiOutlineStar /> </i>
                      <i> <AiOutlineStar /> </i>
                    </div>
                    <button>Return</button>
                  </div>
                  <button> <i className='cart'> <GrAdd/> </i> </button>
                </div>
                <div className='pro'>
                    <Myimage />
                  <div className='des'>
                    <span>Adidas</span>
                    <h5>Owie Airline</h5>
                    <div className='star'>
                      <i> <AiOutlineStar /> </i>
                      <i> <AiOutlineStar /> </i>
                      <i> <AiOutlineStar /> </i>
                      <i> <AiOutlineStar /> </i>
                      <i> <AiOutlineStar /> </i>
                    </div>
                    <button>Return</button>
                  </div>
                  <button> <i className='cart'> <GrAdd/> </i> </button>
                </div>
                <div className='pro'>
                    <Myimage />
                  <div className='des'>
                    <span>Adidas</span>
                    <h5>Owie Airline</h5>
                    <div className='star'>
                      <i> <AiOutlineStar /> </i>
                      <i> <AiOutlineStar /> </i>
                      <i> <AiOutlineStar /> </i>
                      <i> <AiOutlineStar /> </i>
                      <i> <AiOutlineStar /> </i>
                    </div>
                    <button>Return</button>
                  </div>
                  <button> <i className='cart'> <GrAdd/> </i> </button>
                </div>
                <div className='pro'>
                    <Myimage />
                  <div className='des'>
                    <span>Adidas</span>
                    <h5>Owie Airline</h5>
                    <div className='star'>
                      <i> <AiOutlineStar /> </i>
                      <i> <AiOutlineStar /> </i>
                      <i> <AiOutlineStar /> </i>
                      <i> <AiOutlineStar /> </i>
                      <i> <AiOutlineStar /> </i>
                    </div>
                    <button>Return</button>
                  </div>
                  <button> <i className='cart'> <GrAdd/> </i> </button>
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
