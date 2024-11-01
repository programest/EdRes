// BottomNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './BottomNavbar.css';
import WIZNav from '../../assets/Svg/WIZNav';
import HomeNav from '../../assets/Svg/HomeNav';
import EdNav from '../../assets/Svg/EdNav';
import ProfieNav from '../../assets/Svg/ProfieNav';

const BottomNavbar = () => {
  return (
    <div className="bottom-navbar">
      <Link to="/" className="nav-button">
        <span role="img" aria-label="home"><HomeNav /></span>
        <span className='navText'>Главная</span>
      </Link>
      <Link to="/wiz" className="nav-button">
        <span role="img" aria-label="search"><WIZNav /></span>
        <span className='navText'>WIZ</span>
      </Link>
      <Link to="/ed" className="nav-button">
        <span role="img" aria-label="profile"><EdNav /></span>
        <span className='navText'>ED</span>
      </Link>
      <Link to="/profile" className="nav-button">
        <span role="img" aria-label="profile"><ProfieNav /></span>
        <span className='navText'>Профиль</span>
      </Link>
    </div>
  );
};

export default BottomNavbar;
