import React, { useState } from "react";
import Signup from './Components/Signup.jsx';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login.jsx';
import Forgotpassword from './Components/Forgotpassword.jsx';
import Home from './Components/Home.jsx';
import Bookdetail from './Components/Bookdetail.jsx';
import Cart from './Components/Cart.jsx';
const App = () => {
   
  return (
    <div>
     
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/home" element={<Home />} />

          <Route path="/books" element={<Bookdetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
    </div>
  );
};

export default App;
