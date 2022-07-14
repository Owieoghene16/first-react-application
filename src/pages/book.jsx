import React, { useState } from 'react';  
import { Outlet, Link } from 'react-router-dom';
import { AiOutlineStar } from 'react-icons/ai';
import { GrAdd } from 'react-icons/gr';
import Myimage from '../Layouts/images/index';
import Sidebar from '../Layouts/main/sidebar';
import Navbar from '../Layouts/main/nav';
import '../Assets/book.scss';

const Book = () => {

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
          <div className='wel'>
            <div className='heading'>
              <h>Your desired collections</h>
            </div>
            <div className='second-heading'>
              <p>New books everyday!</p>
            </div>
          </div>
          <div className='book-item'>
            <div className='pro-container'>
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
                <Link to="#"> <i className='cart'> <GrAdd/> </i> </Link>
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
                <Link to="#"> <i className='cart'> <GrAdd/> </i> </Link>
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
                <Link to="#"> <i className='cart'> <GrAdd/> </i> </Link>
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
                <Link to="#"> <i className='cart'> <GrAdd/> </i> </Link>
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
                <Link to="#"> <i className='cart'> <GrAdd/> </i> </Link>
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
                <Link to="#"> <i className='cart'> <GrAdd/> </i> </Link>
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
                <Link to="#"> <i className='cart'> <GrAdd/> </i> </Link>
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
                <Link to="#"> <i className='cart'> <GrAdd/> </i> </Link>
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
                <Link to="#"> <i className='cart'> <GrAdd/> </i> </Link>
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
                <Link to="#"> <i className='cart'> <GrAdd/> </i> </Link>
              </div>
            </div>
          </div>
          <div className='next'>
              <button>1</button>
              <button>2</button>
              <button>3</button>
          </div>
        </div>
      </section>
      <Outlet />
    </> 
  )
};

export default Book;
