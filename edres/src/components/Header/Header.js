import React from 'react';
import '../Header/Header.css'
import Logo from '../../assets/Svg/Logo';
import Coins from '../../assets/Svg/Coins';
import Notification from '../../assets/Svg/Notification';
import Hero from '../../assets/Svg/Hero';
import Message from '../../assets/Svg/Message';
const Header = () => {
  return (
    <>  
     <div className='headerBlock'>
      <div className='headerContent'>
        <div className='headerContent_title'><Logo /></div>
        <p className='headerContent_lang'>EN</p>
        <div className='headerContent_notification'>
          <Notification />
        </div>
        <div className='headerCoins'>
          <p className='headerCoins_text'>2 333 444</p>
          <Coins/>
        </div>
      </div>
    </div>
    <div className='headerBack'>
        <Hero />
        <Message text={'Выбери предмет, который хочешь изучить '} />
    </div>
  
   
      </>
  )
};

export default Header;