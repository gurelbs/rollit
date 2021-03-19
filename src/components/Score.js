import React from 'react';
import './player-container.css'

const Score = ({scoreType}) => {
    return (
        <div className="player-score">
            {scoreType}
        </div>
    );
}

export default Score;
