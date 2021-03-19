import React from 'react';
import './player-container.css'

const Score = ({scoreType}) => {
    return (
        <div className="player-score">
            <p>{scoreType}</p>
        </div>
    );
}

export default Score;
