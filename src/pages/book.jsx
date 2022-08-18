import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { AiFillBackward } from 'react-icons/ai';
import { TbPlayerTrackNext } from 'react-icons/tb';
import { GrFormNext, GrFormPrevious, GrAdd } from 'react-icons/gr';
import Box from '../Layouts/main/Box.jsx';
import Sidebar from '../Layouts/main/Sidebar.jsx';
import Navbar from '../Layouts/main/Nav.jsx';
import useBoolean from '../utils/useTogglSidebar';
import '../Assets/book.scss';

const Book = () => {
  const {
    toggle,
    storage,
    handleToggle,
  } = useBoolean(false);

  return (
    <>
      <Sidebar
        togglebar={toggle}
      />
      <section className='home-section'>
        <Navbar
          click={handleToggle}
        />
        {
          storage
            ? <div className='home-content'>
          <div className='wel'>
            <div className='heading'>
              <h>Your desired collections</h>
            </div>
            <div className='second-heading'>
              <p>New books everyday!</p>
            </div>
          </div>
          <div className='first-head'>
            <h5>Editor's choice</h5>
          </div>
          <div className='book-item'>
            <div className='pro-container'>
              <Box />
              <Box />
              <Box />
              <Box />
            </div>
          </div>
          <div className='border'>
          </div>
          <div className='first-head'>
            <h5>Adult's picks</h5>
          </div>
          <div className='book-item'>
            <div className='pro-container'>
              <Box />
              <Box />
              <Box />
              <Box />
            </div>
          </div>
          <div className='border'>
          </div>
          <div className='first-head'>
            <h5>Trending</h5>
          </div>
          <div className='trend-container'>
            <div className='image-container'>
              <img src='https://demos.creative-tim.com/argon-dashboard/assets/img/team-1.jpg' alt='' />
            </div>
            <div className='details-container'>
              <h5>Return Of Ivar</h5>
              <input type='number' value='1' />
              <button><i><GrAdd /></i></button>
              <h3>Book Details</h3>
              <span>
                Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy
                 text ever since the 1500s, when an unknown printers
                took a galley of type and scrambled it to make a type
                specimen book. It has survived note
                only five centuries, but also the leap into electronic
                typesetting, remaining essentially
                Maker including versions of Lorem Ipsum
              </span>
            </div>
          </div>
          <div className='border'>
          </div>
          <div className='first-head'>
            <h5>Children's picks</h5>
          </div>
          <div className='book-item'>
            <div className='pro-container'>
              <Box />
              <Box />
              <Box />
              <Box />
            </div>
          </div>
          <div className='button-container'>
            <div class='next'>
              <button><i><AiFillBackward /></i></button>
            </div>
            <div class='next'>
              <button><i><GrFormPrevious /></i></button>
            </div>
            <div class='next'>
              <button>1</button>
            </div>
            <div class='next'>
              <button>2</button>
            </div>
            <div class='next'>
              <button>3</button>
            </div>
            <div class='next'>
              <button><i><GrFormNext /></i></button>
            </div>
            <div class='next'>
              <button><i><TbPlayerTrackNext /></i></button>
            </div>
          </div>
          </div>
            : <div className='home-content'>
            <div className='invalid'>
              <div className='heads'>
                <h>Login Expired</h>
              </div>
              <div className='again'>
                <Link to='/signin'>Login Again</Link>
              </div>
            </div>
          </div>
        }
      </section>
      <Outlet />
    </>
  );
};

export default Book;
