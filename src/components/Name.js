import React from 'react';
import './player-container.css'

const Name = ({name,cn}) => {
    return (
        <div className={`player-name ${cn}`}>{name}</div>
    );
}

export default Name;
