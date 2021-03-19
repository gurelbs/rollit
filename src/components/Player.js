import React from 'react';
import Name from './Name'
import Score from './Score'
import './game.css'
import './player-container.css'
const Player = ({score,tempScore,name,isActive,spin}) => {
    return (
        <div className={`player-container ${isActive && 'active'}`}>
            <Name name={name}/>
            <div className="score-wrap">
                <Score scoreType={score}/>
                <i className={`fab fa-bitcoin ${isActive && 'spin'}`}></i>
            </div>
            <div className="temp-score-wrap">
                <Score scoreType={tempScore}/>
                <i className="fas fa-dollar-sign"></i>            
            </div>
        </div>
    );
}

export default Player;
