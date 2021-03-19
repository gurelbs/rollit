import React, { Component } from 'react';
import Dice from './Dice'
import Button from './Button'
import Player from './Player';

export default class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            diceIsRoll: false,
            diceName: ['one','two','three','four','five','six'],
            player1: {
                tempScore: 0,
                score: 0,
                isPlaying: false,
                isWin: false,
            },
            player2: {
                tempScore: 0,
                score: 0,
                isPlaying: false,
                isWin: false,
            }
        }
    }
    randomNumber = () => Math.floor(Math.random() * 6) + 1;
    handleRollDice = () => {
        let dice1 = this.randomNumber()
        let dice2 = this.randomNumber()
        console.log(dice1,dice2);
        if (dice1 === 6 && dice2 === 6){
            this.resetTemp()
        } else {
            this.setState({
                diceIsRoll: true,
                dice1: dice1,
                dice2: dice2,
                total: dice1 + dice2
            })
        }
        if (!this.state.player1.isPlaying && !this.state.player2.isPlaying){
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
                    
                },
                player2: { 
                    ...state.player2,
                    isPlaying:  !state.player2.isPlaying,
                    tempScore: 0,
                },
            }))

        }
    }
    handleSaveScore = () => {
        let  {player1,player2} = this.state
        if (player1.isPlaying){
            this.setState(state => ({
                player1: {
                    ...state.player1,
                    score: state.player1.score + state.player1.tempScore,
                    tempScore: 0, 
                    isPlaying: !state.player1.isPlaying
                },
                player2: {
                    ...state.player2,
                    isPlaying: !state.player2.isPlaying
                }
            }))
        }
        if (player2.isPlaying){
            this.setState(state => ({
                player2: {
                    ...state.player2,
                    score: state.player2.score + state.player2.tempScore,
                    tempScore: 0, 
                    isPlaying: !state.player2.isPlaying
                },
                player1: {
                    ...state.player1,
                    isPlaying: !state.player1.isPlaying
                }
            }))
        }
        console.log(this.state);
    }
    rotate = () => {
        const {player1} = this.state
        return player1.isPlaying ? 'rotate-right' : 'rotate-left'
    }
    errMsg = () => {
        return (
            <dive className="loose-msg">
                <p>
                {!this.state.player1.isPlaying ? 'PLAYER 1' : 'PLAYER 2'} LOOSE HIS TURN
                </p> 
            </dive>
        )
    }
    render(){
        const {diceIsRoll,diceName,dice1,dice2,player1,player2} = this.state
        return (
            <div className="main-page">
                <div className='players-wrap'>
                    <Player 
                        name='player 1'
                        score={player1.score} 
                        tempScore={player1.tempScore} 
                        isActive={player1.isPlaying} 
                    />
                    {
                    <div className="dices_and_control_btns">
                        {
                        diceIsRoll ? <div className="dices-container ">
                            <Dice randomNumStr={diceName[dice1-1]} rotate={this.rotate()}/>
                            <Dice randomNumStr={diceName[dice2-1]} rotate={this.rotate()}/>
                        </div> 
                        : player1.isPlaying || player2.isPlaying 
                        ?  this.errMsg() 
                        : ''
                        
                        }
                        <div className="control-btns-wrap">
                            <Button name='roll' click={this.handleRollDice}/>
                            <Button name='hold' click={this.handleSaveScore}/>
                        </div>
                    </div>
                    }
                    <Player 
                        name='player 2'
                        score={player2.score} 
                        tempScore={player2.tempScore} 
                        isActive={player2.isPlaying} 
                    />
                </div>
                <div className="back-hp-btn">
                    <Button name='go back to homepage' click={this.props.backBtn}/>
                </div>
            </div>
        );
    }
}
