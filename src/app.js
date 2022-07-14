import React from 'react';  
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Homepage from './pages/home';
import Profile from './pages/Profile';
import Reset from './pages/Reset';
import Book from './pages/book';
import Story from './pages/story';
import BookDetails from './pages/bookdetails';
import SingleBook from './pages/singlebook'

const Api = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 10000,
});

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/reset' element={<Reset />}></Route>
        <Route path='/home' element={<Homepage />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/book' element={<Book />}></Route>
        <Route path='/single' element={<BookDetails />}></Route>
        <Route path='/singlebook' element={<SingleBook />}></Route>
        <Route path='/story' element={<Story />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export { Api, App};
