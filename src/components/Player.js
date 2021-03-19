import React from 'react';
import Name from './Name'
import Score from './Score'
const Player = ({score,tempScore,name,isActive}) => {
    return (
        <div className={`player-container ${isActive && 'active'}`}>
            <Name name={name}/>
            <Score scoreType={score}/>
            <Score scoreType={tempScore}/>
        </div>
    );
}

export default Player;
