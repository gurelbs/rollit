import React from 'react';
import './game.css'
const Dice = ({randomNumStr,rotate}) => {
    return (
        <div className='dice-wrap'>
            <i className={`fas fa-dice-${randomNumStr} ${rotate}`}></i>
        </div>
        
    );
}

export default Dice;
