import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Myimage from '../Layouts/images/Index.jsx';
import Sidebar from '../Layouts/main/Sidebar.jsx';
import Navbar from '../Layouts/main/Nav.jsx';
import useBoolean from '../utils/useTogglSidebar.jsx';
import useBookDetails from '../utils/useBookDetails.jsx';
import '../Assets/bookdetails.scss';

const BookDetails = () => {
  // sidebar toggle
  const [
    isToggle,
    storage, {
      setToggle,
    }] = useBoolean(false);

  // book details
  const [
    book,
  ] = useBookDetails();

  return (
    <>
      <Sidebar
        togglebar={isToggle}
      />
      <section className='home-section'>
        <Navbar
          click={setToggle}
        />
        {
          storage
            ? <div className='home-con'>
              <div className='single'>
                <div className='single-pro-image'>
                  <img src={ book.imageUrl } alt='' />
                <div className='small-img-group'>
                <div className='small-img-col'>
                  <Myimage />
                </div>
                <div className='small-img-col'>
                  <Myimage />
                </div>
                <div className='small-img-col'>
                  <Myimage />
                </div>
                <div className='small-img-col'>
                  <Myimage />
                </div>
              </div>
            </div>
            <div className='single-pro-details'>
              <h6>{ book.author }</h6>
              <h4>{ book.title }</h4>
              <h2>${ book.price }</h2>
              <div className='pdf-content'>
                <img src='https://cdn-icons-png.flaticon.com/512/2921/2921451.png' alt='' />
              </div>
              <input type='number' value='1' />
              <button class='normal'>Borrow Book</button>
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
