import React, { Component } from 'react';

class Game extends Component{
    
    constructor(props){
        super(props);

        this.state ={
            isGameOver : false,
            score      : 0,
            isClicked  : false
        };

        // this.handleClick = this.handleClick.bind(this);
    }    
     
     handleClick = (e)=>{
       console.log("Inside Handle Click");
       this.setState({isClicked : true});
     }

      makeTimer() {
          setInterval(() => {
              this.setState({score:Math.floor(Math.random()*7)});
          }, 1000);
      }

      render(){
        return(
            <div>
                <h1>{this.state.isClicked?'Clicked':'Not Clicked'}</h1>
                <button onClick={this.handleClick}>Click Me</button>
                <h1>Score:{this.state.score}</h1>
            </div>
        );
    }

}

export default Game;