import React, { useState } from 'react';  
import FormData from 'form-data';
import { Outlet, Link } from 'react-router-dom';
import { Api } from '../app';
import Sidebar from '../Layouts/main/sidebar';
import Navbar from '../Layouts/main/nav';
import { Pdf, Title, Description, Price } from '../Components/inputs/Story';
import CreateBookButton from '../Components/buttons/index';
import { MainFile, File, SecondFile, ThirdFile, FourthFile  } from '../Components/inputs/file';
import '../Assets/story.scss';

const Story = () => {
  
  const [state, setState] = useState({});
  const [open, setOpen] = useState(false);
  const [image, setimage] = useState();
  const [pdf, setpdf] = useState();
  const [imagename, setimagename ] = useState('');
  const [error, setError] = useState('');
  const storage = JSON.parse(sessionStorage.getItem('user'));

  const handleToggle = () => {
    setOpen(!open);
  };
  
  // onChange function
  const formValue = (e) => {
    setState({...state, [e.target.name] : e.target.value});
  };

  /*Image state */
  const imageFile = (e) => {
    setimage(e.target.files[0]);
    setimagename(e.target.files[0].name);
  };

  /*Pdf state */
  const pdfFile = (e) => {
    setpdf(e.target.files[0]);
  }

  /*  Create book function */
  const createBook = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('title', state.title)
    form.append('price', state.price)
    form.append('author', storage.username)
    form.append('description', state.description)
    form.append('file', image)
    form.append('file', pdf);
  
    try {
      await Api.post('/book', form, {
        headers: {
          'content-type': 'multipart/form-data',
          'authorization': storage.token
        }
      });
    } catch (err) {
      setError(err.response.data.message);
    }
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
        {
          storage ?    
            <div className='main-story'>
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
                  getTitle={formValue}
                />
              </div>
              <div className='price'>
                <p>Price</p>
              </div>
              <div className='my-number'>
                <Price 
                  getPrice={formValue}
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
                  getDescription={formValue}
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
          </div> :
          <div className='home-content'>
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
  )
};

export default Story;
