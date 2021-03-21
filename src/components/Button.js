import React from 'react';

const Button = ({name, click,cn,disabled}) => {
    return (
        <button 
            className={`${cn || ''} ${disabled ? 'disabled' : ''}`} 
            disabled={disabled}
            onClick={click}>
            
        {name}</button>
    );
}

export default Button;
