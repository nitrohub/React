import React, { Component } from 'react';
import {color,randomColor} from './Helper'
import './Box.css';

class Box extends Component{

    constructor(props){
        super(props);
        this.state = {
            color : this.props.color
        }
        this.fetchColor = this.fetchColor.bind(this);
        this.handleChangeNumber  = this.handleChangeNumber.bind(this);
    }

    fetchColor(e){
        this.setState({color:randomColor(this.state.color)});
    }

    handleChangeNumber(e){
        this.props.changeNumber(8);
    }

    render(){
        return(
            <div>
                <div className="box" style={{backgroundColor:this.state.color}} onClick={this.fetchColor}></div>
                <button onClick={this.handleChangeNumber}>ChangeNumber</button>
            </div>
        )
    }
}

export default Box;