import React, { Component } from 'react';

class RandomCompo extends Component{

    constructor(props){
        super(props);

        this.state = {
            randomNumber : 0
        }

        this.RandomCompo = this.RandomCompo.bind(this);
    }


    RandomCompo(e){
        this.setState({randomNumber: this.state.randomNumber+1});
        this.setState({randomNumber: this.state.randomNumber+1});
        this.setState({randomNumber: this.state.randomNumber+1});
    }

    render(){
        return(
            <div>
                <h1>{this.state.randomNumber}</h1>
                <button onClick={this.RandomCompo}>Random Number</button>
            </div>        
        );
    }
}

export default RandomCompo;