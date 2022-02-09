import React, { Component } from 'react';
import LotteryBall from './LotteryBall';

class Lottery extends Component{
    
    constructor(props){
        super(props);
        this.state = {
          title         : "Lottery",
          randomArray   : []
        }
        this.generateRandomNumber = this.generateRandomNumber.bind(this);
    }

    generateRandomNumber(){
       let maximumBalls  = Math.ceil(Math.random()*6);
       let maximumNumber = Math.ceil(Math.random()*40);
       let RandomArray   = [];
       for(let i=0;i<maximumBalls;i++){
           RandomArray.push(Math.ceil(Math.random()*maximumNumber));
       }

       this.setState({randomArray:[...RandomArray]});

    }

    render(){
        return(
            <div>
               <LotteryBall title={this.state.title} randomArray={this.state.randomArray} />
               <button onClick={this.generateRandomNumber}>RandomNumber</button>
            </div>
        )
    }
}

export default Lottery;