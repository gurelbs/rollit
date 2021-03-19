import React from 'react';
import Button from './Button';

const Cover = ({startGameBtn,optionPage}) => {
    return (
        <div className="flex-col">
            <Button name="start game" click={startGameBtn}/>
            <Button name="option" click={optionPage}/>
        </div>
    );
}

export default Cover;
