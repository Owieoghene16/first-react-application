/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-cycle */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import loadBooks from '../redux/actions.jsx';

const useBook = () => {
  const redirect = useNavigate();
  const dispatch = useDispatch();
  const books = useSelector((state) => state.database.books);

  const bookDetails = (id) => {
    redirect(`/book/${id}`);
  };

  useEffect(() => {
    dispatch(loadBooks());
  }, []);

  return [
    books,
    bookDetails,
  ];
};

export default useBook;
