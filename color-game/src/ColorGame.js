import React, { Component } from 'react';
import Box from './Box';
import {colors} from './Helper';

class ColorGame extends Component{
    constructor(props){
        super(props);
        this.state = {
            boxes         : colors.slice(0,16)
        }
        this.changeNumber = this.changeNumber.bind(this);
    }

    changeNumber(number){
        this.setState({boxes: colors.slice(0,number)});
    }

    render(){
        return(
            <div className="flexBox">
                {this.state.boxes.map((e,i)=><Box key={i} changeNumber={this.changeNumber} color={e} number={16}/>)}
            </div>
        );
    }
}

export default ColorGame;