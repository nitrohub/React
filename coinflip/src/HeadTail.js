import React, { Component } from 'react';

class HeadTail extends Component{

    static defaultProps ={
        coin      : ["https://tinyurl.com/react-coin-heads-jpg","https://media.istockphoto.com/photos/quarter-dollar-us-coin-isolated-on-white-picture-id476142091?k=20&m=476142091&s=612x612&w=0&h=mX2-F4WTLslfOBnUrkOrp6noMqUyzAO1Iq8aHF_EGkY="],
        choice    : 0,
        isFlip    : 0
    }

    render(){
        return(
            <img width="200px" height="200px" src={this.props.coin[this.props.choice]} className={this.props.isFlip&&"Flip"}/>
        );
    }
}

export default HeadTail;