/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-cycle */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import loadBooks, { loadborrowedBooks, loadreturnedBooks } from '../redux/actions';

const useBook = () => {
  const redirect = useNavigate();
  const dispatch = useDispatch();
  const books = useSelector((state) => state.database.books);
  // borrowed book
  const borrowedBook = useSelector((state) => state.database.borrowedBook
    .map((item) => item.bookId));
  const borrowedHistory = books.filter((item) => borrowedBook.includes(item.id));
  // returned books
  const returnedBook = useSelector((state) => state.database.returnedBook
    .map((item) => item.bookId));
  const returnedHistory = books.filter((item) => returnedBook.includes(item.id));

  useEffect(() => {
    dispatch(loadBooks());
    dispatch(loadborrowedBooks());
    dispatch(loadreturnedBooks());
  }, []);

  const bookDetails = (id) => {
    redirect(`/book/${id}`);
  };

  return {
    books,
    bookDetails,
    borrowedHistory,
    returnedHistory,
  };
};

export default useBook;
