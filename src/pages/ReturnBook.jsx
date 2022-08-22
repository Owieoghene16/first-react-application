/* eslint-disable import/no-cycle */
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Sidebar from '../Layouts/main/Sidebar.jsx';
import Navbar from '../Layouts/main/Nav.jsx';
import useBoolean from '../utils/useTogglSidebar';
import useBookDetails from '../utils/useBookDetails';
import useBorrowBook from '../utils/useBorrowBook';
import '../Assets/bookdetails.scss';

const ReturnBook = () => {
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
    result,
    isloading,
    returnBook,
    openInNewTab,
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
              {
                isloading
                  ? <div className='single'>
                      <div className='single-pro-image'>
                        <img src={ book.imageUrl } alt='' />
                      </div>
                    <div className='single-pro-details'>
                    <h6>{ book.author }</h6>
                    <h4>{ book.title }</h4>
                    <h2>${ book.price }</h2>
                    <div className='pdf-content-url'>
                      <img onClick={() => openInNewTab(book.bookUrl)} src='https://cdn-icons.flaticon.com/png/512/2140/premium/2140758.png?token=exp=1661181162~hmac=9f25222e868d8b3c6935b1b501d964cb' alt='' />
                      <p onClick={() => openInNewTab(book.bookUrl)}>Click</p>
                    </div>
                    <button class='normal' onClick={() => returnBook()}>Return Book</button>
                    <h3>Book Details</h3>
                    <span>
                      { book.description }
                    </span>
                  </div>
                  </div>
                  : <div className='home-content'>
                      <div className='invalid'>
                        <div className='heads'>
                          <h>{result}</h>
                        </div>
                      </div>
                    </div>
          }
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

export default ReturnBook;
