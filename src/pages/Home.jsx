/* eslint-disable import/no-cycle */
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { GrFormPrevious, GrFormNext, GrAdd } from 'react-icons/gr';
import { AiOutlineStar } from 'react-icons/ai';
import Sidebar from '../Layouts/main/Sidebar.jsx';
import Navbar from '../Layouts/main/Nav.jsx';
import useBook from '../utils/useBook';
import useBoolean from '../utils/useTogglSidebar';
import useBorrowBook from '../utils/useBorrowBook';
import '../Assets/homepage.scss';

const Homepage = () => {
  // sidebar toggle
  const {
    toggle,
    storage,
    handleToggle,
  } = useBoolean(false);

  // book
  const {
    books,
    bookDetails,
    borrowedHistory,
    returnedHistory,
  } = useBook();

  const {
    returnBookRoute,
  } = useBorrowBook();

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
                <div className='welcome'>
                  <div className='heads'>
                    <h>Welcome home, {storage.username}!</h>
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
                books.map((item) => (
                    <div className='pro' key={item.id}>
                      <img src={item.imageUrl} alt='' />
                      <div className='des'>
                        <span>{item.author}</span>
                        <h5>{item.title}</h5>
                        <div className='star'>
                          <i><AiOutlineStar /></i>
                          <i><AiOutlineStar /></i>
                          <i><AiOutlineStar /></i>
                          <i><AiOutlineStar /></i>
                          <i><AiOutlineStar /></i>
                        </div>
                        <h4>${item.price}</h4>
                      </div>
                      <button onClick={() => bookDetails(item.id)}><i className='cart'><GrAdd/></i></button>
                    </div>
                ))
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
              {
                borrowedHistory.map((item) => (
                    <div className='pro' key={item.id}>
                      <img src={item.imageUrl} alt='' />
                      <div className='des'>
                        <span>{item.author}</span>
                        <h5>{item.title}</h5>
                        <div className='star'>
                          <i><AiOutlineStar /></i>
                          <i><AiOutlineStar /></i>
                          <i><AiOutlineStar /></i>
                          <i><AiOutlineStar /></i>
                          <i><AiOutlineStar /></i>
                        </div>
                        <h4>${item.price}</h4>
                      </div>
                      <button onClick={() => returnBookRoute(item.id)}><i className='cart'><GrAdd/></i></button>
                    </div>
                ))
              }
              </div>
              <div className='border'>
                </div>
              <div class='second-header'>
                <h>Returned History</h>
              </div>
              <div className='content'>
              {
                returnedHistory.map((item) => (
                    <div className='pro' key={item.id}>
                      <img src={item.imageUrl} alt='' />
                      <div className='des'>
                        <span>{item.author}</span>
                        <h5>{item.title}</h5>
                        <div className='star'>
                          <i><AiOutlineStar /></i>
                          <i><AiOutlineStar /></i>
                          <i><AiOutlineStar /></i>
                          <i><AiOutlineStar /></i>
                          <i><AiOutlineStar /></i>
                        </div>
                        <h4>${item.price}</h4>
                      </div>
                      <button onClick={() => bookDetails(item.id)}><i className='cart'><GrAdd/></i></button>
                    </div>
                ))
              }
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

export default Homepage;
