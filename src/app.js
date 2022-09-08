/* eslint-disable import/no-cycle */
import React from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import Reset from './pages/Reset.jsx';
import Book from './pages/Book.jsx';
import BookDetails from './pages/BookDetails.jsx';
import Story from './pages/Story.jsx';
import Login from './pages/Signin.jsx';
import Register from './pages/Signup.jsx';
import ReturnBook from './pages/ReturnBook.jsx';
import ResetPassword from './pages/ResetPassword.jsx';

const Api = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 10000,
});

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Register />}></Route>
      <Route path='/signin' element={<Login />}></Route>
      <Route path='/reset' element={<Reset />}></Route>
      <Route
        path='/reset-password/:email/:accessToken' element={<ResetPassword />}>
      </Route>
      <Route path='/home' element={<Homepage/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/book' element={<Book/>}></Route>
      <Route path='/story' element={<Story/>}></Route>
      <Route path='/book/:id' element={<BookDetails/>}></Route>
      <Route path='/book/:id/borrow' element={<ReturnBook/>}></Route>
    </Routes>
  </BrowserRouter>
);

export { Api, App };
