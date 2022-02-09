import React, { Component } from 'react';
import HeadTail from './HeadTail';
import './coin.css'

class Coin extends Component{

    constructor(props){
        super(props);
        this.state={
            headCount : 1,
            tailCount : 0,
            choice    : 0,
            isFlip    : 0
        }
        this.Flip = this.Flip.bind(this);
    }

    Flip(e){
        let h = Math.floor(Math.random()*2);
        let coinState = {
            isFlip    : 1,
            headCount : h===0?this.state.headCount+1:this.state.headCount,
            tailCount : h===1?this.state.tailCount+1:this.state.tailCount,
            choice    : h,

        }
        this.setState({...coinState});
        setTimeout(()=>this.setState({isFlip:0}),1000);
    }


    render(){
        return(
            <div>
                <HeadTail choice={this.state.choice} isFlip={this.state.isFlip} />
                <div>
                    <button onClick={this.Flip}>Flip!</button>
                    <h3>Heads count : {this.state.headCount}</h3>
                    <h3>Tails count : {this.state.tailCount}</h3>
                </div>
            </div>
        );
    }

}

export default Coin;