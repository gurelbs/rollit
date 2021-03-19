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
        this.setState({
            diceIsRoll: true,
            dice1: dice1,
            dice2: dice2,
            total: dice1 + dice2
        })
        if (dice1 === dice2 && dice2 === 6){
            // should remove temp score
            // should pass player
            this.resetTemp()
        }
        if (!this.state.player1.isPlaying && !this.state.player2.isPlaying){
            // start point - player 1 should start
            this.setState( state => ({
                ...state,
                player1 : {
                    ...this.state.player1,
                    isPlaying: !state.isPlaying
                }
            }))
        }
        this.saveScore()
    }
    saveScore = () => {
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
        if (player1.isPlaying){
            this.setState(state => ({
                player1: { 
                    isPlaying:  !state.player1.isPlaying,
                    tempScore: 0,
                },
                player2: { isPlaying:  
                    !state.player2.isPlaying
                },
            }))
        } else if (player2.isPlaying){
            this.setState(state => ({
                player1: { isPlaying:  !state.player1.isPlaying},
                player2: { isPlaying:  !state.player2.isPlaying},
            }))
        }
    }
    handleSaveScore = () => {
        let  {player1,player2} = this.state
        if (player1.isPlaying){
            this.setState(state => ({
                player1: {
                    ...state.player1,
                    score: state.player1.tempScore,
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
                    score: state.player2.tempScore,
                    tempScore: 0, 
                    isPlaying: !state.player2.isPlaying
                }
            }))
        }
        console.log(this.state);
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
                    <Player 
                        name='player 2'
                        score={player2.score} 
                        tempScore={player2.tempScore} 
                        isActive={player2.isPlaying} 
                    />
                </div>
                
                { diceIsRoll &&  
                <div className="dices-container">
                    <Dice randomNumStr={diceName[dice1-1]}/>
                    <Dice randomNumStr={diceName[dice2-1]}/>
                </div>
                }
                <Button name='roll' click={this.handleRollDice}/>
                <Button name='hold' click={this.handleSaveScore}/>
                <Button name='go back to homepage' click={this.props.backBtn}/>
            </div>
        );
    }
}
