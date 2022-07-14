import React, { useState } from 'react';  
import Sidebar from '../Layouts/main/sidebar';
import Navbar from '../Layouts/main/nav';
import { FileInput, NumberInput, TextInput, Textarea } from '../Components/inputs/Story';
import CreateBookButton from '../Components/buttons/Story';
import { MainFile, File, SecondFile, ThirdFile, FourthFile  } from '../Components/inputs/file';
import '../Assets/story.scss';

const Story = () => {

  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };

  const [image, setMainimg] = useState('');
  const getmainImage = (image) => {
    const mainimage = image.replace(/^.*\\/, '');
    setMainimg(mainimage);
  }  

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
              <div class="image-upload">
                <MainFile
                  getMainFile = {getmainImage}
                  mainImg = {image}
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
                <TextInput />
              </div>
              <div className='price'>
                <p>Price</p>
              </div>
              <div className='my-number'>
                <NumberInput />
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
                <Textarea />
              </div>
              <div className='my-button'>
                <CreateBookButton />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default Story;
