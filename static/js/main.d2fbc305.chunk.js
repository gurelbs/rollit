(this.webpackJsonprollit=this.webpackJsonprollit||[]).push([[0],{16:function(e,t,a){"use strict";a.r(t);var c=a(2),r=a.n(c),n=a(10),i=a.n(n),s=a(3),l=a(4),o=a(6),p=a(5),j=(a(9),a(0)),y=function(e){var t=e.name,a=e.click;return Object(j.jsx)("button",{onClick:a,children:t})},b=function(e){var t=e.startGameBtn,a=e.optionPage;return Object(j.jsxs)("div",{className:"flex-col",children:[Object(j.jsx)(y,{name:"start game",click:t}),Object(j.jsx)(y,{name:"option",click:a})]})},m=a(1),O=function(e){var t=e.randomNumStr,a=e.rotate;return Object(j.jsx)("div",{className:"dice-wrap",children:Object(j.jsx)("i",{className:"fas fa-dice-".concat(t," ").concat(a)})})},d=(a(8),function(e){var t=e.name;return Object(j.jsx)("div",{className:"player-name",children:t})}),u=function(e){var t=e.scoreType;return Object(j.jsx)("div",{className:"player-score",children:t})},g=function(e){var t=e.score,a=e.tempScore,c=e.name,r=e.isActive;return Object(j.jsxs)("div",{className:"player-container ".concat(r&&"active"),children:[Object(j.jsx)(d,{name:c}),Object(j.jsx)(u,{scoreType:t}),Object(j.jsx)(u,{scoreType:a})]})},h=function(e){Object(o.a)(a,e);var t=Object(p.a)(a);function a(e){var c;return Object(s.a)(this,a),(c=t.call(this,e)).randomNumber=function(){return Math.floor(6*Math.random())+1},c.handleRollDice=function(){var e=c.randomNumber(),t=c.randomNumber();console.log(e,t),6===e&&6===t?c.resetTemp():c.setState({diceIsRoll:!0,dice1:e,dice2:t,total:e+t}),c.state.player1.isPlaying||c.state.player2.isPlaying||c.setState((function(e){return Object(m.a)(Object(m.a)({},e),{},{diceIsRoll:!0,player1:Object(m.a)(Object(m.a)({},e.player1),{},{isPlaying:!e.isPlaying,tempScore:e.player1.tempScore+e.total})})})),c.saveTempScore()},c.saveTempScore=function(){var e=c.state,t=e.player1,a=e.player2;t.isPlaying&&c.setState((function(e){return{player1:Object(m.a)(Object(m.a)({},e.player1),{},{tempScore:e.player1.tempScore+e.total})}})),a.isPlaying&&c.setState((function(e){return{player2:Object(m.a)(Object(m.a)({},e.player2),{},{tempScore:e.player2.tempScore+e.total})}}))},c.resetTemp=function(){var e=c.state,t=e.player1,a=e.player2;(t.isPlaying||a.isPlaying)&&c.setState((function(e){return Object(m.a)(Object(m.a)({},e),{},{diceIsRoll:!1,dice1:0,dice2:0,total:0,player1:Object(m.a)(Object(m.a)({},e.player1),{},{isPlaying:!e.player1.isPlaying,tempScore:0}),player2:Object(m.a)(Object(m.a)({},e.player2),{},{isPlaying:!e.player2.isPlaying,tempScore:0})})}))},c.handleSaveScore=function(){var e=c.state,t=e.player1,a=e.player2;t.isPlaying&&c.setState((function(e){return{player1:Object(m.a)(Object(m.a)({},e.player1),{},{score:e.player1.score+e.player1.tempScore,tempScore:0,isPlaying:!e.player1.isPlaying}),player2:Object(m.a)(Object(m.a)({},e.player2),{},{isPlaying:!e.player2.isPlaying})}})),a.isPlaying&&c.setState((function(e){return{player2:Object(m.a)(Object(m.a)({},e.player2),{},{score:e.player2.score+e.player2.tempScore,tempScore:0,isPlaying:!e.player2.isPlaying}),player1:Object(m.a)(Object(m.a)({},e.player1),{},{isPlaying:!e.player1.isPlaying})}})),console.log(c.state)},c.rotate=function(){return c.state.player1.isPlaying?"rotate-right":"rotate-left"},c.errMsg=function(){return Object(j.jsx)("dive",{className:"loose-msg",children:Object(j.jsxs)("p",{children:[c.state.player1.isPlaying?"PLAYER 2":"PLAYER 1"," LOOSE HIS TURN"]})})},c.state={diceIsRoll:!1,diceName:["one","two","three","four","five","six"],player1:{tempScore:0,score:0,isPlaying:!1,isWin:!1},player2:{tempScore:0,score:0,isPlaying:!1,isWin:!1}},c}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.diceIsRoll,a=e.diceName,c=e.dice1,r=e.dice2,n=e.player1,i=e.player2;return Object(j.jsxs)("div",{className:"main-page",children:[Object(j.jsxs)("div",{className:"players-wrap",children:[Object(j.jsx)(g,{name:"player 1",score:n.score,tempScore:n.tempScore,isActive:n.isPlaying}),Object(j.jsxs)("div",{className:"dices_and_control_btns",children:[t?Object(j.jsxs)("div",{className:"dices-container ",children:[Object(j.jsx)(O,{randomNumStr:a[c-1],rotate:this.rotate()}),Object(j.jsx)(O,{randomNumStr:a[r-1],rotate:this.rotate()})]}):n.isPlaying||i.isPlaying?this.errMsg():"",Object(j.jsxs)("div",{className:"control-btns-wrap",children:[Object(j.jsx)(y,{name:"roll",click:this.handleRollDice}),Object(j.jsx)(y,{name:"hold",click:this.handleSaveScore})]})]}),Object(j.jsx)(g,{name:"player 2",score:i.score,tempScore:i.tempScore,isActive:i.isPlaying})]}),Object(j.jsx)("div",{className:"back-hp-btn",children:Object(j.jsx)(y,{name:"go back to homepage",click:this.props.backBtn})})]})}}]),a}(c.Component),P=function(e){var t=e.optionBtnClick;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"option page!"}),Object(j.jsx)(y,{name:"go back",click:t})]})},v=function(e){Object(o.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var c=arguments.length,r=new Array(c),n=0;n<c;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={isCoverPage:!0,isOptionPage:!1,isMainPage:!1},e.handleStartGameBtn=function(){e.setState({isCoverPage:!1,isMainPage:!0})},e.handleOptionPage=function(){e.setState({isCoverPage:!1,isOptionPage:!0})},e.handleOptionBtnClick=function(){e.setState({isCoverPage:!0,isOptionPage:!1})},e.backToHomePageBtn=function(){e.setState({isCoverPage:!0,isOptionPage:!1,isMainPage:!1})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.isCoverPage,a=e.isOptionPage;return Object(j.jsx)("div",{className:"game-wrap",children:t&&!a?Object(j.jsx)(b,{startGameBtn:this.handleStartGameBtn,optionPage:this.handleOptionPage}):a&&!t?Object(j.jsx)(P,{optionBtnClick:this.handleOptionBtnClick}):Object(j.jsx)(h,{backBtn:this.backToHomePageBtn})})}}]),a}(c.Component);i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root"))},8:function(e,t,a){},9:function(e,t,a){}},[[16,1,2]]]);
//# sourceMappingURL=main.d2fbc305.chunk.js.map