import React, { Component } from 'react';

class Cell extends Component{

    constructor(props){
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle(e){
        console.log("Inside Handle Toggle");
        this.props.Toggle(this.props.index[0]);
    }

    render(){
        let rows    = this.props.dimension[0];
        console.log("Rows=",rows);
        let column  = this.props.dimension[1];
        console.log("column=",column);
        console.log(`calc(100vw * (1/${column})-10px)`);
        let style = this.props.index[1]?{
            border: "2px solid #ffffff",
            width:`calc(90vw * (1/${column}))`,
            height:"calc(100vh * (1/4) - 5vh)",
            backgroundColor:"slateblue",
        }:{
                border: "2px solid #ffffff",
                width: `calc(90vw * (1/${column}))`,
                height:"calc(100vh * (1/4) - 5vh)",    
                backgroundColor:"#000",
            };
        return(
            <div style={style} className="Box" onClick={this.handleToggle}></div>
        );
    }
}

export default Cell;