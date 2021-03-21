import React from 'react';
import Button from './Button';
import './setting-page.css'
const Help = ({optionBtnClick}) => {
    return (
        <div className="help-page">
            <div className="help-wrap">
                <h1>hey!</h1>
                <h4>wellcome to rollit game.</h4>
                <p>it's a simple <a href="https://en.wikipedia.org/wiki/Pig_(dice_game)" target="_blink">dice game</a>.<br></br> 
                in our version you heve 2 dice and double six is bad !!!</p>
                <Button name='go back' click={optionBtnClick}/>
            </div>
        </div>
    );
}

export default Help;
