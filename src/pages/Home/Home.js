import React, { useState } from 'react';
import '../Home/Home.css';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';

const Home = () => {
  const [active, setActive] = useState('Школа'); 

  const cardsData = [
    { color: '#8CB6FF', curses: 1034, lvl: 12, sections: 1234, title: 'История' },
    { color: '#FFC28C', curses: 1034, lvl: 12, sections: 1234, title: 'Английский' },
    { color: '#FF8CEE', curses: 1034, lvl: 12, sections: 1234, title: 'МАТЕМАТИКА' },
    { color: '#1DD8EA', curses: 1034, lvl: 12, sections: 1234, title: 'БИОЛОГИЯ' },
    { color: '#AB87FE', curses: 1034, lvl: 12, sections: 1234, title: 'ХИМИЯ' },
    { color: '#77EA73', curses: 1034, lvl: 12, sections: 1234, title: 'ФИЗИКА' },
  ];

  const handleSectionClick = (section) => {
    setActive(section); // Устанавливаем активную секцию
  };

  return (
    <div style={{overflow: 'auto'}}>
      <header className='header'>
        <Header />
      </header>
      <main className='cardsContainer'>
        <div className='sections'>
        <div className={`section ${active === 'Школа' ? 'active' : ''}`} onClick={() => handleSectionClick('Школа')}>
            <p className='sectionTitle'>Школа</p>
          </div>

          <div className={`section ${active === 'Курсы' ? 'active' : ''}`} onClick={() => handleSectionClick('Курсы')}>
        <p className='sectionTitle'>Курсы</p>
        </div>

        </div>
        {active === 'Школа' ? (
          cardsData.map((cardProps, index) => (
            <Card key={index} {...cardProps} isLast={index === cardsData.length - 1} />
          ))
        ) : (
          <></>
        )}
      </main>
      <footer>
      </footer>
    </div>
  );
};

export default Home;
