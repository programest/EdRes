import React from 'react';
import '../Card/Card.css';
import CardLike from '../../assets/Svg/Cards/CardLike';
import CardLink from '../../assets/Svg/Cards/CardLink';
import Physics from '../../assets/Svg/Cards/Physics';
const Card = ({ isLast, color, title, curses, lvl, sections }) => {
  return (
    <div
      className={`card ${isLast ? 'card--last' : 'card--reduced'}`}
      style={{ backgroundColor: color }} // Применяем цвет как инлайн-стиль
    >
        <Physics />
      <div className='cardHeader'>
        <h1 className='cardHeader_title'>{title}</h1>
        <CardLink />
      </div>
      {/* Рендерим cardMain только для последней карточки */}
      {isLast && (
        <div className='cardMain'>
          <div className='content'>
            <div className='contentBlock'>
              <p className='contentBlock__title'>курсов</p>
              <p className='contentBlock__text'>{curses}</p>
            </div>
            <div className='contentBlock'>
              <p className='contentBlock__title'>уровней</p>
              <p className='contentBlock__text'>{lvl}</p>
            </div>
            <div className='contentBlock'>
              <p className='contentBlock__title'>разделов</p>
              <p className='contentBlock__text'>{sections}</p>
            </div>
          </div>
          <div>
            <CardLike />
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
