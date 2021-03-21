import React, { Component } from 'react';
import Dice from './Dice'
import Button from './Button'
import Player from './Player';
import Input from './Input';

export default class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            diceIsRoll: false,
            diceName: ['one','two','three','four','five','six'],
            scoreToWin: 100,
            player1: {
                tempScore: 0,
                score: 0,
                isPlaying: false,
                isWin: false,
                totalWin: 0,
            },
            player2: {
                tempScore: 0,
                score: 0,
                isPlaying: false,
                isWin: false,
                totalWin: 0,
            },
            disabled: false
        }
    }
    randomNumber = () => Math.floor(Math.random() * 6) + 1;
    handleRollDice = () => {
        let {scoreToWin,player1,player2} = this.state 
        let dice1 = this.randomNumber()
        let dice2 = this.randomNumber()
        console.log(dice1,dice2,scoreToWin);
        if (dice1 === 6 && dice2 === 6){
            this.resetTemp()
        } else {
            this.setState({
                diceIsRoll: true,
                DiceAnimationActive: true,
                dice1: dice1,
                dice2: dice2,
                total: dice1 + dice2,
            })
        }
        if (!player1.score < scoreToWin || !player2.score < scoreToWin) {
            this.scoreChange()
        }
        if (!player1.isPlaying && !player2.isPlaying){
            // start point - player 1 should start
            this.setState( state => ({
                ...state,
                diceIsRoll: true,
                player1 : {
                    ...state.player1,
                    isPlaying: !state.isPlaying,
                    tempScore: state.player1.tempScore + state.total
                }
            }))
        }
        this.saveTempScore()
    }
    saveTempScore = () => {
        let {player1,player2} = this.state
        if (player1.isPlaying){
            this.setState(state => ({
                player1: {
                    ...state.player1,
                    tempScore: state.player1.tempScore + state.total
                },
            }))
        } 
        if (player2.isPlaying){
            this.setState(state => ({
                player2: {
                    ...state.player2,
                    tempScore: state.player2.tempScore + state.total
                },
            }))
        } 
    }
    resetTemp = () =>{
        let {player1,player2} = this.state
        if (player1.isPlaying || player2.isPlaying){
            this.setState(state => ({
                ...state,
                diceIsRoll: false,
                dice1: 0,
                dice2: 0,
                total: 0,
                player1: { 
                    ...state.player1,
                    isPlaying:  !state.player1.isPlaying,
                    tempScore: 0,
                    totalWin: state.player1.totalWin
                    
                },
                player2: { 
                    ...state.player2,
                    isPlaying:  !state.player2.isPlaying,
                    totalWin: state.player2.totalWin,
                    tempScore: 0, 
                },
            }))

        }
    }
    handleSaveScore = () => {
        this.scoreChange()
        let  {player1,player2} = this.state
        if (player1.isPlaying){
            this.setState(state => ({
                player1: {
                    ...state.player1,
                    score: state.player1.score + state.player1.tempScore,
                    tempScore: 0, 
                    isPlaying: !state.player1.isPlaying,
                },
                player2: {
                    ...state.player2,
                    isPlaying: !state.player2.isPlaying,
                }
            }))
        }
        if (player2.isPlaying){
            this.setState(state => ({
                player2: {
                    ...state.player2,
                    score: state.player2.score + state.player2.tempScore,
                    tempScore: 0, 
                    isPlaying: !state.player2.isPlaying,

                },
                player1: {
                    ...state.player1,
                    isPlaying: !state.player1.isPlaying
                }
            }))
        }

    }
    rotate = () => {
        const {player1} = this.state
        return player1.isPlaying ? 'rotate-right' : 'rotate-left'
    }
    errMsg = () => {
        return (
            <dive className="loose-msg">
                <p>
                <i className="fas fa-dice-six"></i>
                <i className="fas fa-dice-six"></i>
                <br></br>
                SIX IS BAD! 
                <br></br>
                {!this.state.player1.isPlaying ? 'PLAYER 1' : 'PLAYER 2'} LOSE HIS TURN
                </p> 
            </dive>
        )
    }
    handleUserChangeBtn = (e) => {
        this.setState(state => ({
            ...state,
            scoreToWin: parseInt(e.target.value)
        }))
    }
    scoreChange = () => {
        let {player1, player2, scoreToWin} = this.state;
        if (player1.score >= scoreToWin){
            this.setState(state => ({
                ...state, 
                player1: {
                    ...player1, 
                    isWin: true,
                    totalWin: state.player1.totalWin + 1

                },
                player2: {
                    ...player2, 
                },
                disabled: true
            }))
        } else if (player2.score >= scoreToWin){
            this.setState(state => ({
                ...state, 
                player2: {
                    ...player2, 
                    isWin: true,
                    totalWin: state.player2.totalWin + 1

                },
                player1: {
                    ...player1, 
                },
                disabled: true
            }))
        }
    }
    handleNewGameClick = () => {
        this.setState(state => ({
            ...state,
            diceIsRoll: false,
            scoreToWin: 100,
            player1: {
                totalWin: state.player1.totalWin, 
                tempScore: 0,
                score: 0,
                isPlaying: false,
                isWin: false,
                
            },
            player2: {
                totalWin: state.player2.totalWin, 
                tempScore: 0,
                score: 0,
                isPlaying: false,
                isWin: false,
            },
            disabled: false
        }))
    }
    render(){
        const {
            diceIsRoll,diceName,dice1,dice2,DiceAnimationActive,
            player1,player2,
            scoreToWin,disabled,
        } = this.state

        return (
            <div className="main-page">
                <div className='players-wrap'>
                {<div>1</div> &&
                (!player2.isWin) ?
                    <Player 
                        totalWin={player1.totalWin}
                        name='player 1'
                        score={player1.score} 
                        tempScore={player1.tempScore} 
                        isActive={player1.isPlaying} 
                        handleScoreChange={this.handleSaveScore}
                        />
                        : <div className="winner-msg">player 2 win!</div> 
                }
                    {
                        <div className="dices_and_control_btns">
                        {
                            diceIsRoll ? <div className="dices-container ">
                            <Dice 
                                randomNumStr={diceName[dice1-1]} 
                                isActive={DiceAnimationActive}
                                rotate={this.rotate()}/>
                            <Dice 
                                randomNumStr={diceName[dice2-1]} 
                                isActive={DiceAnimationActive}
                                rotate={this.rotate()}/>
                        </div> 
                        : player1.isPlaying || player2.isPlaying 
                        ?  this.errMsg() 
                        : ''
                        
                    }
                        <div className="control-btns-wrap">
                            <Button 
                                name='roll'
                                cn={'roll-btn'} 
                                click={this.handleRollDice}
                                disabled={disabled}
                                />
                            <Button 
                                name='hold' 
                                cn={'hold-btn'} 
                                disabled={disabled}
                                click={this.handleSaveScore}
                            />
                        </div>
                    </div>
                    }
                    {(!player1.isWin) ?
                    <Player 
                        name='player 2'
                        totalWin={player2.totalWin}
                        score={player2.score} 
                        tempScore={player2.tempScore} 
                        isActive={player2.isPlaying} 
                        handleScoreChange={this.handleSaveScore}
                        /> 
                    : <div className="winner-msg">player 1 Win!</div>}
                </div> 
                
                <div className="bottom-control-btn">
                    <Button name='new game' cn={'new-game'} click={this.handleNewGameClick}/>
                    <Input
                        min={2}
                        max={1000}
                        userRangeValue={scoreToWin}
                        handleChange={this.handleUserChangeBtn}
                    />
                    <Button name='homepage' click={this.props.backBtn}/>
                </div>
            </div>
        );
    }
}
