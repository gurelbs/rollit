(this.webpackJsonprollit=this.webpackJsonprollit||[]).push([[0],{16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var c=t(2),n=t.n(c),i=t(10),s=t.n(i),r=t(3),l=t(4),o=t(6),j=t(5),b=(t(8),t(0)),p=function(e){var a=e.name,t=e.click,c=e.cn,n=e.disabled;return Object(b.jsx)("button",{className:"".concat(c||""," ").concat(n?"disabled":""),disabled:n,onClick:t,children:a})},d=function(e){var a=e.startGameBtn,t=e.optionPage;return Object(b.jsxs)("div",{className:"flex-col cover",children:[Object(b.jsx)("div",{className:"wellcome-msg",children:Object(b.jsxs)("h1",{children:[Object(b.jsx)("span",{children:"wellcome to"})," ",Object(b.jsx)("a",{href:"/",children:"Roll-it"})," Dice Game"]})}),Object(b.jsx)(p,{name:"start game",click:a,cn:"start-game-btn"}),Object(b.jsx)(p,{name:"Help",click:t,cn:"help-btn"}),Object(b.jsxs)("footer",{children:["made with ",Object(b.jsx)("span",{className:"red",children:"\u2764"})," by ",Object(b.jsx)("a",{href:"https://github.com/gurelbs",children:"Gurel ben Shabat"})]})]})},m=t(1),h=function(e){var a=e.randomNumStr,t=e.rotate;return Object(b.jsx)("div",{className:"dice-wrap",children:Object(b.jsx)("i",{className:"fas fa-dice-".concat(a," ").concat(t)})})},O=(t(9),function(e){var a=e.name,t=e.cn;return Object(b.jsx)("div",{className:"player-name ".concat(t),children:a})}),y=function(e){var a=e.scoreType,t=e.cn,c=e.onChange;return Object(b.jsx)("div",{className:"player-score",children:Object(b.jsx)("p",{onChange:c,className:t,children:a||0})})},u=function(e){var a=e.score,t=e.tempScore,c=e.name,n=e.isActive,i=e.handleScoreChange,s=e.totalWin;return Object(b.jsxs)("div",{className:"player-container",children:[Object(b.jsxs)("p",{className:"totalWin",children:["total winning: ",Object(b.jsx)("span",{className:"totalWin-color",children:s||0})]}),Object(b.jsx)(O,{name:c,cn:n&&"active"}),Object(b.jsx)("div",{className:"score-wrap",children:Object(b.jsxs)("div",{className:"total-score",children:[Object(b.jsx)(y,{scoreType:a,onChange:i}),Object(b.jsx)("i",{className:"fab fa-bitcoin ".concat(n&&"spin")})]})}),Object(b.jsx)("div",{className:"temp-score-wrap ".concat(n?"temp-score-anima":""),children:Object(b.jsxs)("div",{className:"dollar-icon-wrap",children:[Object(b.jsx)(y,{scoreType:t,isActive:n,cn:"current-score"}),Object(b.jsx)("i",{className:"fas fa-dollar-sign"})]})})]})},g=function(e){var a=e.handleChange,t=e.userRangeValue,c=e.err,n=e.min,i=e.max;return Object(b.jsx)("div",{className:"input-wrap",children:Object(b.jsxs)("p",{className:"input-txt",children:[c||"score to win: ",Object(b.jsx)("input",{className:"user-limit",name:"user-limit",type:"range",min:n,max:i,value:t,onChange:a}),Object(b.jsx)("span",{className:"user-range-txt",children:t})]})})},x=function(e){Object(o.a)(t,e);var a=Object(j.a)(t);function t(e){var c;return Object(r.a)(this,t),(c=a.call(this,e)).randomNumber=function(){return Math.floor(6*Math.random())+1},c.handleRollDice=function(){var e=c.state,a=e.scoreToWin,t=e.player1,n=e.player2,i=c.randomNumber(),s=c.randomNumber();console.log(i,s,a),6===i&&6===s?c.resetTemp():c.setState({diceIsRoll:!0,DiceAnimationActive:!0,dice1:i,dice2:s,total:i+s}),(!t.score<a||!n.score<a)&&c.scoreChange(),t.isPlaying||n.isPlaying||c.setState((function(e){return Object(m.a)(Object(m.a)({},e),{},{diceIsRoll:!0,player1:Object(m.a)(Object(m.a)({},e.player1),{},{isPlaying:!e.isPlaying,tempScore:e.player1.tempScore+e.total})})})),c.saveTempScore()},c.saveTempScore=function(){var e=c.state,a=e.player1,t=e.player2;a.isPlaying&&c.setState((function(e){return{player1:Object(m.a)(Object(m.a)({},e.player1),{},{tempScore:e.player1.tempScore+e.total})}})),t.isPlaying&&c.setState((function(e){return{player2:Object(m.a)(Object(m.a)({},e.player2),{},{tempScore:e.player2.tempScore+e.total})}}))},c.resetTemp=function(){var e=c.state,a=e.player1,t=e.player2;(a.isPlaying||t.isPlaying)&&c.setState((function(e){return Object(m.a)(Object(m.a)({},e),{},{diceIsRoll:!1,dice1:0,dice2:0,total:0,player1:Object(m.a)(Object(m.a)({},e.player1),{},{isPlaying:!e.player1.isPlaying,tempScore:0,totalWin:e.player1.totalWin}),player2:Object(m.a)(Object(m.a)({},e.player2),{},{isPlaying:!e.player2.isPlaying,totalWin:e.player2.totalWin,tempScore:0})})}))},c.handleSaveScore=function(){c.scoreChange();var e=c.state,a=e.player1,t=e.player2;a.isPlaying&&c.setState((function(e){return{player1:Object(m.a)(Object(m.a)({},e.player1),{},{score:e.player1.score+e.player1.tempScore,tempScore:0,isPlaying:!e.player1.isPlaying}),player2:Object(m.a)(Object(m.a)({},e.player2),{},{isPlaying:!e.player2.isPlaying})}})),t.isPlaying&&c.setState((function(e){return{player2:Object(m.a)(Object(m.a)({},e.player2),{},{score:e.player2.score+e.player2.tempScore,tempScore:0,isPlaying:!e.player2.isPlaying}),player1:Object(m.a)(Object(m.a)({},e.player1),{},{isPlaying:!e.player1.isPlaying})}}))},c.rotate=function(){return c.state.player1.isPlaying?"rotate-right":"rotate-left"},c.errMsg=function(){return Object(b.jsx)("dive",{className:"loose-msg",children:Object(b.jsxs)("p",{children:[Object(b.jsx)("i",{className:"fas fa-dice-six"}),Object(b.jsx)("i",{className:"fas fa-dice-six"}),Object(b.jsx)("br",{}),"SIX IS BAD!",Object(b.jsx)("br",{}),c.state.player1.isPlaying?"PLAYER 2":"PLAYER 1"," LOSE HIS TURN"]})})},c.handleUserChangeBtn=function(e){c.setState((function(a){return Object(m.a)(Object(m.a)({},a),{},{scoreToWin:parseInt(e.target.value)})}))},c.scoreChange=function(){var e=c.state,a=e.player1,t=e.player2,n=e.scoreToWin;a.score>=n?c.setState((function(e){return Object(m.a)(Object(m.a)({},e),{},{player1:Object(m.a)(Object(m.a)({},a),{},{isWin:!0,totalWin:e.player1.totalWin+1}),player2:Object(m.a)({},t),disabled:!0})})):t.score>=n&&c.setState((function(e){return Object(m.a)(Object(m.a)({},e),{},{player2:Object(m.a)(Object(m.a)({},t),{},{isWin:!0,totalWin:e.player2.totalWin+1}),player1:Object(m.a)({},a),disabled:!0})}))},c.handleNewGameClick=function(){c.setState((function(e){return Object(m.a)(Object(m.a)({},e),{},{diceIsRoll:!1,scoreToWin:100,player1:{totalWin:e.player1.totalWin,tempScore:0,score:0,isPlaying:!1,isWin:!1},player2:{totalWin:e.player2.totalWin,tempScore:0,score:0,isPlaying:!1,isWin:!1},disabled:!1})}))},c.state={diceIsRoll:!1,diceName:["one","two","three","four","five","six"],scoreToWin:100,player1:{tempScore:0,score:0,isPlaying:!1,isWin:!1,totalWin:0},player2:{tempScore:0,score:0,isPlaying:!1,isWin:!1,totalWin:0},disabled:!1},c}return Object(l.a)(t,[{key:"render",value:function(){var e=this.state,a=e.diceIsRoll,t=e.diceName,c=e.dice1,n=e.dice2,i=e.DiceAnimationActive,s=e.player1,r=e.player2,l=e.scoreToWin,o=e.disabled;return Object(b.jsxs)("div",{className:"main-page",children:[Object(b.jsxs)("div",{className:"players-wrap",children:[Object(b.jsx)("div",{children:"1"})&&!r.isWin?Object(b.jsx)(u,{totalWin:s.totalWin,name:"player 1",score:s.score,tempScore:s.tempScore,isActive:s.isPlaying,handleScoreChange:this.handleSaveScore}):Object(b.jsx)("div",{className:"winner-msg",children:"player 2 win!"}),Object(b.jsxs)("div",{className:"dices_and_control_btns",children:[a?Object(b.jsxs)("div",{className:"dices-container ",children:[Object(b.jsx)(h,{randomNumStr:t[c-1],isActive:i,rotate:this.rotate()}),Object(b.jsx)(h,{randomNumStr:t[n-1],isActive:i,rotate:this.rotate()})]}):s.isPlaying||r.isPlaying?this.errMsg():"",Object(b.jsxs)("div",{className:"control-btns-wrap",children:[Object(b.jsx)(p,{name:"roll",cn:"roll-btn",click:this.handleRollDice,disabled:o}),Object(b.jsx)(p,{name:"hold",cn:"hold-btn",disabled:o,click:this.handleSaveScore})]})]}),s.isWin?Object(b.jsx)("div",{className:"winner-msg",children:"player 1 Win!"}):Object(b.jsx)(u,{name:"player 2",totalWin:r.totalWin,score:r.score,tempScore:r.tempScore,isActive:r.isPlaying,handleScoreChange:this.handleSaveScore})]}),Object(b.jsxs)("div",{className:"bottom-control-btn",children:[Object(b.jsx)(p,{name:"new game",cn:"new-game",click:this.handleNewGameClick}),Object(b.jsx)(g,{min:2,max:1e3,userRangeValue:l,handleChange:this.handleUserChangeBtn}),Object(b.jsx)(p,{name:"homepage",click:this.props.backBtn})]})]})}}]),t}(c.Component),v=(t(16),function(e){var a=e.optionBtnClick;return Object(b.jsx)("div",{className:"help-page",children:Object(b.jsxs)("div",{className:"help-wrap",children:[Object(b.jsx)("h1",{children:"hey!"}),Object(b.jsx)("h4",{children:"wellcome to rollit game."}),Object(b.jsxs)("p",{children:["it's a simple ",Object(b.jsx)("a",{href:"https://en.wikipedia.org/wiki/Pig_(dice_game)",target:"_blink",children:"dice game"}),".",Object(b.jsx)("br",{}),"in our version you heve 2 dice and double six is bad !!!"]}),Object(b.jsx)(p,{name:"go back",click:a})]})})}),f=function(e){Object(o.a)(t,e);var a=Object(j.a)(t);function t(){var e;Object(r.a)(this,t);for(var c=arguments.length,n=new Array(c),i=0;i<c;i++)n[i]=arguments[i];return(e=a.call.apply(a,[this].concat(n))).state={isCoverPage:!0,isOptionPage:!1,isMainPage:!1},e.handleStartGameBtn=function(){e.setState({isCoverPage:!1,isMainPage:!0})},e.handleOptionPage=function(){e.setState({isCoverPage:!1,isOptionPage:!0})},e.handleOptionBtnClick=function(){e.setState({isCoverPage:!0,isOptionPage:!1})},e.backToHomePageBtn=function(){e.setState({isCoverPage:!0,isOptionPage:!1,isMainPage:!1})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this.state,a=e.isCoverPage,t=e.isOptionPage;return Object(b.jsx)("div",{className:"game-wrap",children:a&&!t?Object(b.jsx)(d,{startGameBtn:this.handleStartGameBtn,optionPage:this.handleOptionPage}):t&&!a?Object(b.jsx)(v,{optionBtnClick:this.handleOptionBtnClick}):Object(b.jsx)(x,{backBtn:this.backToHomePageBtn})})}}]),t}(c.Component);s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root"))},8:function(e,a,t){},9:function(e,a,t){}},[[17,1,2]]]);
//# sourceMappingURL=main.8a7e74c8.chunk.js.map