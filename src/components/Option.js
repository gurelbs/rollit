import React from 'react';
import Button from './Button';

const Option = ({optionBtnClick}) => {
    return (
        <div>
            <h1>option page!</h1>
            <Button name='go back' click={optionBtnClick}/>
        </div>
    );
}

export default Option;
