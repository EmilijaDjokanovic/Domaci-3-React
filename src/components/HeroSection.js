import React from 'react';

import { Button } from './Button';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
    <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>Avanture čekaju na tebe</h1>
      <p>Šta čekaš?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
        Započni  
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Pogledaj trailer <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;