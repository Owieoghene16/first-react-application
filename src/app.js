import React from 'react';  
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/home';
import Story from './pages/story';
import Profile from './pages/profile';
import Signup from './pages/signup';
import Signin from './pages/signin';
import Reset from './pages/reset';

const Api = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 1000,
});

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/reset' element={<Reset />}></Route>
        <Route path='/home' element={<Homepage />}></Route>
        <Route path='/story' element={<Story />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export { Api, App};
