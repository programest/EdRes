import React, { useState, useEffect } from 'react';
import '../Header/Header.css';
import Logo from '../../assets/Svg/Logo';
import Coins from '../../assets/Svg/Coins';
import Notification from '../../assets/Svg/Notification';
import Hero from '../../assets/Svg/Hero';
import Message from '../../assets/Svg/Message';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние для управления бургер-меню
  const [isMobile, setIsMobile] = useState(window.innerWidth < 400); // Проверяем ширину экрана

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Переключаем состояние меню
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 400); // Обновляем состояние в зависимости от ширины экрана
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize); // Добавляем слушатель событий изменения размера окна

    return () => {
      window.removeEventListener('resize', handleResize); // Убираем слушатель при размонтировании компонента
    };
  }, []);

  return (
    <>
      <div className='headerBlock'>
        <div className='headerContent'>
          <div className='headerContent_title'>
            <Logo />
          </div>
          {/* Условный рендеринг в зависимости от ширины экрана */}
          {isMobile ? (
            isMenuOpen ? (
              <div className='burgerMenuContent'>
                <div style={{justifyContent: 'space-between', display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
                <p className='headerContent_lang' >EN</p>
                <div className='headerContent_notification' >
                  <Notification />
                </div>
                </div>
              
                <div className='headerCoins' >
                  <p className='headerCoins_text' > 2 333 444</p>
                  <Coins />
                </div>
              </div>
            ) : null // Ничего не отображаем, если бургер-меню закрыто
          ) : (
            <>
              <p className='headerContent_lang'>EN</p>
              <div className='headerContent_notification'>
                <Notification />
              </div>
              <div className='headerCoins'>
                <p className='headerCoins_text'>2 333 444</p>
                <Coins />
              </div>
            </>
          )}
          {/* Бургер-меню для экранов меньше 400px */}
          <div className='burgerMenu' onClick={toggleMenu}>
            <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
            <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
            <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
          </div>
        </div>
      </div>
      <div className='headerBack'>
        <Hero />
        <Message text={'Выбери предмет, который хочешь изучить '} />
      </div>
    </>
  );
};

export default Header;
