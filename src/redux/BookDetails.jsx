/* eslint-disable import/no-cycle */
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Sidebar from '../Layouts/main/Sidebar.jsx';
import Navbar from '../Layouts/main/Nav.jsx';
import useBoolean from '../utils/useTogglSidebar';
import useBookDetails from '../utils/useBookDetails';
import useBorrowBook from '../utils/useBorrowBook';
import '../Assets/bookdetails.scss';

const BookDetails = () => {
  // sidebar toggle
  const {
    toggle,
    storage,
    handleToggle,
  } = useBoolean(false);

  // book details
  const {
    book,
  } = useBookDetails();

  const {
    borrowBook,
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
            ? <div className='home-con'>
              <div className='single'>
                <div className='single-pro-image'>
                  <img src={ book.imageUrl } alt='' />
                </div>
            <div className='single-pro-details'>
              <h6>{ book.author }</h6>
              <h4>{ book.title }</h4>
              <h2>${ book.price }</h2>
              <div className='pdf-content'>
                <img src='https://cdn-icons-png.flaticon.com/512/2921/2921451.png' alt='' />
              </div>
              <input type='number' value='1' />
              <button class='normal' onClick={() => borrowBook()}>Borrow Book</button>
              <h3>Book Details</h3>
              <span>
                { book.description }
              </span>
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

export default BookDetails;
