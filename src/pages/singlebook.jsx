import React, { useState }from 'react';  
import { Outlet } from 'react-router-dom';
import Sidebar from '../Layouts/main/sidebar';
import Navbar from '../Layouts/main/nav';
import Image from '../Layouts/images/Image';
import Myimage from '../Layouts/images/index';
import { FileInput } from '../Components/inputs/Story';
import { AiOutlinePlus } from 'react-icons/ai';
import '../Assets/singlebook.scss';

const SingleBook = () => {

  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };

  /*const [image, setMainimg] = useState('');
  const getmainImage = (image) => {
    const mainimage = image.replace(/^.*\\/, '');
    setMainimg(mainimage);
  }  */

  return (
    <> 
      <Sidebar 
        togglebar={open}
      />
      <section className='home-section'>
        <Navbar 
          click={handleToggle}
        />
        <div className='main-story'>
          <div className='img-story'>
            <div className='single-img'>
              <div className='book-header'>
                <h3>Book Images</h3>
              </div>
              <div className='overlay-con'>
                <Myimage/>
                <div className="overlay">
                  <label className="label-con" for="file-input">
                    <i className='icon'><AiOutlinePlus/> </i>
                  </label>
                  <input
                    id="file-input" 
                    type="file"
                  />
                </div>
              </div>
              <div className='small-single-img'>
                <div className='small-img'>
                  <Image />
                </div>
                <div className='small-img'>
                  <Image />
                </div>
                <div className='small-img'>
                  <Image />
                </div>
                <div className='small-img'>
                  <Image />
                </div>
              </div>
            </div>
            <div className='single-book-details'>
              <div className='book-header'>
                <h3>Book Details</h3>
              </div>
              <div className='book-title'>
                <p>Title</p>
              </div>
              <div className='my-text'>
                <input type="text" placeholder='Owie Airline'/>
              </div>
              <div className='price'>
                <p>Price</p>
              </div>
              <div className='my-number'>
                <input type="number" placeholder='22' />
              </div>
              <div className='pdf'>
                <p>Pdf</p>
              </div>
              <div className='my-file'>
                <FileInput />
              </div>
              <div className='description'>
                <p>Description</p>
              </div>
              <div className='my-texarea'>
                <textarea>Owie — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy - writes, performs and records all of his own music.</textarea>
              </div>
              <div className='buttons'>
                <div className='my-button'>
                  <button>Delete Book</button>
                </div>
                <div className='my-second-button'>
                  <button>Update Book</button>
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

export default SingleBook;
