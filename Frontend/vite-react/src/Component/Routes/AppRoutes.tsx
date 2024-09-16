import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/HomeView'; 


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} /> {/* Home route */}
     
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default AppRoutes;
