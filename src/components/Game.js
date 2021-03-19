import React,{ Component } from 'react';
import './game.css';
import Cover from './Cover'
import Main from './Main';
import Option from './Option'
export default class Game extends Component {
  state = { 
    isCoverPage: true,
    isOptionPage: false,
    isMainPage: false
  }
  handleStartGameBtn = () => {
    this.setState({
      isCoverPage: false,
      isMainPage: true
    })
  }
  handleOptionPage = () => {
    this.setState({
      isCoverPage: false,
      isOptionPage: true,
    })
  }
  handleOptionBtnClick = () => {
    this.setState({
      isCoverPage: true,
      isOptionPage: false,
    }) 
  }
  backToHomePageBtn = () => {
    this.setState({
      isCoverPage: true,
      isOptionPage: false,
      isMainPage: false
    }) 
  }
  render(){
    const {isCoverPage,isOptionPage} = this.state
    return (
      <div className="game-wrap">
        {
        isCoverPage && !isOptionPage
        ? <Cover 
          startGameBtn={this.handleStartGameBtn}
          optionPage={this.handleOptionPage}
          />
        : 
        isOptionPage && !isCoverPage 
        ? <Option optionBtnClick={this.handleOptionBtnClick}/> 
        :
        <Main backBtn={this.backToHomePageBtn}/>
        }
      </div>
    );
  }
}
