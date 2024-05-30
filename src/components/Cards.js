import React from 'react';
import Carditem from './Carditem';

const Cards = () => {
  return (
    <div className='cards'>
        <h1>Check out some great home!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__item'>
                    <Carditem
                    src="public/app11.jpg"
                    text="Explore one of the homes at Roomie."
                    label="House"
                    path='/listings'
                    />
                </ul>
            </div>
        </div>
    </div>
  );
};

export default Cards;
