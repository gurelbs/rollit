import React from 'react';

const Dice = ({randomNumStr}) => {
    return (
        <div className='dice-wrap'>
            <i className={`fas fa-dice-${randomNumStr}`}></i>
        </div>
        
    );
}

export default Dice;
