import React from 'react';

const Title = ({ getTitle }) => (
  <>
    <form>
      <input
        name='title'
        type='text'
        onChange={getTitle}
      />
    </form>
  </>
);

const Description = ({ getDescription }) => (
  <>
    <div>
      <textarea
        name='description'
        onChange={getDescription}
      ></textarea>
    </div>
  </>
);

const Price = ({ getPrice }) => (
  <>
    <form>
      <input
        type="number"
        name='price'
        onChange={getPrice}
      />
    </form>
  </>
);

const Pdf = ({ getPdf }) => (
  <>
    <div>
      <input
        id='files'
        type='file'
        multiple
        onChange={getPdf}
      />
    </div>
  </>
);

export {
  Pdf, Title, Description, Price,
};
