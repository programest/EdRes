import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './BottomNavbar.css';
import WIZNav from '../../assets/Svg/WIZNav';
import HomeNav from '../../assets/Svg/HomeNav';
import EdNav from '../../assets/Svg/EdNav';
import ProfieNav from '../../assets/Svg/ProfieNav';

const BottomNavbar = () => {
  const location = useLocation(); // Получаем текущий путь

  return (
    <div className="bottom-navbar">
      <Link to="/" className={`nav-button ${location.pathname === '/' ? 'active' : ''}`}>
        <span role="img" aria-label="home">
          <HomeNav active={location.pathname === '/'} />
        </span>
        <span className={`navText ${location.pathname === '/' ? 'active-text' : ''}`}>Главная</span>
      </Link>
      <Link to="/wiz" className={`nav-button ${location.pathname === '/wiz' ? 'active' : ''}`}>
        <span role="img" aria-label="search">
          <WIZNav active={location.pathname === '/wiz'} />
        </span>
        <span className={`navText ${location.pathname === '/wiz' ? 'active-text' : ''}`}>WIZ</span>
      </Link>
      <Link to="/ed" className={`nav-button ${location.pathname === '/ed' ? 'active' : ''}`}>
        <span role="img" aria-label="profile">
          <EdNav active={location.pathname === '/ed'} />
        </span>
        <span className={`navText ${location.pathname === '/ed' ? 'active-text' : ''}`}>ED</span>
      </Link>
      <Link to="/profile" className={`nav-button ${location.pathname === '/profile' ? 'active' : ''}`}>
        <span role="img" aria-label="profile">
          <ProfieNav active={location.pathname === '/profile'} />
        </span>
        <span className={`navText ${location.pathname === '/profile' ? 'active-text' : ''}`}>Профиль</span>
      </Link>
    </div>
  );
};

export default BottomNavbar;
