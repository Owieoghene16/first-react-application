/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-cycle */
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Api } from '../app';

const useBorrowBook = () => {
  const { id } = useParams();
  const [result, setResult] = useState('');
  const [isloading, setIsLoading] = useState(true);
  const redirect = useNavigate();
  const storage = JSON.parse(sessionStorage.getItem('user'));

  const returnBookRoute = (bookid) => {
    redirect(`/book/${bookid}/borrow`);
  };

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const returnBook = async () => {
    try {
      const res = await Api.put(`/book/${id}/borrow`, {
        borrowerId: storage.token,
        bookId: id,
      }, {
        headers: {
          authorization: storage.token,
        },
      });
      setIsLoading(false);
      setResult(res.data.message);
    } catch (err) {
      setIsLoading(false);
      setResult(err.response.data.message);
    }
  };

  const borrowBook = async () => {
    try {
      const res = await Api.post(`/book/${id}/borrow`, {
        borrowerId: storage.token,
        bookId: id,
      }, {
        headers: {
          authorization: storage.token,
        },
      });
      setResult(res.data.message);
      setIsLoading(false);
    } catch (err) {
      setResult(err.response.data.message);
      setIsLoading(false);
    }
  };

  return {
    result,
    isloading,
    borrowBook,
    returnBook,
    returnBookRoute,
    openInNewTab,
  };
};

export default useBorrowBook;
