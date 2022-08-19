/* eslint-disable import/no-cycle */
import { useState } from 'react';
import FormData from 'form-data';
import { Api } from '../app';

const useStory = () => {
  const [story, setStory] = useState({});
  const [image, setImage] = useState();
  const [imagename, setImageName] = useState('');
  const [pdf, setPdf] = useState();
  const [error, setError] = useState('');
  const storage = JSON.parse(sessionStorage.getItem('user'));

  // onChange function
  const storyContent = (e) => {
    setStory({ ...story, [e.target.name]: e.target.value });
  };

  // image state
  const imageFile = (e) => {
    setImage(e.target.files[0]);
    setImageName(e.target.files[0].name);
  };

  /* Pdf state */
  const pdfFile = (e) => {
    setPdf(e.target.files[0]);
  };

  /*  Create book function */
  const createBook = async () => {
    const form = new FormData();
    form.append('title', story.title);
    form.append('price', story.price);
    form.append('author', storage.username);
    form.append('description', story.description);
    form.append('file', image);
    form.append('file', pdf);
    try {
      await Api.post('/book', form, {
        headers: {
          'content-type': 'multipart/form-data',
          authorization: storage.token,
        },
      });
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return {
    error,
    imagename,
    storyContent,
    imageFile,
    pdfFile,
    createBook,
  };
};

export default useStory;
