import React, { useState, useEffect } from 'react';  
import { Outlet, Link } from 'react-router-dom';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import Box from '../Layouts/main/box';
import Sidebar from '../Layouts/main/sidebar';
import Navbar from '../Layouts/main/nav';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineStar } from 'react-icons/ai';
import { GrAdd } from 'react-icons/gr';
import { loadBooks } from '../redux/actions';
import '../Assets/homepage.scss';

const Homepage = () => {

  /*Navbar toggle */
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };
  
  const dispatch = useDispatch();
  const books = useSelector((state) => state.database.books);

  useEffect(() => {
    dispatch(loadBooks());
  }, [dispatch])

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
                {
                  books.map((item) => {
                    return (
                      <div className='pro' key={item.id}>
                        <img src={item.imageUrl} alt='' />
                        <div className='des'>
                          <span>Adidas</span>
                          <h5>{item.title}</h5>
                          <div className='star'>
                            <i> <AiOutlineStar /> </i>
                            <i> <AiOutlineStar /> </i>
                            <i> <AiOutlineStar /> </i>
                            <i> <AiOutlineStar /> </i>
                            <i> <AiOutlineStar /> </i>
                          </div>
                          <h4>$22</h4>
                        </div>
                        <button onClick={() => (console.log(item.id, item.title))}> <i className='cart'> <GrAdd/> </i> </button>
                      </div>
                      )
                    }
                  )
                }
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
                <Box />
              </div>
              <div className='border'>
              </div>
              <div class='second-header'>
                <h>Returned History</h>
              </div>
              <div className='content'>
                <Box />
              </div>
            </div>
            <div className='button-container'>
              <div class='next'>
                <button><i><GrFormPrevious /></i></button>
              </div>
              <div class='next'>
                <button><i><GrFormNext /></i></button>
              </div>
          </div>
          </div>
        </section>
      <Outlet />
    </>
  )
};

export default Homepage;
