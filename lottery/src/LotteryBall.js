import React, { Component } from 'react';
import './Lottery.css';

class LotteryBall extends Component{
    static defaultProps={
        title:"",
        randomArray:[]
    }

    constructor(props){
        super(props);
    }
    render(){
             
        return(
            <div>
                <h1>{this.props.title}</h1>
                <div className="Flexbox">
                {
                this.props.randomArray.map((element)=>  <div className='Lottery'>{element}</div> )
                }
                </div>
                
            </div>
        )
    }
}

export default LotteryBall; 