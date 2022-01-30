import React, { Component } from 'react';
import Cell from './Cell'
import './Board.css'

class Board extends Component{

    constructor(props){
        super(props);
        this.state = {
           coordinates : [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true],
           hasWon      : false,
           start       : false,
           rows        : 4,
           columns     : 4
        }

        this.Toggle = this.Toggle.bind(this);
        this.Start  = this.Start.bind(this);
        this.RandomGameCreator = this.RandomGameCreator.bind(this);
    }

    RandomGameCreator(){
        let randomNumber = Math.ceil(Math.random()*20);
        let squareRoot   = Math.ceil(Math.sqrt(randomNumber));
        let rows         = 0;
        let columns      = 0;
        let isPrime      = 1;
        let coordinates  = Array(randomNumber).fill(true);
        console.log("Square Root="+squareRoot);
        for(let i=squareRoot;i>1;i--){
            if(randomNumber%i==0){
                columns = Math.max(randomNumber/i,i);
                rows = randomNumber/columns;
                isPrime = 0;
                break;
            }
        }
        if(isPrime===1) {
            rows    = 1;
            columns = randomNumber;
        }
        this.setState(()=>{return {coordinates:coordinates,rows:rows,columns:columns};})
    }

    Start(){
        this.RandomGameCreator();
        this.setState({start:true,hasWon:false});
    }

    Toggle(index){
        console.log("Inside Toggle");
        let coord = [...this.state.coordinates];
        let rows  = this.state.rows;
        let columns = this.state.columns;
        coord[index] = !coord[index];
        if((index+1)%columns!==0)
            coord[index+1] = !coord[index+1];
        if((index%columns!==0))
            coord[index-1] = !coord[index-1];
        if(index+columns<coord.length)
            coord[index+columns] = !coord[index+columns];
        if(index-columns>=0)
           coord[index-columns]  = !coord[index-columns];
        
        let result=false;
        coord.forEach((index)=>{
            result = result||index;
        })   

        if(result)
            this.setState({coordinates : coord});
        else
            this.setState({coordinates : coord,hasWon:true})
    }

    render(){
        let style=this.state.hasWon?{display:"none"}:{color:"green"};
        let style2 = !this.state.hasWon?{display:"none"}:{
            color:"green",
            fontSize: "50px",
            fontFamily : "Fantasy"
        };
        let styleBody = !this.state.start?{display:"none"}:{};
        let styleButton = this.state.start?{
            display:"none",
        }:{
        marginTop  : "100px",
            width  : "150px",
            height : "50px",    
            backgroundColor: "#3cb46e",
            color : "white",
            borderRadius: "10px",
            marginTop: "10vh",
            fontSize : "20px",
            fontFamily : "Fantasy"
        };
        return(
            <div className="Game">
                <button style={styleButton} className="btn" onClick={this.Start}>Start</button>
                <div style={styleBody}>
                    <div className="flex-box" style={style}>
                    {this.state.coordinates.map((element,i)=>
                        <Cell key={i} dimension={[this.state.rows,this.state.columns]} index={[i,this.state.coordinates[i]]} Toggle={this.Toggle}/>  
                    )}
                    </div>
                    <button style={styleBody} className="Restart" onClick={this.Start}>Restart</button>
                    <h2 style={style2}>Winner!</h2>
                </div>
            </div>
        );
    }
}

export default Board