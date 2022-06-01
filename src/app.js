import React from 'react';  
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./homepage";
import Story from "./story";
import Profile from "./profile";
import Register from "./register";
import Login from "./login";
import Forgottenpassword from './forgottenpassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/reset" element={<Forgottenpassword />}></Route>
        <Route path="/home" element={<Homepage />}></Route>
        <Route path="/story" element={<Story />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
