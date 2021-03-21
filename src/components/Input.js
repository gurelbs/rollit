import React from 'react';

const Input = ({handleChange, userRangeValue, err,min,max}) => {
    return (
        <div className="input-wrap">
                <p 
                    className="input-txt">{err || 'score to win: '} 
            <input 
                className="user-limit"
                name="user-limit" 
                type="range"   
                min={min}
                max={max}
                value={userRangeValue}
                onChange={handleChange}
                />
                    <span className="user-range-txt">{userRangeValue}</span>
                </p>
        </div>
    );
}

export default Input;