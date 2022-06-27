import React from 'react';

const Title = () => {
  return (
    <> 
      <div className='big-title'>
        <p className='title'>Title</p>
        <form>
          <input type='text' /><br></br>
        </form>
      </div>
    </>
  )
};

const Description = () => {
  return (
    <> 
    <div className='text-space'>
      <h className='descrip'>Description</h>
      <i className='fa fa-info'></i>
      <div>
        <textarea className='text-area' name='text' type='text'></textarea>
      </div>
    </div>
    </>
  )
};

const Price = () => {
  return (
    <> 
    <div className="price">
      <h className="descrip">Price</h>
      <i className="fa fa-money"></i>
      <form>
        <input type="number" />
      </form>
    </div>
    </>
  )
};

const UploadBook = () => {
  return (
    <> 
    <div className='big-title'>
      <h className='character'>PDF</h>
      <i className='fa fa-info'></i>
      <form>
        <input id='files' type='file' multiple />
      </form>
    </div>
    </>
  )
};

const UploadImage = () => {
  return (
    <>
      <div>
        <input id='files' type='file' multiple />
      </div>
    </>
  )
};

export { Title, Description, Price, UploadBook, UploadImage };
