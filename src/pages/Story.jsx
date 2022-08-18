/* eslint-disable import/no-cycle */
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Sidebar from '../Layouts/main/Sidebar.jsx';
import Navbar from '../Layouts/main/Nav.jsx';
import {
  Pdf, Title, Description, Price,
} from '../Components/inputs/Story.jsx';
import CreateBookButton from '../Components/buttons/Index.jsx';
import {
  MainFile, File, SecondFile, ThirdFile, FourthFile,
} from '../Components/inputs/File.jsx';
import useBoolean from '../utils/useTogglSidebar.jsx';
import useStory from '../utils/useStory.jsx';
import '../Assets/story.scss';

const Story = () => {
  // sidebar toggle
  const [
    isToggle,
    storage, {
      setToggle,
    },
  ] = useBoolean(false);

  // story
  const [
    error,
    imagename,
    storyContent,
    imageFile,
    pdfFile,
    createBook,
  ] = useStory();

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
            ? <div className='main-story'>
              <div className='img-story'>
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
              <div className='small-single-img'>
                <div className='small-img'>
                  <div class="img-upload">
                    <File />
                  </div>
                </div>
              <div className='small-img'>
                <div class="img-upload">
                  <SecondFile />
                </div>
              </div>
              <div className='small-img'>
                <div class="img-upload">
                  <ThirdFile />
                </div>
              </div>
              <div className='small-img'>
                <div class="img-upload">
                  <FourthFile />
                </div>
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
              <div class='error'>
                <p>{error}</p>
              </div>
              <div className='my-button'>
                <CreateBookButton
                  click={createBook}
                />
              </div>
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

export default Story;
