// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BottomNavbar from './components/BottomNavbar/BottomNavbar';
import Home from './pages/Home/Home';
import Wiz from './pages/Wiz/Wiz';
import Ed from './pages/Ed/Ed';
import Profile from './pages/Profile/Profile'; 
const App = () => {
  return (
      <>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/wiz" element={<Wiz/>} />
          <Route path="/ed" element={<Ed/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
        <BottomNavbar />
      </>
  );
};

export default App;

