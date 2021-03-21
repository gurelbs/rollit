import React from 'react';
import Name from './Name'
import Score from './Score'
import './game.css'
import './player-container.css'
const Player = ({score,tempScore,name,isActive,handleScoreChange,totalWin}) => {
    return (
        <div className={`player-container`}>
            <p className="totalWin">total winning: <span className="totalWin-color">{totalWin || 0}</span></p>
            <Name name={name} cn={isActive && 'active'}/>
            <div className="score-wrap">
                <div className={"total-score"}>
                    <Score scoreType={score} onChange={handleScoreChange}/>
                    <i className={`fab fa-bitcoin ${isActive && 'spin'}`}></i>
                </div>
            </div>
            <div className={`temp-score-wrap ${isActive ? 'temp-score-anima' : ''}`}>
                <div className="dollar-icon-wrap">
                    
                <Score scoreType={tempScore} isActive={isActive} cn={'current-score'}/> 
                    <i className="fas fa-dollar-sign"></i>            
                </div>
            </div>
        </div>
    );
}

export default Player;
