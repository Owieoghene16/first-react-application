/* eslint-disable import/no-cycle */
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Sidebar from '../Layouts/main/Sidebar.jsx';
import Navbar from '../Layouts/main/Nav.jsx';
import {
  Pdf, Title, Description, Price,
} from '../Components/inputs/Story.jsx';
import CreateBookButton from '../Components/buttons/Index.jsx';
import MainFile from '../Components/inputs/File.jsx';
import useBoolean from '../utils/useTogglSidebar';
import useStory from '../utils/useStory';
import '../Assets/story.scss';

const Story = () => {
  // sidebar toggle
  const {
    toggle,
    storage,
    handleToggle,
  } = useBoolean(false);

  // story
  const {
    result,
    loading,
    imagename,
    storyContent,
    imageFile,
    pdfFile,
    createBook,
  } = useStory();

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
            ? <div className='main-story'>
              {
                loading
                  ? <div className='img-story'>
                      <div className='single-img'>
                        <div className='book-header'>
                          <h3>Book Images</h3>
                        </div>
                      <div class="image-upload">
                      <MainFile
                        getImage={imageFile}
                        message={imagename}
                      />
                    </div>
                  </div>
                  <div className='single-book-details'>
                    <div className='book-header'>
                      <h3>Book Details</h3>
                    </div>
                  <div className='book-error'>
                    <p>{result}</p>
                  </div>
                  <div className='book-title'>
                    <p>Title</p>
                  </div>
                  <div className='my-text'>
                    <Title
                      getTitle={storyContent}
                    />
                  </div>
                  <div className='price'>
                    <p>Price</p>
                  </div>
                  <div className='my-number'>
                    <Price
                      getPrice={storyContent}
                    />
                  </div>
                  <div className='pdf'>
                    <p>Pdf</p>
                  </div>
                  <div className='my-file'>
                    <Pdf
                      getPdf={pdfFile}
                    />
                  </div>
                  <div className='description'>
                    <p>Description</p>
                  </div>
                  <div className='my-texarea'>
                    <Description
                      getDescription={storyContent}
                    />
                  </div>
                  <div className='my-button'>
                    <CreateBookButton
                      click={createBook}
                    />
                  </div>
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

export default Story;
