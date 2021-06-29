import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Otkrij destinacije za pamćenje!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Otkrij skrivene vodopade Srbije!'
              label='Avantura'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Plovi po srpskom Loh Nesu!'
              label='Misteriozno'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Istrazi lepote Dunava!'
              label='Splavarenje'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Provedi dan u prelepom kanjonu Uvca!'
              label='Izlet'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Putuj kroz jedinstveni reljef Djavolje varosi!'
              label='Adrenalin'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;