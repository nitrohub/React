import React, { Component } from 'react';
import './App.css';

class Die extends Component{
    render(){

        let variablName = null;
        let score       = this.props.score;

        if(score===1){
            variablName="one"
        }if(score===2){
            variablName="two"
        }if(score===3){
            variablName="three"
        }if(score===4){
            variablName="four"
        }if(score===5){
            variablName="five"
        }if(score===6){
            variablName="six"
        }if(score===7){
            variablName="seven"
        }if(score===8){
            variablName="eight"
        }if(score===9){
            variablName="nine"
        }if(score===10){
            variablName="ten"
        }

        variablName=this.props.isRolling ?`fas fa-dice-${variablName} shakeIt`: `fas fa-dice-${variablName}`;

        return(
            <i className={variablName}></i>
        )
    }
}

export default Die;