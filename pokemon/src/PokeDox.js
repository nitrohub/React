import { Component } from "react/cjs/react.production.min";
import PokeCard from "./PokeCard";
import './Pokemon.css';

class PokeDox extends Component{
    render(){
        const participants = this.props.participants;
        const isWinner     = this.props.isWinner;
        const className    = (isWinner!==null)?(isWinner?"Winner":"Looser"):"Tie";
        return (
            <div className="Frame">
                <h3 className={className}>{className}!</h3>
                {
                participants.map((participant)=>{
                    return <PokeCard PokeCard={participant}/>
                })
                }
            </div>
        );
    }
}

export default PokeDox;