import React, { Component } from 'react';
import Die from './Die';
import './App.css';

class Dice extends Component{

    constructor(props){
        super(props);
        this.state={
            isRolling : false,
            dice1     : 1,
            dice2     : 1
        }
        this.roll = this.roll.bind(this);
    }


    generateRandomNumber(){
        this.setState({dice1 : Math.ceil(Math.random()*6) , dice2:Math.ceil(Math.random()*6)});
    }

    roll(e){
        this.setState({isRolling:true});
        this.generateRandomNumber();
        setTimeout(()=>{this.setState({isRolling:false})},1000);
    }

    render(){
        return (
            <div>
                <div className="flexBox">
                    <div className='box'><Die score={this.state.dice1} isRolling={this.state.isRolling} /></div>
                    <div className='box'><Die score={this.state.dice2} isRolling={this.state.isRolling}/></div>
                </div>
                <div>
                <button class="button" disabled={this.state.isRolling} onClick={this.roll}>{this.state.isRolling?"Rolling...":"Roll Dice!"}</button>
                </div>
            </div>
        );
    }
}

export default Dice