import React from 'react';  
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/home';
import Profile from './pages/profile';
import Reset from './pages/Reset';
import Book from './pages/book';
import BookDetails from './pages/bookdetails';
import Story from './pages/story';
import Login from './pages/signin';
import Register from './pages/signup';

const Api = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 10000,
});
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register />}></Route>
        <Route path='/signin' element={<Login />}></Route>
        <Route path='/reset' element={<Reset />}></Route>
        <Route path='/home' element={<Homepage/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/book' element={<Book/>}></Route>
        <Route path='/story' element={<Story/>}></Route>
        <Route path='/book/:id' element={<BookDetails/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export { Api, App};
