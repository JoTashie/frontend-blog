
import React from 'react';

const HeroSection = () => {
  return (
    <div className='hero-container'>
        <img src="/public/bg-room.jpg" alt='background'/>
        <h1>Roomie</h1>
        <p>A home and a friend for you.</p>
        <div className='hero-btns'>
        <button variant='outline-light' size='lg'>
            Get Started
        </button>
        
      </div>
    </div>
  );
};

export default HeroSection;
