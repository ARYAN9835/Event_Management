// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import SignIn from './Routes/Signin';
import SignUp from './Routes/Signup';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <Router>
      <div>
      <Toaster/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
