import React from 'react';
import './player-container.css'

const Score = ({scoreType, cn, onChange}) => {
    return (
        <div className={`player-score`}>
            <p 
                onChange={onChange}
                className={cn}>{scoreType || 0}</p>
        </div>
    );
}

export default Score;
