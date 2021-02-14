import { React } from "react";
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards_wrapper">
                    <ul className="cards_items">
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
    )
}

export default Cards;