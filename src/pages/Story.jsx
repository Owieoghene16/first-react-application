import React from 'react';
import { Outlet } from 'react-router-dom';
import { BsCardImage } from 'react-icons/bs';
import Navbar from '../Layouts/header/Navbar.jsx';
import Sidebar from '../Layouts/sidebar/Index.jsx';
import { Title, Description, Price, UploadBook, UploadImage } from '../Components/inputs/Story.jsx';
import { CreateBookButton } from '../Components/buttons/Story.jsx';
import { Footer } from '../Layouts/footer/Index.jsx';
import '../Assets/story.css';

const Story = () => {
   return (
    <>
          <div>
            <Sidebar />
          </div>
          <section className='home-section'>
            <div>
              <Navbar />
            </div>
            <div className='home-content'>
              <div className='home-story'>
                <div className='left'>
                   <i> <BsCardImage /> </i>
                  <p>Add a cover</p>
                  <div>
                    <UploadImage />
                  </div>
                </div>
                <div className='right'>
                  <div className='book-details'>
                    <h className='books'>Books Details</h>
                  </div>
                  <div className='big-title'>
                    <Title />
                  </div>
                  <div className='text-space'>
                    <Description />
                  </div>
                  <div className='price'>
                    <Price />
                  </div>
                  <div className='big-title'>
                    <UploadBook />
                  </div>
                  <div className='create'>
                    <CreateBookButton />
                  </div>
                </div>
              </div>
              <div>
                <Footer />
              </div>
            </div>
          </section>
      <Outlet />
    </>
  );
};
  
export default Story;
