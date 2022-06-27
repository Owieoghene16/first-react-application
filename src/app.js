import React from 'react';  
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Home.jsx';
import Story from './pages/Story.jsx';
import Profile from './pages/Profile.jsx';
import Signup from './pages/Signup.jsx';
import Signin from './pages/Signin.jsx';
import Reset from './pages/Reset.jsx';
import token from './Components/inputs/Register'

const Api = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 10000,
  headers: {
    'authorization': token.id
  }
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
