import React from "react";
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Lmao these places are pretty cool</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src="images/img-9.jpg"
              text="blue ass water haha wooo"
              label='Adventure'
              path='/services'
            />
            <CardItem
              src="images/img-5.jpg"
              text="lol look at this shit it shiny"
              label='Adventure'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;