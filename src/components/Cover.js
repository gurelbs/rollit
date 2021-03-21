import React from 'react';
import Button from './Button';

const Cover = ({startGameBtn,optionPage}) => {
    return (
        <div className="flex-col cover">
            <div className="wellcome-msg">
                <h1 >
                    <span>wellcome to</span> <a href="/">Roll-it</a> Dice Game
                </h1>
            </div>
            <Button name="start game" click={startGameBtn} cn={'start-game-btn'}/>
            <Button name="Help" click={optionPage} cn={'help-btn'}/>
            <footer>made with <span className="red">&#10084;</span> by <a href="https://github.com/gurelbs">Gurel ben Shabat</a></footer>
        </div>
    );
}

export default Cover;
