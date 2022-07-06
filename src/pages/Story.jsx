import React, { useState } from 'react';  
import Myimage from '../Layouts/images/index';
import Sidebar from '../Layouts/main/sidebar';
import Navbar from '../Layouts/main/nav';
import Image from '../Layouts/images/Image';
import { FileInput, NumberInput, TextInput, Textarea } from '../Components/inputs/Story';
import CreateBookButton from '../Components/buttons/Story';
import '../Assets/story.scss';

const Story = () => {

  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

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
              <Myimage />
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